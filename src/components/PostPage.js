import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { filterArrayByParentId, findById } from "../utils";
import PostDetails from './PostDetails';
import classes from '../classes';

export default connect(
    ({posts, comments}, ownProps) => ({
        post: findById(posts, ownProps.id),
        comments: filterArrayByParentId(comments, ownProps.id),
        ...ownProps
    })
)(withStyles(classes)(PostDetails));