import {connect} from 'react-redux';
import {getWeather} from '../modules/actions';
import MapPage from '../pages/MapPage';


const mapStateToProps = state => ({
  weather: state.weather.data
});

const mapDispatchToProps = dispatch => ({
  getWeather: (params) => dispatch(getWeather(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
