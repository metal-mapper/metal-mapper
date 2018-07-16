import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FormErrors } from './FormErrors';

import './styles/addVenue.scss';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venueTitle: '',
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
      venueTitleValid: false,
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
      case 'citySelect':
        citySelectValid = value !== 'none';
        fieldValidationErrors.citySelect = citySelectValid ? '' : ' Please select a city';
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
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:3000/api/v1/PropertyListing', {
      title: this.state.propertyTitle,
      type: this.state.propertyTypeSelect,
      bedrooms: this.state.bedroomInput,
      bathrooms: this.state.bathroomInput,
      price: this.state.price,
      city: this.state.citySelect,
      email: this.state.email,
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
                  className={`form-control ${this.errorClass(this.state.formErrors.venueName)}`}
                  id="venueName" 
                  placeholder="Venue name" 
                  value={this.state.venueName}
                  />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="venueTypeSelect" className="col-sm-2 col-form-label">Type</label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="venueTypeSelect"
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
                <input type="number" className="form-control" id="price" placeholder="Price Rating" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="Address" className="col-sm-2 col-form-label">Address</label>
              <div className="col-sm-10">
              <input type="text" className="form-control" id="price" placeholder="Address" />
              </div>
              </div>
            <div className="form-group row">
              <label htmlFor="website" className="col-sm-2 col-form-label">Website</label>
              <div className="col-sm-10">
                <input type="website" className="form-control" id="website" placeholder="Contact Website" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Add Listing</button>
              </div>
            </div>
            <div className="alert alert-warning" role="alert">
              Some field validation went wrong. Please provide correct data.
            </div>
            <div className="alert alert-danger" role="alert">
              Sorry, something went wrong. Please try again. (API Error)
            </div>
            <div className="alert alert-success" role="alert">
              Venue saved.
            </div>
          </form>
        </div>
    );
  }
}

export default AddVenue;
