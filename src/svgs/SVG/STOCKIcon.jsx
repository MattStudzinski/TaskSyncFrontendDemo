import React from 'react';

const STOCKIcon = ({ width = "30px", height = "30px", fill = "#000000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      style={{ fill }}
    >
      <g transform="translate(-32,-32) scale(1.25,1.25)">
        <g fill="#ffffff" fillRule="nonzero">
          <g transform="scale(2,2)">
            <path d="M63,14.2l-48,17c-1.2,0.4 -2,1.6 -2,2.8v60c0,1.3 0.8,2.4 2,2.8l48,17c0.3,0.1 0.7,0.2 1,0.2c0.2,0 0.3,0 0.5,0h0.1c0.1,0 0.2,-0.1 0.3,-0.1v0l48,-17c1.2,-0.4 2,-1.6 2,-2.8v-60.1v-0.1c0,-0.1 0,-0.3 0,-0.4v-0.1c-0.2,-1 -0.9,-1.9 -1.9,-2.2l-24,-8.5h-0.1c-0.6,-0.2 -1.4,-0.3 -2.1,0l-46.8,16.5c-1.2,0.4 -2,1.6 -2,2.8v11c0,1.7 1.3,3 3,3c1.7,0 3,-1.3 3,-3v-8.9l43.8,-15.5l15.2,5.4l-40,14.2c-1.2,0.4 -2,1.5 -2,2.8c0,0 0,0 0,0.1v55.8l-42,-15v-55.8l46,-16.3c1.6,-0.6 2.4,-2.3 1.8,-3.8c-0.5,-1.6 -2.2,-2.4 -3.8,-1.8zM67,53.1l42,-14.9v53.6l-42,14.9z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default STOCKIcon;
