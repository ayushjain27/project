import React from "react";
import styles from './Donation.module.css'
import { useNavigate } from 'react-router-dom'

const Donation = () => {
  const navigate = useNavigate()
  const handleSubmit = () =>{
    navigate('/images')
  }
  return (
    <>
      <div className={`${styles.DonateContainer} d-flex justify-content-center align-items-center container-fluid`}>
        <div className={`${styles.sentence} text-white text-center fw-bold`}>
          YOU CAN DONATE OLD ITEMS IN THESE THREE CATEGORIES
        </div>
      </div>
      <div onClick={handleSubmit} className={styles.DonateBoxContainer} container-fluid>
        <div className={`${styles.row} row`}>
          <div  className={`${styles.col} col-6 col-md-3`}>
            <div className={`${styles.cards} card`}>
              <img src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" className="card-img-top" alt="..." />
              <div className={`${styles.card} card-body`}>
                <h5 className={`${styles.title} card-title`}>FOOTWEAR</h5>
              </div>
            </div>
          </div>
          <div onClick={handleSubmit} className={`${styles.col} col-6 col-md-3`}>
            <div className={`${styles.cards} card`}>
              <img src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" className="card-img-top" alt="..." />
              <div className={`${styles.card} card-body`}>
                <h5 className={`${styles.title} card-title`}>CLOTHES</h5>
              </div>
            </div>
          </div>
          <div onClick={handleSubmit} className={`${styles.col} col-6 col-md-3`}>
            <div className={`${styles.cards} card`}>
              <img src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" className="card-img-top" alt="..." />
              <div className={`${styles.card} card-body`}>
                <h5 className={`${styles.title} card-title`}>BOOKS/NOTEBOOKS</h5>
              </div>
            </div>
          </div>
          <div onClick={handleSubmit} className={`${styles.col} col-6 col-md-3`}>
            <div className={`${styles.cards} card`}>
              <img src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" className="card-img-top" alt="..." />
              <div className={`${styles.card} card-body`}>
                <h5 className={`${styles.title} card-title`}>MONEY</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;