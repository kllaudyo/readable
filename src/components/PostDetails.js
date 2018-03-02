import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Typography, IconButton, Paper, Badge } from  'material-ui';
import ArrowBackIcon from 'react-icons/lib/md/arrow-back';
import ThumbDownIcon from "react-icons/lib/md/thumb-down";
import ThumbUpIcon from "react-icons/lib/md/thumb-up";
import EditIcon from 'react-icons/lib/md/create';
import HeartIcon from 'react-icons/lib/md/favorite';
import CommentIcon from 'react-icons/lib/md/comment';
import BarContainer from './BarContainer';
import MainContainer from './MainContainer';
import Post from './Post';
import CommentList from "./CommentList";

const PostDetails = props => {
    const { classes, post = {}, comments = [], onOpenForm, onPositivePost, onNegativePost } = props;
    const { id, author, body, title, voteScore=0 } = post;
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
                    <IconButton onClick={onOpenForm} color="inherit">
                        <CommentIcon />
                    </IconButton>
                    <IconButton component={Link} to={`/form-post/${id}`} color="inherit">
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={()=>onNegativePost(post)} color="inherit">
                        <ThumbDownIcon/>
                    </IconButton>
                    <IconButton onClick={()=>onPositivePost(post)} color="inherit">
                        <ThumbUpIcon/>
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={voteScore} color="secondary">
                            <HeartIcon/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </BarContainer>
            <MainContainer classNames={classes.main}>
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