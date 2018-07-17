import React from 'react';
import LogIn from './components/Login';
import { Switch, Route } from 'react-router-dom';
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
        {!this.state.user ?
        <LogIn user={user} onSetUserState={this.handleSetUserState} /> :
          <Switch>
            <Route path="/addVenue" render={() => <AddVenue user={user} />} />
            <Route path="/login" component render={() => <LogIn user={user} onSetUserState={this.handleSetUserState} /> }/>
            <Route path="/venue" exact render={() => <Venue user={user} />} />
          </Switch>
          <Footer />
        }
      </div>
    )
  };
}
export default App;