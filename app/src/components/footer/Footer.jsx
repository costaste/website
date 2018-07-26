import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <ul className='footerList'>
          {/* <li className='navButton'>Contact Info</li>  */}
          <li className='navButton'>
            <img title='GitHub' src={require('../../../assets/images/github_icon.png')} onClick={() => window.open('https://github.com/costaste/')} className='footerListElem' />
          </li>
          <li className='navButton'>
            <img title='LinkedIn' src={require('../../../assets/images/linkedinLogo.png')} onClick={() => window.open('https://www.linkedin.com/in/costastephen/')} className='footerListElem' />
          </li>
          <li className='navButton'>
            <img title='University Email' src={require('../../../assets/images/email.png')} onClick={() => window.open('mailto:costa.ste@husky.neu.edu')} className='footerListElem' />
          </li>
          {/* <li className='navButton'>
            <img title='Personal Email' src={require('../../../assets/images/email.png')} onClick={() => window.open('mailto:st3ph3n24@gmail.com')} className='footerListElem' />
          </li> */}
        </ul>
      </footer>
    )
  }
}

export default Footer;