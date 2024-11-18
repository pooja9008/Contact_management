import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* If it is for navigation, use a valid href */}
          <a href="/home">Home</a>
        </li>
        <li>
          {/* If it's for triggering a function, replace with button */}
          <button className="link-like-button">Settings</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
