import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = () => (
  <Router>
    <div className="topnav">
      <p> <Link to="/BrowseLocation">Browse Metal Venues</Link> </p>
      <p> <Link to="/AddVenue">Add A Metal Venue</Link> </p>
      <p> <Link to="/LogIn">Log In</Link> </p>
    </div>
  </Router>
);

export default NavBar;
