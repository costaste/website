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
        <br/>
        <ul class='list'>
          <li>Currently I'm finishing my second year of schooling at NEU.</li>
          <br/>
          <li>Coincidentally, I'm also looking for my second co-op!</li>
          <br/>
          <li>I just finished my first one at Curriculum Associates, which was a great experience.</li>
        </ul>
      </div>
    )
  }
}

export default HomePage;