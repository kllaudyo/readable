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

    addPost = ({ id, timestamp=Date.now(), title, body, author, category, voteScore=1, deleted=false, commentCount=0 }) => ({
        type: C.ADD_POST,
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore,
        deleted,
        commentCount
    }),

    addCommentPost = id => ({
        type: C.ADD_COMMENT,
        id
    }),

    deleteCommentPost = id => ({
       type: C.DELETE_COMMENT,
       id
    }),

    postVoteScore = ({id, voteScore}) => ({
        type: C.POST_VOTE_SCORE,
        id,
        voteScore
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

    votePost = (id, vote) =>
            dispatch => API.votePost(id, vote)
                .then( post => dispatch(postVoteScore(post))),

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

    editComment = ({id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted}) => ({
        type: C.EDIT_COMMENT,
        id,
        parentId,
        timestamp,
        body,
        author,
        voteScore,
        deleted,
        parentDeleted
    }),

    deleteComment = ({id}) => ({
        type: C.DELETE_COMMENT,
        id,
        deleted:true
    }),

    fetchComments = id => dispatch =>
        API.getCommentsByPost(id)
            .then(comments => comments.map(comment => dispatch(addComment(comment)))),

    createComment = ({id=uniqid(), parentId, timestamp=Date.now(), body, author, voteScore=1, deleted=false, parentDeleted=false}) =>
        dispatch => API.addComment({id,timestamp, body, author, parentId, voteScore, deleted, parentDeleted})
            .then(comment => {
                dispatch(addComment(comment));
                dispatch(addCommentPost(comment.parentId));
            }),

    updateComment = ({id, body, timestamp=Date.now()}) => dispatch =>
        API.editComment({id, body, timestamp})
            .then( comment => dispatch(editComment(comment))),

    removeComment =  id => dispatch =>
        API.deleteComment(id)
            .then( comment => {
                dispatch(deleteComment(comment));
                dispatch(deleteCommentPost(comment.parentId));
            }),

    commentVoteScore = ({id, voteScore}) => ({
        type: C.COMMENT_VOTE_SCORE,
        id,
        voteScore
    }),

    voteComment = (id, vote) =>
        dispatch => API.voteComment(id, vote)
            .then( comment => dispatch(commentVoteScore(comment)))
;