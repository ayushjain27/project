import React from "react";
import styles from "./Footer.module.css";

const footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{marginTop: 10}}>
          <div className={`${styles.col} col-6`}>
            <div className={`${styles.box} d-flex justify-content-center align-items-center text-white text-center`} style={{padding: 20, borderTopLeftRadius: 20}}>
              <div className={`${styles.footcontain} row`}>
                <div className="col-12">® ALL RIGHTS ARE RESERVED</div>
                <div className="col-12">pragati@gmail.com</div>
              </div>
            </div>
          </div>
          <div className={`${styles.col} col-6`}>
            <div className={`${styles.box} d-flex justify-content-center align-items-center text-white text-center`} style={{padding: 20, borderTopRightRadius: 20}}>
            <div className={`${styles.footcontain} row`}>
                <div className="col-12">Pragati & Co.</div>
                <div className="col-12">Ichalkaranji, Maharashtra</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
