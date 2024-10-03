import React from 'react';

const Priority = ({ width = '25', height = '25', fill = '#000' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 50">
            <path d="M 25 7 C 14.519531 7 6 15.519531 6 26 C 6 36.480469 14.519531 45 25 45 C 35.480469 45 44 36.480469 44 26 C 44 15.519531 35.480469 7 25 7 Z M 8.34375 9 C 8.125 9.039063 7.929688 9.148438 7.78125 9.3125 C 3.597656 13.632813 1 19.515625 1 26 C 1 31.492188 2.859375 36.578125 5.96875 40.625 C 6.3125 41.066406 6.949219 41.140625 7.390625 40.796875 C 7.832031 40.453125 7.90625 39.816406 7.5625 39.375 C 4.710938 35.664063 3 31.042969 3 26 C 3 20.046875 5.378906 14.648438 9.21875 10.6875 C 9.523438 10.378906 9.59375 9.910156 9.394531 9.527344 C 9.195313 9.144531 8.769531 8.929688 8.34375 9 Z M 25 9 C 34.402344 9 42 16.597656 42 26 C 42 35.402344 34.402344 43 25 43 C 15.597656 43 8 35.402344 8 26 C 8 16.597656 15.597656 9 25 9 Z M 41.3125 9 C 40.949219 9.066406 40.648438 9.328125 40.539063 9.683594 C 40.425781 10.039063 40.519531 10.425781 40.78125 10.6875 C 44.621094 14.648438 47 20.046875 47 26 C 47 31.042969 45.289063 35.664063 42.4375 39.375 C 42.09375 39.816406 42.167969 40.453125 42.609375 40.796875 C 43.050781 41.140625 43.6875 41.066406 44.03125 40.625 C 47.140625 36.578125 49 31.492188 49 26 C 49 19.515625 46.402344 13.632813 42.21875 9.3125 C 41.988281 9.0625 41.648438 8.941406 41.3125 9 Z M 24 14 C 23.449219 14 23 14.449219 23 15 L 23 28 C 23 28.550781 23.449219 29 24 29 L 26 29 C 26.550781 29 27 28.550781 27 28 L 27 15 C 27 14.449219 26.550781 14 26 14 Z M 24 33 C 23.449219 33 23 33.449219 23 34 L 23 36 C 23 36.550781 23.449219 37 24 37 L 26 37 C 26.550781 37 27 36.550781 27 36 L 27 34 C 27 33.449219 26.550781 33 26 33 Z" fill={'white'}></path>
        </svg>
    );
};

export default Priority;