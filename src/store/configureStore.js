import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers'

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
  applyMiddleware(
    thunkMiddleware, // позволяет нам отправлять функции
    loggerMiddleware // аккуратно логируем действия
  )
));

export default store;
