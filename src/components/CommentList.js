import React from 'react';
import {List, ListSubheader} from 'material-ui';
import CommentItem from "./CommentItem";

const CommentList = ({comments, onOpenForm, onPositiveComment, onNegativeComment, onDeleteComment}) => (
    <List subheader={<ListSubheader>Comments</ListSubheader>}>
        {comments.map( comment =>
            <CommentItem
                key={comment.id}
                comment={comment}
                onOpenForm={onOpenForm}
                onPositiveComment={onPositiveComment}
                onNegativeComment={onNegativeComment}
                onDeleteComment={onDeleteComment}
            />
        )}
    </List>
);

export default CommentList;