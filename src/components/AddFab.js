import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from 'material-ui/styles';
import { Button } from 'material-ui';
import classes from '../classes';
import AddIcon from 'react-icons/lib/md/add';

const AddFab = ({href, classes}) => (
    <Button
        component={Link}
        to={href}
        variant="fab"
        className={classes.fab}
        color="secondary"
        arial-label="add"
    >
        <AddIcon size={24}/>
    </Button>
);

export default withStyles(classes)(AddFab);