import React from 'react';
import CategoryCard from "../components/CategoryCard";

const Category = props => {
    return (
        <React.Fragment>
            <CategoryCard {...props.match}/>
        </React.Fragment>
    );
};

export default Category;
