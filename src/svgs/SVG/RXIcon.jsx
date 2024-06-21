import React from 'react';

const RXIcon = () => {
  return (
    <svg className='category-icon'
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <defs>
        <style>{`.cls-1{fill:none;stroke:#ffffff;stroke-miterlimit:10;stroke-width:1.91px;}`}</style>
      </defs>
      <circle className="cls-1" cx="6.27" cy="17.73" r="0.95" />
      <path
        className="cls-1"
        d="M9.14,13.93V4.36A2.87,2.87,0,0,0,6.27,1.5h0A2.86,2.86,0,0,0,3.41,4.36v9.57a4.78,4.78,0,1,0,5.73,0Z"
      />
      <line className="cls-1" x1="6.27" y1="12" x2="6.27" y2="16.77" />
      <line className="cls-1" x1="17.73" y1="8.18" x2="17.73" y2="13.91" />
      <polyline className="cls-1" points="19.64 6.27 17.73 8.18 15.82 6.27" />
      <polyline className="cls-1" points="15.82 15.82 17.73 13.91 19.64 15.82" />
      <line className="cls-1" x1="20.59" y1="11.05" x2="14.86" y2="11.05" />
      <polyline className="cls-1" points="22.5 12.96 20.59 11.04 22.5 9.14" />
      <polyline className="cls-1" points="12.96 9.14 14.86 11.04 12.96 12.96" />
      <circle className="cls-1" cx="17.73" cy="11.05" r="0.95" />
    </svg>
  );
};

export default RXIcon;
