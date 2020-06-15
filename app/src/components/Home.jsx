import React from 'react';
import Typewriter from './Typewriter';

const HomePage = (props) => (
  <div class='primaryContainer'>
    <br />
    <Typewriter />
    <br />
    <img
      src={require('../../assets/images/profile.jpg')}
      className='profileImg'
    />
    <h3>I'm Stephen.</h3>

    <div class='largeParagraph'>
      <p>
        I'm a recent Northeastern graduate working in the field of Computer
        Science.
      </p>
      <br />
      <p>
        I finished my first co-op, at{' '}
        <a href='https://www.curriculumassociates.com/'>
          Curriculum Associates
        </a>
        , in July 2018. It was a great experience; I got to learn a lot about
        web development and use technologies with which I previously had no
        experience.
      </p>
      <br />
      <p>
        My second co-op was with <a href='https://circle.com'>Circle</a>, where
        I was on the Internal Tools team. That was a fantastic experience. I
        made a lot of friends there and learned even more yet.
      </p>
      <br />
      <p>
        Now I work for <a href='https://poloniex.com'>Poloniex</a>, a spin out
        company from Circle. Poloniex is a cryptocurrency exchange that's been
        around since 2014. I'm a software engineer for the Security team there.
      </p>
      <br />
      <p>In my free time I like to play video games and read.</p>
      <br />
      <p>
        If you'd like to chat feel free to hit me up on email or LinkedIn.
        (Links in the footer!)
      </p>
    </div>
  </div>
);
export default HomePage;
