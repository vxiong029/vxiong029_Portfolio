import React, { Component } from 'react';
import {connect} from 'react-redux';

class AdminList extends Component {
  handleDelete = (id) => {
    this.props.dispatch({
      type: 'DELETE_PROJECTS',
      payload: id
    })
  }
  render() {
    let projectList = this.props.projects.map((project) => {
      return <tr key={project.id}>
        <td>
          {project.name}
        </td>
        <td>
          <button onClick={() => this.handleDelete(project.id)}>DELETE</button>
        </td>
      </tr>
    })
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projectList}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapState = reduxState => ({
  projects: reduxState.projects
}) 

export default connect(mapState)(AdminList);
