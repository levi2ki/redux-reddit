import React from 'react';
import PropTypes from 'prop-types';


export default class RedditList extends React.Component {
  constructor(props) {
    super(props);
  }

  selectItem = (e) => {
    this.props.selectSubreddit(e.target.innerHTML);
  }

  renderList = () => {
    return this.props.postsBySubreddit.map((items, idx) => {
      return (
        <div key={idx} onClick={this.selectItem}>{items}</div>
      )
    })
  }
  render() {
    return (
    <div>
      {this.renderList()}
    </div>
    );
  }
}
