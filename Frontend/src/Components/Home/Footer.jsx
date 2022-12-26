import React from "react";
import styles from "./Footer.module.css";

const footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={`${styles.col} col-6`}>
            <div className={`${styles.box} d-flex justify-content-center align-items-center text-white text-center`}>
              <div className={`${styles.footcontain} row`}>
                <div className="col-12">XYZ@ALL RIGHTS ARE RESERVED</div>
                <div className="col-12">XYZ@GMAIL.COM</div>
              </div>
            </div>
          </div>
          <div className={`${styles.col} col-6`}>
            <div className={`${styles.box} d-flex justify-content-center align-items-center text-white text-center`}>
            <div className={`${styles.footcontain} row`}>
                <div className="col-12">XYZ COMPANY</div>
                <div className="col-12">ABC, NEW DELHI-110089</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
