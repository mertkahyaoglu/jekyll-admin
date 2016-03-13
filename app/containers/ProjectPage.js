import React, {Component} from 'react';
import { connect } from 'react-redux';
import Project from '../components/Project';
import Error from '../components/Error';
import { readConfigFile } from '../utils/ProjectUtils';

class ProjectPage extends Component {
  render() {
    const { config } = this.props
    if (!config) {
      return <Error message="Can't find the project." />
    }
    return <Project {...this.props} />
  }
}

function mapStateToProps(state) {
  const { project, routing } = state;

  return {
    config: readConfigFile(routing.locationBeforeTransitions.query.path),
    updated: project.updated
  }
}

export default connect(mapStateToProps)(ProjectPage)
