import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import sortBy from 'sort-by';
import { sortPosts } from './actions/sync/';
import { fetchCategories, fetchPosts, votePost, voteComment, removePost } from './actions/async/';
import MainMenu from './components/MainMenu';
import HomePage from './views/HomePage';
import CategoryPage from './views/CategoryPage';
import PostPage from './views/PostPage';
import SortMenu from "./components/SortMenu";
import {filterArrayByCategory, findByPath} from "./utils";
import EditPostPage from "./views/EditPostPage";
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
            is_open_sort_menu : false
        }
    }

    toggleDrawer = is_open_drawer =>
        this.setState({is_open_drawer});

    toggleSortMenu = is_open_sort_menu =>
        this.setState({is_open_sort_menu});

    componentWillMount(){
        const { onLoadCategories, onLoadPosts } = this.props;
        onLoadCategories();
        onLoadPosts();
    }

    render(){
        const { is_open_drawer, is_open_sort_menu } = this.state;
        const {
            posts = {},
            categories,
            sort,
            onSortBy,
            onPositivePost,
            onNegativePost,
            onPositiveComment,
            onNegativeComment,
            onDeletePost
        } = this.props;
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
                <Switch>
                    <Route
                        exact path="/"
                        render={ () => <HomePage
                            posts={sortedPosts}
                            onOpenDrawer={() => this.toggleDrawer(true)}
                            onOpenSortMenu={() => this.toggleSortMenu(true)}
                            onPositivePost={onPositivePost}
                            onNegativePost={onNegativePost}
                            onDeletePost={onDeletePost}
                        />}
                    />

                    <Route exact path="/404" render={() => <img src="/404.jpg" />} />

                    <Route
                        exact
                        path="/form-post/:id?"
                        component = { EditPostPage }
                    />
                    <Route
                        exact
                        path="/:category"
                        render={ ({match}) => <CategoryPage
                            category={findByPath(categories, match.params.category)}
                            posts={filterArrayByCategory(sortedPosts, match.params.category)}
                            onOpenDrawer={() => this.toggleDrawer(true)}
                            onOpenSortMenu={() => this.toggleSortMenu(true)}
                            onPositivePost={onPositivePost}
                            onNegativePost={onNegativePost}
                        />}
                    />
                    <Route
                        exact
                        path="/:category/:id"
                        render={ ({match}) =>
                            <PostPage
                                id={match.params.id}
                                onOpenForm= {() => this.toggleCommentForm(true)}
                                onPositivePost={onPositivePost}
                                onNegativePost={onNegativePost}
                                onPositiveComment={onPositiveComment}
                                onNegativeComment={onNegativeComment}
                            />
                        }
                    />

                    <Route render={() => <img src="/404.jpg" />} />

                </Switch>
            </Fragment>
        );
    }
}

const mapStateToProps = ({posts, categories, sort}) => ({
    posts: posts.filter(post => post.deleted === false),
    categories,
    sort,
});

const mapDispatchToProps = dispatch => ({
    onLoadCategories: () => dispatch(fetchCategories()),
    onLoadPosts: () => dispatch(fetchPosts()),
    onSortBy: sortBy => dispatch(sortPosts(sortBy)),
    onPositivePost: ({id}) => dispatch(votePost(id, "upVote")),
    onNegativePost: ({id}) => dispatch(votePost(id, "downVote")),
    onPositiveComment: ({id}) => dispatch(voteComment(id, "upVote")),
    onNegativeComment: ({id}) => dispatch(voteComment(id, "downVote")),
    onDeletePost: ({id}) => dispatch(removePost(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReadableApp));