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

export default combineReducers({categories, posts});