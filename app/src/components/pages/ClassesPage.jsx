import React, { Component } from 'react';
import Table from '../TableComponent/Table';
import { classMatrix } from '../TableComponent/tableConstants';

class ClassesPage extends Component {
    render() {
        return (
          <div class='primaryContainer'>
            <h3>Classes</h3>
            <br/>
            <Table tableType='classTable' isExpandable={false} data={classMatrix}/>
          </div>
        )
    }
}

export default ClassesPage;
