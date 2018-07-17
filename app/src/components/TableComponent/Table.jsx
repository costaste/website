import React, { Component } from 'react';
import _ from 'lodash';
import DetailRow from './DetailRow';

class Table extends Component {

  constructor(props) {
    super(props);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.state = {
      expandedRowIds: []
    }
  }

  // Table for ProjectsPage
  createRows(matrix) {

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
        cells.push(<td key={col} id={cellID} className={cellType}>{matrix[rowNum][col]}</td>);
      }
      rows.push(<tr key={rowNum} id={rowID} onClick={() => this.handleRowClick(rowID)}>{cells}</tr>);
      if (this.isRowExpanded(rowID)) {
          rows.push(this.getDetailsRow(rowID));
      }
    }

    return rows;
  }

  handleRowClick(rowId) {
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

  getDetailsRow(rowId) {
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
    }
    return <DetailRow project={proj} rowId={rowId} />
  }
  
  render() {
    const { data, tableType } = this.props;
    const allRows = this.createRows(data);

    return (
      <div className={tableType}>
        <div className="row">
          <div className="col s12 board">
            <table id="simple-board">
              <tbody>
                {allRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>        
    )
  }
}
  
export default Table;
