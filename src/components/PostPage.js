import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { filterArrayByParentId, findById } from "../utils";
import sortBy from 'sort-by';
import PostDetails from './PostDetails';
import classes from '../classes';
import C from "../utils/constants";

export default connect(
    ({posts, comments}, ownProps) => ({
        post: findById(posts, ownProps.id),
        comments: filterArrayByParentId(comments, ownProps.id)
            .sort(sortBy(C.SORTED_BY_VOTE_SCORE)),
        ...ownProps
    })
)(withStyles(classes)(PostDetails));