import React from 'react';

class Login extends React.Component {
  componentDidMount() {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogIn);
  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogIn);
  }

  initializeFacebookLogIn () {
    this.FB = window.FB;
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  }

  facebookLoginHandler = (response) => {
    if (response.status === 'connected'){
      this.FB.api('/me', userData => {
        this.props.onSetUserState(userData)
        return (<Redirect
          to={{
            pathname: '/VenueListings',
            state: { from: this.props.location }
          }}
        />)
      });
    } else {
      alert('Facebook login error');
      // this.props.onLogin(false);
    }
  }

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

  render() {
    return (
      <div className="fb-login">
       { /*  <fb:login-button scope="public_profile,email" onlogin="checkLoginState();"> onClick= { () => this.facebookLogin()}>
        Log in with Facebook
        </fb:login-button>
        */ }
      <button
          onClick= { () => this.facebookLogin()}>
          Log in with Facebook
        </button>
        
      </div>
    );
  }
}
// 'The response object that's provided to your callback contains a number of fields:'

// Login.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

export default Login;
