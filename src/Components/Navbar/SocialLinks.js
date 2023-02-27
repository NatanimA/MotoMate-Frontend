import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex justify-center mt-56">
      <a href="#" className="mr-3 text-xl sm:text-3xl">
        <FaFacebook />
      </a>
      <a href="#" className="mr-3 text-xl sm:text-3xl">
        <FaTwitter />
      </a>
      <a href="#">
        <FaInstagram className="text-xl sm:text-3xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
