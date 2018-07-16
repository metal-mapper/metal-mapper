import React from 'react';
import LogIn from './components/Login';
// import NavBar from './components/NavBar'; 
import { Switch, Route } from 'react-router-dom';
// import SearchBar from './components/SearchBar';
import Venue from './components/Venue';
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

class Register extends React.Component {
  render() {
    return (<h1>]</h1>);
  }
}

//This TopNav and MiddleNav needs to be turned into a component within navBar.jsx NOT HERE
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
        <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#BrowseLocation">Browse Locations</a>
          <a href="#AddLocation">Add Location</a>

        <div className="middlenav">
          <a href="#Register">Register</a>
          <a href="#LogIn">Log In</a>
        </div>

        <div className="searchbar"> 
          <h2>Enter your nearest city</h2>
        
        <SearchBar /> </div>
      
        <div className="middleimage">
          <h2>Metal Mapper Guide</h2>
          <p>Discover your perfect Metal Mapper experience!</p>
        </div>

        
        {/* 
        This is the footer element that I have not had chance to work on yet - KD
        
        <div className="footer">
        <a href="#About">About</a>
        <a href="#TermsandConditions">Terms and Conditions</a>
        <a href="#Login">login</a>
        <a href="Register">Register</a>
        </div> */}
      </div>
    </div>
    )
  };
}
export default App;
//       <React.Fragment>
//         {/* <NavBar user= {user} />  */}
//         {
//           !this.state.user ?
//             <LogIn /> :
//             <Switch>
//               {/* all routes */}
//               <Route path="/" exact render={Home} />
//               <Route path="/venue" exact render= { () => <Venue user= {user}/> }/>
//               <Route path="/venues" render= { () => <Venues user= {user}/> } />
//               {/* <Route path="/addvenue" render= { () => <AddVenue user= {user}/>} /> */}
//             </Switch>
//         }
//       </React.Fragment>
//     );
//   }
// }

// // pass your user down to each component rendered by the route as prop

// export default App;
