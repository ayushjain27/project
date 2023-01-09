import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

import { CgLogIn } from "react-icons/cg";

import { Formik, Form, Field } from "formik";

const Login = (props) => {
  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const handleSubmit = async () => {
    // e.preventDefault();
    // const {name, email, password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });

    const json = await response.json()
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      props.showAlert("Account Created Successfully", "success")
      localStorage.setItem('token', json.authtoken);
      navigate('/');
    }
    else {
      props.showAlert("Invalid Credential", "danger")
    }
  }

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "*This field is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "*Invalid email address";
    }
    setemail(value)
    return error;
  };

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "*This field is Required";
    } else if (!/^[0-9a-zA-Z]{0,10}$/i.test(value)) {
      error = "*Invalid Password";
    }
    setpassword(value)
    return error;
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="card border-dark h-100">
              <div className="card-body">
                <h3 className="text-dark">Login</h3>
                <hr
                  style={{
                    color: "#000",
                    borderTop: "2px solid",
                    opacity: "1",
                  }}
                />
                <h5 className="card-title text-center mt-5">
                  Welcome to Donation
                  <span className="btn btn-success mx-2">Camp</span>
                </h5>
                <p className="text-center text-muted mt-3 mb-5">
                  Enter your credentials and start journey with us.
                </p>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="mb-4">
                        <Field
                          type="email"
                          className={`form-control ${errors.email && touched.email ? 'border-danger' : ""}`}
                          id="email"
                          name="email"
                          placeholder="Email"
                          validate={validateEmail}
                        />
                        {errors.email && touched.email && <div className="form-text text-danger">{errors.email}</div>}
                      </div>
                      <div className="mb-3">
                        <Field
                          type="password"
                          className={`form-control ${errors.password && touched.password ? 'border-danger' : ""}`}
                          id="password"
                          name="password"
                          placeholder="Password"
                          validate={validatePassword}
                        />
                        {errors.password && touched.password && <div className="form-text text-danger">{errors.password}</div>}
                      </div>
                      <p
                        onClick={() => navigate("/resetPassword")}
                        id="forgetPassword"
                        className={`${styles.forgotPassword} text-end text-dark mb-3 fw-bold`}
                        style={{ cursor: "pointer" }}
                      >
                        Forgot Password ?
                      </p>
                      <div className="mb-5 col-3 d-grid mx-auto">
                        <button type="submit" className="btn btn-dark">
                          <CgLogIn className="me-1" />
                          Login
                        </button>
                      </div>
                      <p className="text-center">
                        New User ?{" "}
                        <span
                          onClick={() => navigate("/signup")}
                          className="ms-1 text-dark fw-bold text-decoration-underline"
                          style={{ cursor: "pointer" }}
                        >
                          Create Account
                        </span>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className={`${styles.right} col-md-6 m-auto`}>
            <img
              className={`${styles.img} img-fluid mt-4`}
              src="./Images/login.svg"
              alt="login"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
