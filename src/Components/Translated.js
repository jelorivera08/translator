import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';

const Translated = props => (
  <Fragment>
    <Divider />
    <div
      style={{
        margin: '10px',
        maxHeight: '230px',
        overflow: 'auto',
        fontSize: '30px'
      }}
    >
      {props.translating ? <LinearProgress /> : props.word}
    </div>
  </Fragment>
);

export default Translated;
