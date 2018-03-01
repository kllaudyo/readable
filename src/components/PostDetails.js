import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Typography, IconButton, Paper } from  'material-ui';
import ArrowBackIcon from 'react-icons/lib/md/arrow-back';
import ThumbDownIcon from "react-icons/lib/md/thumb-down";
import ThumbUpIcon from "react-icons/lib/md/thumb-up";
import EditIcon from 'react-icons/lib/md/create';
import BarContainer from './BarContainer';
import MainContainer from './MainContainer';
import Post from './Post';
import CommentList from "./CommentList";

const PostDetails = props => {
    const { classes, post = {}, comments = [] } = props;
    const { id, author, body, title} = post;
    return (
        <Fragment>
            <BarContainer>
                <Toolbar>
                    <IconButton
                        component={Link}
                        to="/"
                        color="inherit"
                        aria-label="Menu"
                        className={classes.menuButton}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex} />
                    <IconButton component={Link} to={`/form-post/${id}`} color="inherit"><EditIcon/></IconButton>
                    <IconButton color="inherit"><ThumbDownIcon/></IconButton>
                    <IconButton color="inherit"><ThumbUpIcon/></IconButton>
                </Toolbar>
            </BarContainer>
            <MainContainer classNames={classes.container}>
                <Post
                    author={author}
                    title={title}
                    body={body}
                />
                {comments.length > 0 && (
                    <Paper className={classes.root} elevation={0}>
                        <CommentList comments={comments} />
                    </Paper>
                )}
            </MainContainer>
        </Fragment>
    );
};

export default PostDetails;