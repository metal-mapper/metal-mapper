import React from 'react';
import LogIn from './components/login';
// import NavBar from './components/NavBar'; 
import { Switch, Route } from 'react-router-dom';
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

class App extends React.Component {

  state = {
    user: null
  };

  //state .user is null 

  //write a handler function 'handleLogIn' here - to set the state of the user 'this.setstate'

  // probably don't need this
  // checkLoggedIn = () => {
  //   onFacebookLogin = (loginStatus, resultObject) => {
  //     if (loginStatus === true) {
  //       this.setState({
  //         user: resultObject.user
  //       });
  //     } else {
  //       alert('facebook login error');
  //     }
  //   }
  // }

  //conditional rendering 
  render () {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        {
          !this.state.user ?
            <LogIn /> :
            <Switch>
              {/* <Route path="/" component={Home} /> */}
              {/* all routes */}
            </Switch>
        }
      </React.Fragment>
    );
  }
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
