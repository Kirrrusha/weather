import thunk from 'redux-thunk';
import reducer from '../modules/reducers';
import {applyMiddleware, compose, createStore} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(apiMiddleware, thunk)
);

const store = createStore(
  reducer,
  enhancer);

export default store;
