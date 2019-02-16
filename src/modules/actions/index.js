import {RSAA} from 'redux-api-middleware';
import {API_TRANSLATE, API_WEATHER, defaultErrorMsg, TOKEN_TRANSLATE, TOKEN_WEATHER} from '../../utils/default';
import {FAILURE, GET_TRANSLATE, GET_WEATHER, REQUEST, SUCCESS} from '../../utils/const';
import {httpGet, httpGet1} from '../helpers/network';


export function getWeather(data) {
  return (dispatch) => {
    dispatch({
      type: GET_WEATHER + REQUEST,
    });

    return httpGet(data)
      .then(res => {
        if (res.cod === 200) {
          dispatch({
            type: GET_WEATHER + SUCCESS,
            payload: res
          });
          console.log(res);
          getTranslate([res.name, res.weather[0].description])
        } else {
          dispatch({
            type: GET_WEATHER + FAILURE,
            payload: {
              errorMsg: res.message || defaultErrorMsg,
            },
            error: true,
          })
        }
      })
      .catch(res => dispatch({
        type: GET_WEATHER + FAILURE,
        payload: {
          errorMsg: res.message || defaultErrorMsg,
        },
        error: true,
      }));
  }
}
// export const getWeather = (data) => (
//   {
//     [RSAA]: {
//       endpoint: `${API_WEATHER}?${data}&units=metric&APPID=${TOKEN_WEATHER}`,
//       method: 'GET',
//       types: [
//         GET_WEATHER + REQUEST,
//         GET_WEATHER + SUCCESS,
//         GET_WEATHER + FAILURE
//       ]
//     }
//   }
// );

export function getTranslate(data) {
  console.log(data);
  return (dispatch) => {
    console.log('1');
    dispatch({
      type: GET_TRANSLATE + REQUEST,
    });

    return httpGet1(`${API_TRANSLATE}?key=${TOKEN_TRANSLATE}&text=${data.join(',')}&lang=en-ru`)
      .then(res => {
        if (res.cod === 200) {
          dispatch({
            type: GET_TRANSLATE + SUCCESS,
            payload: res
          });
          console.log(res);
        } else {
          dispatch({
            type: GET_TRANSLATE + FAILURE,
            payload: {
              errorMsg: res.message || defaultErrorMsg,
            },
            error: true,
          })
        }
      })
      .catch(res => dispatch({
        type: GET_TRANSLATE + FAILURE,
        payload: {
          errorMsg: res.message || defaultErrorMsg,
        },
        error: true,
      }));
  }
}

// export const getTranslate = (data) => {
//   console.log(data);
//   return ({
//     [RSAA]: {
//       endpoint: `${API_TRANSLATE}?key=${TOKEN_TRANSLATE}&text=${data.join(',')}&lang=en-ru`,
//       method: 'GET',
//       types: [
//         GET_TRANSLATE + REQUEST,
//         GET_TRANSLATE + SUCCESS,
//         GET_TRANSLATE + FAILURE
//       ]
//     }
//   })
// };
