import React from 'react'
import styles from './Cate.module.css'
import { FaUser} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Cate = () => {
    const navigate=useNavigate()
  return (<>
  <div className={`${styles.contain}`}> 
    
   <div className={`${styles.card}`}>
    <img src="https://www.bing.com/th?id=OIP.RgH3c-QcCUhJ4QKIp67F6AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width={'400px'} height={'400px'} alt="" />
    <div className={`${styles.carddetails}`}>
      <button className={`${styles.buttons}`} onClick={() => navigate('/Login')}>LOGIN AS NGO</button>
    </div>
   </div>
    
   <div className={`${styles.card}`}>
    <img src="https://www.bing.com/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&w=255&h=245&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width={'400px'} height={'400px'} alt="" />
    <div className={`${styles.carddetails}`}>
      <button className={`${styles.buttons}`} onClick={() => navigate('/Login')}>LOGIN AS USER</button>
    </div>
   </div>
  </div>
    {/* <div onClick={navigate('/login')} className={`${styles.card} card`}>
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
          </div> */}
          </>
  )
}

export default Cate