import React from "react";
import "/media/ashwin/DATA/Main Projects/MotoMate-Frontend/src/App.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <a href="models">MODELS</a>
          </li>
          <li>
            <a href="lifestyle">LIFESTYLE</a>
          </li>
          <li>
            <a href="shop">SHOP</a>
          </li>
          <li>
            <a href="testdrive">TEST DRIVE</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
