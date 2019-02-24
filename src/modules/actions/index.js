import {API_TRANSLATE, API_WEATHER, defaultErrorMsg, TOKEN_TRANSLATE, TOKEN_WEATHER} from '../../utils/default';
import {FAILURE, GET_TRANSLATE, GET_WEATHER, REQUEST, SUCCESS} from '../../utils/const';
import axios from 'axios';
import {changeState} from '../helpers/translate';

export function getWeather(data) {
  return (dispatch) => {
    dispatch({
      type: GET_WEATHER + REQUEST,
    });

    const weather = `${API_WEATHER}?${data}&units=metric&APPID=${TOKEN_WEATHER}`;
    axios.get(weather)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: GET_WEATHER + SUCCESS,
          });
        } else {
          dispatch({
            type: GET_WEATHER + FAILURE,
            payload: {
              errorMsg: res.data.message || defaultErrorMsg,
            },
            error: true,
          });
        }
        return res.data;
      })
      .then(response => {
        dispatch({
          type: GET_TRANSLATE + REQUEST,
        });
        const wordsTranslate = [response.name, response.weather[0].description];
        const translate = `${API_TRANSLATE}?key=${TOKEN_TRANSLATE}&text=${wordsTranslate.join(',')}&lang=en-ru`;
        axios.get(translate)
          .then(res => {
            if (res.status === 200) {
              dispatch({
                type: GET_TRANSLATE + SUCCESS,
                payload: changeState(response, res.data)
              });
            } else {
              dispatch({
                type: GET_TRANSLATE + FAILURE,
                payload: {
                  errorMsg: res.data.message || defaultErrorMsg,
                },
                error: true,
              });
            }
          })
      })
      .catch(res => console.log(res));

  };
}
