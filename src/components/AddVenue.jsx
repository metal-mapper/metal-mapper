import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FormErrors } from './FormErrors';
import '../styles/addVenue.scss';
import { withRouter } from 'react-router-dom';

class AddVenue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venueName: '',
      venueTypeSelect: '',
      priceRating: '',
      address: '',
      contactWebsite: '',
      formErrors: {
        venueTitle: '',
        venueTypeSelect: '',
        priceRating: '',
        address: '',
        contactWebsite: '',
      },
      venueNameValid: false,
      venueTypeSelectValid: false,
      priceRatingValid: false,
      addressValid: false,
      contactWebsiteValid: false,
      formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState(
      {
        [id]: value,
      },
      () => { this.validateField(id, value); },
    );
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let venueNameValid = this.state.venueNameValid;
    let venueTypeSelectValid = this.state.venueTypeSelectValid;
    let priceRatingValid = this.state.priceRatingValid;
    let addressValid = this.state.addressValid;
    let contactWebsiteValid = this.state.contactWebsiteValid;

    switch (fieldName) {
      case 'venueName':
        venueNameValid = value.length >= 0;
        fieldValidationErrors.venueName = venueNameValid ? '' : 'Venue name must be longer than 0 characters';
        break;
      case 'venueTypeSelect':
        venueTypeSelectValid = value !== 'none';
        fieldValidationErrors.venueTypeSelect = venueTypeSelectValid ? '' : ' Please select a venue type';
        break;
      case 'priceRating':
        priceRatingValid = (value >= 1) && (value <= 5);
        fieldValidationErrors.priceRating = priceRatingValid ? '' : ' Please enter a price rating between 1 and 5';
        break;
      case 'address':
        addressValid = value.length >= 0;
        fieldValidationErrors.address = addressValid ? '' : 'Address must be longer than 0 characters';
        break;
      case 'contactWebsite':
        contactWebsiteValid = value.length >= 0;
        fieldValidationErrors.contactWebsite = contactWebsiteValid ? '' : 'Contact website must be longer than 0 characters';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      venueNameValid,
      venueTypeSelectValid,
      priceRatingValid,
      addressValid,
      contactWebsiteValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid:
      this.state.venueNameValid &&
      this.state.venueTypeSelectValid &&
      this.state.priceRatingValid &&
      this.state.addressValid &&
      this.state.contactWebsiteValidValid,
    });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:3001/api/v1/VenueListing', {
      venueName: this.state.venueName,
      venueType: this.state.venueTypeSelect,
      priceRating: this.state.priceRating,
      addrueess: this.state.address,
      contactWebsite: this.state.contactWebsite,
    })
      .then(() => {
        this.props.history.push('/');
        /* console.log(res);
        console.log(res.data); */
      });
  }

  render() {
    return (
      <div className="add-venue-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="venueName" className="col-sm-2 col-form-label">Venue Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control`}
                id="venueName"
                placeholder="Venue name"
                value={this.state.venueName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="venueTypeSelect" className="col-sm-2 col-form-label">Type</label>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="venueTypeSelect"
                value={this.state.venueTypeSelect}
                onChange={this.handleChange}
              >
                <option value="none">Select one option</option>
                <option value="Pub">Pub</option>
                <option value="Club">Club</option>
                <option value="Gig Venue">Gig-venue</option>
                <option value="Record Shop">Record shop</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="price" className="col-sm-2 col-form-label">Price Rating</label>
            <div className="col-sm-10">
              <input
                type="number"
                className={`form-control`}
                id="price"
                placeholder="Price Rating"
                value={this.state.citySelect}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control`}
                id="address"
                placeholder="Address"
                value={this.state.address}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="contactWebsite" className="col-sm-2 col-form-label">Contact Website</label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control`}
                id="contactWebsite"
                placeholder="Contact Website"
                value={this.state.contactWebsite}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">Add Venue Listing</button>
            </div>
          </div>
          {
            !this.state.formValid &&
              <div className="alert alert-warning" role="alert">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
          }
          <div className="alert alert-danger" role="alert">
            Sorry, something went wrong. Please try again. (API Error)
          </div>
          <div className="alert alert-success" role="alert">
            Venue listing saved.
          </div>
        </form>
      </div>
    );
  }
}

AddVenue.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(AddVenue);
