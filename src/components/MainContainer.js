import React from 'react';
import { withStyles } from 'material-ui/styles';
import classes from '../classes';

const MainContainer = ({classes, children}) => (
    <div className={classes.container}>
        { children }
    </div>
);

export default withStyles(classes)(MainContainer);