import React from 'react';
import LogIn from './components/login';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import MyHomeComponent from './MyHomeComponent'

class App extends React.Component {

  state = {
    username: null
  };

        checkLoggedIn = () => {
          onFacebookLogin = (loginStatus, resultObject) => {
            if (loginStatus === true) {
              this.setState({
                username: resultObject.user.name
              });
            } else {
              alert('facebook login error');
            }
          }
        }
      
        render () {
          return (
            <div>
              <NavBar>
                <Router>
                  <Route 
                    exact
                    path="/" 
                    render={() => (
                      this.checkLoggedIn() ? (
                        <MyHomeComponent />
                      ) : (
                        <Redirect to="/login" />
                      )
                    )} 
                  />
                  <Route
                    exact
                    path="/login"
                    render={() => <LogIn />}
                  />
                </Router>
              </NavBar>
          </div>
          )
        }
      }

export default App;
