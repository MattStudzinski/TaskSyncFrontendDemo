import React from 'react';
import CardFRXIcon from '../../svgs/SVG/CardFRXIcon';
import CardSTOCKIcon from '../../svgs/SVG/CardSTOCKIcon';
import CardASCIcon from '../../svgs/SVG/CardASCIcon';
import CardRXIcon from '../../svgs/SVG/CardRXIcon';


const Cardicon = ({ category, className }) => {
    const renderIcon = () => {
        switch (category.toLowerCase()) {
            case 'frx': 
                return <CardFRXIcon />;
            case 'rx':
                return <CardRXIcon />;
            case 'stock':
                return <CardSTOCKIcon />;
            case 'asc': 
                return <CardASCIcon />;
            default:
                return null;
        }
    }

    return (
        <div className={`info-card__category-container ${className}`}>
            <div className='card-icon'>
                {renderIcon()}
            </div>
        </div>
    );
};

export default Cardicon;