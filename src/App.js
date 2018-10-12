import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Header from './Components/Header';
import Translatee from './Containers/Translatee';
import Logo from './Components/Logo';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LanguageListButton from './Containers/LanguageListButton';

class App extends Component {
  handleTranslateeWordChange = event => {
    const { updateWordToBeTranslated } = this.props;
    updateWordToBeTranslated(event.target.value);
  };

  render() {
    return (
      <Grid container justify="center">
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
                  <LanguageListButton />

                  <Grid item xs={6}>
                    translate!
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  wordToBeTranslated: state.wordToBeTranslated
});

const mapDispatchToProps = dispatch => ({
  updateWordToBeTranslated: value =>
    dispatch({ type: 'UPDATE_WORD_TO_BE_TRANSLATED', value })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
