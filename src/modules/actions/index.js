import {RSAA} from 'redux-api-middleware';
import {API_TRANSLATE, API_WEATHER, TOKEN_TRANSLATE, TOKEN_WEATHER} from '../../utils/default';
import {FAILURE, GET_TRANSLATE, GET_WEATHER, REQUEST, SUCCESS} from '../../utils/const';
import {checkResponse, httpGet} from '../helpers/network';

export const getWeather = (data) => (
  {
    [RSAA]: {
      endpoint: `${API_WEATHER}?${data}&units=metric&APPID=${TOKEN_WEATHER}`,
      method: 'GET',
      types: [
        GET_WEATHER + REQUEST,
        GET_WEATHER + SUCCESS,
        GET_WEATHER + FAILURE
      ]
    }
  }
);

export const getWeatherByName = (data) => ({
  [RSAA]: {
    endpoint: `${API_WEATHER}?q=${data}&units=metric&APPID=${TOKEN_WEATHER}`,
    method: 'GET',
    types: [
      GET_WEATHER + REQUEST,
      GET_WEATHER + SUCCESS,
      GET_WEATHER + FAILURE
    ]
  }
});

export const getTranslate = (data) => ({
  [RSAA]: {
    endpoint: `${API_TRANSLATE}?key=${TOKEN_TRANSLATE}&text=${data.join(',')}&lang=en-ru`,
    method: 'GET',
    types: [
      GET_TRANSLATE + REQUEST,
      GET_TRANSLATE + SUCCESS,
      GET_TRANSLATE + FAILURE
    ]
  }
});
