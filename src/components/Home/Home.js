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
    return (
      <div className="App">
        {JSON.stringify(this.props.reduxState.projects)}
      </div>
    );
  }
}

const mapState = reduxState => ({
  reduxState
})

export default connect(mapState)(Home);
