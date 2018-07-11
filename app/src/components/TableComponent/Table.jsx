import React, { Component } from 'react';

class Table extends Component {
  // Starter code found at https://stackoverflow.com/questions/39462458/react-js-creating-simple-table
  constructor(props) {
    super(props);
    this.state = { 
      size: { 
        cols: 6,
        rows: 4
      } 
    }
  }
  
  render() {
    const { getRows } = this.props;

    // Build the table based on the size value
    let rows = [];
    for (let rowNum = 0; rowNum < this.state.size.rows; rowNum++) {
      let rowID = `row${rowNum}`;
      let cells = [];
      for (let col = 0; col < this.state.size.cols; col++) {
        let cellID = `cell${col}-${rowNum}`;
        cells.push(<td key={col} id={cellID}>cell</td>);
      }
      rows.push(<tr key={rowNum} id={rowID}>{cells}</tr>);
    }

    return (
      <div className="table">
        <div className="row">
          <div className="col s12 board">
            <table id="simple-board">
              <tbody>
                {getRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>        
    )
  }
}
  
export default Table;