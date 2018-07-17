import React from 'react';
import axios from 'axios';
import Venue from './Venue';
// import './venueListings.scss';

class VenueListings extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/metal-travel-guide')
      .then((response) => {
        this.setState({
          listings: response.data,
        });
      }).catch((err) => {
        throw err;
      });
  }

  render() {
    return { listings } = this.state;
  }
}

export default PropertyListings;
