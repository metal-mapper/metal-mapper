// This is the main component for the searchBar.
// This still needs some work -KD

import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert(`A location has been submitted: ${this.state.value}`);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form">
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
        </div>
      </form>
    );
  }
}

//   ReactDOM.render(
//     <SearchBar />,
//     document.getElementById('root')
//   );

export default SearchBar;
