import React, { useState, useEffect } from "react";
import styles from "./Images.module.css";

const Images = () => {
  // const [text, setText] = useState("Select NGO...");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imag, setImag] = useState({ title: "", description: "", text: "SELECT NGO..." });

  const handleSubmit = (e) => {
    e.preventDefault();
    setImag({ title: "", description: "", text: "SELECT NGO..." });
    console.log("clicked");
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
        <div className={`${styles.row} row`}>
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
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={
                    imag.title.length < 4 || imag.description.length < 10 || imag.text == "Select NGO..."
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