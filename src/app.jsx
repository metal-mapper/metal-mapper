import React from 'react';
import LogIn from './components/Login';
import { Switch, Route } from 'react-router-dom';
// import SearchBar from './components/SearchBar';
import Venue from './components/Venue';
import NavBar from './components/navBar';
import AddVenue from './components/AddVenue';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: null};

    this.handleSetUserState = this.handleSetUserState.bind(this);
  }

  handleSetUserState(user) {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
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
          <LogIn user={user} onSetUserState={this.handleSetUserState} /> :
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route path="/browseVenues" component={BrowseVenues} /> */}
            <Route path="/addVenue" render={() => <AddVenue user={user} />} />
            <Route path="/login" component render={() => <LogIn user={user} onSetUserState={this.handleSetUserState} /> }/>
            <Route path="/venue" exact render={() => <Venue user={user} />} />
            {/* <Route path="/venues" render={ () => <Venues user={user} />} /> */}
          </Switch>
        }
      </div>
    )
  };
}
export default App;