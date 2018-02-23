import React from 'react';
import AppBar from 'material-ui/AppBar';

const BarContainer = ({children}) => (
    <AppBar position="fixed">
        {children}
    </AppBar>
);

export default BarContainer;