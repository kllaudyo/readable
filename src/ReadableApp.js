import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { fetchCategories, fetchPosts } from './actions';
import MainMenu from './components/MainMenu';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import PostPage from './components/PostPage';

class ReadableApp extends Component{

    constructor(props){
        super(props);
        this.state = {
            is_open_drawer : false
        }
    }

    toggleDrawer = is_open_drawer => {
        this.setState({is_open_drawer});
    };

    componentDidMount(){
        const { onLoadCategories, onLoadPosts } = this.props;
        onLoadCategories();
        onLoadPosts();
    }

    render(){
        const { is_open_drawer } = this.state;
        const { posts, categories } = this.props;
        return (
            <Fragment>
                <MainMenu
                    open={is_open_drawer}
                    onToggleDrawer={this.toggleDrawer}
                />
                <Route
                    exact path="/"
                    render={ () => <HomePage
                        posts={posts}
                        onToggleDrawer={() => this.toggleDrawer(true)}
                    />}
                />
                <Route
                    path="/categories"
                    render={ () => <CategoryPage
                        categories={categories}
                        posts={posts}
                        onToggleDrawer={() => this.toggleDrawer(true)}
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