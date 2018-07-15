import React, { Component } from 'react';
import Table from '../TableComponent/Table';
import { projectMatrix } from '../TableComponent/tableConstants';


class ProjectsPage extends Component {
    render() {
        return (
          <div class='primaryContainer'>
            <h3>Projects</h3>
            <br/>
            <Table tableType='projTable' isExpandable={true} data={projectMatrix}/>
          </div>
        )
    }
}

export default ProjectsPage;
