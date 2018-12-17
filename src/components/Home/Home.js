import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {
  // loads every time page refreshes
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_PROJECTS'
    })
  }
  render() {
    let projects = this.props.projects.map((project) => {
      return <div key={project.id}>
        <h2>{project.name}</h2>
        <h3>{project.to_char}</h3>
          <p>
            <img src={project.thumbnail} alt="project"></img>
          </p>
        <p>
          {project.description}
        </p>
        <p>
          <a href={project.github} target="blank">Github site</a> || <a href={project.website} target="blank">Website</a>
        </p>
      </div>
    })
    return (
      <div>
        <h1>Vang Xiong's Portfolio</h1>
        {projects}
      </div>
    );
  }
}

const mapState = reduxState => ({
  projects: reduxState.projects
})

export default connect(mapState)(Home);
