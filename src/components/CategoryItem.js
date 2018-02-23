import React from 'react';
import { Tab } from 'material-ui/Tabs';

const CategoryItem = ({name, path}) => (
    <Tab
        label={name}
    />
);

export default CategoryItem;