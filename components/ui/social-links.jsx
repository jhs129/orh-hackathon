import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
    return (
        <div className="flex justify-evenly text-white w-80">
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
        </div>
    );
};

export default SocialLinks;