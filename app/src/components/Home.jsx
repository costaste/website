import React, { Component } from 'react';
import Typewriter from './Typewriter';

class HomePage extends Component {
  render() {
    return (
      <div class='primaryContainer'>
        <br/>
        <Typewriter />
        <br/>
        <img src={require('../../assets/images/profile.jpg')} className='profileImg'/>
        <h3>I'm Stephen Costa, a computer science student studying at Northeastern University in Boston. </h3>
        <br/>
        <ul class='list'>
          <li>Currently I'm finishing my second year of schooling at NEU.</li>
          <br/>
          <li>Coincidentally, I'm also looking for my second co-op!</li>
          <br/>
          <li>I just finished my first co-op at Curriculum Associates, which was a great experience. I got to learn a lot about web development and use technologies with which I previously had no experience. Everyone who works at CA is also extremely welcoming and knowledgeable, which gave me a great first step into the industry. I couldn't be more excited about my next co-op.</li>
          <br/>
          <li>In regards to the more personal side of my life, I like to consider myself a pretty laid-back guy. I love to read: Game of Thrones, Star Wars books, books about technology, comics, and the usual geeky stuff. I also enjoy going outside; going for walks/running in the summer, snowboarding in the winter. Certain video games have a tendency to vigorously consume my free time as well.</li>
          <li>If you think I sound like a pretty cool guy definitely feel free to hit me up on email or LinkedIn and maybe we can chat. (Links down below!)</li>
        </ul>
      </div>
    )
  }
}

export default HomePage;
