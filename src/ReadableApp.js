import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { fetchCategories, fetchPosts } from './actions';
import MainMenu from './components/MainMenu';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import PostPage from './components/PostPage';
import SortMenu from "./components/SortMenu";

class ReadableApp extends Component{

    constructor(props){
        super(props);
        this.state = {
            is_open_drawer : false,
            is_open_sort_menu : false,
            sort_by:'date'
        }
    }

    toggleDrawer = is_open_drawer =>
        this.setState({is_open_drawer});

    toggleSortMenu = is_open_sort_menu =>
        this.setState({is_open_sort_menu});

    handleSortBy = sort_by => {
        this.setState({sort_by});
    };

    componentDidMount(){
        const { onLoadCategories, onLoadPosts } = this.props;
        onLoadCategories();
        onLoadPosts();
    }

    render(){
        const { is_open_drawer, is_open_sort_menu, sort_by } = this.state;
        const { posts, categories } = this.props;
        return (
            <Fragment>
                <MainMenu
                    open={is_open_drawer}
                    onClose={()=>this.toggleDrawer(false)}
                />
                <SortMenu
                    open={is_open_sort_menu}
                    sortBy={sort_by}
                    onClose={()=>this.toggleSortMenu(false)}
                    onSortBy={this.handleSortBy}
                />
                <Route
                    exact path="/"
                    render={ () => <HomePage
                        posts={posts}
                        onOpenDrawer={() => this.toggleDrawer(true)}
                        onOpenSortMenu={() => this.toggleSortMenu(true)}
                    />}
                />
                <Route
                    path="/categories"
                    render={ () => <CategoryPage
                        categories={categories}
                        posts={posts}
                        onOpenDrawer={() => this.toggleDrawer(true)}
                        onOpenSortMenu={() => this.toggleSortMenu(true)}
                    />}
                />
                <Route
                    path="/post/:id"
                    component={PostPage}
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