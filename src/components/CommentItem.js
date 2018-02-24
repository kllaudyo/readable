import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Person from 'react-icons/lib/md/person';
import lightBlue from 'material-ui/colors/lightBlue';

const CommentItem = ({id, author, body, date}) => (
    <React.Fragment>
        <ListItem button>
            <Avatar style={{backgroundColor:lightBlue[200]}}>
                <Person />
            </Avatar>
            <ListItemText
                primary={body}
                secondary={`${author} - ${date}`}
            />
        </ListItem>
    </React.Fragment>
);

export default CommentItem;