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

  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  }

  facebookLoginHandler = response => {
    if (response.status === 'connected'){
      this.FB.api('/me', userData => {
        let result = {
          ...response,
          user: userData
        };
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
        >
          Log in with Facebook
        </button>
      </div>
    );
  }
}

//below taken from the officil facebook instructions 

FB.login((response) => {
  if (response.authResponse) {
   console.log('Welcome!  Fetching your information.... ');
   FB.api('/me', function(response) {
     console.log('Good to see you, ' + response.name + '.');
   });
  } else {
   console.log('User cancelled login or did not fully authorize.');
  }
});

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

// TAKEN FROM AUTHENTIFICATION EXAMPLE CODE MICHAAL DID FOR REFERENCE

// import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import TokenManager from '../utils/token-manager';

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       errorMessage: '',
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleLogin = this.handleLogin.bind(this);
//   }

//   handleInputChange(event) {
//     const { name, value } = event.target;

//     this.setState({ [name]: value });
//   }

//   handleLogin() {
//     axios.post('http://127.0.0.1:3000/auth/login', {
//       email: this.state.email,
//       password: this.state.password,
//     })
//       .then((response) => {
//         TokenManager.setToken(response.data.token);
//         this.props.onLogin();
//         this.props.history.push('/');
//       })
//       .catch((error) => {
//         this.setState({ errorMessage: error.response.data.message });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Login</h1>
//         <div>
//           <label htmlFor="email">
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label htmlFor="email">
//             Password:
//             <input
//               type="text"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </div>
//         <div>
//           <button onClick={this.handleLogin}>Login</button> or <Link to="/sign-up">Sign Up</Link>
//         </div>
//         {
//           this.state.errorMessage &&
//           <div><span>{this.state.errorMessage}</span></div>
//         }
//       </div>
//     );
//   }
// }

// Login.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

// export default Login;

export default Login;
