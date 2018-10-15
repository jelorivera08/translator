import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const TranslateButton = props => (
  <Grid
    item
    xs={6}
    style={{
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center'
    }}
  >
    <Button
      onClick={props.handleTranslateButtonClick}
      variant="contained"
      style={{
        backgroundColor: '#84CA10',
        color: 'white',
        margin: '40px 20px',
        height: '40%',
        width: '100%'
      }}
    >
      Translate
    </Button>
  </Grid>
);

export default TranslateButton;
