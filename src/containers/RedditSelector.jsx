import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SubRedditsForm from '../components/SubRedditsForm';
import { fetchPostsIfNeeded } from '../actions/index';

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchPostsIfNeeded}, dispatch)

export default connect(null, mapDispatchToProps)(SubRedditsForm);
