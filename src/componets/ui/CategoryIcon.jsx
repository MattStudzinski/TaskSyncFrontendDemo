import React from 'react';
import FRXIcon from '../../svgs/SVG/FRXIcon';
import RXIcon from '../../svgs/SVG/RXIcon';
import STOCKIcon from '../../svgs/SVG/STOCKIcon';
import ASCicon from '../../svgs/SVG/ASCicon';


const CategoryIcon = ({category}) => {


    const categoryStyles = {
        frx: {
            background: "linear-gradient(135deg, rgba(72, 86, 150, 1), rgba(89, 109, 164, 1), rgba(72, 86, 150, 1))"
        },
        stock: {
           
            background: "linear-gradient(135deg, #bfd5e2, #a3c4d7, #bfd5e2)"
        },
        rx: {
            background: "linear-gradient(135deg, rgba(116, 66, 83, 1), rgba(143, 93, 110, 1), rgba(116, 66, 83, 1))"
            
        },
        asc: {
            background: "linear-gradient(135deg, rgba(71, 106, 111, 1), rgba(94, 133, 145, 1), rgba(71, 106, 111, 1))",
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