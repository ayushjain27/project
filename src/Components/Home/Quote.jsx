import React from 'react'
import styles from './Quote.module.css'

const Quote = () => {

    return (
        <div className={`${styles.style} d-flex justify-content-center`} style={{paddingTop: 20, paddingBottom: 20}}>
            <span className={styles.style1}>A</span>
            <span className={styles.style2}>STEP</span>
            <span className={styles.style1}>TO</span>
            <span className={styles.style2}>IMPROVE</span>
            <span className={styles.style1}>THE</span>
            <span className={styles.style2}>LIVES</span>
            <span className={styles.style1}>OF</span>
            <span className={styles.style2}>POOR</span>
        </div>
    )
}

export default Quote
