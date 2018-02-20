import React from 'react';
import Tabs, {Tab} from 'material-ui/Tabs';

const CategoryList = ({categories, category, onChangeCategory}) => (
    <Tabs
        centered
        fullWidth
        onChange={onChangeCategory}
        value={category}
        indicatorColor="#ffffff"
    >
        {categories.map(({name,path},idx) => (
            <Tab
                key={idx}
                label={name}
                value={path}
            />
        ))}
    </Tabs>
);

export default CategoryList;