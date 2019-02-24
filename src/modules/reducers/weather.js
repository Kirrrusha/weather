import {FAILURE, GET_TRANSLATE, GET_WEATHER, REQUEST, SUCCESS} from '../../utils/const';
import {changeState} from '../helpers/translate';

const initialState = {
  data: null,
  loading: false,
  error: ''
};

export default (state = initialState, action) => {
  console.log('action', action);
  const {type, payload} = action;
  switch (type) {
    case GET_WEATHER + REQUEST:
      return {
        ...state,
        error: '',
        loading: true
      };

    case GET_WEATHER + SUCCESS:
      return {
        ...state,
        error: '',
        loading: true
      };

    case GET_WEATHER + FAILURE:
      return {
        ...state,
        loading: false,
        data: payload
      };

    case GET_TRANSLATE + REQUEST:
      return {
        ...state,
        error: '',
        loading: true
      };

    case GET_TRANSLATE + SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      };

    case GET_TRANSLATE + FAILURE:
      return {
        ...state,
        loading: false,
        data: payload
      };

    default:
      return state;
  }
}
