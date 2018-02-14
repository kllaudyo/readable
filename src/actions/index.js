import C from '../utils/constants';

export const addCategory = (name, path) => ({
    type: C.ADD_CATEGORY,
    name,
    path
});