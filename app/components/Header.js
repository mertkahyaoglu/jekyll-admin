import React from 'react';
import { Link } from 'react-router';
import styles from './assets/styles/header.css';

const Header = ({name, path, encodedpath}) => (
  <nav>
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={require("./assets/images/logo.png")} />
      </Link>
      <div className={styles.btn_container}>
        <Link to="/create">
          <img src={require("./assets/images/add.png")} width="32" />
        </Link>
      </div>
    </div>
  </nav>
)

export default Header
