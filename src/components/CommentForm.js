import React from 'react';
import {
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from 'material-ui';

const CommentForm = ({ open, comment={}, onChange, onClose, onSave }) =>
    <Dialog
        open={open}
        onClose={onClose}
        arial-labelledby="form-dialog-title"
    >
        <DialogTitle>Comment</DialogTitle>
        <DialogContent style={{minWidth:350}}>
            <TextField
                autoFocus
                margin="dense"
                label="Tell us your comment:"
                fullWidth
                onChange={e => onChange(e.target.value)}
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

export default CommentForm;