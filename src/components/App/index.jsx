import React from 'react';
import SubRedditsForm from '../../containers/RedditSelector';
import ItemsList from '../../containers/ItemsList';
import PostsBySubreddit from '../../containers/PostsBySubreddit';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <SubRedditsForm />
        <ItemsList />
        <PostsBySubreddit />
      </div>
    );
  }
}
