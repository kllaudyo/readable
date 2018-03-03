import { connect } from 'react-redux';
import { withStyles } from "material-ui/styles/index";
import { findById } from "../utils";
import { createPost } from "../actions/async/";
import classes from "../classes";
import PostForm from "./PostForm";

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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(PostForm));