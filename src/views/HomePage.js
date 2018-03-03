import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import { Toolbar, Typography, IconButton } from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu';
import SortIcon from 'react-icons/lib/md/sort-by-alpha';
import PostList from '../components/PostList';
import MainContainer from "../components/MainContainer";
import BarContainer from "../components/BarContainer";
import AddFab from "../components/AddFab";
import classes from "../classes";

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
        const { classes, posts, onPositivePost, onNegativePost } = this.props;
        return (
            <Fragment>
                {this.renderToolbar()}
                <MainContainer>
                    <PostList
                        posts={posts}
                        onPositivePost={onPositivePost}
                        onNegativePost={onNegativePost}
                    />
                </MainContainer>
                <AddFab href="/form-post" />
            </Fragment>
        );
    }
}

export default withStyles(classes)(HomePage);