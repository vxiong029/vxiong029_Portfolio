import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminList extends Component {
  handleDelete = (id) => {
    // dispatches to rootSaga watcher with project.id
    this.props.dispatch({
      type: 'DELETE_PROJECTS',
      payload: id
    })
  }
  render() {
    // map out list from projects reducert
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
      <div>
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
