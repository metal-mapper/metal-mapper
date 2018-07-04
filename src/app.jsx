import React from 'react';
import Login from './components/login';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import MyHomeComponent from './MyHomeComponent'

//This TopNav and MiddleNav needs to be turned into a component within navBar.jsx NOT HERE
class App extends React.Component {

  state = {
    username: null
  };

  //set up babel with react project, which will do - reads my code and translates it into readible code, will translate it inoto older synax so older software/browsers will understand it


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
              <navBar>
            <Router>
              {/* This route renders MyHomeComponent if logged in
              Or redirects to the /login route otherwise */}
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
              {/* This route renders the LoginPage component at the path /login */}
              <Route
                exact
                path="/login"
                render={() => <LoginPage />}
              />
            </Router>
            </div>
          )
        }
      }

// //put routes (whih are JSX components in here somewhere
//       <div>
//         {/* <div className="topnav">
//           <a className="active" href="#home">Home</a>
//           <a href="#BrowseLocation">Browse Locations</a>
//           <a href="#AddLocation">Add Location</a>
//         </div>

//         <div className="middlenav">
//           <a href="#Register">Register</a>
//           <a href="#LogIn">Log In</a>
//         </div>

//         <div style={{ paddingLeft: '16px' }}>
//           <h2>Metal Mapper Guide</h2>
//           <p>Search below for your perfect Metal Mapper trip:</p>
//         </div> */}
//         <Login onLogin = {this.onFacebookLogin}/>
//       </div>
//     )
//   };
// }

export default App;
