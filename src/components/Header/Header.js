import React from 'react';
import { NavLink, Link } from 'react-router-dom'

import './Header.css';

export default () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">DATA GATE</Link>
      </div>

      <ul className="nav navbar-nav navbar-right">
        <li><NavLink to="/" exact>Home</NavLink ></li>
        <li><NavLink to="/requests" exact>Requests</NavLink ></li>
      </ul>
    </div>
  </nav>
)