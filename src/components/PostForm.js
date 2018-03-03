import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";
import {
    Toolbar,
    Typography,
    IconButton,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button
} from  'material-ui';
import ArrowBackIcon from 'react-icons/lib/md/arrow-back';
import SaveIcon from "react-icons/lib/md/save";
import BarContainer from './BarContainer';
import MainContainer from './MainContainer';

class PostForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            author: props.author,
            title: props.title,
            body: props.body,
            category: props.category
        }
    }

    handleAuthorChange = e => this.setState({author: e.target.value});
    handleTitleChange = e => this.setState({title: e.target.value});
    handleBodyChange = e => this.setState({body: e.target.value});
    handleCategoryChange = e => this.setState({category: e.target.value});
    handleSubmit = e => {
        e.preventDefault();
        const { title, author, body, category } = this.state;
        const { id, onCreatePost, onUpdatePost } = this.props;
        id!==null ?
            onUpdatePost({id, title, author, body, category }):
            onCreatePost({ title, author, body, category });
    };

    render(){
        const { classes, categories } = this.props;
        const { title, author, body, category } = this.state;
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
                            className={classes.flex}
                        />
                    </Toolbar>
                </BarContainer>
                <MainContainer classNames={classes.main}>
                    <form ref={ref => this.form = ref} onSubmit={e => this.handleSubmit(e)} noValidate autoComplete="off">
                        <FormControl
                            fullWidth
                            margin="normal"
                        >
                            <InputLabel htmlFor="categories">Category</InputLabel>
                            <Select
                                value={category}
                                autoWidth
                                inputProps={{
                                    id: 'categories',
                                }}
                                onChange={this.handleCategoryChange}
                            >
                                <MenuItem value="">
                                    <em> </em>
                                </MenuItem>
                                {categories.map(
                                    category => <MenuItem
                                        key={category.path}
                                        value={category.path}>
                                        {category.name}
                                    </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <TextField
                            id="title"
                            label="Title"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            fullWidth
                            value={title}
                            onChange={this.handleTitleChange}
                        />
                        <TextField
                            id="author"
                            label="Author"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            fullWidth
                            value={author}
                            onChange={this.handleAuthorChange}
                        />
                        <TextField
                            id="body"
                            label="Body"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            fullWidth
                            value={body}
                            onChange={this.handleBodyChange}
                        />
                        <Button type="submit" variant="raised" color="primary" className={classes.button}>
                            <SaveIcon size={16} className={classes.leftIcon}/>
                            Save
                        </Button>
                    </form>
                </MainContainer>
            </Fragment>
        );
    }
}

PostForm.defaultProps = {
    id:null,
    author:'',
    title:'',
    body:'',
    category:'',
    categories: [],
    onCreatePost: f=>f
};

export default PostForm;