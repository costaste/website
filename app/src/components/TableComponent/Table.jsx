import React, { Component } from 'react';

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
      rows.push(<tr key={rowNum} id={rowID} onClick={this.handleRowClick}>{cells}</tr>);
      if (this.isRowExpanded(rowID)) {
          rows.push(<tr id={rowID + '-expanded'}>cell</tr>);
      }
    }

    return rows;
  }

  handleRowClick(rowId) {
    const prevState = this.state;
    let currExpanded = prevState.expandedRowIds;
    const alreadyExpanded = currExpanded.includes(rowId);
    const newState = alreadyExpanded ? prevState : currExpanded.push(rowId);
    this.setState({expandedRowIds: newState});
  }

  isRowExpanded(rowId) {
    return this.state.expandedRowIds.includes(rowId);
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
