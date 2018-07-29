import React, { Component } from 'react';
import _ from 'lodash';
import DetailRow from './DetailRow';
import ExpandButton from './ExpandButton';
import { projectNames } from './tableConstants';

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
        // Decide if this is a header cell or not, then add cell to array
        rowNum === 0 ? 
        cells.push(<th key={col} id={cellID} className='cellHeader' colSpan={matrix[rowNum][col].span}>{matrix[rowNum][col].value}</th>) :
        cells.push(<td key={col} id={cellID} className='cell'>{matrix[rowNum][col]}</td>);
      }

      // 1st part of conditional is only relevant to expandable tables
      if (isExpandable && rowNum !== 0 ) {
        cells.push(<ExpandButton toggle={this.handleClick} rowId={rowID} />);

        rows.push(<tr className='tableRow' key={rowNum} id={rowID}>{cells}</tr>);
        const isExpanded = this.isRowExpanded(rowID);
        const detailRow = this.getDetailsRow(rowNum, rowID, isExpanded);
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
  }

  isRowExpanded(rowId) {
    return _.includes(this.state.expandedRowIds, rowId);
  }

  getDetailsRow(rowNum, rowId, isExpanded) {
    const proj = projectNames[rowNum - 1];
    return <DetailRow project={proj} rowId={rowId} shouldDisplay={isExpanded} />
  }
  
  render() {
    const { data, tableType } = this.props;
    const allRows = this.createRows(data);

    return (
      <div className={tableType}>
        <table>
          <tbody>
            {allRows}
          </tbody>
        </table>
      </div>        
    )
  }
}
  
export default Table;
