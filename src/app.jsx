import React from 'react';
// import LogIn from './components/Login';
import { Switch, Route } from 'react-router-dom';
import Venue from './components/Venue';
import VenueListings from './components/VenueListings';
import NavBar from './components/navBar';
import AddVenue from './components/AddVenue';
import SearchBar from './components/searchBar';

// import '../styles/addVenue.scss';
import './styles/index.css';

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
          <SearchBar user={user} />
        </div>

        {/* {!this.state.user ?
        // <LogIn className="fb-login" user={user} onSetUserState={this.handleSetUserState} /> : */}
        <Switch>
          {/* <Route path="/login" component render={() => <LogIn user={user} onSetUserState={this.handleSetUserState} /> }/> */}
          <Route path="/venue" exact render={() => <Venue user={user} />} />
          <Route path="/VenueListings" render={() => <VenueListings user={user} />} />
          <Route path="/AddVenue" render={() => <AddVenue user={user} />} />
        </Switch>
        <div className="middleimage">
          <h2>Metal Mapper Guide</h2>
          <p>Discover your perfect Metal Mapper experience!</p>
        </div>
      </div>
    )
  };
}
export default App;