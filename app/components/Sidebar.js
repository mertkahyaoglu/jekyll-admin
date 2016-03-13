import React from 'react';
import { Link } from 'react-router';
import styles from './assets/styles/sidebar.css';

const Sidebar = ({project}) => (
  <div className={styles.container}>
    <h3 className={styles.projectName}>{project}</h3>
    <div className={styles.sidebarItem}>
      Pages
    </div>
    <div className={styles.sidebarItem}>
      Posts
    </div>
    <div className={styles.sidebarItem}>
      Plugins
    </div>
    <div className={styles.sidebarItem}>
      Settings
    </div>
  </div>
)

export default Sidebar
