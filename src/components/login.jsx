import React from 'react';

class Login extends React.Component {
  componentDidMount() {
    // debugger
    document.addEventListener('FBObjectReady', this.initializeFacebookLogIn);
  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogIn);
  }

  initializeFacebookLogIn = () => {
    this.FB = window.FB;
    this.checkLoginStatus();
  }

  //adding constructor function here (acts to set initial values) a method called constructor then you have this.state=

  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  }

  facebookLoginHandler = (response) => {
    if (response.status === 'connected'){
      this.FB.api('/me', userData => {
        let result = Object.assign({}, response, {
          user: userData
        });
        console.log (result)
        //this.props.onloginresyult
        // this.props.onLogin(true,result);
      });
    } else {
      // this.props.onLogin(false);
    }
  }

  //   if (!this.FB) return;
  //   this.FB.getLoginStatus(response => {
  //     if (response.status === 'connected') {
  //       this.facebookLoginHandler(response);
  //     } else {
  //       this.FB.login(this.facebookLoginHandler, {scope: 'public_profile,user_location'});
  //     }
  //   })
  // }
  facebookLogin = () => {
    this.FB.login((response) => {
      if (response.authResponse) {
      console.log('Welcome!  Fetching your information.... ');
      this.FB.api('/me', function(response) {
        console.log('Good to see you, ' + response.name + '.');
      });
      } else {
      console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

//how to make facbeook graph requests, and which end point i'd need to hit in order to get back user location - which will be on the backend
//how to get access to this api to make the request for the data
  render() {
    return (
      <div>
        <button
          onClick= { () => this.facebookLogin()}>
          Log in with Facebook
        </button>
      </div>
    );
  }
}

// fb replaced '/me' with the graph based entitey (graph nodes) 

//below taken from the officil facebook instructions 



// //'Taken from the sample code above, here's some of the code that's run during page load to check a person's login status:'
// FB.getLoginStatus(function(response) {
//   statusChangeCallback(response);
// });

// //'The response object that's provided to your callback contains a number of fields:'

// Login.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

export default Login;
