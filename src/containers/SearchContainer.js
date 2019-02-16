import {connect} from 'react-redux';
import {getTranslate, getWeather} from '../modules/actions';
import Search from '../components/search';


const mapStateToProps = state => ({
  weather: state.weather.data,
  translate: state.translate,
});

const mapDispatchToProps = dispatch => ({
  getWeather: (params) => dispatch(getWeather(params)),
  getTranslate: (params) => dispatch(getTranslate(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
