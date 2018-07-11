import React from 'react';

// A placeholder table
function emptyRows(totalRows, totalCols) {

    let rows = [];
    for (let rowNum = 0; rowNum < totalRows; rowNum++) {
      let rowID = `row${rowNum}`;
      let cells = [];
      for (let col = 0; col < totalCols; col++) {
        let cellID = `cell${col}-${rowNum}`;
        cells.push(<td key={col} id={cellID}>cell</td>);
      }
      rows.push(<tr key={rowNum} id={rowID}>{cells}</tr>);
    }

    return rows;
}

// Table for ProjectsPage
function projectRows() {
    let totalRows = 4; // includes headers
    let totalCols = 3;

    let headers = ['Project Name', 'Language', 'Description'];

    let projectNames = ['Pipe Game', 'Music Editor', 'Nush Shell'];
    let lang = ['C++', 'Java', 'C'];
    let desc = ['A 2D time-based puzzle game', 'Program to create, load, display, and play proprietary music files', 'A simple shell that can execute simple commands. Utilized parallel programming'];

    // Build the table
    let rows = [];
    for (let rowNum = 0; rowNum < totalRows; rowNum++) {
      let rowID = `row${rowNum}`;
      let cells = [];
      for (let col = 0; col < totalCols; col++) {
        let cellID = `cell${rowNum}-${col}`;
        // Set up first row (headers)
        if (rowNum === 0) {
            cells.push(<td key={col} id={cellID} className='cellHeader'>{headers[col]}</td>);
            continue;
        }
        // Populate the rest of the table
        switch(col) {
            case 0:
                cells.push(<td key={col} id={cellID} className='cell'>{projectNames[rowNum - 1]}</td>);
                break;
            case 1:
                cells.push(<td key={col} id={cellID} className='cell'>{lang[rowNum - 1]}</td>);
                break;
            case 2:
                cells.push(<td key={col} id={cellID} className='cell'>{desc[rowNum - 1]}</td>);
                break;
        }
      }
      rows.push(<tr key={rowNum} id={rowID}>{cells}</tr>);
    }

    return rows;
}

export { emptyRows, projectRows };