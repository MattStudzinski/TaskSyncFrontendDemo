import React from 'react';

const RXIcon = ({ width = "30px", height = "30px", stroke = "#ffffff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      style={{ fill: stroke }}
    >
      <g transform="translate(-39.68, -39.68) scale(1.31, 1.31)">
        <g fill="none" stroke="none" strokeWidth="none" strokeLinecap="none" strokeLinejoin="none" strokeMiterlimit="10">
          <g transform="scale(5.33333, 5.33333)">
            <circle cx="16" cy="33" r="5" fill="#ffffff" stroke="none"></circle>
            <path
              d="M22.2,38.8c1.4,-1.5 2.3,-3.5 2.3,-5.8c0,-2.8 -1.4,-5.3 -3.5,-6.9c0,-5.3 0,-13.7 0,-14.6c0,-2.8 -2.2,-5 -5,-5c-2.8,0 -5,2.2 -5,5"
              fill="none"
              stroke={stroke}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M11,16.5c0,2.9 0,5.9 0,9.7c-2.1,1.5 -3.5,4 -3.5,6.9c0,4.7 3.8,8.5 8.5,8.5"
              fill="none"
              stroke={stroke}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16,30.5v-12"
              fill="none"
              stroke={stroke}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="miter"
            ></path>
            <path
              d="M31.5,31l4.5,4.5l4.5,-4.5"
              fill="none"
              stroke={stroke}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M36,12.5v23"
              fill="none"
              stroke={stroke}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default RXIcon;

