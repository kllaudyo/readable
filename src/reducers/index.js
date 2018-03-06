import C from '../utils/constants';

export const

    category = (state={}, action) => {
        const { name, path } = action;
        switch(action.type){
            case C.ADD_CATEGORY:
                return {
                    name,
                    path
                };
            default:
                return state;
        }
    },

    categories = (state=[], action) => {
        switch(action.type){
            case C.ADD_CATEGORY:
                return [
                    ...state,
                    category({}, action)
                ];
            default:
                return state;
        }
    },

    post = (state={}, action) => {
        const { id, timestamp, title, body, author, category, voteScore, deleted, commentCount } = action;
        switch(action.type){
            case C.ADD_POST:
                return {
                    id,
                    timestamp,
                    title,
                    body,
                    author,
                    category,
                    voteScore,
                    deleted,
                    commentCount
                };
            case C.EDIT_POST:
                return (state.id !== id) ?
                    state :
                    {
                        ...state,
                        timestamp,
                        title,
                        body,
                        author,
                        category,
                    };
            case C.POST_VOTE_SCORE:
                return (state.id !== id) ?
                    state :
                    {
                        ...state,
                        voteScore
                    };
            case C.ADD_COMMENT:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        id,
                        commentCount: state.commentCount+1
                    };
            case C.DELETE_POST:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        deleted
                    };
            case C.DELETE_COMMENT:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        id,
                        commentCount: state.commentCount-1
                    };
            default:
                return state;
        }
    },

    posts = (state=[], action) => {
        switch(action.type){
            case C.ADD_POST:
                return [
                    ...state,
                    post({}, action)
                ];
            case C.EDIT_POST:
            case C.DELETE_POST:
            case C.POST_VOTE_SCORE:
            case C.ADD_COMMENT:
            case C.DELETE_COMMENT:
                return state.map(
                    p => post(p, action)
                );
            default:
                return state;
        }
    },

    comment = (state={}, action) => {
        const {id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted} = action;
        switch(action.type){
            case C.ADD_COMMENT:
                return {
                    id,
                    parentId,
                    timestamp,
                    body,
                    author,
                    voteScore,
                    deleted,
                    parentDeleted
                };
            case C.EDIT_COMMENT:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        parentId,
                        timestamp,
                        body,
                        author,
                        voteScore,
                        deleted,
                        parentDeleted
                    };
            case C.DELETE_COMMENT:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        deleted,
                    };
            case C.COMMENT_VOTE_SCORE:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        voteScore
                    };
            default:
                return state;
        }
    },

    comments = (state=[], action) => {
        switch(action.type){
            case C.ADD_COMMENT:
                return [
                    ...state,
                    comment({}, action)
                ];
            case C.EDIT_COMMENT:
            case C.DELETE_COMMENT:
            case C.COMMENT_VOTE_SCORE:
                return state.map(
                    c => comment(c, action)
                );
            default:
                return state;
        }
    },

    sort = (state=C.SORTED_BY_VOTE_SCORE, action) => {
        const { sortBy } = action;
        switch(action.type){
            case C.SORT_POSTS:
                return sortBy;
            default:
                return state;
        }
    };