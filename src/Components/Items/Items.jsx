import React from "react";
import styles from "./Items.module.css";

const Items = () => {
  return (
    <>
      <div className="container text-center">
          <div className="mt-2 mb-2 fs-2 fw-bold">Your Items</div>
        <div className="row">
          <div className="col-md-6">Footwear</div>
          <div className="col-md-6">Clothes</div>
        </div>
        <div className="row">
          <div className="col-md-6">Books</div>
          <div className="col-md-6">Money</div>
        </div>
      </div>
    </>
  );
};

export default Items;