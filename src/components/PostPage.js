import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { filterArrayByParentId, findById } from "../utils";
import sortBy from 'sort-by';
import PostDetails from './PostDetails';
import CommentForm from "./CommentForm";
import classes from '../classes';
import C from "../utils/constants";
import {createComment, removeComment} from "../actions";

class PostPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            is_open_comment_form: false
        };
    }

    toggleCommentForm = is_open_comment_form =>
        this.setState({is_open_comment_form});

    handleSubmitComment = ({id, author, body}) => {
        const { onCreateComment, post } = this.props;
        id === undefined ?
            onCreateComment({id, body, parentId:post.id}) :
            null;
    };

    render(){
        const { is_open_comment_form } = this.state;
        return (
            <Fragment>
                <CommentForm
                    open={is_open_comment_form}
                    onClose={()=>this.toggleCommentForm(false)}
                    onSubmit={this.handleSubmitComment}
                />
                <PostDetails
                    {...this.props}
                    onOpenForm={()=>this.toggleCommentForm(true)}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = ({posts, comments}, ownProps) => ({
    post: findById(posts, ownProps.id),
    comments: filterArrayByParentId(comments, ownProps.id)
        .filter(comment => comment.deleted === false)
        .sort(sortBy(C.SORTED_BY_VOTE_SCORE)),
    ...ownProps
});

const mapDispatchToProps = dispatch => ({
    onCreateComment: ({body, parentId}) =>
        dispatch(createComment({body, parentId})),
    onDeleteComment: ({id}) =>
        dispatch(removeComment(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(classes)(PostPage));