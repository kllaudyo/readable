import React from 'react';
import List from 'material-ui/List';
import PostItem from "./PostItem";

const PostList = ({posts}) => (
    <List>
        { posts.map(
            ({id, author, title, timestamp}) =>
                <PostItem
                    key={id}
                    id={id}
                    author={author}
                    title={title}
                    date={timestamp}
                />)
        }
    </List>
);

export default PostList;