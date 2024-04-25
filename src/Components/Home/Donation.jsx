import React, { useState } from "react";
import styles from './Donation.module.css'
import { useNavigate } from 'react-router-dom'

const Donation = () => {
  const navigate = useNavigate()
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleSubmit = () =>{
    navigate('/imagesClothes')
  }
  const handleSubmit_1 = () =>{
    navigate('/imagesFootwear')
  }
  const handleSubmit_2 = () =>{
    navigate('/imagesBooks')
  }
  return (
    <>
      <div  className={`${styles.DonateContainer} d-flex justify-content-center align-items-center container-fluid`}>
        {/* <div  className={`${styles.sentence} text-white text-center fw-bold`}>
          YOU CAN DONATE OLD ITEMS IN THESE  CATEGORIES
        </div> */}
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10,alignItems: 'center'}}>
         <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/021/797/174/small/arrow-left-icon-isolated-on-white-background-vector.jpg" height={200} alt=""     style={{ transform: 'scaleX(-1)' }} />
        </div>

        <div  
        style={{
          borderRadius: "10px",
          border: isHovered1 ? "2px solid blue" : "2px solid black",
          textAlign: "center",
          transition: "border-color 0.3s ease", // Add transition for smooth effect
          cursor: "pointer", // Change cursor to pointer on hover
        }}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
        onClick={handleSubmit_1}
        >
            <img src="https://static.wixstatic.com/media/80132f_f86ec53836f64569be323f8db58449ae~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/80132f_f86ec53836f64569be323f8db58449ae~mv2.jpg" height={200} alt="" />
            <div style={{fontSize: '36px', backgroundColor: isHovered1?'blue':'black', padding: 0, color: 'white'}}>FOOTWEAR</div>
        </div>

        <div  
        style={{
          borderRadius: "10px",
          border: isHovered2 ? "2px solid blue" : "2px solid black",
          textAlign: "center",
          transition: "border-color 0.3s ease", // Add transition for smooth effect
          cursor: "pointer", // Change cursor to pointer on hover
        }}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        onClick={handleSubmit}
        >
            <img src="https://helios-i.mashable.com/imagery/articles/04WJuOneOI0DCzDDl5tJKgq/hero-image.fill.size_1200x900.v1623390119.jpg" height={200} alt="" />
            <div style={{fontSize: '36px', backgroundColor: isHovered2?'blue':'black', color: 'white'}}>CLOTHES</div>
        </div>

        <div  
        style={{
          borderRadius: "10px",
          border: isHovered3 ? "2px solid blue" : "2px solid black",
          textAlign: "center",
          transition: "border-color 0.3s ease", // Add transition for smooth effect
          cursor: "pointer", // Change cursor to pointer on hover
        }}
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
        onClick={handleSubmit_2}
        >
            <img src="https://www.spl.org/Seattle-Public-Library/images/about-us/support/WebComponent_FriendsBookDonations.jpg" height={200} alt="" />
            <div style={{fontSize: '36px', backgroundColor: isHovered3?'blue':'black', padding: 0, color: 'white'}}>BOOKS</div>
        </div>
        <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/021/797/174/small/arrow-left-icon-isolated-on-white-background-vector.jpg" height={200} alt="" />
        </div>
        
      </div>
      {/* <div className={styles.DonateBoxContainer} container-fluid>
        <div className={`${styles.row} row`}>
          <div style={{backgroundColor: 'black', padding: 100}}>
            <image src={"https://static.wixstatic.com/media/80132f_f86ec53836f64569be323f8db58449ae~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/80132f_f86ec53836f64569be323f8db58449ae~mv2.jpg"} alt="Donate Footwear" />
          </div>
          <div onClick={handleSubmit_1} className={`${styles.col} ${styles.boxes} col-md-3`}>
            <div className={`${styles.cards} card border-0`}>
              <div className="card-body p-0">
                <h5 className={`${styles.title} card-title d-flex justify-content-center align-items-center w-100 text-white`}>FOOTWEAR</h5>
              </div>
            </div>
          </div>
          <div onClick={handleSubmit} className={`${styles.col} ${styles.boxes} col-md-3`}>
            <div className={`${styles.cards} card border-0`}>
              <div className="card-body p-0">
                <h5 className={`${styles.title} card-title d-flex justify-content-center align-items-center w-100 text-white`}>CLOTHES</h5>
              </div>
            </div>
          </div>
          <div onClick={handleSubmit_2} className={`${styles.col} ${styles.boxes} col-md-3`}>
            <div className={`${styles.cards} card border-0`}>
              <div className="card-body p-0">
                <h5 className={`${styles.title} card-title d-flex justify-content-center align-items-center w-100 text-white`}>BOOKS</h5>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Donation;