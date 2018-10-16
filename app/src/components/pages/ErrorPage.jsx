import React, { Component } from 'react';

class ErrorPage extends Component {
  render() {
    return (
      <div class='primaryContainer'>
        <img src={require('../../../assets/images/shrug.jpg')}/>
        <h3>Oops... Couldn't find that page for you.</h3>
      </div>
    )
  }
}

export default ErrorPage;
