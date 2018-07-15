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
    if (rowId === 'row0' || !isExpandable) return;
    if (!this.isRowExpanded(rowId)) {
      this.state.expandedRowIds.push(rowId);
      this.setState({expandedRowIds: this.state.expandedRowIds});
    } else {
      this.setState({ expandedRowIds: this.state.expandedRowIds.filter(e => e !== rowId) });
    }
    console.log(this.state);
  }

  isRowExpanded(rowId) {
    return _.includes(this.state.expandedRowIds, rowId);
  }

  getDetailsRow(rowId) {
    let proj = '';
    rowId === 'row1' ? proj = 'pipes' : proj = '';
    return <DetailRow project={proj} />
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
