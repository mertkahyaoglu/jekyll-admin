import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './assets/styles/project.css';
import gstyles from './assets/styles/global.css';
import LocalStorageUtils from '../utils/LocalStorage';
import { updateConfig } from '../actions/project';

export default class Project extends Component {

  handleBtnClick() {
    const { dispatch, params } = this.props
    const title = ReactDOM.findDOMNode(this.refs.inp_title).value
    const description = ReactDOM.findDOMNode(this.refs.inp_desc).value
    const email = ReactDOM.findDOMNode(this.refs.inp_email).value
    const url = ReactDOM.findDOMNode(this.refs.inp_url).value
    const baseurl = ReactDOM.findDOMNode(this.refs.inp_baseurl).value
    dispatch(updateConfig(params.project, {title,description,email,url,baseurl,markdown:'kramdown'}))
  }

  render() {
    const { params, config, updated } = this.props
    const projectName = LocalStorageUtils.get(params.project)

    return (
      <div className={styles.wrapper}>
        <Header/>
        <div className={styles.container}>
          <Sidebar project={projectName} />
          <div className={styles.contentContainer}>
            <h2 className={styles.title}>Configuration</h2>
            <div className={styles.formContainer}>
              <div>
                <input
                  className={gstyles.input}
                  defaultValue={config.title}
                  ref="inp_title"
                  placeholder="Title"
                />
              </div>
              <div>
                <textarea
                  className={gstyles.textarea}
                  defaultValue={config.description}
                  ref="inp_desc"
                  placeholder="Description"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <input
                  className={gstyles.input}
                  defaultValue={config.email}
                  ref="inp_email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className={gstyles.input}
                  defaultValue={config.url}
                  ref="inp_url"
                  placeholder="URL"
                />
              </div>
              <div>
                <input
                  className={gstyles.input}
                  defaultValue={config.baseurl}
                  ref="inp_baseurl"
                  placeholder="Base URL"
                />
              </div>
              <a className={gstyles.btn} onClick={this.handleBtnClick.bind(this)}>Save</a>
              {
                updated &&
                <div className={gstyles.shell}>
                	<p className={gstyles.line}>
                	  <span className={gstyles.path}>~</span>
                	  <span className={gstyles.prompt}>$</span>
                	  <span className={gstyles.command}>Configuration updated.</span>
                	</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  config: PropTypes.object.isRequired,
  updated: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired
}
