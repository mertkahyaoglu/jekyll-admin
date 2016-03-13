import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';

class HomePage extends Component {
  render() {
    return <Home {...this.props} />
  }
}

function mapStateToProps(state) {
  const { project } = state;

  return {
    projects: project.projects
  }
}

export default connect(mapStateToProps)(HomePage)
