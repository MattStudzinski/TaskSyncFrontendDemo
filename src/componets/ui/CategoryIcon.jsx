import React from 'react';
import FRXIcon from '../../svgs/SVG/FRXIcon';
import RXIcon from '../../svgs/SVG/RXIcon';
import STOCKIcon from '../../svgs/SVG/STOCKIcon';
import ASCicon from '../../svgs/SVG/ASCicon';

const CategoryIcon = ({ category, className }) => {
    const renderIcon = () => {
        switch (category.toLowerCase()) {
            case 'frx': 
                return <FRXIcon />;
            case 'rx':
                return <RXIcon />;
            case 'stock':
                return <STOCKIcon />;
            case 'asc': 
                return <ASCicon />;
            default:
                return null;
        }
    }

    return (
        <div className={`card-mini__category-container ${className}`}>
            <div className='category-icon'>
                {renderIcon()}
            </div>
        </div>
    );
};

export default CategoryIcon;