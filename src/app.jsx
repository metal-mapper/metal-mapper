import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login';
import SearchBar from './components/searchBar';
import Sandbox from './components/Sandbox';
import Venue from './components/Venue';



class Home extends React.Component {
  render() {
  return (<h1></h1>);
  }
}

// More components
class Venues extends React.Component {
  render() {
    return (<h1>Venues</h1>);
  }
}

class Register extends React.Component {
  render() {
    return (<h1>Register</h1>);
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
      <div>
        <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#BrowseLocation">Browse Locations</a>
          <a href="#AddLocation">Add Location</a>
        </div>

        <div className="middlenav">
          <a href="#Register">Register</a>
          <a href="#LogIn">Log In</a>
        </div>

<div className="searchbar"> 
        <h2>Enter your nearest city</h2>
        
        <SearchBar /> </div>
        
        {/* <div style={{ paddingLeft: '16px' }}> */}
        <div className="middleimage">
          <h2>Metal Mapper Guide</h2>
          <p>Discover your perfect Metal Mapper experience!</p>
        </div> 

    {<Switch>
      <Route path="/" exact component={Home} />
      <Route path="/venue" exact component={Venue} />
      <Route path="/venues" component={Venues} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/sandbox" component={Sandbox} />
    </Switch>}
        {/* <div className="footer">
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


