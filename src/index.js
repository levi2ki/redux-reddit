import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './components/App'
import store from './store/configureStore';
import {selectSubreddit, fetchPostsIfNeeded} from './actions';

store.dispatch(selectSubreddit('reactjs'));
store.dispatch(
  fetchPostsIfNeeded('reactjs'))
    .then(() => console.log(store.getState())
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
