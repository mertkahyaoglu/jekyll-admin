import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import {createProject, chooseFolder} from '../actions/project';
import styles from './assets/styles/create.css';
import gstyles from './assets/styles/global.css';
import Header from './Header';

class Create extends Component {

  handleBtnClick() {
    const {dispatch, folder} = this.props
    let name = ReactDOM.findDOMNode(this.refs.inp_name).value
    dispatch(createProject(name,folder))
  }

  handleBrowse() {
    const {dispatch} = this.props;
    dispatch(chooseFolder())
  }

  render() {
    const {output, name, folder} = this.props;
    return (
      <div>
        <Header/>
        <div className={styles.container}>
          <h2 className={styles.title}>Create Jekyll Project</h2>
          <div className={styles.innercontainer}>
            <a className={gstyles.btn} onClick={this.handleBrowse.bind(this)}>
              Choose project folder
            </a>
            {folder && <span className={styles.folder}>{folder}</span>}
          </div>
          <div className={styles.innercontainer}>
            <input
              className={gstyles.input}
              ref="inp_name"
              placeholder="Project Name"
            />
            <a className={gstyles.btn} onClick={this.handleBtnClick.bind(this)}>Create</a>
          </div>
          {
            output &&
            <div className={gstyles.shell}>
            	<p className={gstyles.line}>
            	  <span className={gstyles.path}>~</span>
            	  <span className={gstyles.prompt}>$</span>
            	  <span className={gstyles.command}>{output}</span>
            	</p>
            </div>
          }
        </div>
      </div>
    )
  }
}

Create.propTypes = {
  completed: PropTypes.bool.isRequired,
  output: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  folder: PropTypes.string.isRequired,
}

export default Create;
