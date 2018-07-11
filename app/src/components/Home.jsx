import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div class='primaryContainer'>
        <br/>
        <h1>Hello World!</h1>
        <br/>
        <img src={require('../../assets/images/placeholder.jpg')} width='250px' style={{borderRadius:'25px'}}/>
        <h3>I'm Stephen Costa, a computer science student studying at Northeastern University in Boston. </h3>
      </div>
    )
  }
}

export default HomePage;