import { combineReducers } from 'redux';
import C from '../utils/constants';

const category = (state={}, action) => {
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
};

const categories = (state=[], action) => {
    switch(action.type){
        case C.ADD_CATEGORY:
            return [
                ...state,
                category({}, action)
            ];
        default:
            return state;
    }
};

const post = (state={}, action) => {
    const { id, timestamp, title, body, author, category, voteScore, deleted } = action;
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
                deleted
            };
        case C.POST_VOTE_SCORE:
            return (state.id !== id) ?
                state :
                {
                    ...state,
                    voteScore
                };
        default:
            return state;
    }
};

const posts = (state=[], action) => {
    switch(action.type){
        case C.ADD_POST:
            return [
                ...state,
                post({}, action)
            ];
        case C.POST_VOTE_SCORE:
            return state.map(
                p => post(p, action)
            );
        default:
            return state;
    }
};

const comment = (state={}, action) => {
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
};

const comments = (state=[], action) => {
    switch(action.type){
        case C.ADD_COMMENT:
            return [
                ...state,
                comment({}, action)
            ];
        case C.COMMENT_VOTE_SCORE:
            return state.map(
                c => comment(c, action)
            );
        default:
            return state;
    }
};

const sort = (state=C.SORTED_BY_VOTE_SCORE, action) => {
    const { sortBy } = action;
    switch(action.type){
        case C.SORT_POSTS:
            return sortBy;
        default:
            return state;
    }
};

export default combineReducers({categories, posts, comments, sort});