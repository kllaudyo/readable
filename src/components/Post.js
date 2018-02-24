import React from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

const Post = ({ title, author, body }) => (
    <Grid container spacing={Number(40)}>
        <Grid item xs={12} xl={12} style={{marginRight:20}}>
            <Typography variant="title" gutterBottom>{title}</Typography>
            <Typography type="subheading" gutterBottom >{author}</Typography>
            <Divider light />
            <Typography type="body1" style={{marginTop:16}} gutterBottom>{body}</Typography>
        </Grid>
    </Grid>
);

export default Post;