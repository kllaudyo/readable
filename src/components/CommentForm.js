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
    const { id=null, author="", body = "" } = comment;
    let _comment, _author;
    const submit = e => {
        onSubmit({author: _author.value, body: _comment.value, id});
        onClose();
        _author.value = "";
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
                    inputProps={{defaultValue:body}}
                    inputRef={input => _comment = input}
                    margin="dense"
                    label="Tell us your comment:"
                    fullWidth
                />
                <TextField
                    inputProps={{defaultValue: author}}
                    inputRef={input => _author = input}
                    margin="dense"
                    label="Tell us your name:"
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