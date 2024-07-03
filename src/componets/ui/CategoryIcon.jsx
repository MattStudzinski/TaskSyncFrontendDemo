import React from 'react';
import FRXIcon from '../../svgs/SVG/FRXIcon';
import RXIcon from '../../svgs/SVG/RXIcon';
import STOCKIcon from '../../svgs/SVG/STOCKIcon';
import ASCicon from '../../svgs/SVG/ASCicon';


const CategoryIcon = ({category}) => {


    const categoryStyles = {
        frx: {
            background: "rgb(149, 223, 212)"
        },
        stock: {
           
            background: "rgb(149, 223, 212)"
        },
        rx: {
            background: "rgb(149, 223, 212)"
            
        },
        asc: {
            background: "rgb(149, 223, 212)",
        }
    }

    const style = categoryStyles[category.toLowerCase()] || {
        color: "white"
    }

    const renderIcon = () => {
        switch (category.toLowerCase()) {
        case 'frx': 
            return <FRXIcon />;
        
        case 'rx':
            return <RXIcon />

        case 'stock':
            return <STOCKIcon />

        case 'asc': 
        return <ASCicon />
        
        default:
            return null
    
        }
    }


    return (
        <div className='card-mini__category-container' style={style}>
            <div className='category-icon'>
                {renderIcon()}
            </div>
        </div>
    );
};

export default CategoryIcon;