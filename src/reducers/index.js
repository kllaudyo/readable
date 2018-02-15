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
    switch(action.type){
        default:
            return state;
    }
};

const posts = (state=[], action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default combineReducers({categories, posts});