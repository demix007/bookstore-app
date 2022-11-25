import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
  <h1 className="app-header"> Bookstore CMS </h1>
  <ul className="menu">
    <li>
      <Link to="/">BOOKS</Link>
    </li>
    <li>
      <Link to="/categories">CATEGORIES</Link>
    </li>
  </ul>
</nav>
)

export default Navbar;