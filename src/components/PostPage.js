import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { filterArrayByParentId, findById } from "../utils";
import PostDetails from './PostDetails';
import classes from '../classes';

export default connect(
    ({posts, comments}, {id, onOpenForm}) => ({
        post: findById(posts, id),
        comments: filterArrayByParentId(comments, id),
        onOpenForm
    })
)(withStyles(classes)(PostDetails));