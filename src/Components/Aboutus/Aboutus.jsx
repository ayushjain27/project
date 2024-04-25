import React, { useState, useEffect } from "react";
import NgoNavbar from '../NgoNavbar/NgoNavbar';
import styles from "./Aboutus.module.css";
// import { MailIcon } from 'react-mail-icon'
import { Formik, Form, Field } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiTwotoneHome } from 'react-icons/ai';

const Aboutus = () => {
  const initialValues = {
    name: "",
    email: "",
    address: "",
    description: "",
    number: "",
    registration: "",
    instagram: "",
    image: "",
  }

  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const [registration, setRegistration] = useState("");
  const [instagram, setInstagram] = useState("");
  const [image, setImage] = useState("");
  const [details, setDetails] = useState([]);
  const [shouldAnimate, setAnimation] = useState(false);
  const [hover, setHover] = useState(false);
  const [hovers, setHovers] = useState(false);
  const [hover_1, setHover_1] = useState(false);
  const [length, setLength] = useState(0);

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    } else if (value.length < 2) {
      error = "*It must be greater than 2";
    }
    setName(value)
    return error;
  }

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "*This field is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "*Invalid email address";
    }
    setEmail(value)
    return error;
  };

  const validateAddress = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    } else if (value.length < 10) {
      error = "*It must be greater than 10";
    }
    setAddress(value);

    return error;
  }

  const validateDescription = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    } else if (value.length < 100) {
      error = "*It must be greater than 100";
    }
    setDescription(value);

    return error;
  }

  const validateNumber = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    } else if (!/^[0-9]{10}$/i.test(value)) {
      error = "*It must be 10 digit phone number";
    }
    setNumber(value);

    return error;
  }

  const validateRegistration = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    setRegistration(value);

    return error;
  }

  const validateInstagram = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    setInstagram(value);

    return error;
  }

  const validateImage = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    }
    setImage(value);

    return error;
  }

  const handleSubmit = async () => {
    // e.preventDefault();
    // const {name, email, password} = credentials;
    const response = await fetch("https://donationsystembackendproject.onrender.com/api/ngoinfo/info", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ name, email, address, description, image, number, registration, instagram })
    });

    const json = await response.json()
    console.log(json);

    // navigate('/itemsbox');
    if (json.success) {
      // Save the auth token and redirect
      alert("You have successfully submitted the form")
      setSubmit(true);
      window.location.reload();
    }
    else {
      // props.showAlert("Invalid Credential", "danger")
    }
  }
  
  const getDetails = async () => {
    // TODO : API Call
    const response = await fetch("https://donationsystembackendproject.onrender.com/api/ngoinfo/fetchallinfo", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    
    const json = await response.json()
    console.log(json)
    setDetails(json)
    setLength(json.length);
    console.log(length);
    // console.log(json[0].email);
    const BASE_URL = `mailto:${json[0]?.email}`;
    console.log(BASE_URL);
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getDetails()
    }
    else {
      // redirect
      // navigate("/login")
    }
  }, [])

  return (
    <>
      <NgoNavbar />
      {length==0 && (
        <>
          <div className="container">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="p-3">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label fw-bold">Enter Name*</label>
                        <Field
                          type="text"
                          className={`form-control ${errors.name && touched.name ? "border-danger" : ""}`}
                          placeholder='Enter Name'
                          id="name"
                          name="name"
                          validate={validateName}
                        />
                        {errors.name && touched.name &&
                          <div className='form-text text-danger'>
                            {errors.name}
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label fw-bold">Enter Email*</label>
                        <Field
                          type="text"
                          className={`form-control ${errors?.email && touched?.email ? "border-danger" : ""}`}
                          placeholder='Enter Email'
                          id="email"
                          name="email"
                          validate={validateEmail}
                        />
                        {errors?.email && touched?.email &&
                          <div className='form-text text-danger'>
                            {errors?.email}
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label fw-bold">Address*</label>
                        <Field as="textarea"
                          className={`form-control ${errors.address && touched.address ? "border-danger" : ""}`}
                          rows="2"
                          placeholder='Enter Address'
                          id="address"
                          name="address"
                          validate={validateAddress}
                        />
                        {
                          errors.address && touched.address &&
                          <div className="form-text text-danger">
                            {errors.address}
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label fw-bold">Description*</label>
                        <Field as="textarea"
                          className={`form-control ${errors.description && touched.description ? "border-danger" : ""}`}
                          rows="5"
                          placeholder='Enter description'
                          id="description"
                          name="description"
                          validate={validateDescription}
                        />
                        {
                          errors.description && touched.description &&
                          <div className="form-text text-danger">
                            {errors.description}
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label fw-bold">Phone Number*</label>
                        <Field
                          type="number"
                          className={`form-control ${errors.number && touched.number ? "border-danger" : ""}`}
                          placeholder='Enter phone number'
                          id="number"
                          name="number"
                          validate={validateNumber}
                        />
                        {
                          errors.number && touched.number &&
                          <div className="form-text text-danger">
                            {errors.number}
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label fw-bold">Date of Registration*</label>
                        <Field
                          type="date"
                          className={`form-control ${errors.registration && touched.registration ? "border-danger" : ""}`}
                          id="registration"
                          name="registration"
                          validate={validateRegistration}
                        />
                        {
                          errors.registration && touched.registration &&
                          <div className="form-text text-danger">
                            {errors.registration}
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label fw-bold">Instagram*</label>
                        <Field
                          type="text"
                          className={`form-control ${errors.instagram && touched.instagram ? "border-danger" : ""}`}
                          placeholder='Enter Instagram Link'
                          id="instagram"
                          name="instagram"
                          validate={validateInstagram}
                        />
                        {
                          errors.instagram && touched.instagram &&
                          <div className="form-text text-danger">
                            {errors.instagram}
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label fw-bold">Image*</label>
                        <Field
                          type="file"
                          className={`form-control ${errors.image && touched.image ? "border-danger" : ""}`}
                          placeholder='Choose Image'
                          id="image"
                          name="image"
                          validate={validateImage}
                        />
                        {
                          errors.image && touched.image &&
                          <div className="form-text text-danger">
                            {errors.image}
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12" style={{display: 'flex', flexDirection: 'row-reverse'}}>
                      <div className="my-2">
                        <div className="d-grid ms-auto">
                          <button type="submit" className="btn btn-dark button">Submit and Continue</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}
      {length>0 && (
        <>
          {details.map((item) => {
            return (
              <>
                <div className="d-flex flex-column justify-content-center align-items-center my-3">
                  <div style={{ borderRadius: '50%', border: '2px solid black', height: '200px', width: '200px' }}>
                    <img className="w-100 h-100 border border-radius rounded-circle" style={{ objectFit: 'cover' }} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                  </div>
                  <h2 className="my-3"><span class="badge bg-warning text-dark">{item.name}</span></h2>
                </div>
                <div className="container mt-4">
                  <div className=" row shadow p-3 mb-5 bg-body rounded border border-4 border-dark">
                    <div className="col-md-6 p-3 fw-bold d-flex justify-content-center align-items-center" style={{ height: '250px' }}>{item.description}</div>
                    <div className="col-md-6 p-3">
                      <div className="w-100 rounded" style={{ height: '250px' }}>
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAtAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA6EAACAQMDAgIHBgUDBQAAAAABAgMABBEFEiExURNBBiIyYXGB8BSRobHB0QcVQlLhFiNyFzM0U5L/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAiEQACAgICAgIDAAAAAAAAAAAAAQIRAxIhMQQTMkEiI1H/2gAMAwEAAhEDEQA/APTI80dSaZFFEXGetLZqHANTxSBHkc1IDNaw0Nil8awfTX0hj9HNGkuMo10/qW8bH2m7/AZzXh9z6S6xPdGabU7h5T/UJCv4AjFMlYjlR9HjFS4xXz1b+mWvQJsTVblk7PISf3ro9C/iXe2reHqQa5jbzZuR88fvW1ZlJHpOs36W8LAHJ8q871e6kvZD6pHurRv/AEssrtPGiDbccg/01n22qWU7lsrjFRbd8nRBKuDLWNo/aBFVrx5DCDC3UVo6pcRFD4OM81kadNmHa3JyRWsajf8ARiArArSScnmuus32gE5Irm9BtwsIZ3+VdPp7pI4QL0obcmcQ05lnAVQQK0tJtzEBxWjb20WwcCjpCq9BToixtuajszR9tNinFoD4dPsou2lisairNFuQ84rndRsvGZkkYlTXTTIccVi6hE4jc7sHHFK2FI4659HUWY7W4pVOdr7xWwwwOnNKl2KanPf9SLgniP8AGnf+I9wo9UHPxrzMTUvFOetV0RH2M9Kh/iVdo2ZI+Pca07X+J+9lUwyFicAccmvJA5HnV7TJcySyjGYk4z03HgfrQ0RvYzc9Ntfm1nVVlncsFJWNM8IoH5k8mue3MahPLF4yn/uMCTnt+9MJiRnAA/T6yap0T7dhxn8M1LcfLyoQLdOp7fXz/CpDpkdaFhouW13JGfVbHzqxLtuo82xWG4HI/sb9jWcCB7h3PUfX6UeJyDxwc/X17qV0xla6KTard2rNDMHVl6q2Rg08GqyhgQWHOTg1evbb+ZQ4H/kIMxt3H9p91YOxoZSkisrdmGDS6odSZ6P6K6+jyJBM4APc816ZYTWfhBw6/M185xytFIHRiCO1X/8AUupQptS6cKPKpvG30VWRVye+3vpVZafHueVcD31oaH6TWWqwCSCRSPca+XbzU7m6ctPMzE++r2g+kV1pLnwZG2E+zmm0kkJvFs+o5tWtYh68iD51O31G3uEykin4GvmLVfSy/u3ylw6j3NT6d6Z6tZQeHFcNx0LHNbWRtoWfULXUSYyw5pzcw4zvH3181XP8QtUmiRd5Dg8tuPNWj/EO/kh272Ugf3VqmbaB9ESXMPhlt4wPfXL3etW0909ssq5HXmvEG9P9YUMqycHpkmseD0hvYr17syF5X65PFDSbDvBH0OYYDzvWlXhH+udWHSQAfE0qX1zG9kDG8ZcVBJ1BrVGi8dalDoOTlmq3siRWOTMtrgEeVHs5DHp8rDrJKB8gP81tLoEPniqutWKWdtEEOFJb7+P2rRyRbo08UoxtmMpwcnk++ih8HzI7fXw/Ggf1cdaIpXjn4fX3VQmWUk4wfv8A1/I0Xfjrwe3186rKvHOAOx44+vyqQIPQ7uM5P186VjosB2PI6d/L64/GiRuBgKS3lz0+uRQACWyT6/5c/v8AnRFPGAOPIe7H7ZHyoBLqOT14HYUDUrM3Hh3EXJA2OM5+B/MfdTK2cfX1/mrtnKFfa5BDAg/4pW6QUuTHOmzu2QDT/wAomPetw3Kqai18PKp7yLaQMUaLKx5yKMmgPxk1qG9GKGb4++tvM2mMrr6PIRyaMvo7B5n8ac33nmhNet/dQubB+tfQX+QWw8x99TXSLNfMGqLXbdzVd7tweCaapf0XaH8LGqaVAse6EjNYbwbByavyXjsMHpVCYs5zjiqRv7JypvgYRKR1FPQSG99KnoU7ZXyaIpOaQtyq5NJfV5NcVo7eQzSkCszXwZbJMugIfgM2OMVfOChrL12NZbNGx6yP1HvFNi+Qub4GAVVSN8mT2WpI232Fwe/mfr9KjsCnC1IKcZA48vr5V2HEFXBPfPn25/fn50QOvUA9/r8RVZiqDBb/AD9CoiZ3dUi9onA7ZoMZM29L0q51N/DtUDnjOTjI+sVuS+ht9FAXae38TyQt1Px+NXNAji0fTHuZ2CFVwGJ6n3UPSE1XU5hcXkjJEGyiKMHHdvf7q4Z5p266R6uLxcVLbtnOxCzhm8PULiVJFOGghT1wR5HPyrcg0gag5h0m2ETJz4k78OvTIIyflitrWdKGo3H2iwuLSS4VFR45FKsQPMMPP4g8dqFpV7Z6ZuN+0qSHMaqi9sFjnyA4594q2NwyLa+TlzRyYXrrwc/c6JqcNw0Jsp5GUZ3RRl1I7ggVmMMGu41H0qso7eWGze7zNEQZ7a5Cuqnz3Fh+xrkzBZ3lyqabdqVZRj7VIBIxxk5wMfdRkq5Jxe3BSp1AJ5ol1bTW0pjniaNx5MKFzS2M4jsq0LYKJtPmDSOBRTFcQXg5qJt+4qyjAVNnHlWsGiKX2Udqb7KuOlWzLTFximti6lI2yZ6Uqs7xTUbZqRvSs/hjAoJf1eePjSvdQijjKp6zHoR5Vzt3cs/qxbu7Mec1GMWzok1E0rvVIoCY1DM3nt4/OqM2rpJCI2iIG7JJ86z5GPQuWPViT0queeT91dEIJcnPkk5cFlrtf6V5oLTu1QPIBqNUJUOST1NaGhQia+Xf7Cesf0rPPWtHRW8N5ZB1wAKWfRTH80dtbacb54lcE28DZSPJ27u+Olbd5dHSrdYYrdp5nwMA4CjuTWNo+plLaBMASdM++ulgijl3OzeK/ma8rI3fPR7uNKuDC0rSryBHnmvJPXbdtz6qZ8hXI65qU/FqzDAu5nkRskE7gFB7jC11+px6tdTKm2KGBTkLvJY/dwK4T0qjki1iUyABmAzjvjn9Kv4r/N2c/nL9Ka+mUQ3imSVzu2rvfPmfIfiPuqdwnhJF4kZYhgZCWI3eeB2+PeqpkYJJGDxIADk9jmrMojnaSYy52n2TnJyT07cY+6u5nkJI2Rdy3ASCSR5VhUeE8hyxjbkZ+HSiIwAyRV3RNEkvrO4MCgz24ijzv4Y4yw68Yz8KB4LIWjkXa6nDA+RrmlV0jqjs1bKrybjxTFWIq0kYzUhFWs1MpBWFOylRmrTxY5qSw71z2rWDVmcuSeakVwM1ZbYhxjFRZVZeKZMWiizc0qm0GTT03AlAb2YpwjEsx61TmYs5Uu3hrxnPXvVq88C2ctuMsp6AkYFZ4D3ByAMKOewFGJpdkZZdwCxgKgHTv8aH1ojAKNpxnv3qGKqibETn4U1KlWAKr2mH2/jVE1e07AUtke1iln0Pj+aNyzLbxycDpXQ6PeTQTK2WZOeM1hWUZblfM10OlwAEFvZz0rzcrPcwrgN6Ra3LaWsX2RUE877U3cn3nHurz3Xrk3V6WZw7IoR2B6tySfxx8queltz4urtJA2IkJC7fI+Z+u1YQH711+PhUUpHn+X5Dk3jImtKy+1yvbJHsLpnwWKgso69ug8s9zVaO3Mqh1KkDqucGrWnXf8vu2lddoCnaD16HGPnVpSdfic+OEdlv0ej+jcWnWix2kcubgDMity2epJNZ3pOsSakxhQgMoLf8ua5rQtThtZvHkaSS7kOS4znPxrWuLxG1JWuTua9jO6Qj2ceyo+fOf0rkjikpts7MufHLGlECACvPBoZdlOaV0dkjp5oxU/EUFZd3DVSjmsJJcZXFRhmxxnrQmCucDioPERjBxRpC2yyNhkG4jFRkKB8ZFVwjE+1moOuGyTWoDkEZhuNKgbs80qehbMiVi5LHJJ6mjRtstFHT1yx9/TH60VI1hgWafqRlVqnNMZCdvC013wjVryyDgBz7zTHrT4zjPJPSm6VQkNSHSlS8qxhH4VvaEjlgAHI7K2PwrCQFnAHUmul0uCeHcIcZPtFv6eP6eDzRQsmX2vksbiOJIUkkdiW2eQ+QH5VqzanCLMm1UC5K/wC3G5A3H49K5BYkt7u6O+SRQuRIhyR/yx05o1oFEomMptzHjZKGZwCePWBJz191Qnhxt20dOPyM0Y0nwV10W/ckyqpbPrbpBnms24gks7l4ZNu4dcEEV2ek3M8yzyXYRsthGU8dztPbpXIanIkt3M2cOJGBGOozVI30Rkl2KG4YJhjgdMDih3bJIVZF2gDHxoa4PtZx3Boksa+H6iYA53Ek5FNSBbYa0dYiHZ1HbJrYuYru/tF2RBFgwyzuSoHw7/Ks+xZxbOAVjZlBWQAAqPjitO3v/DkLxmSWRowrIWzu/b5UGFcB45FvrIuybbuDImUDGcYz+eaq7c5p72RbKZNRRSIZpAkyEclcc/PG7nzzUkQLO6bs7TjOeo8jUpKisZWBRQCcnmjRAyE54pTWx5ZOaq/ajG23HNKa+S8IlUk5oMhTBJNQ8UsOKpXMrdOaKTM2ELrnpSqsJTjpSpqYoDULjx3Tb7IHSqo60qVUiqQsns7ZI+XuqPnSpUQDU9NSogDWyyF90SFsV0Ml6+mvGh2FZOkiHpwp5HTzpUqP0J2wdpm3vY5yQyPuLPjk5/Me4E10D6ZbSQn7OYlzgy5JUEDn4Dv0pUqTIPj7A2ht/wCXgQI5i3iOPDYJ55bnyzzjtiuIvAPtc23JHitgk89TSpVkYGDxRDOWQLIoJHAOB0pUqYyNDTjCYFaWAPtOC2/H4VtIIV8IgbAOmB5dqVKgKxtXhWbSrpf/AF/7qj3g/tVGUyIyNnrGmf8A5FNSpJjwLC3o8MiqbSQs+5utKlSJDtjvMuPVNVnkDnmnpUUCT5Bkc8UqVKmFP//Z" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="data:image/jpeg;base64,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" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="data:image/jpeg;base64,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" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="data:image/jpeg;base64,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" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLjHyuW1oAbxMG6yEP7sDkZF1-bh0751P871cPQ81ummSEZsVEALBN7cYrPYH8oSVXNmDoO4t5Hk&usqp=CAU&ec=48600112" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrjbjob_cxtmTTHpmxnHxlyraoNBcZP1zgchLkqOrz9RLbz9BUFGy72GK-OSlj3W2_nfjCZNBddk&usqp=CAU&ec=48600112" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONPue-9CmgRQzUYqVJgWYLTmE9UJADtkqwfUUKKaqba7LIh-NLZjdCObH8ydw0Lwy246nqbjE5K8&usqp=CAU&ec=48600112" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeMVnlxE5KmctZpSkouZmiyKSGn75KQkR3ElroM5tn5d8UCMn1Fer19heskihu2mKTj3cZKbjvFI&usqp=CAU&ec=48600112" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvYAFQl14ZG85REeIqeaW4Pfjz1-K5K_qjOvGLd66v4RJ5lS5tUSZe9utzHJCAH0F1A-IvPLKtGA&usqp=CAU&ec=48600112" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsaxTR5dA6ninyEGzCfzTtPWG59RhdoWq3dnI56Z05gtavi1iqOJnmMLorgeB3IcBm2D3H-KYmad4&usqp=CAU&ec=48600112" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrUC_GUuHIAOCiP3VfuQ0wSsuKAgqAd50I6-Eu5uwOIfl5wNXysQWHB-YRa1D6TsFSB93g2r459g&usqp=CAU&ec=48600112" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCMmZ1D9esk_cRQBM0AZIa2lnecmCx8wNx0eAmpal807bZn5LXB360QVkcgN-ppIemMsAAX2oYkM&usqp=CAU&ec=48600112" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://us.123rf.com/450wm/rufous/rufous2210/rufous221000610/193126580-tree-of-life-yggdrasil-intricate-details-cinematic-light.jpg?ver=6" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvil9AQaT5zF96BD5e0coS7WaNVNwWsPBmmA4f-6F3paydgzkGHaXpjk06rjEtGjTZ6QtS0aCkofc&usqp=CAU&ec=48600112" alt="" />
                        <img className="w-25 h-25" style={{ objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0b0t7XSMS6rSrN4ioBm1C6E-Olpg9zv0RwS0GwI3ikQiY6fNs4O228V3lroTNzuBbHpYJbMaJleM&usqp=CAU&ec=48600112" alt="" />
                      </div></div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <h1 className={styles.text}>Contact Section</h1>
                </div>
                <div className="container mt-4">
                  <div className=" row shadow p-3 mb-5 bg-body rounded border border-4 border-dark">
                    <div className="d-flex justify-content-around flex-wrap">
                      <div className="mt-4" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <a href={`tel:${item.number}`}>
                          <BsFillPhoneVibrateFill style={{ color: `${hover ? '#FF0000' : '#000000'}` }} size={150} />
                        </a>
                      </div>
                      <div className="mt-4" onMouseEnter={() => setHovers(true)} onMouseLeave={() => setHovers(false)}>
                        <a href={item.instagram}>
                          <FaInstagramSquare style={{ background: `${hovers ? 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' : ''}`, borderRadius: `${hovers ? '50%' : ''}` }} size={150} />
                        </a>
                      </div>
                      <div className="mt-4" onMouseEnter={() => setHover_1(true)} onMouseLeave={() => setHover_1(false)}>
                        <AiTwotoneHome style={{ color: `${hover_1 ? 'green' : '#000000'}` }} size={150} />
                        <h5 className={styles.text_1}>{hover_1 ? item.address : ""}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </>
      )}
    </>)
}
export default Aboutus;




// <div>
//                         <a href={`mailto:${item.email}`}>
//                           <MailIcon
//                             mailBackFoldColor="#2874A6"
//                             mailTopFoldColor="#2E86C1"
//                             mailLeftFoldColor="#3498DB"
//                             mailRightFoldColor="#5DADE2"
//                             letterBackgroundColor="#FFFFFF"
//                             letterBorderColor="#1ABC9C"
//                             letterTextColor="#1ABC9C"
//                             shouldAnimateOpen={shouldAnimate}
//                             shouldAnimateDown={shouldAnimate}
//                             shouldAnimateOnHover
//                           />
//                         </a>
//                       </div>