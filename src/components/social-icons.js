import React from "react";
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faTwitter } from '@fontawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';


const SocialIcons = () => (
  <>
  <div className="fa-icon">
    <FontAwesomeIcon icon={faTwitter} />
  </div>
  <div className="fa-icon">
    <FontAwesomeIcon icon={faLinkedin} />
  </div>
  <div className="fa-icon">
    <FontAwesomeIcon icon={faFacebookSquare} />
  </div>
  <div className="fa-icon">
    <FontAwesomeIcon icon={faGoogle} />
  </div>
  <div className="fa-icon">
    <FontAwesomeIcon icon={faPinterest} />
  </div>
  </>
);

export default SocialIcons;
