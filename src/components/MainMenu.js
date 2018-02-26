import React from 'react';
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

export default MainMenu;