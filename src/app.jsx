import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import SearchBar from './components/SearchBar';
import Venue from './components/Venue';
import NavBar from './components/navBar';


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
      // This is the code for the navigation bar and layout of rendered HOMEPAGE. Do not delete, until agreed with KD
      <div>
        <NavBar />

        <div className="searchbar"> 
          <h2>Enter your nearest city</h2>
        
        <SearchBar /> </div>
      
        <div className="middleimage">
          <h2>Metal Mapper Guide</h2>
          <p>Discover your perfect Metal Mapper experience!</p>
        </div>

        
        {/* 
        This is the footer element that I have not had chance to work on yet - KD
        
        <div className="footer">
        <a href="#About">About</a>
        <a href="#TermsandConditions">Terms and Conditions</a>
        <a href="#Login">login</a>
        <a href="Register">Register</a>
        </div> */}
      </div>
    )
  };
}
export default App;