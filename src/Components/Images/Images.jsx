import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Images.module.css";

import { Formik, Form, Field } from "formik";

const Images = (props) => {
  const initialValues = {
    title: "",
    description: "",
  }

  const validateTitle = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    } else if (value.length < 5) {
      error = "*It must be greater than 5";
    }
    settitle(value)
    return error;
  }

  const validateDescription = (value) => {
    let error;
    if (!value) {
      error = "*This field is required";
    } else if (value.length < 10) {
      error = "*It must be greater than 10";
    }
    setdescription(value);
    return error;
  }

  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setimage] = useState(null);
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const navigate = useNavigate()
  // title, description, image,
  const handleSubmit = async () => {
      // e.preventDefault();
      // const {name, email, password} = credentials;
      const response = await fetch("http://localhost:5000/api/details/adddetail/clothes", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, image })
      });
  
      const json = await response.json()
      console.log(json);
      if(json.success){
        // Save the auth token and redirect
        props.showAlert("Items Added Successfully", "success")
        navigate('/itemsbox');
      }
      else{
        props.showAlert("Invalid Credential", "danger")
      }  
    }

  const handleImage = async () => {
      // e.preventDefault();
      // const {name, email, password} = credentials;
      var formData = new FormData();
  
  // image.map((file, index) => {
  //   formData.append(`file${index}`, file);
  // });
  formData.append('image',image)
      const response = await fetch("http://localhost:5000/api/details/images", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body:JSON.parse(formData)
      });
  console.log(formData)
      const json = await response.json()
      console.log(json);
      if(json.success){
        // Save the auth token and redirect
        props.showAlert("Image Added Successfully", "success")
        // navigate('/itemsbox');
      }
      else{
        props.showAlert("Invalid Credential", "danger")
      }  
    }


  // const handleOnChange = (event) => {
  //   setText(event.target.value);
  // }

  // const onChange = (e) => {
  //   setImag({ ...imag, [e.target.name]: e.target.value });
  // };

  useEffect(() => {
    if (selectedImage) {
      setimage(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <div className={`${styles.container} container my-3 rounded`}>
        <div className="row">
          <div className={`${styles.col1} col-md-6`}>
            <div className={styles.first}>
              {!image && !selectedImage && (
                <div className={`${styles.box} my-5`}>
                  <img
                    className={styles.images}
                    src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                  alt="error"/>
                </div>
              )}
              {image && selectedImage && (
                <div className={`${styles.box} my-5`}>
                  <img
                    className={styles.images}
                    src={image}
                    alt={selectedImage.name}
                  />
                </div>
              )}
              <input
                accept="image/*"
                type="file"
                id="select-image"
                style={{ display: "none" }}
                onChange={(e) => setSelectedImage(e.target.files[0])}
                className="btn-check"
              />
              <label
                className={`${styles.upload} btn btn-success`}
                htmlFor="select-image"
              >
                UPLOAD FROM GALLERYs
              </label>
              
              <button onClick={handleImage} className="btn btn-dark button">Submit & Continue</button>
            </div>
          </div>
          <div className={`${styles.col2} col-md-6`}>
            <div className={styles.second}>
              <div className="my-3">
                <div className={`${styles.heading} my-3`}>Your info</div>
                <div className="my-3">
                  {/* <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                      >
                      <TextField id="outlined-basic" label="Enter title" variant="outlined" name="title" value={imag.title} onChange={onChange}/>
                    </Box> */}
                  <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, touched }) => (
                      <Form className="p-3">
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-2">
                              <label className="form-label fw-bold">Enter Title*</label>
                              <Field
                                type="text"
                                className={`form-control ${errors.title && touched.title ? "border-danger" : ""}`}
                                placeholder='Enter title'
                                id="tite"
                                name="title"
                                validate={validateTitle}
                              />
                              {errors.title && touched.title &&
                                <div className='form-text text-danger'>
                                  {errors.title}
                                </div>
                              }
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-2">
                              <label className="form-label fw-bold">Description</label>
                              <Field as="textarea"
                                className={`form-control ${errors.description && touched.description ? "border-danger" : ""}`}
                                rows="5"
                                placeholder='Your description'
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
                        {/* <div className="row">
                          <div className="col-12">
                            <div className="mb-2">
                              <label className="form-label fw-bold">NGO Link</label>
                              <Field as="select"
                                className={`form-select ${errors.ngolink && touched.ngolink ? "border-danger" : ""}`}
                                id='ngolink'
                                name='ngolink'
                                validate={validateNgolink}
                              >
                                <option value="Select NGO...">Select NGO...</option>
                                <option value="Sales">One</option>
                                <option value="Service">Two</option>
                                <option value="HR">Three</option>
                                <option value="New Grad.">Four</option>
                                <option value="None / Others">Others</option>
                              </Field>
                              {
                                errors.ngolink && touched.ngolink &&
                                <div className="form-text text-danger">
                                  {errors.ngolink}
                                </div>
                              }
                            </div>
                          </div>
                        </div> */}
                        <div className="row">
                          <div className="col-12">
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

                  {/* <input
                    type="text"
                    id="title"
                    name="title"
                    value={imag.title}
                    onChange={onChange}
                    className="form-control"
                    aria-describedby="title"
                    placeholder="Enter Title*"
                    minlength={4}
                    required
                  />
                  <div id="title" className="form-text">
                    Your title must be atleast 4 characters long
                  </div> */}
                </div>
                {/* <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Enter description"
                        placeholder="Enter description (Size, Quantity, Quality, etc)"
                        multiline
                        value={imag.description}
                        onChange={onChange}
                        name="description"
                      />
                      </div>
                  </Box> */}
                {/* <div>
                  <textarea
                    rows={5}
                    type="text"
                    id="description"
                    name="description"
                    value={imag.description}
                    onChange={onChange}
                    className="form-control"
                    aria-describedby="description"
                    placeholder="Enter description (Size, Quantity, Quality, etc)"
                    minlength={5}
                    required
                  />
                  <div id="description" className="form-text">
                    Your description must be atleast 10 characters long
                  </div>
                  <select
                    className="form-select"
                    onChange={onChange}
                    name="text"
                    value={imag.text}
                    id="contentRated"
                    aria-label="Default select example"
                  >
                    <option selected>Select NGO...</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                    <option>Four</option>
                  </select> */}
                {/* <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">SELECT NGO...</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="text"
                        value={imag.text}
                        label="Select NGO..."
                        onChange={onChange}
                      >
                        <MenuItem value={"One"}>One</MenuItem>
                        <MenuItem value={"Two"}>Two</MenuItem>
                        <MenuItem value={"Three"}>Three</MenuItem>
                        <MenuItem value={"Four"}>Four</MenuItem>
                      </Select>
                    </FormControl>
                  </Box> */}
                {/* </div> */}
                {/* <button
                  onClick={handleSubmit}
                  disabled={
                    imag.title.length < 4 || imag.description.length < 10 || imag.text == ""
                  }
                  className={`${styles.button} btn btn-warning my-3`}
                  type="submit"
                >
                  Submit
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
