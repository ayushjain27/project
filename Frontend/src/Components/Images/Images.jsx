import React, { useState, useEffect } from "react";
import styles from "./Images.module.css";
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

const Images = () => {
  // const [text, setText] = useState("Select NGO...");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imag, setImag] = useState({ title: "", description: "", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setImag({ title: "", description: "", text: "" });
    console.log("clicked");
    console.log(imag.title);
    console.log(imag.description);
    console.log(imag.text);
  };

  // const handleOnChange = (event) => {
  //   setText(event.target.value);
  // }

  const onChange = (e) => {
    setImag({ ...imag, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <div className={`${styles.container} container my-3 rounded`}>
        <div className="row">
          <div className={`${styles.col1} col-md-6`}>
            <div className={styles.first}>
              {!imageUrl && !selectedImage && (
                <div className={`${styles.box} my-5`}>
                  <img
                    className={styles.images}
                    src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                  />
                </div>
              )}
              {imageUrl && selectedImage && (
                <div className={`${styles.box} my-5`}>
                  <img
                    className={styles.images}
                    src={imageUrl}
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
                UPLOAD FROM GALLERY
              </label>
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
                  <input
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
                  </div>
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
                <div>
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
                  </select>
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
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={
                    imag.title.length < 4 || imag.description.length < 10 || imag.text == ""
                  }
                  className={`${styles.button} btn btn-warning my-3`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;



