import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PostDetails from './PostDetails';
import { findById } from "../utils";

export default connect(
    ({posts, comments}, {match}) => ({post: findById(posts, match.params.id)})
)(withStyles({
    root: {
        flexGrow: 1,
    },
    container:{
        marginTop:'80px',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20}
})(PostDetails));