
import React from 'react';

function ArrowNav({ height = '16', width = '16', circleColor = '#CF4B08', arrowColor = '#FFF', iconType = 'forward', lineWidth='2' }) {
    const getPath = () => {
        if (iconType === 'forward') {
            return "M6 4l4 4-4 4";
        }
        // Default to 'lessThan'
        return "M10 4l-4 4 4 4";
    };

    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8" fill={circleColor} />
            <path d={getPath()} stroke="white" strokeWidth={lineWidth} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default ArrowNav;