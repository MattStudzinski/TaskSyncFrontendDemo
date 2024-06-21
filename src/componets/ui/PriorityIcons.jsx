import React from 'react';
import Filler from '../../svgs/SVG/Filler';
import MiniPriority from '../../svgs/SVG/MiniPriority';


const PriorityIcons = ({priority}) => {

    const renderIcon = () => {
        switch (priority.toLowerCase()) {
            case "high":
                return <MiniPriority />

            case 'medium':
                return <Filler />

            case 'low':
                return <Filler />

                default:
                    return null
        }
    }

    
    return (
        <div className='card-mini__prioriry-container' >
            <p className='card-mini__priority'  >{renderIcon()}</p>
        </div>
    );
};

export default PriorityIcons;