import React from 'react';

const NavLinks = () => {
  return (
    <ul className="mt-4 text-lg sm:text-2xl">
      <li className="pl-4 py-2 hover:bg-gray-100">
        <a href="#">Home</a>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <a href="#">Reservations</a>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <a href="#">Add a Motorcycle</a>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <a href="#">Contact</a>
      </li>
    </ul>
  );
};

export default NavLinks;
