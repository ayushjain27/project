import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import Modal from '../Modal/Modal'

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
        localStorage.removeItem('token')
        navigate('/login');
}

  return (
    <>
      <div className={`${styles.nav} d-flex align-items-center justify-content-between`}>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div className={styles.logo} onClick={()=>{navigate('/')}}>DONATE FOR A CHANGE </div>
        {/* <div className={styles.logo} onClick={()=>{navigate('/cate')}}>cate</div> */}
        <div>
          <button type="button" className="btn btn-danger mx-2" onClick={() => navigate('/cate')}>
            Login
          </button>
          <button type="button" className="btn btn-warning mx-2" onClick={handleLogOut}>
            LogOut
          </button>
          {/* <button type='button' className='btn btn-warning ' onClick={()=>navigate('/')}> HOME</button> */}
        </div>
      </div>
      <Modal />
    </>
  )
}

export default Navbar
