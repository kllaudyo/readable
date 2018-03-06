import C from '../utils/constants';
import deepFreeze from 'deep-freeze';
import { category, categories } from './index';

describe("Category reducer", ()=> {
   it("category is add success", () => {
       const state = {};
       const action = {
           type: C.ADD_CATEGORY,
           name:'udacity',
           path:'udacity'
       };
       deepFreeze(state);
       deepFreeze(action);
       const results = category(state, action);
       expect(results)
           .toEqual({
               name: 'udacity',
               path: 'udacity'
           });
   });
});

describe("Categories reducer", ()=> {

    const state = [];
    const action = {
        type: C.ADD_CATEGORY,
        name:'udacity',
        path:'udacity'
    };

    it("category is add success", ()=> {
        deepFreeze(state);
        deepFreeze(action);
        const results = categories(state, action);
        expect(results).toContainEqual(
            expect.objectContaining({name: 'udacity', path: 'udacity'})
        );
    });

    it("categories state length to be 1 ", ()=> {
        deepFreeze(state);
        deepFreeze(action);
        const results = categories(state, action);
        expect(results.length).toBe(1);
    });

});