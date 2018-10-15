import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import ReactDOM from 'react-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import { LANGUAGES_LIST } from '../constants';

class LanguageListButton extends Component {
  state = {
    age: ''
  };

  handleChange = event => {
    const { handleChangeOfLanguage } = this.props;
    this.setState({ [event.target.name]: event.target.value });
    handleChangeOfLanguage(LANGUAGES_LIST[event.target.value]);
  };

  render() {
    return (
      <Grid item xs={6}>
        <form autoComplete="off" style={{ padding: '40px 20px' }}>
          <FormControl variant="outlined" style={{ width: '100%' }}>
            <InputLabel
              ref={ref => {
                this.labelRef = ReactDOM.findDOMNode(ref);
              }}
              htmlFor="outlined-age-simple"
            >
              Translate to
            </InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                  name="age"
                  id="outlined-age-simple"
                />
              }
            >
              {Object.entries(LANGUAGES_LIST).map(language => (
                <MenuItem key={language[0]} value={language[0]}>
                  <em>{language[0]}</em>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      </Grid>
    );
  }
}

export default LanguageListButton;
