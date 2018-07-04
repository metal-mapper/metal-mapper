import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import SearchBar from './components/SearchBar';
import Venue from './components/Venue';


class Home extends React.Component {
  render() {
    return (<h1>Home Page</h1>);
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

        <div style={{ paddingLeft: '16px' }}>
          <h2>Metal Mapper Guide</h2>
          <p>Search below for your perfect Metal Mapper trip:</p>
        </div>
        <SearchBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/venue" exact component={Venue} />
          <Route path="/venues" component={Venues} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    )
  };
}


export default App;
