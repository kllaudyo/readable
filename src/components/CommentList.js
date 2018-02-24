import React from 'react';
import {List, ListSubheader} from 'material-ui';
import CommentItem from "./CommentItem";

const CommentList = ({comments}) => (
    <List subheader={<ListSubheader>Comments</ListSubheader>}>
        { comments.map(
            ({id, author, body, timestamp}) =>
                <CommentItem
                    key={id}
                    id={id}
                    author={author}
                    body={body}
                    date={timestamp}
                />)
        }
    </List>
);

export default CommentList;