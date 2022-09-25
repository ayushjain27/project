import React from "react";
import styles from "./Items.module.css";

const Items = () => {
  return (
    <>
      <div className="container text-center">
        <div className="mt-2 mb-2 fs-2 fw-bold">Your Items</div>
        <div className="row my-2">
          <div className="col-md-6 p-2">
            <div className="box w-100 btn btn-warning">
              <h3 className="p-1">Footwear</h3>
            </div>
            <div className={`${styles.entries} box w-100 btn btn-danger`}>
              <h3 className="p-1">Footwear</h3>
            </div>
          </div>
          <div className="col-md-6 p-2">
            <div className="box w-100 btn btn-warning">
              <h3 className="p-1">Clothes</h3>
            </div>
            <div className={`${styles.entries} box w-100 btn btn-danger`}>
              <h3 className="p-1">Clothes</h3>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-6 p-2">
            <div className="box w-100 btn btn-warning">
              <h3 className="p-1">Books</h3>
            </div>
            <div className={`${styles.entries} box w-100 btn btn-danger`}>
              <h3 className="p-1">Books</h3>
            </div>
          </div>
          <div className="col-md-6 p-2">
            <div className="box w-100 btn btn-warning">
              <h3 className="p-1">Money Deposit</h3>
            </div>
            <div className={`${styles.entries} box w-100 btn btn-danger`}>
              <h3 className="p-1">Money Deposit</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
