import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
);

const BrowseLocation = () => (
  <div>
    <h2>Browse</h2>
  </div>
);

const AddLocation = () => (
  <div>
    <h2>Location</h2>
  </div>
);

const LogIn = () => (
  <div>
    <LogIn />
    <h2>Login page</h2>
  </div>
);

const Register = () => (
  <div>
    <h2>Register</h2>
  </div>
);

const NavBar = () => (
  <Router>
    <div className="topnav">
      <p> <Link to="/">Home</Link> </p>
      <p> <Link to="/BrowseLocation">Browse Locations</Link> </p>
      <p> <Link to="/AddLocation">Add Location</Link> </p>
      <p> <Link to="/LogIn">Log In</Link> </p>
      <p> <Link to="/Register">Register</Link></p>

    </div>
  </Router>

);

export default NavBar;
