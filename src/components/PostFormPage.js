import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles/index";
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


class PostFormPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            author:"",
            title:"",
            body:"",
            category:""
        }
    }

    handleAuthorChange = e => this.setState({author: e.target.value});
    handleTitleChange = e => this.setState({title: e.target.value});
    handleBodyChange = e => this.setState({body: e.target.value});
    handleCategoryChange = e => this.setState({category: e.target.value});
    handleSubmit = e => {
        e.preventDefault();
        const { title, author, body, category } = this.state;
        const { onCreatePost } = this.props;
        onCreatePost({ title, author, body, category });
    };

    render(){
        const { classes, categories=[] } = this.props;
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
                <MainContainer classNames={classes.container}>
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

export default withStyles(theme => ({
    container:theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 8,
    }),
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
}))(PostFormPage);