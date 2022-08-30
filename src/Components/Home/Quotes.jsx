import React from 'react'
import styles from './Quotes.module.css'

const Quotes = () => {
 
  return (
    <>
        <div className={`${styles.containerFluid} container-fluid p-3`}>
            <div className={styles.box}>
              <span className={styles.span}></span>
              <p className={styles.text}>Ayush</p>
            </div>
        </div>
        <div className={styles.JoinContainer}>
            <div className={styles.Join}>Join Us/Register</div>
        </div>
    </>
  )
}

export default Quotes
