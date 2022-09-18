import React from "react";
import styles from "./Items.module.css";

const Items = () => {
  return (
    <>
      <div className="container text-center">
          <div className="mt-2 mb-2 fs-2 fw-bold">Your Items</div>
        <div className="row">
          <div className="col-md-6 btn btn-outline-warning">Footwear</div>
          <div className="col-md-6 btn btn-outline-warning">Clothes</div>
        </div>
        <div className="row">
          <div className="col-md-6 btn btn-outline-warning">Books</div>
          <div className="col-md-6 btn btn-outline-warning">Money Deposit</div>
        </div>
      </div>
    </>
  );
};

export default Items;