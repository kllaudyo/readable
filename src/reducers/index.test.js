import C from '../utils/constants';
import deepFreeze from 'deep-freeze';
import { category } from './index';

describe("Category reducer", ()=> {
   it("ADD_CATEGORY success", () => {
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