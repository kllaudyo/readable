import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { filterArrayByParentId, findById } from "../utils";
import PostDetails from './PostDetails';

export default connect(
    ({posts, comments}, {match}) => ({
        post: findById(posts, match.params.id),
        comments: filterArrayByParentId(comments, match.params.id)
    })
)(withStyles(theme => ({
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
        flexGrow: 1,
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    })
}))(PostDetails));