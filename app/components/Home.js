import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './assets/styles/home.css';
import Header from './Header';
import { getAllExistingProjects } from '../actions/project';
import _ from 'underscore'

const ProjectRow = ({name, path, encodedpath}) => (
  <Link to={{pathname:`/project/${encodedpath}`, query:{path:path} }}>
    <div>{name}</div>
    <div>{path}</div>
  </Link>
)

export default class Home extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getAllExistingProjects())
  }

  renderProjectList() {
    const { projects } = this.props
    return _.map(projects, (name, path) => {
      let encodedpath = encodeURIComponent(path)
      return <ProjectRow name={name} path={path} encodedpath={encodedpath} key={path}/>
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <div className={styles.container}>
          <h2 className={styles.title}>My Projects</h2>
          <div className={styles.projectsContainer}>
            <div className={styles.projectsHeader}>
              <div>Project Name</div>
              <div>Path</div>
            </div>
            <div className={styles.projectBody}>
              {this.renderProjectList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  projects: PropTypes.object.isRequired
}
