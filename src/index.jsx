import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';

import './styles/index.css';
// import { locationSearchBar } from './components/locationSearchBar'; 

render(
  (<div>
    <div className="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#BrowseLocation">Browse Locations</a>
      <a href="#AddLocation">Add Location</a>
    </div>
    
    <div className="middlenav">
      <a href="#Register">Register</a>
      <a href="#LogIn">Log In</a>
    </div>
    
    <div style={{ paddingLeft: '16px' }}>
      <h2>Metal Mapper Guide</h2>
      <p>Search below for your perfect Metal Mapper trip:</p>
    </div>
  </div>

  ), document.getElementById('root'),
);

//  render(<App />, document.getElementById('root')); 
