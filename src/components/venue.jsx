import React, { Component } from 'react';

class Venue extends Component {
  render() {
    return (<h1>Venues</h1>);
  }       
}



// import { number, string } from 'prop-types';

//const Venue = ({
//   title, type, bedrooms, bathrooms, price, city,
// }) => (
// <div className="card" style={{ width: '18rem' }}>
//     <img className="card-img-top" src="http://via.placeholder.com/350x150?text=Property+Image" alt="property" />
//     <div className="card-body">
//       <h5 className="card-title">{title}</h5>
//       <p className="card-text">{type}</p>
//     </div>
//     <ul className="list-group list-group-flush">
//       <li className="list-group-item">£{price}</li>
//       <li className="list-group-item">{bedrooms} bedroom(s)</li>
//       <li className="list-group-item">{bathrooms} bathroom(s)</li>
//       <li className="list-group-item">{city}</li>
//     </ul>
//     <div className="card-body">
//       <a href="mailto:someagent@estatecompany.co.uk" className="card-link">Email Agent</a>
//     </div>
//  </div>
//  );

// Property.propTypes = {
//   title: string.isRequired,
//   type: string.isRequired,
//   bedrooms: number.isRequired,
//   bathrooms: number.isRequired,
//   price: number.isRequired,
//   city: string.isRequired,
//   email: string.isRequired,
// };

export default Venue;