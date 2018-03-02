import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles/index';
import { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Person from 'react-icons/lib/md/person';
import classes from '../classes';

const PostItem = ({classes, id, author, title, date}) => (
    <React.Fragment>
        <ListItem button component={ Link } to={`/post/${id}`}>
            <Avatar className={classes.avatar}>
                <Person />
            </Avatar>
            <ListItemText
                primary={title}
                secondary={`${author} - ${date}`}
            />
        </ListItem>
        <Divider />
    </React.Fragment>
);

export default withStyles(classes)(PostItem);