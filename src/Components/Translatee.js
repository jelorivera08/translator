import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Translatee = props => (
  <Grid container justify="center">
    <Grid item xs style={{ textAlign: 'center' }}>
      <TextField
        onChange={event => props.handleTranslateeWordChange(event)}
        style={{ width: '80%' }}
        id="standard-name"
        margin="normal"
        placeholder="Translate me, please!"
      />
    </Grid>
  </Grid>
);

export default Translatee;
