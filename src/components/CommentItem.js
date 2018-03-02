import React from 'react';
import { withStyles } from 'material-ui/styles/index';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Person from 'react-icons/lib/md/person';
import classes from '../classes';


const CommentItem = ({id, author, body, date, classes}) => (
    <React.Fragment>
        <ListItem button>
            <Avatar className={classes.avatar}>
                <Person />
            </Avatar>
            <ListItemText
                primary={body}
                secondary={`${author} - ${date}`}
            />
        </ListItem>
    </React.Fragment>
);

export default withStyles(classes)(CommentItem);