import React from 'react';


const MiniPriority = () => {
    return (
        <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="fire-animation">
            <defs>
                <linearGradient id="grad1" gradientTransform="rotate(100)">
                    <stop offset="19%" className="stop1" style={{ stopColor: 'rgba(255, 0, 0, 1)' }} />
                    <stop offset="85%" className="stop2" style={{ stopColor: 'rgba(255, 0, 0, 1)' }} />
                </linearGradient>
            </defs>
            <path d="M20.242 24.777q-0.366 0.366-0.914 0.658t-0.987 0.439q-1.317 0.439-2.596 0.037t-2.158-1.134q-0.146-0.146-0.11-0.293t0.183-0.219q1.39-0.439 2.194-1.39t1.097-2.048q0.219-1.024-0.073-1.975t-0.439-1.975q-0.146-0.805-0.11-1.573t0.329-1.499q0-0.146 0.146-0.146t0.219 0.073q0.439 0.951 1.134 1.682t1.463 1.39 1.39 1.426 0.768 1.792q0.073 0.439 0.073 0.805 0.073 1.097-0.366 2.194t-1.243 1.755zM24.631 12.27q-0.878-0.805-1.829-1.463t-1.829-1.536q-1.755-1.755-2.304-4.096t0.183-4.754q0.146-0.366-0.11-0.622t-0.622-0.11q-0.878 0.366-1.646 0.878t-1.499 1.024q-2.267 1.902-3.584 4.498t-1.499 5.559 0.914 5.815q0 0.146 0.037 0.293t0.037 0.293q0 0.658-0.585 0.951t-1.17-0.219q-0.146-0.219-0.219-0.366-1.17-1.463-1.573-3.328t-0.11-3.694q0.073-0.439-0.329-0.658t-0.695 0.146q-1.463 1.902-2.121 4.206t-0.512 4.644q0 0.658 0.11 1.353t0.329 1.353q0.512 1.755 1.39 3.218 1.39 2.34 3.73 3.913t5.047 1.938q2.852 0.366 5.742-0.293t5.083-2.633q1.609-1.536 2.523-3.547t0.987-4.206-0.805-4.242q-0.073-0.146-0.11-0.256t-0.11-0.256q-0.658-1.243-1.463-2.267-0.293-0.439-0.622-0.805t-0.768-0.731z" fill="url(#grad1)"></path>
        </svg>
    );
};

export default MiniPriority;
