import React from 'react';
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from 'material-ui';
import CategoryIcon from 'react-icons/lib/md/local-offer';

const CategoryItem = ({name, path}) => (
    <ListItem button component={Link} to={`/category/${path}`}>
        <ListItemIcon>
            <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
    </ListItem>
);

export default CategoryItem;