import React, { Component } from 'react';
import Table from '../TableComponent/Table';
import { projectRows } from '../TableComponent/tableUtils';

class ProjectsPage extends Component {
    render() {
        return (
          <div class='primaryContainer'>
            <h3>Projects</h3>
            <br/>
            <Table getRows={projectRows()}/>
          </div>
        )
    }
}

export default ProjectsPage;