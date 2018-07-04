import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

class Venue extends Component {
  constructor() {
    super();
    this.state= {
      venueName: 'The Peer Hat',
      venueType: ['club', 'pub'],
      venueRating: 4.9,
      venueAddress: '14-16 Faraday Street, M1 1BE Manchester, United Kingdom',
      venuePriceRange: '££'
    }
   // <button>More details</button>
  };

  render() {
    return (
      <div className="venueCard">
        <div className="venueName">
          <Typography variant="display2" gutterBottom>
            <Icon style={{ marginTop: 40, fontSize: 28 }}>recent_actors</Icon>
          <span>{this.state.venueName}</span>
          </Typography>
        </div>
        <div className="venueType">
          <Typography variant="display1">
            <span>Tags: {this.state.venueType}</span>
          </Typography>
        </div>
        <div className="venueRating">
          <Typography variant="display1">
            <span>Rating: {this.state.venueRating}</span>
          </Typography>
        </div>
        <div className="venueAddress">
          <Typography variant="display1">
            <span>Address: {this.state.venueAddress}</span>
          </Typography>
        </div>
        <div className="venuePriceRange">
          <Typography variant="display1" gutterBottom>
            <span>Price: {this.state.venuePriceRange}</span>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Venue;