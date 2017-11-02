import React from 'react';
import {connect} from 'react-redux';
import Posts from '../components/Posts';

const mapStateToProps = state => {
  return {
    currentSubreddits: state.postsBySubreddit[state.selectedSubreddit]['items']
  }
}

export default connect(mapStateToProps)(Posts);
