import React from 'react';
import Filler from '../../svgs/SVG/Filler';
import MiniPriority from '../../svgs/SVG/MiniPriority';


const PriorityIcons = ({priority}) => {

    const renderIcon = () => {
        if (!priority) return null
        switch (priority.toLowerCase()) {
            
            case "high":
                return <MiniPriority />

            case 'medium':
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