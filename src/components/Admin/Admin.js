import React, { Component } from 'react';
import {connect} from 'react-redux';
import AdminList from './AdminList';

class Admin extends Component {
  state = {
    newProject: {
      name: '',
      description: '',
      thumbnail: '',
      website: '',
      github: '',
      date_completed: '',
      tags: 0
    }
  }
  // submit the form
  submitHandle = (event) => {
    event.preventDefault();
    console.log('in submitHandle!', this.state.newProject);
    this.props.dispatch({
      type: 'POST_FORM',
      payload: this.state
    })
  }
  // handleChange for form
  handleChange = propertyName => event => {
    this.setState({
      newProject: {
        ...this.state.newProject,
        [propertyName]: event.target.value
      }
    })
  }
  // handleChange for tag
  // tagHandleChange = (event) => {
  //   this.setState({ 
  //     tags: event.target.value 
  //   })
  // }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      <h1>New Project</h1>
        <p>
          {JSON.stringify(this.state)}
        </p>
        <form onSubmit={this.submitHandle}>
          <input type="text" placeholder="Project Name" onChange={this.handleChange('name')}></input>
          <input type="date" placeholder="Date" onChange={this.handleChange('date_completed')}></input>
          <select name="tags" onChange={this.handleChange('tags')}>
            <option value={1}>React</option>
            <option value={2}>jQuery</option>
            <option value={3}>Node</option>
            <option value={4}>SQL</option>
            <option value={5}>Redux</option>
            <option value={6}>HTML</option>
          </select>
          <input type="text" placeholder="Thumbnail" onChange={this.handleChange('thumbnail')}></input>
          <input type="text" placeholder="Github URL" onChange={this.handleChange('github')}></input>
          <input type="text" placeholder="Website URL (optional)" onChange={this.handleChange('website')}></input>
          <p>
            <textarea type="text" placeholder="Description" onChange={this.handleChange('description')}></textarea>
          </p>
          <input type="submit" value="Submit"></input>
        </form>
        <AdminList />
      </div>
    );
  }
}

export default connect()(Admin);
