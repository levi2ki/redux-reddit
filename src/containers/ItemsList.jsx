import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RedditList from '../components/RedditList';
import { selectSubreddit } from '../actions/index';

const mapStateToProps = state => {
  return {
    postsBySubreddit: Object.keys(state.postsBySubreddit)
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({selectSubreddit}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RedditList);
