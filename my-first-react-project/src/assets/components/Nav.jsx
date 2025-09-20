import React from "react";
import { Link } from "react-router";
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
           <li> 
                    <Link to="/" >Home</Link>
                
                </li>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
