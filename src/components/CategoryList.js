import React from 'react';
import Tabs from 'material-ui/Tabs';
import CategoryItem from "./CategoryItem";

const CategoryList = ({categories, category, onChangeCategory}) => (
    <Tabs value={category} onChange={onChangeCategory}>
        {categories.map(({name,path},idx) =>
            <CategoryItem name={name} path={path} key={idx}/>
        )}
    </Tabs>
);

export default CategoryList;