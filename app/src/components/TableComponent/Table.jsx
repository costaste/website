import React, { Component } from 'react';
import _ from 'lodash';
import DetailRow from './DetailRow';

class Table extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      expandedRowIds: []
    }
  }

  // Table for ProjectsPage
  createRows(matrix) {
    const { isExpandable } = this.props;

    let totalRows = matrix.length;
    let totalCols = matrix[0].length;

    // Build the table
    let rows = [];
    for (let rowNum = 0; rowNum < totalRows; rowNum++) {
      let rowID = `row${rowNum}`;
      let cells = [];
      for (let col = 0; col < totalCols; col++) {
        let cellID = `cell${rowNum}-${col}`;
        // TODO make class table description cells max-width ~1200px
        let cellType = (rowNum === 0 ? 'cellHeader' : 'cell');
        // TODO use 'th' instead of 'td' for header row?
        rowNum === 0 ? 
        cells.push(<td key={col} id={cellID} className={cellType} colSpan={matrix[rowNum][col].span}>{matrix[rowNum][col].value}</td>) :
        cells.push(<td key={col} id={cellID} className={cellType}>{matrix[rowNum][col]}</td>);
      }

      // 1st part of conditional is only relevant to expandable tables...should prob refactor at some pt
      if (isExpandable && rowNum !== 0 ) {
        if (this.isRowExpanded(rowID)) {
          // plus/minus for expand/collapse (could abstract into a component, render img based on prop)
          const icon = <img title='Click to collapse' src={require('../../../assets/images/minus.png')} onClick={() => this.handleClick(rowID)} className='drawerButton' />;
          cells.push(<td id={rowID + '-collapse-button'} className='buttonCell'>{icon}</td>);
        } else {
          const icon = <img title='Click to expand' src={require('../../../assets/images/plus.png')} onClick={() => this.handleClick(rowID)} className='drawerButton' />;
          cells.push(<td id={rowID + '-expand-button'} className='buttonCell'>{icon}</td>);
        }

        rows.push(<tr className='tableRow' key={rowNum} id={rowID}>{cells}</tr>);
        const isExpanded = this.isRowExpanded(rowID);
        const detailRow = this.getDetailsRow(rowID, isExpanded);
        rows.push(detailRow);

      } else {
        // No expandable rows
        rows.push(<tr className='tableRow' key={rowNum} id={rowID}>{cells}</tr>);
      }
    }

    return rows;
  }

  handleClick(rowId) {
    const { isExpandable } = this.props;
    // Don't expand headers or rows from static tables
    if (rowId === 'row0' || !isExpandable) return;
    if (!this.isRowExpanded(rowId)) {
      // Add the row to the list of already expanded rows
      this.state.expandedRowIds.push(rowId);
      this.setState({ expandedRowIds: this.state.expandedRowIds });
    } else {
      // Remove the newly collapsed row from the list by filtering against it
      this.setState({ expandedRowIds: this.state.expandedRowIds.filter(e => e !== rowId) });
    }
    console.log(this.state);
  }

  isRowExpanded(rowId) {
    return _.includes(this.state.expandedRowIds, rowId);
  }

  getDetailsRow(rowId, isExpanded) {
    // TODO use this.props/tableConstants to get project
    let proj = '';
    switch (rowId) {
      case 'row1':
        proj = 'pipes';
        break;
      case 'row2':
        proj = 'music';
        break;
      case 'row3':
        proj = 'nush';
        break;
      case 'row4':
        proj = 'tetris';
        break;
    }
    return <DetailRow project={proj} rowId={rowId} shouldDisplay={isExpanded} />
  }
  
  render() {
    const { data, tableType } = this.props;
    const allRows = this.createRows(data);

    return (
      <div className={tableType}>
        <table id="simple-board">
          <tbody>
            {allRows}
          </tbody>
        </table>
      </div>        
    )
  }
}
  
export default Table;
