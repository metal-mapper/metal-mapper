// Found online might need to check this over with a tutor - KD
import SearchBar from 'material-ui-search-bar';

class locationSearchBar extends React.Component {
render() {
  return(
    <SearchBar
      onChange={() => 
      console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
      margin: '0 auto',
      maxWidth: 800,
            }}
    />
    );
  }
}
export default locationSearchBar;
