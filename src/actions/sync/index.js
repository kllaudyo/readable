import C from '../../utils/constants';

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

    addComment = ({id, parentId, timestamp=Date.now(), body, author, voteScore=1, deleted=false, parentDeleted=false}) => ({
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

    commentVoteScore = ({id, voteScore}) => ({
        type: C.COMMENT_VOTE_SCORE,
        id,
        voteScore
    })
;