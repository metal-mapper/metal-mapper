import React from 'react';
import LogIn from './components/Login';
import { Switch, Route } from 'react-router-dom';
// import SearchBar from './components/SearchBar';
import Venue from './components/Venue';
import NavBar from './components/navBar';
// import AddVenue from './components/AddVenue';


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
        // This is the code for the navigation bar and layout of rendered HOMEPAGE. Do not delete, until agreed with KD
        <div>
          <NavBar />
          <div className="searchbar"> 
            <h2>Enter your nearest city</h2>
        </div>
          <div className="middleimage">
            <h2>Metal Mapper Guide</h2>
            <p>Discover your perfect Metal Mapper experience!</p>
          </div>
          {!this.state.user ?
        <LogIn /> :
          <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/browseVenues" component={BrowseVenues} />
                  <Route path="/addVenue" render= { () => <AddVenue user= {user}/>} />/>
                  <Route path="/login" component render= { () => <LogIn user= {user}/> }/>
                  <Route path="/" exact render={Home} />
                  <Route path="/venue" exact render= { () => <Venue user= {user}/> }/>
                  <Route path="/venues" render= { () => <Venues user= {user}/> } />
            </Switch>
          }
        </div>
      )
  };
}
export default App;