import React from 'react';
import List from 'material-ui/List';
import PostItem from "./PostItem";

const PostList = ({posts}) => (
    <List>
        { posts.map(
            ({id, author, title, date}) =>
                <PostItem
                    key={id}
                    author={author}
                    title={title}
                    date={date}
                />)
        }
    </List>
);

export default PostList;