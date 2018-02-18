import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import ReadableApp from './ReadableApp';
import registerServiceWorker from './registerServiceWorker';

console.log(store.getState());

ReactDOM.render(
    <ReadableApp />,
    document.getElementById('root')
);

registerServiceWorker();
