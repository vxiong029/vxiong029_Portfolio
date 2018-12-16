import React, { Component } from 'react';

class Admin extends Component {
  state = {
    newProject: {
      name: '',
      description: '',
      tag: '',
      thumbnail: '',
      website: '',
      github: '',
      date_completed: ''
    }
  }
  // submit the form
  submitHandle = (event) => {
    event.preventDefault();
    console.log('in submitHandle!');
  }
  // handleChange
  handleChange = propertyName => event => {
    this.setState({
      newProject: {
        ...this.state.newProject,
        [propertyName]: event.target.value
      }
    })
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      <h1>New Project</h1>
        {JSON.stringify(this.state.newProject)}
        <form onSubmit={this.submitHandle}>
          <input type="text" placeholder="Project Name" onChange={this.handleChange('name')}></input>
          <input type="date" placeholder="Date" onChange={this.handleChange('date')}></input>
          <select name="tags" onChange={this.handleChange('tag')}>
            <option value="React">React</option>
            <option value="jQuery">jQuery</option>
            <option value="Node">Node</option>
            <option value="SQL">SQL</option>
            <option value="Redux">Redux</option>
            <option value="HTML">HTML</option>
          </select>
          <input type="text" placeholder="Thumbnail" onChange={this.handleChange('thumbnail')}></input>
          <input type="text" placeholder="Github URL" onChange={this.handleChange('github')}></input>
          <input type="text" placeholder="Website URL (optional)" onChange={this.handleChange('website')}></input>
          <p>
            <textarea type="text" placeholder="Description" onChange={this.handleChange('description')}></textarea>
          </p>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Admin;
