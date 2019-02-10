import {connect} from 'react-redux';
import {getTranslate, getWeatherByCoords} from '../../modules/actions';
import MapPage from '../../pages/MapPage';


const mapStateToProps = state => ({
  weather: state.weather.data,
  translate: state.translate,
});

const mapDispatchToProps = dispatch => ({
  getWeatherByCoords: (params) => dispatch(getWeatherByCoords(params)),
  getTranslate: (params) => dispatch(getTranslate(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
