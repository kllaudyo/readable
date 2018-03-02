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

const CommentForm = ({ classes, open, comment={}, onClose, onSave }) =>
    <Dialog
        open={open}
        onClose={onClose}
        arial-labelledby="form-dialog-title"
    >
        <DialogTitle>Comment</DialogTitle>
        <DialogContent className={classes.commentForm}>
            <TextField
                autoFocus
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
                onClick={onSave}
                color="primary"
            >
                Save
            </Button>
        </DialogActions>
    </Dialog>;

export default withStyles(classes)(CommentForm);