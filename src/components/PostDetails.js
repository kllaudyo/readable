import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'react-icons/lib/md/arrow-back';
import ThumbDownIcon from "react-icons/lib/md/thumb-down";
import ThumbUpIcon from "react-icons/lib/md/thumb-up";
import BarContainer from './BarContainer';
import MainContainer from './MainContainer';
import Post from './Post';

const PostDetails = props => {
    const { classes, post = {} } = props;
    const { author, body, title} = post;
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
                    <IconButton color="inherit"><ThumbDownIcon/></IconButton>
                    <IconButton color="inherit"><ThumbUpIcon/></IconButton>
                </Toolbar>
            </BarContainer>
            <MainContainer classNames={classes.container}>
                <Post
                    author={author}
                    title={title}
                    body={body} />
            </MainContainer>
        </Fragment>
    );
};

export default PostDetails;