import React, { Component } from 'react';

class DetailRow extends Component {

  render() {
    const { project } = this.props;
    let content;
    if (project === 'pipes') {
      let content = <img src={require('../../../assets/images/pipes.gif')} />;
    } else {
      let content = <img src={require('../../../assets/images/bb8.gif')} />;
    }
    // TODO use real row id
    let rowId = 'detailrow';
    project === 'pipes' ? content = <img src={require('../../../assets/images/pipes.gif')} /> : content = <img src={require('../../../assets/images/bb8.gif')} />;
    let cell = <td colSpan='3'>{ content }</td>
    return <tr id={rowId + '-details'} className='detailRow'>{cell}</tr>
  }
}

export default DetailRow;
