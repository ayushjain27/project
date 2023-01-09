import React from "react";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate()
  const DonationHistory = () => {
    navigate('/itemsbox')
  }
  return (
    <>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className={`${styles.modal} modal-content text-white`}>
              <div className={`${styles.modalHeader} modal-header`}>
                <div className="d-flex flex-column">
                  {/* <img className={styles.img} src="./images/Logo.png" alt="" /> */}
                  <div className={`${styles.desc} d-flex flex-column justify-content-center`}>
                    <h className={`${styles.name} d-flex align-items-center `}>Avak</h>
                    <p>avakinternational@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className={`${styles.container} container`}>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row">
                        <div className={`${styles.col} col-2`}><i className="fa-solid fa-gift"></i></div>
                        <div className={`${styles.col1} col-10 text-white`}>Your current Box</div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row">
                        <div className={`${styles.col} col-2`}><i class="fa-solid fa-heart"></i></div>
                        <div className={`${styles.col1} col-10 text-white`} onClick={DonationHistory}>Donation History</div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row">
                        <div className={`${styles.col} col-2`}><i className="fa-solid fa-user"></i></div>
                        <div className={`${styles.col1} col-10 text-white`}>Profile Settings</div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row">
                        <div className={`${styles.col} col-2`}><i className="fa-solid fa-circle-question"></i></div>
                        <div className={`${styles.col1} col-10 text-white`}>Help</div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row">
                        <div className={`${styles.col} col-2`}><i className="fa-solid fa-circle-info"></i></div>
                        <div className={`${styles.col1} col-10 text-white`}>About Us</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;