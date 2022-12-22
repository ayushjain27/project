import React from 'react'
import styles from './Quotes.module.css'

const Quotes = () => {
 
  return (
    <>
        <div className={`${styles.containerFluid} container-fluid p-3`}>
            <div className={styles.box}>
              <span className={styles.span}></span>
              <p className={`${styles.text} fs-4 fw-bold text-center`}>Life gives you 100 reasons to smile. Be a reason for someone</p>
            </div>
        </div>
        <div className={`${styles.JoinContainer} d-flex justify-content-center align-items-center w-100 p-4`}>
            <div className={styles.Join}>Join Us/Register</div>
        </div>
    </>
  )
}

export default Quotes
