import C from '../utils/constants';
import { category } from './index';

describe("Category reducer", ()=> {
   it("ADD_CATEGORY success", () => {
       const state = {};
       const action = {
           type: C.ADD_CATEGORY,
           name:'udacity',
           path:'udacity'
       };
       const results = category(state, action);
       expect(results)
           .toEqual({
               name: 'udacity',
               path: 'udacity'
           });
   });
});