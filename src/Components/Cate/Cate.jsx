import React from 'react'
import styles from './Cate.module.css'
import { FaUser} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Cate = () => {
    const navigate=useNavigate()
  return (<>
    <div onClick={navigate('/login')} className={`${styles.card} card`}>
              <div className="card-body">
                <h5>Upload Profile Picture :</h5>
              </div>
              <div className="card-body d-flex justify-content-center">
                <FaUser
                  
                  
                  className="h-50 w-50 m-auto p-3 bg-light"
                  onClick={navigate('/login')}
                />
               
                
              </div>
            </div>
            <div  onClick={navigate('/NgoLogin')} className={`${styles.card} card`}>
            <div className="card-body">
              <h5>Upload Profile Picture :</h5>
            </div>
            <div className="card-body d-flex justify-content-center">
              
              <FaUser
                
                
                className="h-50 w-50 m-auto p-3 bg-light"
               
              />
              
            </div>
          </div>
          </>
  )
}

export default Cate