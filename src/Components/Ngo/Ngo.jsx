import React, { useState, useEffect } from 'react'
import NgoNavbar from '../NgoNavbar/NgoNavbar'
import Carousel from '../Home/Carousel'
import styles from './Ngo.module.css'
import Footer from '../Home/Footer'
import { useNavigate } from "react-router-dom";

const Ngo = () => {
  // Get All Details
  const host = "https://donationsystembackendproject.onrender.com"
  const [details, setDetails] = useState([])
  // const [id, setId] = useState(null);
  // const [status, setStatus] = useState("default");
  const navigate = useNavigate();

  const UpdateStatus = async (id, status) => {
    // e.preventDefault();
    // const {name, email, password} = credentials;
    const response = await fetch(`https://donationsystembackendproject.onrender.com/api/status/addstatus/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ status })
      // body: JSON.stringify({ title, description, image })
    });
    console.log(id);
    console.log(status);
    const json = await response.json()
    console.log(json);
    // if(json.success){
    //   // Save the auth token and redirect
    //   props.showAlert("Items Added Successfully", "success")
    //   navigate('/itemsbox');
    // }
    // else{
    //   props.showAlert("Invalid Credential", "danger")
    // }  
  }

  const getDetails = async () => {
    // TODO : API Call
    const response = await fetch(`${host}/api/details/fetchalldetail`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
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
      navigate("/Ngologin")
    }
  }, [])

  return (
    <div>
      <NgoNavbar />
      <div className={`${styles.carouselb}`}>
        <Carousel />
      </div>
      <div className={styles.tablec}>
        <div className={styles.headtable}>
          <h2>Pending Request</h2>
        </div>
              <table class="table table-striped">
                <thead>
                  <tr className='table-dark'>
                    <th scope="col"></th>
                    <th scope="col">sno</th>
                    <th scope="col">title</th>
                    <th scope="col" colSpan='2'></th>
                    <th scope="col" colSpan='2'>item description</th>
                  </tr>
                </thead>
        {details.map((item, index) => {
          return (
            <>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <th scope="row">{index+1}</th>
                    <td colSpan='2'>{item.title}</td>
                    <td colSpan='2'>{item.description}</td>
                    <td>
                      <button onClick={()=>{UpdateStatus(item._id, "Accepted"); window.location.reload(); alert("You have accepted user request");}} style={{ marginLeft: '5px', display: `${item.status=="Rejected" ? 'none': " "}`}} type="button" class="btn btn-success">{item.status==="Accepted"?"Accepted":"Accept"}</button>
                      <span style={{ display: `${item.status=="default" ? " ": 'none'}`}}>-</span>
                      <button onClick={()=>{UpdateStatus(item._id, "Rejected"); window.location.reload(); alert("You have rejected user request");}} style={{ marginLeft: `${item.status=="Rejected" ? '5px': " "}`, display: `${item.status=="Accepted" ? 'none': " "}`}} type="button" class="btn btn-danger">{item.status==="Rejected"?"Rejected":"Reject"}</button>
                    </td>
                  </tr>
                </tbody>
                </>
              )
            })}
              </table>
      </div>
      <div className={styles.tablec}>
        <div className={styles.headtable}>
          <h2>List of Items to be Donated</h2>
        </div>
        <table class="table table-striped">
          <thead>
            <tr className='table-dark'>
              <th scope="col"></th>
              <th scope="col">Sno</th>
              <th scope="col" colSpan='2'>Item Description</th>
              <th scope="col">Quantity</th>
              <th scope="col"></th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <th scope="row">1</th>
              <td colSpan='2'>shirt</td>
              <td>4</td>
              <td>
                <button type="button" class="btn btn-success" style={{ marginLeft: '5px' }}>Donation-done</button>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>

              <th scope="row">2</th>
              <td colSpan='2'>jeans</td>
              <td>3</td>
              <td><button type="button" class="btn btn-success" style={{ marginLeft: '5px' }}>Donation-done</button></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <th scope="row">3</th>
              <td colspan="2">t-shirt</td>
              <td>2</td>
              <td><button type="button" class="btn btn-success" style={{ marginLeft: '5px' }}>Donation-done</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>

  )
}

export default Ngo