import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCategories, fetchPosts } from './actions';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';

class ReadableApp extends Component{

    componentDidMount(){
        const { onLoadCategories, onLoadPosts } = this.props;
        onLoadCategories();
        onLoadPosts();
    }

    render(){
        const { posts, categories } = this.props;
        return (
            <Fragment>
                <Route exact path="/" render={()=><HomePage posts={posts} />} />
                <Route path="/categories" render={()=><CategoryPage categories={categories} posts={posts} />} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ReadableApp);