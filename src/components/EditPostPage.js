import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from "material-ui/styles/index";
import { findById } from "../utils";
import { createPost } from "../actions";
import PostForm from "./PostForm";

const styles = theme => ({
    container:theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 8,
    }),
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
});

const mapStateToProps = ({ posts, categories }, { match }) => {
    const { author, title, body, category } = match.params.id ? findById(posts, match.params.id) : {};
    return ({
        author,
        title,
        body,
        category,
        categories
    })
};

const mapDispatchToProps = dispatch => ({
    onCreatePost: ({title, author, body, category}) => dispatch(createPost({title, author, body, category}))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostForm));