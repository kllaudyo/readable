import React, {Component, Fragment} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SortIcon from 'react-icons/lib/md/sort-by-alpha';
import {withStyles} from "material-ui/styles/index";
import CategoriesList from './CategoryList';

const styles = {
    root: {
        flexGrow: 1,
    },
    container:{
        marginTop:'60px'
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class CategoryPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            category:0
        }
    }

    handleChange = (event, category) => {
        console.log('here',event);
        this.setState({ category });
    };

    renderToolbar(children){
        const { classes } = this.props;
        return (
            <Fragment>
                <AppBar className={classes.root} position="fixed">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="title"
                            color="inherit"
                            className={classes.flex}
                        >
                            Readable
                        </Typography>
                        <IconButton color="inherit">
                            <SortIcon />
                        </IconButton>
                    </Toolbar>
                    {children}
                </AppBar>
            </Fragment>
        );
    }

    renderContainer(children){
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                { children }
            </div>
        );
    }

    render(){
        const { categories } = this.props;
        const { category } = this.state;
        return (
            <Fragment>
                {this.renderToolbar(<CategoriesList categories={categories} category={category} onChangeCategory={this.handleChange} />)}
                {this.renderContainer()}
            </Fragment>
        );
    }
}

export default withStyles(styles)(CategoryPage);