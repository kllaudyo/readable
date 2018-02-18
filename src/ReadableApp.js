import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import pink from 'material-ui/colors/pink';
import deepPurple from 'material-ui/colors/deepPurple';
import HomePage from "./components/HomePage";

const theme = createMuiTheme({
    palette: {
        primary: pink,
        secondary: deepPurple,
    },
    status: {
        deepPurple,
        danger: 'orange',
    }
});

class ReadableApp extends Component{
    render(){
        return (
            <MuiThemeProvider theme={theme}>
                <HomePage />
            </MuiThemeProvider>
        );
    }
}

export default ReadableApp;