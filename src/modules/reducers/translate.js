import {FAILURE, GET_TRANSLATE, GET_WEATHER, REQUEST, SUCCESS} from '../../utils/const';
import {changeState} from '../helpers/translate';

const initialState = {
  data: null,
  loading: true,
  error: ''
};

export default (state = initialState, action) => {
  console.log('translate', action);
  const {type, payload} = action;
  switch (type) {
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
        data: payload.text[0].split(',')
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
