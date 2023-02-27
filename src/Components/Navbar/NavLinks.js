import React from 'react';

const NavLinks = () => {
  return (
    <ul className="mt-4">
      <li className="pl-4 py-2 hover:bg-gray-100">
        <a href="#">Home</a>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <a href="#">About</a>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <a href="#">Services</a>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <a href="#">Contact</a>
      </li>
    </ul>
  );
};

export default NavLinks;
