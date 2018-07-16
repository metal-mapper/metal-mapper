import React from 'react';
import Venue from './Venue';

const exampleVenue =
  {
    venueName: 'The Peer Hat',
    venueType: ['club', 'pub'],
    venueRating: 4.9,
    venueAddress: '14-16 Faraday Street, M1 1BE Manchester, United Kingdom',
    venuePriceRange: '££',
  };


const Sandbox = () => (
  <div>
    <Venue venue={exampleVenue} />
  </div>
);


export default Sandbox;
