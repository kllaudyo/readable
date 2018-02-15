import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import reducer from './reducers';
import { fetchCategories, fetchPosts } from './actions';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

store.subscribe( () => console.log(store.getState()));
store.dispatch(fetchCategories());
store.dispatch(fetchPosts());
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
