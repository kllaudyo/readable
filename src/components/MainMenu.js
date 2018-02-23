import React from 'react';
import { Link } from 'react-router-dom';
import PostIcon from 'react-icons/lib/md/local-post-office';
import CategoryIcon from 'react-icons/lib/md/local-offer';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from 'material-ui';

const MainMenu = ({open, onToggleDrawer}) => (
    <Drawer open={open} onClose={() => onToggleDrawer(false)}>
        <div
            tabIndex={0}
            role="button"
            onClick={() => onToggleDrawer(false)}
            onKeyDown={() => onToggleDrawer(false)}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <PostIcon />
                    </ListItemIcon>
                    <ListItemText primary="All" />
                </ListItem>
                <ListItem button component={Link} to="/categories">
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                </ListItem>
            </List>
        </div>
    </Drawer>
);

export default MainMenu;