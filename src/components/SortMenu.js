import React from 'react';
import {
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from 'material-ui';
import CheckedIcon from 'react-icons/lib/md/radio-button-checked';
import UnCheckedIcon from 'react-icons/lib/md/radio-button-unchecked';

const SortMenu = ({open, options=[], sortBy="date", onClose, onSortBy}) => (
    <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={onClose}>
        <DialogTitle id="simple-dialog-title">Sort By</DialogTitle>
        <div>
            <List>
                {options.map( ({value, text}) =>
                    <ListItem key={value} button onClick={() => onSortBy(value)}>
                        <ListItemIcon>
                            {sortBy === value && (
                                <CheckedIcon />
                            ) || (
                                <UnCheckedIcon />
                            )}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )}
            </List>
        </div>
    </Dialog>
);

export default SortMenu;