import React from 'react';
import LogIn from './components/Login';
import NavBar from './components/NavBar'; 
import { Switch, Route } from 'react-router-dom';
// import SearchBar from './components/SearchBar';
import Venue from './components/Venue';
import AddVenue from './components/AddVenue';

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
const user = this.state.user
    return (
      <React.Fragment>
        <NavBar user= {user} /> 
        {
          !this.state.user ?
            <LogIn /> :
            <Switch>
              {/* all routes */}
              <Route path="/" exact render={Home} />
              <Route path="/venue" exact render= { () => <Venue user= {user}/> }/>
              <Route path="/venues" render= { () => <Venues user= {user}/> } />
              <Route path="/addvenue" render= { () => <AddVenue user= {user}/>} />
            </Switch>
        }
      </React.Fragment>
    );
  }
}

// passs your user down to each component rendered by the route as prop

export default App;
