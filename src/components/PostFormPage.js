import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import {
    Toolbar,
    Typography,
    IconButton,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button
} from  'material-ui';
import classes from '../classes';
import BarContainer from './BarContainer';
import MainContainer from './MainContainer';

const PostFormPage = ({classes}) => {
    return (
        <Fragment>
            <BarContainer>
                <Toolbar>
                    <IconButton
                        component={Link}
                        to="/"
                        color="inherit"
                        aria-label="Menu"
                        className={classes.menuButton}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}
                    />
                </Toolbar>
            </BarContainer>
            <MainContainer classNames={classes.main}>
                <form
                    noValidate
                    autoComplete="off"
                >
                    <FormControl
                        fullWidth
                        margin="normal"
                    >
                    </FormControl>
                </form>
            </MainContainer>
        </Fragment>
    )
};

export default withStyles(classes)(PostFormPage);