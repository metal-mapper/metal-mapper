import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavBar = () => (
  <Router>
    <div className="topnav">
      {/* <img src="./images/metaltravelguidelogo" alt="metal travel guide logo" /> */}
      <h1>Metal Travel Guide</h1>
      <p className="left"> <Link to="/BrowseLocation">Browse Metal Venues</Link> </p>
      <p className="left"> <Link to="/AddVenue">Add A Metal Venue</Link> </p>
      <p className="left"> <Link to="/LogIn">Log In</Link> </p>
    </div>
  </Router>
);

export default NavBar;
