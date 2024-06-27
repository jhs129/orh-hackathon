import React from 'react';
import Image from 'next/image';

function Hero(props) {
    const { image, headline, subheadline, blurb } = props;

    return (
        <div className="flex flex-col md:flex-row gap-4 pt-4">
            <div className="w-1/2">
                <Image src={image} alt={headline} height='600' width='400'/>
            </div>
            <div className="text-left">
                <h1 className="text-left">{headline}</h1>
                {subheadline && <h2 className="text-left">{subheadline}</h2>}
                <p>{blurb}</p>
            </div>
        </div>
    );
};


export default Hero;
