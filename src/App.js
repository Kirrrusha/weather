import React, { Component } from 'react';
// import MapPage from './pages/MapPage';
import MapContainer from './containers/MapContainer';
import SearchContainer from './containers/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="map">
        <SearchContainer />
        <MapContainer />
      </div>
    );
  }
}

export default App;
