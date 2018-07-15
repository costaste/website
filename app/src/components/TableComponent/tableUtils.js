import React from 'react';
import { projectMatrix, classMatrix } from './tableConstants';
import {isRowExpanded, handleRowClick } from './Table';

/**
 * TODO:
 * - Refactor so that column content isn't defined in func, make one createTable func for all Tables
 */

// // A placeholder table
// function emptyRows(totalRows, totalCols) {

//     let rows = [];
//     for (let rowNum = 0; rowNum < totalRows; rowNum++) {
//       let rowID = `row${rowNum}`;
//       let cells = [];
//       for (let col = 0; col < totalCols; col++) {
//         let cellID = `cell${col}-${rowNum}`;
//         cells.push(<td key={col} id={cellID}>cell</td>);
//       }
//       rows.push(<tr key={rowNum} id={rowID}>{cells}</tr>);
//     }

//     return rows;
// }

// // Table for ProjectsPage
// function projectRows(matrix) {

//     let totalRows = matrix.length;
//     let totalCols = matrix[0].length;

//     // Build the table
//     let rows = [];
//     for (let rowNum = 0; rowNum < totalRows; rowNum++) {
//       let rowID = `row${rowNum}`;
//       let cells = [];
//       for (let col = 0; col < totalCols; col++) {
//         let cellID = `cell${rowNum}-${col}`;
//         let cellType = (rowNum === 0 ? 'cellHeader' : 'cell');
//         // TODO use 'th' instead of 'td' for header row?
//         cells.push(<td key={col} id={cellID} className={cellType}>{matrix[rowNum][col]}</td>);
//       }
//       rows.push(<tr key={rowNum} id={rowID} onClick={handleRowClick}>{cells}</tr>);
//     //   if (isRowExpanded(rowID)) {
//     //       rows.push(<tr id={rowID + '-expanded'}>cell</tr>);
//     //   }
//     }

//     return rows;
// }

// // Table for ClassesPage
// function classRows() {
//     let totalRows = classMatrix[1].length + 1;
//     let totalCols = classMatrix[0].length;
//     let headers = classMatrix[0];
//     let classNames = classMatrix[1];
//     let lang = classMatrix[2];
//     let desc = classMatrix[3];

//     // Build the table
//     let rows = [];
//     for (let rowNum = 0; rowNum < totalRows; rowNum++) {
//       let rowID = `row${rowNum}`;
//       let cells = [];
//       for (let col = 0; col < totalCols; col++) {
//         let cellID = `cell${rowNum}-${col}`;
//         // Set up first row (headers)
//         let cellType = (rowNum === 0 ? 'cellHeader' : 'cell'); 
//         if (rowNum === 0) {
//             cells.push(<td key={col} id={cellID} className='cellHeader'>{headers[col]}</td>);
//             continue;
//         }
//         // Populate the rest of the table
//         // cells.push(<td key={col} id={cellID} className='cell'>{classMatrix[][]}</td>);
//         // switch(col) {
//         //     case 0:
//         //         cells.push(<td key={col} id={cellID} className='cell'>{classNames[rowNum - 1]}</td>);
//         //         break;
//         //     case 1:
//         //         cells.push(<td key={col} id={cellID} className='cell'>{lang[rowNum - 1]}</td>);
//         //         break;
//         //     case 2:
//         //         cells.push(<td key={col} id={cellID} className='cell'>{desc[rowNum - 1]}</td>);
//         //         break;
//         // }
//       }
//       rows.push(<tr key={rowNum} id={rowID}>{cells}</tr>);
//     }

//     return rows;
// }

export { emptyRows, projectRows, classRows };