import React from 'react';
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from 'react-icons/bs';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <nav
        className={`fixed flex flex-col left-0 top-0 w-44 sm:w-56 h-screen bg-white shadow-lg z-50 ${
          isOpen
            ? 'translate-x-0 transition-transform duration-500 sm:translate-x-0 sm:transition-transform sm:duration-500'
            : '-translate-x-44 transition-transform duration-500 sm:-translate-x-56 sm:transition-transform sm:duration-500'
        }`}
      >
        <div className="flex items-center justify-between h-16 p-4 border-b border-gray-200 mt-10">
          <img src={Logo} alt="Logo" />
        </div>
        <NavLinks />
        <SocialLinks />
        <button
          className="text-gray-500 w-8 h-8 bg-white hover:text-gray-600 focus:outline-none relative -top-8 inset-44 sm:-top-8 sm:inset-56"
          onClick={handleToggle}
        >
          {isOpen ? (
            <BsFillArrowLeftSquareFill size={32} />
          ) : (
            <BsFillArrowRightSquareFill size={32} />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
