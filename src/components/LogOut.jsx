import React from 'react';

class LogOut extends React.Component {

  facebookLogOut = () => {
    FB.logout(function(response) => {
      this.setState({
        
      })
    });
  }

}

loggedOut() {
  this.setState({
      loggedStatus: false,
  })
}

render() {
  return (
    <div>
      <button
        onClick= { () => this.facebookLogOut()}>
        Log out
      </button>
    </div>
  );
}
}



export default LogOut;