import React from 'react';
import PropTypes from 'prop-types';


export default class Posts extends React.Component {
  renderList() {
    console.log(this.props.currentSubreddits)
    if (!this.props.currentSubreddits) return null;
    return (
      this.props.currentSubreddits.map((item,idx) => {
        return (
          <div key={idx}>
            {item.domain}
            <a href={item.url} target="_blank"> Link here!</a>
          </div>
        )
      })
    )
  }
  render() {
    return (
    <div>
      <br/>
      {this.renderList()}
    </div>
    );
  }
}
