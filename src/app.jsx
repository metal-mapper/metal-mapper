import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import SearchBar from './components/SearchBar';
import Venue from './components/Venue';


class Home extends React.Component {
  render() {
    return (<h1></h1>);
  }
}

// More components
class Venues extends React.Component {
  render() {
    return (<h1></h1>);
  }
}

class Register extends React.Component {
  render() {
    return (<h1>]</h1>);
  }
}

//This TopNav and MiddleNav needs to be turned into a component within navBar.jsx NOT HERE
class App extends React.Component {

  state = {
    username: null
  };

  //set up babel with react project, which will do - reads my code and translates it into readible code, will translate it inoto older synax so older software/browsers will understand it

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('facebook login error');
    }
  }

  render() {
    return (
      // this is the code for navigation bar 
      <div>
        <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#BrowseLocation">Browse Locations</a>
          <a href="#AddLocation">Add Location</a>

        <div className="middlenav">
          <a href="#Register">Register</a>
          <a href="#LogIn">Log In</a>
        </div>

        <div className="searchbar"> 
          <h2>Enter your nearest city</h2>
        
        <SearchBar /> </div>
      
        <div className="middleimage">
          <h2>Metal Mapper Guide</h2>
          <p>Discover your perfect Metal Mapper experience!</p>
        </div>

        

        {/* <div className="footer">
        <a href="#About">About</a>
        <a href="#TermsandConditions">Terms and Conditions</a>
        <a href="#Login">login</a>
        <a href="Register">Register</a>
        </div> */}
      </div>
    </div>
    )
  };
}
export default App;