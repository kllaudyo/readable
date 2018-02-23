import React, { Component, Fragment } from 'react';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SortIcon from 'react-icons/lib/md/sort-by-alpha';
import {withStyles} from "material-ui/styles/index";
import CategoriesList from './CategoryList';
import PostList from "./PostList";
import BarContainer from "./BarContainer";
import MainContainer from './MainContainer';

const styles = {
    root: {
        flexGrow: 1,
    },
    container:{
        marginTop:'110px'
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class CategoryPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            category:'redux'
        }
    }

    handleChange = (event, category) => {
        this.setState({ category });
    };

    renderToolbar(children){
        const { classes, onToggleDrawer } = this.props;
        return (
            <Fragment>
                <BarContainer>
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={onToggleDrawer}
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
                    {children}
                </BarContainer>
            </Fragment>
        );
    }

    render(){
        const { classes, categories, posts=[] } = this.props;
        const { category } = this.state;
        return (
            <Fragment>
                {this.renderToolbar(
                    <CategoriesList
                        categories={categories}
                        category={category}
                        onChangeCategory={this.handleChange}
                    />
                )}
                <MainContainer classNames={classes.container}>
                    <PostList posts={posts.filter(post=>post.category === category)}/>
                </MainContainer>
            </Fragment>
        );
    }
}

export default withStyles(styles)(CategoryPage);