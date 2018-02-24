import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SortIcon from 'react-icons/lib/md/sort-by-alpha';
import PostList from './PostList';
import MainContainer from "./MainContainer";
import BarContainer from "./BarContainer";

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
        const { classes, onOpenDrawer, onOpenSortMenu } = this.props;
        return (
            <BarContainer>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={onOpenDrawer}
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
                    <IconButton
                        color="inherit"
                        onClick={onOpenSortMenu}
                    >
                        <SortIcon />
                    </IconButton>
                </Toolbar>
            </BarContainer>
        );
    }

    render(){
        const { classes } = this.props;
        return (
            <Fragment>
                {this.renderToolbar()}
                <MainContainer classNames={classes.container}>
                    <PostList posts={this.props.posts} />
                </MainContainer>
            </Fragment>
        );
    }
}

export default withStyles(styles)(HomePage);