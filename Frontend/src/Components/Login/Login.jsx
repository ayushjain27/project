import React from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

import { CgLogIn } from 'react-icons/cg';

const Login = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className="col-md-6 m-auto">
                        <div className='card border-warning h-100'>
                            <div className="card-body">
                                <h3 className='text-warning'>Login</h3>
                                <hr style={{ color: "#ffc107", borderTop: "2px solid", opacity: "1" }} />
                                <h5 className="card-title text-center mt-5">
                                    Welcome to Talent  <span className='bg-warning p-2'>Sumo</span>
                                </h5>
                                <p className='text-center mt-3 mb-5'>Enter your details and start journey with us.</p>
                                <form>
                                    <div className="mb-4">
                                        <input type="email" className='form-control' id="email" placeholder="Email" />
                                        <div id="emailHelp" className="form-text text-warning fw-bold">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className='form-control' id="password" placeholder="Password" />
                                    </div>
                                    <p onClick={() => navigate('/resetPassword')} id="forgetPassword" className={`${styles.forgotPassword} text-end text-warning mb-3 fw-bold`} style={{ cursor: 'pointer' }}>Forgot Password ?</p>
                                    <div className="mb-5 col-3 d-grid mx-auto">
                                        <button type="button" className="btn btn-warning"><CgLogIn className='me-1' />Login</button>
                                    </div>
                                    <p className='text-center'>New User ? <span onClick={() => navigate('/register')} className='ms-1 text-warning fw-bold text-decoration-underline' style={{ cursor: 'pointer' }}>Create Account</span></p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.right} col-md-6 m-auto`}>
                        <img className={`${styles.img} img-fluid mt-4`} src="./Images/login.svg" alt="login" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;