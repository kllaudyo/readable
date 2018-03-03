import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostIcon from 'react-icons/lib/md/local-post-office';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from 'material-ui';
import CategoryItem from "./CategoryItem";

const MainMenu = ({open, categories, onClose}) => (
    <Drawer open={open} onClose={onClose}>
        <div
            tabIndex={0}
            role="button"
            onClick={onClose}
            onKeyDown={onClose}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <PostIcon />
                    </ListItemIcon>
                    <ListItemText primary="All" />
                </ListItem>
                {categories.map( (category, index) =>
                    <CategoryItem
                        key={index}
                        path={category.path}
                        name={category.name}
                    />
                )}
            </List>
        </div>
    </Drawer>
);

MainMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    })).isRequired,
    onClose: PropTypes.func.isRequired
};

MainMenu.defaultProps = {
    open: false,
    categories:[],
    onClose: f=>f
};

export default MainMenu;