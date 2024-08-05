import React from 'react';

const CalendarIcon = ({ width = "50px", height = "50px", color = "#000000" }) => {
    return (
        <svg className='calendar-icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 50 50" fill={color}>
            <path d="M 12 0 C 10.90625 0 10 0.90625 10 2 L 10 4 L 4 4 C 3.476563 4 2.945313 4.191406 2.570313 4.570313 C 2.191406 4.945313 2 5.476563 2 6 L 2 46 C 2 46.523438 2.191406 47.054688 2.570313 47.433594 C 2.945313 47.808594 3.476563 48 4 48 L 46 48 C 46.523438 48 47.054688 47.808594 47.433594 47.433594 C 47.808594 47.054688 48 46.523438 48 46 L 48 6 C 48 5.476563 47.808594 4.945313 47.433594 4.570313 C 47.054688 4.191406 46.523438 4 46 4 L 40 4 L 40 2 C 40 0.90625 39.09375 0 38 0 L 36 0 C 34.90625 0 34 0.90625 34 2 L 34 4 L 16 4 L 16 2 C 16 0.90625 15.09375 0 14 0 Z M 12 2 L 14 2 L 14 8 L 12 8 Z M 36 2 L 38 2 L 38 8 L 36 8 Z M 4 6 L 10 6 L 10 8 C 10 9.09375 10.90625 10 12 10 L 14 10 C 15.09375 10 16 9.09375 16 8 L 16 6 L 34 6 L 34 8 C 34 9.09375 34.90625 10 36 10 L 38 10 C 39.09375 10 40 9.09375 40 8 L 40 6 L 46 6 L 46 13 L 4 13 Z M 4 15 L 46 15 L 46 46 L 4 46 Z M 10 19 L 10 42 L 40 42 L 40 19 Z M 12 21 L 17 21 L 17 26 L 12 26 Z M 19 21 L 24 21 L 24 26 L 19 26 Z M 26 21 L 31 21 L 31 26 L 26 26 Z M 33 21 L 38 21 L 38 26 L 33 26 Z M 12 28 L 17 28 L 17 33 L 12 33 Z M 19 28 L 24 28 L 24 33 L 19 33 Z M 26 28 L 31 28 L 31 33 L 26 33 Z M 33 28 L 38 28 L 38 33 L 33 33 Z M 12 35 L 17 35 L 17 40 L 12 40 Z M 19 35 L 24 35 L 24 40 L 19 40 Z M 26 35 L 31 35 L 31 40 L 26 40 Z M 33 35 L 38 35 L 38 40 L 33 40 Z"></path>
        </svg>
    );
};

export default CalendarIcon;