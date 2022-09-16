import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const [toggle, setToggle] = useState('false')

    const handleClick = () => {
        setToggle(!toggle);        
    }

  return (
    <>
       <style jsx='true'>
                {`
                    .active {
                        width: 300px;
                        border-radius: 20px;
                    }
                    .active .toggle::before{
                        transform: translateY(0px) rotate(-405deg);
                    }
                    .active .toggle::after{
                        transform: translateY(0px) rotate(225deg);
                    }
                `}
            </style>
        <div className={`${styles.navigation} ${toggle ? "" : 'active'}`}>
            <ul>
                <li>
                    <a href="#">
                        <span className={styles.icon}><ion-icon name="logo-apple"></ion-icon></span>
                        <span className={styles.title}>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><ion-icon name="home-outline"></ion-icon></span>
                        <span className={styles.title}>Footwear</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><ion-icon name="person-outline"></ion-icon></span>
                        <span className={styles.title}>Clothes</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><ion-icon name="chatbubble-outline"></ion-icon></span>
                        <span className={styles.title}>Books</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><ion-icon name="help-outline"></ion-icon></span>
                        <span className={styles.title}>Money Deposit</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><ion-icon name="settings-outline"></ion-icon></span>
                        <span className={styles.title}>Setting</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <span className={styles.title}>Password</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><ion-icon name="log-out-outline"></ion-icon></span>
                        <span className={styles.title}>Sign Out</span>
                    </a>
                </li>
            </ul>
            <div onClick={handleClick} className={`${styles.toggle} toggle`}></div>
        </div>
    </>
  )
}

export default Sidebar
