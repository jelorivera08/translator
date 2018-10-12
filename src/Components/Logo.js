import React from 'react';
import Grid from '@material-ui/core/Grid';

const Logo = () => (
  <Grid item xs={12} style={{ textAlign: 'center' }}>
    <h1
      style={{
        fontSize: '80px',
        fontFamily: 'Dancing Script',
        minWidth: '700px'
      }}
    >
      Translate
    </h1>
  </Grid>
);

export default Logo;
