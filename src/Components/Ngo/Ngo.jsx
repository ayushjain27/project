import React, { useState, useEffect } from 'react'
import NgoNavbar from '../NgoNavbar/NgoNavbar'
import Carousel from '../Home/Carousel'
import styles from './Ngo.module.css'
import Footer from '../Home/Footer'
import { useNavigate } from "react-router-dom";

const Ngo = () => {
  // Get All Details
  const host = "http://localhost:5000"
  const [details, setDetails] = useState([])
  const navigate = useNavigate()
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
          <h2>Pending request</h2>
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
        {details.map((item) => {
          return (
            <>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <th scope="row">1</th>
                    <td colSpan='2'>{item.title}</td>
                    <td colSpan='2'>{item.description}</td>
                    <td>
                      <button type="button" class="btn btn-success" style={{ marginLeft: '5px' }}>Accept</button><span>-</span>
                      <button type="button" class="btn btn-danger">Reject</button>
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
          <h2>list of items to be donated</h2>
        </div>
        <table class="table table-striped">
          <thead>
            <tr className='table-dark'>
              <th scope="col"></th>
              <th scope="col">sno</th>
              <th scope="col" colSpan='2'>item description</th>
              <th scope="col">quantity</th>
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
                <button type="button" class="btn btn-success" style={{ marginLeft: '5px' }}>donation-done</button>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>

              <th scope="row">2</th>
              <td colSpan='2'>jeans</td>
              <td>3</td>
              <td><button type="button" class="btn btn-success" style={{ marginLeft: '5px' }}>donation-done</button></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <th scope="row">3</th>
              <td colspan="2">t-shirt</td>
              <td>2</td>
              <td><button type="button" class="btn btn-success" style={{ marginLeft: '5px' }}>donation-done</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>

  )
}

export default Ngo