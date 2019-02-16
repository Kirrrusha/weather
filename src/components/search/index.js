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

  render() {
    console.log(this.state);
    const {search, result} = this.state;
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
          {result.map((res, idx) =>
            <div className='result' key={`${idx}`}>{res}</div>)}
        </div>
      </div>
    );
  }

  handleKeyDown = e => {
    if (e.which === 13) {
      this.handleSubmit(e);
    } else if (e.which === 27) {
      e.currentTarget.value = '';
      this.setState({ search: '' })
    }
  }

  onChangeHandler = (e) => {
    this.setState({ search: e.currentTarget.value })
  }

  handleSubmit = e => {
    const weatherTownData = [];
    const {search} = this.state;
    const val = `q=${search.trim()}`;
    const {getWeather, getTranslate} = this.props;
    // if (val) {
    //   getWeather(val)
    //     .then(result => {
    //       getTranslate([result.payload.name, result.payload.weather[0].description])
    //         .then(translate => {
    //           console.log(translate);
    //
    //           weatherTownData.push({
    //             town: translate.payload.text[0] || result.payload.name,
    //             temp: result.payload.main.temp
    //           })
    //           console.log(weatherTownData);
    //         })
    //     })
    //     .catch(error => alert(error));
    //   e.currentTarget.value = '';
    //   this.setState({ search: '', result: weatherTownData })
    // }
  }
}

export default Search;





