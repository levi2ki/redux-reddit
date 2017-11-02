import React from 'react';
import PropTypes from 'prop-types';
// import './styles/SomeStyle.css';

export default class SubRedditsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
    this.state.value = "";
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }
  fetchReddit = (e) => {
    e.preventDefault();
    this.props.fetchPostsIfNeeded(this.state.value);
    this.setState({value: ""})

  }
  render() {
    return (
      <div>
        <form action="#" onSubmit={this.fetchReddit}>
          <input type="text" placeholder="type reddit" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="fetch"/>
        </form>
      </div>);
  }
}
