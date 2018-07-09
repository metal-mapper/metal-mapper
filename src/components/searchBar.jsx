// This is the main component for the searchBar.
// This has not been tested if it works because master is not working for me -KD

import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert(`A location has been submitted: ${  this.state.value}`);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input
            type="submit"
            value="Find Venues"
        />
      </form>
    );
  }
}

//   ReactDOM.render(
//     <SearchBar />,
//     document.getElementById('root')
//   );

export default SearchBar;
