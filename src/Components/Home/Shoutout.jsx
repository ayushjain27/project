import React from "react";
import styles from "./Shoutout.module.css";

const Shoutout = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`${styles.col} col-6`}>
            <div className={`${styles.box} d-flex justify-content-center align-items-center fw-bold text-center text-white`}>
              Ayush from Delhi donated 5 pair of shoes and clothes
            </div>
          </div>
          <div className={`${styles.col} col-6`}>
            <div className={`${styles.box} d-flex justify-content-center align-items-center fw-bold text-center text-white`}>
              next shoutout can b yours please donate to improve life of a poor
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoutout;
