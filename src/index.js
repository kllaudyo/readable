import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import { categories } from './reducers';
import { fetchCategories } from './actions';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    combineReducers({categories}),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

store.subscribe( () => console.log(store.getState()));
store.dispatch(fetchCategories());
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
