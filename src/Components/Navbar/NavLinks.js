import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className="mt-4 text-lg sm:text-2xl">
      <li className="pl-4 py-2 hover:bg-gray-100">
        <Link to="/">Home</Link>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <Link to="/reservation">Reservations</Link>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <Link to="/my-reservations">My Reservations</Link>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <Link to="/additem">Add a Car</Link>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <Link to="/signup">Signup</Link>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <Link to="/signin">Signin</Link>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <Link to="/details">Contact</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
