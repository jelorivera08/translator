import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Header from './Components/Header';
import Translatee from './Containers/Translatee';
import Logo from './Components/Logo';
import Paper from '@material-ui/core/Paper';

import LanguageListButton from './Containers/LanguageListButton';
import Translated from './Components/Translated';
import TranslateButton from './Components/TranslateButton';
import ErrorDialog from './Components/ErrorDialog';

class App extends Component {
  handleTranslateeWordChange = event => {
    const { updateWordToBeTranslated } = this.props;
    updateWordToBeTranslated(event.target.value);
  };

  handleChangeOfLanguage = language => {
    const { toLanguage } = this.props;
    toLanguage(language);
  };

  handleTranslateButtonClick = () => {
    const {
      to,
      wordToBeTranslated,
      translateAPICall,
      translateWord,
      errorIsEncountered
    } = this.props;
    if (!to || !wordToBeTranslated) {
      errorIsEncountered();
    } else {
      translateAPICall(to, wordToBeTranslated, translateWord);
    }
  };

  render() {
    const {
      translatedWord,
      translating,
      errorEncountered,
      errorAverted
    } = this.props;
    return (
      <Grid container justify="center">
        <ErrorDialog
          errorEncountered={errorEncountered}
          errorAverted={errorAverted}
        />
        <Logo />
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item xs={6}>
              <Paper
                style={{ height: '500px', width: '100%', minWidth: '500px' }}
              >
                <Header />
                <Translatee
                  handleTranslateeWordChange={this.handleTranslateeWordChange}
                />
                <Grid container justify="center">
                  <LanguageListButton
                    handleChangeOfLanguage={this.handleChangeOfLanguage}
                  />
                  <TranslateButton
                    handleTranslateButtonClick={this.handleTranslateButtonClick}
                  />
                </Grid>
                <Translated word={translatedWord} translating={translating} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  wordToBeTranslated: state.wordToBeTranslated,
  to: state.to,
  translatedWord: state.translatedWord,
  translating: state.translating,
  errorEncountered: state.errorEncountered
});

const mapDispatchToProps = dispatch => ({
  updateWordToBeTranslated: value =>
    dispatch({ type: 'UPDATE_WORD_TO_BE_TRANSLATED', value }),
  toLanguage: value => dispatch({ type: 'TO_LANGUAGE', value }),
  translateAPICall: (to, sentence, translateWord) =>
    dispatch({ type: 'TRANSLATE_API_CALL', to, sentence, translateWord }),
  translateWord: res =>
    dispatch({ type: 'TRANSLATE_WORD', translatedWord: res.text }),
  errorIsEncountered: () => dispatch({ type: 'ERROR_IS_ENCOUNTERED' }),
  errorAverted: () => dispatch({ type: 'ERROR_AVERTED' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
