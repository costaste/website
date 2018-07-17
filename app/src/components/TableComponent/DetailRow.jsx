import React, { Component } from 'react';

class DetailRow extends Component {

  render() {
    const { project, rowId } = this.props;
    let content;
    if (project === 'pipes') {
      let content = <img src={require('../../../assets/images/pipes.gif')} />;
    } else {
      let content = <img src={require('../../../assets/images/bb8.gif')} />;
    }
    // TODO use real row id
    // let rowId = 'detailrow';
    project === 'pipes' ? 
    content = <img src={require('../../../assets/images/pipes.gif')} className='projectGif'/> : 
    content = <img src={require('../../../assets/images/bb8.gif')} className='projectGif'/>;

    let cells = [];
    let gitLink = <td className='cell'><img src={require('../../../assets/images/github_icon.png')} onClick={() => window.open('https://github.com/costaste/Unix_Shell')} className='gitLinkTable' /></td>;
    let gif = <td colSpan='3'>{content}</td>;
    cells.push(gif);
    cells.push(gitLink);

    return <tr id={rowId + '-details'} className='detailRow'>{cells}</tr>
  }
}

export default DetailRow;
