import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Create from '../components/Create';

class CreatePage extends Component {
  render() {
    return <Create {...this.props} />
  }
}

function mapStateToProps(state) {
  const { project } = state;

  return {
    name: project.name,
    output: project.output,
    completed: project.completed,
    folder: project.folder
  }
}

export default connect(mapStateToProps)(CreatePage)
