import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Person from 'react-icons/lib/md/person';
import lightBlue from 'material-ui/colors/lightBlue';

const PostItem = ({id, author, title, date}) => (
    <React.Fragment>
        <ListItem button component={Link} to={`post/${id}`}>
            <Avatar style={{backgroundColor:lightBlue[200]}}>
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

export default PostItem;