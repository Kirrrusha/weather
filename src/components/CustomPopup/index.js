import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class CustomPopup extends Component {

  static propTypes = {
    weather: PropTypes.object
  };

  render() {
    console.log(this.props);
    const {
      weather: {
        main: {humidity, pressure, temp, temp_max, temp_min},
        name,
        weather,
        wind: {speed, deg}
      }
    } = this.props;

    const srcImg = `https://openweathermap.org/img/w/${weather[0].icon}.png`;
    return (
      <div className='popup'>
        <div className='popup-title'>{name}</div>
        <div className='popup-humidity'>Влажность: <b>{humidity}%</b></div>
        <div className='popup-humidity'>Давление: <b>{+pressure * 0.75} мм.рт.ст</b></div>
        <div className='popup-humidity'>Температура: <b>{temp}&#8451;</b> ({temp_min}&#8451; — {temp_max}&#8451;)
        </div>
        <div className='popup-weather'>
          <img src={srcImg} alt={''} />
          <span><b>{weather[0].description}</b></span>
        </div>
        <div className='popup-wind'>
          <span>Ветер: {speed}м/с, {this.directionWind(deg)}</span>
        </div>
      </div>
    );
  }


  directionWind = (deg) => {
    switch (+deg % 45) {
      case 1:
        return 'СВ';
      case 2:
        return 'В';
      case 3:
        return 'ЮВ';
      case 4:
        return 'ЮВ';
      case 5:
        return 'ЮЗ';
      case 6:
        return 'З';
      case 7:
        return 'СЗ';
      default:
        return 'С';
    }
  };
}

export default CustomPopup;
