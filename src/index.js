import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './components/App'
import store from './store/configureStore';
import {Provider} from 'react-redux';
import {selectSubreddit, fetchPostsIfNeeded} from './actions';

store.dispatch(selectSubreddit('reactjs'));
store.dispatch(
  fetchPostsIfNeeded('reactjs'))
    .then(() => console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
