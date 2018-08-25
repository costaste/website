import React, { Component } from 'react';
import { pipeDetailedInfo, musicDetailedInfo, nushDetailedInfo, tetrisDetailedInfo } from './tableConstants';

class DetailRow extends Component {

  // Helper function to get correct details by project
  getData(project) {
    switch (project) {
      case 'pipes':
        return pipeDetailedInfo;
        break;
      case 'music':
        return musicDetailedInfo;
        break;
      case 'nush':
        return nushDetailedInfo;
        break;
      case 'tetris':
        return tetrisDetailedInfo;
        break;
      default: 
        return null;
    }
  }

  buildLists(data) {
    const techList = [];
    const detailList = [];

    for (var i = 0; i < data.tech.length; i++) {
      techList.push(<li>{data.tech[i]}</li>);
    }
    for (var i = 0; i < data.details.length; i++) {
      detailList.push(<li>{data.details[i]}</li>);
    }

    return (
    <div className='detailCell'>
      <div className='detailDiv'>
        <h3>Technologies</h3>
        <ul className='detailList'>{techList}</ul>
      </div>
      <div className='detailDiv'>
        <h3>Details</h3>
        <ul className='detailList'>{detailList}</ul>
      </div>
    </div>);
  }

  render() {
    const { project, rowId, shouldDisplay } = this.props;
    const data = this.getData(project);
    let cells = [];

    // Include a gif of project in action
    const gif = <img src={data.gif} className='projectGif'/>;
    const gifCell = <td colSpan='2' className='buttonCell'>{gif}</td>;

    // Add bulleted info about projects
    const projInfo = this.buildLists(data);
    const infoCell = <td className='cell'>{projInfo}</td>

    // Add link to repo for project
    const gitLink = <td className='buttonCell'>
      <img title='View on GitHub' src={require('../../../assets/images/github_icon_black.png')} onClick={() => window.open(data.gitUrl)} className='gitLinkTable' />
    </td>;

    // Add td elems to cell list and build row
    cells.push(gifCell);
    cells.push(infoCell);
    cells.push(gitLink);

    let styleClass;
    shouldDisplay ? styleClass = 'detailRow' : styleClass = 'detailRow-hidden';
    return <tr id={rowId + '-details'} className={styleClass}>{cells}</tr>
  }
}

export default DetailRow;
