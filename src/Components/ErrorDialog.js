import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const ErrorDialog = props => (
  <Dialog
    open={props.errorEncountered}
    TransitionComponent={Transition}
    keepMounted
    onClose={props.errorAverted}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle id="alert-dialog-slide-title">
      {'There seemts to be something wrong..'}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        You need to have a word/phrase to translate and a chosen language to
        translate to.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.errorAverted} color="primary">
        Okay
      </Button>
    </DialogActions>
  </Dialog>
);

export default ErrorDialog;
