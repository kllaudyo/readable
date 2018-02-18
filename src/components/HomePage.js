import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SortIcon from 'react-icons/lib/md/sort-by-alpha';
import PostList from './PostList';

const styles = {
    root: {
        flexGrow: 1,
    },
    container:{
        marginTop:'60px'
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class HomePage extends Component {

    renderToolbar(){
        const { classes } = this.props;
        return (
            <AppBar className={classes.root} position="fixed">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}
                    >
                        Readable
                    </Typography>
                    <IconButton color="inherit">
                        <SortIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }

    renderContainer(children){
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                { children }
            </div>
        );
    }

    render(){
        return (
            <Fragment>
                {this.renderToolbar()}
                {this.renderContainer(<PostList posts={[{},{},{}]} />)}
            </Fragment>
        );
    }
}

export default withStyles(styles)(HomePage);