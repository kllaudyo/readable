import React from 'react';
import List from 'material-ui/List';
import PostItem from "./PostItem";

const PostList = ({posts}) => (
    <List>
        { posts.map(
            ({id, author, title, timestamp, voteScore}) =>
                <PostItem
                    key={id}
                    id={id}
                    author={author}
                    title={title}
                    date={timestamp}
                    voteScore={voteScore}
                />)
        }
    </List>
);

export default PostList;