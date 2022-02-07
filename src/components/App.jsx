import React, { Component } from 'react';
import SearchBar from './SearchBar';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  search(query) {
    console.log(query);
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div>

          </div>
        </div>
        <div className="right-scene">

        </div>
      </div>
    );
  };
};

export default App;
