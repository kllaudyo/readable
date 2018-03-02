import C from '../utils/constants';
import uniqid from 'uniqid';
import * as API from '../utils/api';

export const

    sortPosts = sortBy => ({
        type: C.SORT_POSTS,
        sortBy
    }),

    addCategory = (name, path) => ({
        type: C.ADD_CATEGORY,
        name,
        path
    }),

    fetchCategories = () => dispatch =>
        API.getCategories()
            .then(({ categories }) =>
                    categories.map(
                        ({ name, path }) => dispatch(addCategory(name, path))
                    )),

    addPost = ({ id, timestamp=Date.now(), title, body, author, category, voteScore=1, deleted=false }) => ({
        type: C.ADD_POST,
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore,
        deleted
    }),

    fetchPosts = () => dispatch =>
        API.getPosts()
            .then(posts => posts.map(post => {
                dispatch(addPost(post));
                post.commentCount && dispatch(fetchComments(post.id));
            })),

    createPost = ({id=uniqid(), timestamp=Date.now(), title, body, author, category, voteScore=1, deleted=false}) =>
            dispatch => API.addPost({id, timestamp, title, body, author, category, voteScore, deleted })
                .then( post => dispatch(addPost(post)) ),

    addComment = ({id=uniqid(), parentId, timestamp=Date.now(), body, author, voteScore=1, deleted=false, parentDeleted=false}) => ({
        type: C.ADD_COMMENT,
        id,
        parentId,
        timestamp,
        body,
        author,
        voteScore,
        deleted,
        parentDeleted
    }),

    fetchComments = id => dispatch =>
        API.getCommentsByPost(id)
            .then(comments => comments.map(comment => dispatch(addComment(comment)))),

    createComment = ({id=uniqid(), parentId, timestamp=Date.now(), body, author, voteScore=1, deleted=false, parentDeleted=false}) =>
        dispatch => API.addComment({id,timestamp, body, author, parentId, voteScore, deleted, parentDeleted})
            .then(comment => dispatch(addComment(comment)))
;