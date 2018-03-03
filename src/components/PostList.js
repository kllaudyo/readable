import React from 'react';
import PropTypes from 'prop-types';
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

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        voteScore: PropTypes.number.isRequired,
        commentCount: PropTypes.number.isRequired
    })).isRequired,
    onPositivePost: PropTypes.func.isRequired,
    onNegativePost: PropTypes.func.isRequired
};

PostList.defaultProps = {
    posts: [],
    onPositivePost: f=>f,
    onNegativePost: f=>f
};

export default PostList;