import {FAILURE, GET_WEATHER, REQUEST, SUCCESS} from '../../utils/const';

const initialState = {
  data: null,
  loading: false,
  error: ''
};

export default (state = initialState, action) => {
  console.log(action);
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
        data: payload
      };

    case GET_WEATHER + FAILURE:
      return {
        ...state,
        loading: false,
        data: payload
      };
    default:
      return state;
  }
}
