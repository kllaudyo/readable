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
    const { id, timestamp=Date.now(), title, body, author, category, voteScore=1, deleted=false } = action;
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
        default:
            return state;
    }
};

const comment = (state={}, action) => {
    const {id, parentId, timestamp=Date.now(), body, author, voteScore=1, deleted=false, parentDeleted=false} = action;
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
        default:
            return state;
    }
};

export default combineReducers({categories, posts, comments});