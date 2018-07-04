import React from 'react';
import LogIn from './components/login';
// import NavBar from './components/NavBar'; 
import {
  // Route
  Switch,
} from 'react-router-dom'

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
}

export default App;
