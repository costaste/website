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
    };
  }

  // Table for ProjectsPage
  createRows(matrix) {
    const { isExpandable } = this.props;

    const totalRows = matrix.length;
    const totalCols = matrix[0].length;

    // Build the table
    const rows = [];
    for (let rowNum = 0; rowNum < totalRows; rowNum++) {
      const rowID = `row${rowNum}`;
      const cells = [];
      for (let col = 0; col < totalCols; col++) {
        const cellID = `cell${rowNum}-${col}`;
        // Decide if this is a header cell or not, then add cell to array
        if (rowNum === 0) {
          cells.push(
            <th
              key={col}
              id={cellID}
              className='cellHeader'
              colSpan={matrix[rowNum][col].span || 1}
            >
              {matrix[rowNum][col].value}
            </th>)
          ;
        } else {
          cells.push(
            <td
              key={col}
              id={cellID}
              className='cell'
            >
              {matrix[rowNum][col]}
            </td>
          );
        }
      }

      // 1st part of conditional is only relevant to expandable tables
      if (isExpandable && rowNum !== 0 ) {
        // plus/minus for expand/collapse
        cells.push(<ExpandButton toggle={this.handleClick} rowId={rowID} />);
      }

      rows.push(
        <tr
          className='tableRow'
          key={rowNum}
          id={rowID}
        >
          {cells}
        </tr>
      );

      // Add expanded row if necessary
      if (isExpandable && rowID !== 'row0') {
        const isExpanded = this.isRowExpanded(rowID);
        const detailRow = this.getDetailsRow(rowNum, rowID, isExpanded);
        rows.push(detailRow);
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
      this.setState(prevState => ({
        expandedRowIds: prevState.expandedRowIds
          .filter((currRowId) => (currRowId !== rowId))
          .concat(rowId)
      }));
    } else {
      // Remove the newly collapsed row from the list by filtering against it
      this.setState(prevState => ({
        expandedRowIds: prevState.expandedRowIds.filter(e => e !== rowId)
      }));
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
