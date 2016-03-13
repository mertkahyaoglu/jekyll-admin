import React from 'react';
import styles from './assets/styles/error.css';
import Header from './Header';

const Error = ({message}) => (
  <div className={styles.container}>
    <Header/>
    <h2 className={styles.message}>{message}</h2>
  </div>
)

export default Error
