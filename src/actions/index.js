import C from '../utils/constants';
import * as API from '../utils/api';

export const addCategory = (name, path) => ({
    type: C.ADD_CATEGORY,
    name,
    path
});

export const
    fetchCategories = () => dispatch =>
        API.getCategories()
            .then(({ categories }) =>
                    categories.map(
                        ({ name, path }) => dispatch(addCategory(name, path))
                    ));

export const addPost = ({ id, timestamp, title, body, author, category, voteScore, deleted }) => ({
    type: C.ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
});

export const
    fetchPosts = () => dispatch =>
        API.getPosts()
            .then(posts => posts.map(post => {
                dispatch(addPost(post));
                post.commentCount && dispatch(fetchComments(post.id));
            }));

export const addComment = ({id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted}) => ({
    type: C.ADD_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
});

export const
    fetchComments = id => dispatch =>
        API.getCommentsByPost(id)
            .then(comments => comments.map(comment => dispatch(addComment(comment))));