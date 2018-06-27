import React from 'react';

class Login extends React.Component {
  componentDidMount() {
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
        this.props.onLogin(true,result);
      });
    } else {
      this.props.onLogin(false);
    }
  }

  facebookLogin = () => {
    if (!this.FB) return;

    this.FB.getLoginStatus(response => {
      if (response.status === 'connected') {
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, {scope: 'public_profile'});
      }
    })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.facebookLogin}>
          Log in with Facebook
        </button>
      </div>
    );
  }
}

//below taken from the officil facebook instructions 

// FB.login((response) => {
//   if (response.authResponse) {
//    console.log('Welcome!  Fetching your information.... ');
//    FB.api('/me', function(response) {
//      console.log('Good to see you, ' + response.name + '.');
//    });
//   } else {
//    console.log('User cancelled login or did not fully authorize.');
//   }
// });

// //'Taken from the sample code above, here's some of the code that's run during page load to check a person's login status:'
// FB.getLoginStatus(function(response) {
//   statusChangeCallback(response);
// });

// //'The response object that's provided to your callback contains a number of fields:'

// //maybe put this in app and on component did mount
// {
//   status: 'connected',
//   authResponse: {
//       accessToken: '...',
//       expiresIn:'...',
//       signedRequest:'...',
//       userID:'...'
//   }
// }

// Login.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

export default Login;
