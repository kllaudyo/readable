import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import sortBy from 'sort-by';
import { fetchCategories, fetchPosts, sortPosts } from './actions';
import MainMenu from './components/MainMenu';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import PostPage from './components/PostPage';
import SortMenu from "./components/SortMenu";
import {filterArrayByCategory, findByPath} from "./utils";
import EditPostPage from "./components/EditPostPage";
import CommentForm from "./components/CommentForm";
import C from "./utils/constants";

const sortOptions = [
    {value:C.SORTED_BY_DATE, text:'Date'},
    {value:C.SORTED_BY_VOTE_SCORE, text:'Score'},
];

class ReadableApp extends Component{

    constructor(props){
        super(props);
        this.state = {
            is_open_drawer : false,
            is_open_sort_menu : false,
            is_open_comment_form : false
        }
    }

    toggleDrawer = is_open_drawer =>
        this.setState({is_open_drawer});

    toggleSortMenu = is_open_sort_menu =>
        this.setState({is_open_sort_menu});

    toggleCommentForm = is_open_comment_form =>
        this.setState({is_open_comment_form});

    handleSubmitComment = comment =>
        console.log(comment);

    componentWillMount(){
        const { onLoadCategories, onLoadPosts } = this.props;
        onLoadCategories();
        onLoadPosts();
    }

    render(){
        const { is_open_drawer, is_open_sort_menu, is_open_comment_form } = this.state;
        const { posts = {}, categories, sort, onSortBy } = this.props;
        const sortedPosts = posts.sort(sortBy(sort));
        return (
            <Fragment>
                <MainMenu
                    open={is_open_drawer}
                    categories={categories}
                    onClose={()=>this.toggleDrawer(false)}
                    onSave={this.handleSubmitComment}
                />
                <SortMenu
                    open={is_open_sort_menu}
                    options={sortOptions}
                    sortBy={sort}
                    onClose={()=>this.toggleSortMenu(false)}
                    onSortBy={onSortBy}
                />
                <CommentForm
                    open={is_open_comment_form}
                    onClose={()=>this.toggleCommentForm(false)}
                    onSubmit={this.handleSubmitComment}
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
                    render={ ({match}) =>
                        <PostPage
                            id={match.params.id}
                            onOpenForm= { () => this.toggleCommentForm(true) }
                        />
                    }
                />
                <Route
                    path="/form-post/:id?"
                    component = { EditPostPage }
                />
            </Fragment>
        );
    }
}

const mapStateToProps = ({posts, categories, sort}) => ({
    posts,
    categories,
    sort,
});

const mapDispatchToProps = dispatch => ({
    onLoadCategories: () => dispatch(fetchCategories()),
    onLoadPosts: () => dispatch(fetchPosts()),
    onSortBy: sortBy => dispatch(sortPosts(sortBy)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReadableApp));