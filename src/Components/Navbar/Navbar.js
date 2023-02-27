import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdClose, MdMenu } from 'react-icons/md';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <nav
        className={`fixed left-0 top-0 w-56 h-screen bg-white shadow-lg z-50 ${
          isOpen
            ? 'translate-x-0 transition-transform duration-500'
            : '-translate-x-56 transition-transform duration-500'
        }`}
      >
        <button
          className="text-gray-500  bg-white hover:text-gray-600 focus:outline-none relative top-0 inset-56"
          onClick={handleToggle}
        >
          {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </button>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <img
            src="https://dummyimage.com/100x100/000/fff"
            alt="Logo"
            className="h-10 w-10"
          />
        </div>
        <NavLinks />
        <SocialLinks />
      </nav>
    </div>
  );
};

export default Navbar;
