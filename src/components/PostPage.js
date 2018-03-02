import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { filterArrayByParentId, findById } from "../utils";
import PostDetails from './PostDetails';
import classes from '../classes';

export default connect(
    ({posts, comments}, {match}) => ({
        post: findById(posts, match.params.id),
        comments: filterArrayByParentId(comments, match.params.id)
    })
)(withStyles(classes)(PostDetails));