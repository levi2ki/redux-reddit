import fetch from 'isomorphic-fetch';
import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS} from '../constants/actionTypes';

export const selectSubreddit = subreddit => ({type: SELECT_SUBREDDIT, payload: subreddit});

export const invalidateSubreddit = subreddit => ({type: INVALIDATE_SUBREDDIT, payload: subreddit});

export const requestPosts = subreddit => ({type: REQUEST_POSTS, payload: subreddit});

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  payload: subreddit,
  posts: json.data.children.map(child => child.data),
  recieveAt: Date.now()
});

export const fetchPosts = (subreddit) => dispatch => {
  dispatch(requestPosts(subreddit));
  return fetch(`http://reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)));
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    } else {
      return Promise.resolve()
    }
  }
}
