import React from 'react';
import LogIn from './components/Login';
// import NavBar from './components/NavBar'; 
import { Switch, Route } from 'react-router-dom';
// import SearchBar from './components/SearchBar';
import Venue from './components/Venue';

// More components
class Venues extends React.Component {
  render() {
    return (<h1>Venues</h1>);
  }
}

class App extends React.Component {

  state = {
    user: null
  };

  handleSetUserState(user) {
    this.setState({ user });
  }

  //conditional rendering 
  render () {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        {
          !this.state.user ?
            <LogIn /> :
            <Switch>
              {/* all routes */}
              <Route path="/" exact component={Home} />
              <Route path="/venue" exact component={Venue} />
              <Route path="/venues" component={Venues} />
              <Route path="/register" component={Register} />
              <Route path="/login" render={ () => <LogIn  onSetUserState= { this.handleSetUserState } />} />
            </Switch>
        }
      </React.Fragment>
    );
  }
}

export default App;
