import React, { Component } from 'react';
import './../asserts/stylesheets/common.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>This is home.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur dolorem est, mollitia quae temporibus unde.
          Adipisci, alias cumque, deserunt ea, excepturi inventore ipsam itaque laborum provident qui repellat voluptate.
        </p>
      </div>
    );
  }
}

export default Home;
