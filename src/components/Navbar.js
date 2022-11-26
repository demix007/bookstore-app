import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <div className="nav-items">
      <h1 className="app-header"> Bookstore CMS </h1>
      <ul className="menu">
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <button type="button" className="user-profile-button">
      <i className="fa-solid fa-user user-profile-icon" />
    </button>
  </nav>
);

export default Navbar;
