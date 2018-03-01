import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import sortBy from 'sort-by';
import { fetchCategories, fetchPosts } from './actions';
import MainMenu from './components/MainMenu';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import PostPage from './components/PostPage';
import PostFormPage from './components/PostFormPage';
import SortMenu from "./components/SortMenu";
import {filterArrayByCategory, findByPath} from "./utils";
import EditPostPage from "./components/EditPostPage";

class ReadableApp extends Component{

    constructor(props){
        super(props);
        this.state = {
            is_open_drawer : false,
            is_open_sort_menu : false,
            sort:'-voteScore'
        }
    }

    toggleDrawer = is_open_drawer =>
        this.setState({is_open_drawer});

    toggleSortMenu = is_open_sort_menu =>
        this.setState({is_open_sort_menu});

    handleSortBy = sort => {
        this.setState({sort});
    };

    componentWillMount(){
        const { onLoadCategories, onLoadPosts } = this.props;
        onLoadCategories();
        onLoadPosts();
    }

    render(){
        const { is_open_drawer, is_open_sort_menu, sort } = this.state;
        const { posts = {}, categories, onCreatePost } = this.props;
        const sortedPosts = posts.sort(sortBy(sort));
        return (
            <Fragment>
                <MainMenu
                    open={is_open_drawer}
                    categories={categories}
                    onClose={()=>this.toggleDrawer(false)}
                />
                <SortMenu
                    open={is_open_sort_menu}
                    sortBy={sort}
                    onClose={()=>this.toggleSortMenu(false)}
                    onSortBy={this.handleSortBy}
                />
                <Route
                    exact path="/"
                    render={ () => <HomePage
                        posts={sortedPosts}
                        onOpenDrawer={() => this.toggleDrawer(true)}
                        onOpenSortMenu={() => this.toggleSortMenu(true)}
                    />}
                />
                <Route
                    path="/category/:path"
                    render={ ({match}) => <CategoryPage
                        category={findByPath(categories, match.params.path)}
                        posts={filterArrayByCategory(sortedPosts, match.params.path)}
                        onOpenDrawer={() => this.toggleDrawer(true)}
                        onOpenSortMenu={() => this.toggleSortMenu(true)}
                    />}
                />
                <Route
                    path="/post/:id"
                    component={ PostPage }
                />
                <Route
                    path="/form-post/:id?"
                    component = { EditPostPage }
                />
            </Fragment>
        );
    }
}

const mapStateToProps = ({posts, categories}, ownProps) => ({
    posts,
    categories
});

const mapDispatchToProps = dispatch => ({
    onLoadCategories: () => dispatch(fetchCategories()),
    onLoadPosts: () => dispatch(fetchPosts())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReadableApp));