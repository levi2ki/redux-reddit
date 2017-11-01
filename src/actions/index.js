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
