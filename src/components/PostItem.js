import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles/index';
import { Divider, Avatar, IconButton, ListItem, ListItemText, ListItemSecondaryAction, Badge } from 'material-ui';
import Person from 'react-icons/lib/md/person';
import ThumbDownIcon from "react-icons/lib/md/thumb-down";
import ThumbUpIcon from "react-icons/lib/md/thumb-up";
import HeartIcon from 'react-icons/lib/md/favorite';
import classes from '../classes';

const PostItem = ({classes, id, author, title, date, voteScore, onPositivePost, onNegativePost}) => (
    <React.Fragment>
        <ListItem button component={ Link } to={`/post/${id}`}>
            <Avatar className={classes.avatar}>
                <Person />
            </Avatar>
            <ListItemText
                primary={title}
                secondary={`${author} - ${date}`}
            />
            <ListItemSecondaryAction>
                <IconButton>
                <Badge badgeContent={voteScore} color="secondary">
                    <HeartIcon/>
                </Badge>
                </IconButton>
                <IconButton onClick={()=>onNegativePost({id})}>
                    <ThumbDownIcon />
                </IconButton>
                <IconButton onClick={()=>onPositivePost({id})}>
                    <ThumbUpIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <Divider />
    </React.Fragment>
);

export default withStyles(classes)(PostItem);