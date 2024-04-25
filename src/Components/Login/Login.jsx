import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

import { CgLogIn } from "react-icons/cg";

import { Formik, Form, Field } from "formik";

const Login = (props) => {
  const navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    // e.preventDefault();
    // const {name, email, password} = credentials;
    const response = await fetch("https://donationsystembackendproject.onrender.com/api/auth/login", {
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
      alert("Account Created Successfully")
      console.log(json)
      localStorage.setItem('token', json.authtoken);
      // localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      navigate('/home');
      setLoading(false);
    }
    else {
      setLoading(false);
      props.showAlert("Invalid Credential", "danger")
      alert(json.error)
    }
    setLoading(false)
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
      <div className="container mt-5" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', height: '80vh'}}>
        <div className="row">
          <div className="col-md-12 m-auto d-flex justify-content-center align-items-center rounded-top">
            <div className="card border-dark h-100 w-50"  style={{borderRadius: 50, padding: 20}}>
              <div className="card-body">
                <h3 className="text-dark d-flex justify-content-center align-items-center">Login</h3>
                <hr
                  style={{
                    color: "#000",
                    borderTop: "2px solid",
                    opacity: "1",
                  }}
                />
                <h5 className="card-title text-center mt-3 mb-4">
                  Welcome to Donation
                  <span className="mx-2" style={{color: 'red'}}>Camp</span>
                </h5>
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
                          style={{borderRadius: 20, padding: 10}}
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
                          style={{borderRadius: 20, padding: 10}}
                        />
                        {errors.password && touched.password && <div className="form-text text-danger">{errors.password}</div>}
                      </div>
                      <div className="mb-3 col-3 d-grid mx-auto">
                        <button type="submit" className="btn btn-dark" loading={loading}>
                        {loading ? 'login...' : (
                            <>
                                 <CgLogIn className="me-1" />
                          Login
                            </>
                        )}
                        </button>
                      </div>
                      <p className="text-center">
                        New User ?
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
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3">
        {/* <button type="button" onClick={() => navigate("/NgoLogin")}>Continue to Ngo Login <CgLogIn className="me-1" /></button> */}
        
        Are you an NGO ???
        <div onClick={() => navigate("/NgoLogin")}   style={{
            color: "blue", 
            cursor: "pointer",
            textDecoration: "underline",
            transition: "color 0.3s",
            marginLeft: 10
          }}> Login as NGO</div>
        </div>
      </div>
    </>
  );
};

export default Login;
