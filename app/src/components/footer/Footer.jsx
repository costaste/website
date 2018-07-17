import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <ul className='footerList'>
          <li className='navButton'>
            <img src={require('../../../assets/images/github_icon.png')} onClick={() => window.open('https://github.com/costaste/')} className='footerListElem' />
          </li>
          <li className='navButton'>
            <img src={require('../../../assets/images/linkedinLogo.png')} onClick={() => window.open('https://www.linkedin.com/in/costastephen/')} className='footerListElem' />
          </li>
          <li className='navButton'>
            <img src={require('../../../assets/images/email.png')} onClick={() => window.open('mailto:costa.ste@husky.neu.edu')} className='footerListElem' />
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer;