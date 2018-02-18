import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import store from './store';
import theme from './theme';
import ReadableApp from './ReadableApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <ReadableApp />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

registerServiceWorker();
