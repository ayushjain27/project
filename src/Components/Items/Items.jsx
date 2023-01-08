import React, { useState, useEffect } from "react";
import styles from "./Items.module.css";
import { useNavigate } from "react-router-dom";

const Items = () => {
  // Get All Details
  const host = "http://localhost:5000"
  const [details, setDetails] = useState([])
  const navigate = useNavigate()  
  const getDetails = async () => {
    // TODO : API Call
    const response = await fetch(`${host}/api/details/fetchalldetails`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });

    const json = await response.json()
    console.log(json)
    setDetails(json)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getDetails()
    }
    else {
      // redirect
      navigate("/login")
    }
  }, [])

  return (
    <>
      <div className="container text-center">
        <div className="mt-2 mb-2 fs-2 fw-bold">Your Items</div>
        {details.map((item) => {
          return (
            <>
              <div className="row my-2">
                <div className="col-md-6 p-2">
                  <div className="box w-100 btn btn-warning">
                    <h3 className="p-1">Footwear</h3>
                  </div>
                  {item.category == "shoes" && (
                    <div className={`${styles.entries} box w-100 btn btn-danger`}>
                      <div className="row mt-1 p-1" style={{ backgroundColor: 'black' }}>
                        <div className="col-12 p-1" style={{ backgroundColor: 'black' }}>
                          <div className="row">
                            <div className="col-3">{item.image}</div>
                            <div className="col-6">{item.title}</div>
                            <div className="col-3">{item.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-6 p-2">
                  <div className="box w-100 btn btn-warning">
                    <h3 className="p-1">Clothes</h3>
                  </div>
                  {item.category == "clothes" && (
                    <div className={`${styles.entries} box w-100 btn btn-danger`}>
                      <div className="row mt-1 p-1" style={{ backgroundColor: 'black' }}>
                        <div className="col-12 p-1" style={{ backgroundColor: 'black' }}>
                          <div className="row">
                            <div className="col-3">{item.image}</div>
                            <div className="col-6">{item.title}</div>
                            <div className="col-3">{item.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  );
};

export default Items;
