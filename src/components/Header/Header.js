import React from 'react';
import { NavLink, Link } from 'react-router-dom'

import './Header.css';

export default () => (
  <nav className="header navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">DATA GATE</Link>
      </div>
      <p class="navbar-text navbar-right">
        <span className="fa fa-bell" />
        <span className="fa fa-cog" />
        <span className="fa fa-user" />
      </p>
      <ul className="nav navbar-nav navbar-right">
        <li><NavLink to="/" exact>Home</NavLink ></li>
        <li><NavLink to="/requests" exact>Requests</NavLink ></li>
        <li><NavLink to="/manage" exact>Manage</NavLink ></li>
      </ul>
      
     
    </div>
  </nav>
)