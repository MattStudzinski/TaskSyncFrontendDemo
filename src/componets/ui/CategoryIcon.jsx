import React from 'react';

const CategoryIcon = ({category}) => {

    const categoryStyles = {
        frx: {
            background: 'linear-gradient(373deg, rgba(252,114,182,.7) 0%, rgba(255,180,217,1) 100%)',
            color: 'white',
        },
        stock: {
            background: 'linear-gradient(373deg, rgba(255,196,68,.7) 0%, rgba(255,215,128,1) 100%)',
            color: 'white',
        },
        rx: {
            background: 'linear-gradient(373deg, rgba(161,117,242,.7) 0%, rgba(190,154,255,1) 100%)',
            color: 'white',
        },
        asc: {
            backgroundColor: 'purple',
            color: 'white',
        },
    }


    const style = categoryStyles[category] || {
        
        color: 'white'
    }

    return (
        <div className='card-mini__category-container' style={style}>
            <div className='category-icon'>
                {category.toUpperCase()}
            </div>
        </div>
    );
};

export default CategoryIcon;