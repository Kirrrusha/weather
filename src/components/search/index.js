import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Search extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    search: '',
    result: []
  };

  componentWillUpdate(nextProps) {
    // console.log('componentWillUpdate', nextProps);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.weather) {
      console.log('nextProps', nextProps);
      console.log(this.state);
      const {result} = this.state;
      const {
        weather: {
          name, weather, main
        }
      } = nextProps;
      result.push({
        name,
        temp: main.temp,
        icon: weather[0].icon,
        description: weather[0].description
      });
      this.setState({result});
    }
    // console.log('nextState', nextState);
    // console.log('nextContext', nextContext);
  }

  render() {
    const {search, result} = this.state;
    const {weather} = this.props;
    // if (weather) {
    //   console.log('props', this.props);
    //   result.push(weather.name);
    // }
    return (
      <div className='search'>
        <input
          type='text'
          value={search}
          className='search__input'
          onChange={this.onChangeHandler}
          onKeyDown={this.handleKeyDown}
          placeholder='Введите название города'
        />

        <div className='search__result'>
          {result.map((res, idx) => {
            const srcImg = `https://openweathermap.org/img/w/${res.icon}.png`;
            return (<div className='result' key={`${idx}`}>
                <img src={srcImg} alt='#' className='result__icon'/>
                <span className='result__name'>{res.name}, </span>
                <span className='result__temp'>{res.temp}</span>
                <span className='result__description'>{' ' + res.description}</span>
              </div>)
            }
          )}
        </div>
      </div>
    );
  }

  handleKeyDown = e => {
    if (e.which === 13) {
      this.handleSubmit();
    } else if (e.which === 27) {
      e.currentTarget.value = '';
      this.setState({search: ''});
    }
  };

  onChangeHandler = (e) => {
    this.setState({search: e.currentTarget.value});
  };

  handleSubmit = () => {
    const {search} = this.state;
    const val = `q=${search.trim()}`;
    const {getWeather} = this.props;
    getWeather(val);
  };
}

export default Search;





