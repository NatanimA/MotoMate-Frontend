import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex justify-center mt-6">
      <a href="#" className="mr-3">
        <FaFacebook size={24} />
      </a>
      <a href="#" className="mr-3">
        <FaTwitter size={24} />
      </a>
      <a href="#">
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
