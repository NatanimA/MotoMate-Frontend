import React from "react";
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faTwitter } from '@fontawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';


const SocialIcons = () => (
  <>
  <div>
    <FontAwesomeIcon icon={faTwitter} />
  </div>
  <div>
    <FontAwesomeIcon icon={faFacebookSquare} />
  </div>
  <div>
    <FontAwesomeIcon icon={faGoogle} />
  </div>
  <div>
    <FontAwesomeIcon icon={faPinterest} />
  </div>
  </>
);

export default SocialIcons;
