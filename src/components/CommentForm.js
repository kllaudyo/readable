import React from 'react';
import { withStyles } from 'material-ui/styles/index';
import {
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from 'material-ui';
import classes from '../classes';

const CommentForm = ({ classes, open, comment={}, onClose, onSubmit }) => {
    let _comment;
    const submit = e => {
        onSubmit({body: _comment.value});
        onClose();
        _comment.value = "";
    };
    return (
        <Dialog
        open={open}
        onClose={onClose}
        arial-labelledby="form-dialog-title"
    >
        <DialogTitle>Comment</DialogTitle>
        <DialogContent className={classes.commentForm}>
            <TextField
                autoFocus
                inputRef={input => _comment = input}
                margin="dense"
                label="Tell us your comment:"
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button
                onClick={onClose}
                color="primary"
            >
                Cancel
            </Button>
            <Button
                onClick={submit}
                color="primary"
            >
                Save
            </Button>
        </DialogActions>
    </Dialog>
    );
};

export default withStyles(classes)(CommentForm);