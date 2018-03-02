import React, { Component, Fragment } from 'react';
import classes from '../classes';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SortIcon from 'react-icons/lib/md/sort-by-alpha';
import {withStyles} from "material-ui/styles/index";
import PostList from "./PostList";
import BarContainer from "./BarContainer";
import MainContainer from './MainContainer';
import AddFab from './AddFab';

class CategoryPage extends Component{

    renderToolbar(title){
        const { classes, onOpenDrawer, onOpenSortMenu } = this.props;
        return (
            <Fragment>
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
                            {title}
                        </Typography>
                        <IconButton
                            color="inherit"
                            onClick={onOpenSortMenu}
                        >
                            <SortIcon />
                        </IconButton>
                    </Toolbar>
                </BarContainer>
            </Fragment>
        );
    }

    render(){
        const { classes, category={}, posts=[] } = this.props;
        return (
            <Fragment>
                {this.renderToolbar(category.name)}
                <MainContainer classNames={classes.container}>
                    <PostList posts={posts} />
                </MainContainer>
                <AddFab href="/form-post" />
            </Fragment>
        );
    }
}

export default withStyles(classes)(CategoryPage);