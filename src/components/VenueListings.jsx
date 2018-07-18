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
    axios.get('http://localhost:3001/api/v1/VenueListing')
      .then((response) => {
        this.setState({
          listings: response.data,
        });
      }).catch((err) => {
        // throw err;
      });
  }

  render() {
    const { listings } = this.state;
    return (
      <React.Fragment>
        <div className="listings">
          {listings.map(listing => <Venue key={listing._id} {...listing} />)}
        </div>
      </React.Fragment>
    );
  }
}

export default VenueListings;
