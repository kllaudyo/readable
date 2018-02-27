import React, { Fragment, Component } from 'react';
import { Toolbar, Typography, IconButton, TextField } from  'material-ui';
import ArrowBackIcon from 'react-icons/lib/md/arrow-back';
import BarContainer from './BarContainer';
import MainContainer from './MainContainer';
import { Link } from "react-router-dom";
import {withStyles} from "material-ui/styles/index";

class PostFormPage extends Component{
    render(){
        const { classes } = this.props;
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
                <MainContainer classNames={classes.container}>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="title"
                            label="Title"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="author"
                            label="Author"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="category"
                            label="Category"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            fullWidth
                        />
                    </form>
                </MainContainer>
            </Fragment>
        );
    }
}

export default withStyles(theme => ({
    container:theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 8,
    }),
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
}))(PostFormPage);