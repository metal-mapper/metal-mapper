import React, { Component } from 'react';

class Venue extends Component {
  constructor() {
    super();
    this.state = {
      venueName: 'The Peer Hat',
      venueType: ['club', 'pub'],
      venueRating: 4.9,
      venueAddress: '14-16 Faraday Street, M1 1BE Manchester, United Kingdom',
      venuePriceRange: '££',
    };
    // <button>More details</button>
  }

  render() {
    return (
      <div className="venueCard">
        <div className="venueName">
          <span>{this.state.venueName}</span>
        </div>
        <div className="venueType">
          <span>{this.state.venueType}</span>
        </div>
        <div className="venueRating">
          <span>{this.state.venueRating}</span>
        </div>
        <div className="venueAddress">
          <span>{this.state.venueAddress}</span>
        </div>
        <div className="venuePriceRange">
          <span>{this.state.venuePriceRange}</span>
        </div>
      </div>
    );
  }
}

export default Venue;
