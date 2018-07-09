import React from 'react';

class LogOut extends React.Component {

  facebookLogOut = () => {
    FB.logout(function(response) => {
    });
  }

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