import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PostDetails from './PostDetails';
import { findById } from "../utils";

export default connect(
    ({posts, comments}, {match}) => ({
        post: findById(posts, match.params.id),
        comments: comments.filter(comment => comment.parentId === match.params.id)
    })
)(withStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container:theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 10,
    }),
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    })
}))(PostDetails));