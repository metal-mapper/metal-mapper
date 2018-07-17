import React from 'react';
import { string } from 'prop-types';

const Venue = ({
  venueName, venueType, priceRating, address, contactWebsite,
}) => (
  <div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src="https://static.vinepair.com/wp-content/uploads/2017/05/pub-internal.jpg" alt="pub" />
    <div className="card-body">
      <h5 className="card-title">{venueName}</h5>
      <p className="card-text">{venueType}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{venueName}</li>
      <li className="list-group-item">{venueType}</li>
      <li className="list-group-item">{priceRating}</li>
      <li className="list-group-item">{address}</li>
      <li className="list-group-item">{contactWebsite}</li>
    </ul>
  </div>
);

Venue.propTypes = {
  venueName: string.isRequired,
  venueType: string.isRequired,
  priceRating: string.isRequired,
  address: string.isRequired,
  contactWebsite: string.isRequired,
};

export default Venue;
