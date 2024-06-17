import React from 'react';

const PriorityIcons = ({priority}) => {

    const priorityStyles = {

        high: {
            backgroundColor:'red',
            color:'rgba(0,0,0,0',
        },
        medium: {
            backgroundColor:"orange",
            color:'rgba(0,0,0,0',
        },
        low: {
            backgroundColor:"green",
            color:'green',
        },
    }

    const style = priorityStyles[priority] || {
        backgroundColor: 'black',
        color: 'black'
    }
    return (
        <div className='card-mini__prioriry-container' >
            <p className='card-mini__priority' style={style} >{priority}</p>
        </div>
    );
};

export default PriorityIcons;