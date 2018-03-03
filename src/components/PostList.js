import React from 'react';
import List from 'material-ui/List';
import PostItem from "./PostItem";

const PostList = ({posts, onPositivePost, onNegativePost}) => (
    <List>
        { posts.map(
            ({id, author, title, timestamp, voteScore, commentCount}) =>
                <PostItem
                    key={id}
                    id={id}
                    author={author}
                    title={title}
                    date={timestamp}
                    voteScore={voteScore}
                    commentCount={commentCount}
                    onPositivePost={onPositivePost}
                    onNegativePost={onNegativePost}
                />)
        }
    </List>
);

export default PostList;