import React from 'react';
import {List, ListSubheader} from 'material-ui';
import CommentItem from "./CommentItem";

const CommentList = ({comments, onPositiveComment, onNegativeComment}) => (
    <List subheader={<ListSubheader>Comments</ListSubheader>}>
        { comments.map(
            ({id, author, body, timestamp, voteScore}) =>
                <CommentItem
                    key={id}
                    id={id}
                    author={author}
                    body={body}
                    date={timestamp}
                    voteScore={voteScore}
                    onPositiveComment={onPositiveComment}
                    onNegativeComment={onNegativeComment}
                />)
        }
    </List>
);

export default CommentList;