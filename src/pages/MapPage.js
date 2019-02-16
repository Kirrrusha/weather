import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet';
import CustomPopup from '../components/CustomPopup';

class MapPage extends Component {
  static defaultProps = {};

  static propTypes = {
    getWeather: PropTypes.func,
    getTranslate: PropTypes.func
  };

  state = {
    lat: 51.700062,
    lng: 39.181932,
    zoom: 10,
    marker: []
  };

  render() {
    const {translate, weather} = this.props;
    const {lat, lng, zoom, marker} = this.state;
    const position = [lat, lng];
    console.log('translate', translate);
    return (
      <LeafletMap
        center={position}
        zoom={zoom}
        onClick={this.addMarker}
      >
        <TileLayer
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {marker.map((position, idx) =>
          <Marker key={`marker-${idx}`} position={position} onClick={this.weatherInformation}>
            <Popup>
              <CustomPopup translate={translate} weather={weather} />
            </Popup>
          </Marker>
        )}
      </LeafletMap>
    );
  }

  weatherInformation = () => {
    const {weather, getTranslate} = this.props;
    // getTranslate([weather.name, weather.weather[0].description]);
    this.setState({weather});
  };

  addMarker = e => {
    console.log('props', this.props);
    const {getWeather} = this.props;
    let {marker} = this.state;
    marker = [];
    marker.push(e.latlng);
    this.setState({marker});
    getWeather(`lat=${e.latlng['lat']}&lon=${e.latlng['lng']}`);
  };
}

export default MapPage;
