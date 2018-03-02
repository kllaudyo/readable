import React from 'react';
import { withStyles } from 'material-ui/styles/index';
import { Avatar, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Badge } from 'material-ui';
import Person from 'react-icons/lib/md/person';
import ThumbDownIcon from "react-icons/lib/md/thumb-down";
import ThumbUpIcon from "react-icons/lib/md/thumb-up";
import HeartIcon from 'react-icons/lib/md/favorite';
import classes from '../classes';

const CommentItem = ({id, author, body, date, voteScore, classes, onPositiveComment, onNegativeComment}) => (
    <React.Fragment>
        <ListItem button>
            <Avatar className={classes.avatar}>
                <Person />
            </Avatar>
            <ListItemText
                primary={body}
                secondary={`${author} - ${date}`}
            />
            <ListItemSecondaryAction>
                <IconButton>
                    <Badge badgeContent={voteScore} color="secondary">
                        <HeartIcon/>
                    </Badge>
                </IconButton>
                <IconButton onClick={()=>onNegativeComment({id})}>
                    <ThumbDownIcon />
                </IconButton>
                <IconButton onClick={()=>onPositiveComment({id})}>
                    <ThumbUpIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </React.Fragment>
);

export default withStyles(classes)(CommentItem);