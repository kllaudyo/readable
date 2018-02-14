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
            .then( ({categories}) =>
                categories.map(
                    ({name, path}) => dispatch(addCategory(name, path))
                )
            );