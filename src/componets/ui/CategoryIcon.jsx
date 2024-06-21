import React from 'react';
import FRXIcon from '../../svgs/SVG/FRXIcon';
import RXIcon from '../../svgs/SVG/RXIcon';
import STOCKIcon from '../../svgs/SVG/STOCKIcon';
import ASCicon from '../../svgs/SVG/ASCicon';


const CategoryIcon = ({category}) => {


    const categoryStyles = {
        frx: {
            background: "rgba(15, 166, 121, 1)"
        },
        stock: {
            background: "rgba(216, 164, 127, 1)"
        },
        rx: {
            background: "rgba(226, 177, 177, 1)"
        },
        asc: {
            background: "rgba(102, 99, 91, 1)"
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