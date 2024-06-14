import React from 'react';

const CategoryIcon = ({category}) => {

    const categoryStyles = {
        frx: {
            backgroundColor: 'lightblue',
            color: 'white',
        },
        stock: {
            backgroundColor: 'green',
            color: 'white',
        },
        rx: {
            backgroundColor: 'red',
            color: 'white',
        },
        asc: {
            backgroundColor: 'purple',
            color: 'white',
        },
    }


    const style = categoryStyles[category] || {
        backgroundColor: 'grey',
        color: 'white',
    }

    return (
        <div className='category-icon' style={style}>
            {category.toUpperCase()}
        </div>
    );
};

export default CategoryIcon;