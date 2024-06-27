// FileName: FaSearchIcon.js

import React from 'react';

const SearchIcon = ({ size = '24', color = 'currentColor', className='h-6 lg:h-8' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      className={className}
    >
      <path d="M505 442.7L405.3 343c28.4-34.9 45-79.7 45-128C450.3 96.5 353.8 0 225.1 0S0 96.5 0 215.1s96.5 215.1 215.1 215.1c48.3 0 93.1-16.6 128-45l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.3 9.4-24.5.1-33.8zM225.1 370.2c-85.5 0-155.1-69.6-155.1-155.1S139.7 60 225.1 60s155.1 69.6 155.1 155.1-69.6 155.1-155.1 155.1z"/>
    </svg>
  );
};

export default SearchIcon;
