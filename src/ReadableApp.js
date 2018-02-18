import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCategories, fetchPosts } from "./actions";
import HomePage from "./components/HomePage";

class ReadableApp extends Component{

    componentDidMount(){
        const { onLoadCategories, onLoadPosts } = this.props;
        onLoadCategories();
        onLoadPosts();
    }

    render(){
        const {posts} = this.props;
        return (
            <Route path="/" render={()=><HomePage posts={posts} />} />
        );
    }
}

const mapStateToProps = ({posts}, ownProps) => ({
    posts
});

const mapDispatchToProps = dispatch => ({
    onLoadCategories: () => dispatch(fetchCategories()),
    onLoadPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadableApp);