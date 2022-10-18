import React from 'react'
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import styles from './Carousel.module.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

const Carousel = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 2000
    };
    return (
        // <div style={{ marginTop: '12px' }}>
            <div className='m-3'>
                <Slider {...settings}>
                    <div>
                        <img src="https://img.freepik.com/free-vector/people-carrying-donation-charity-related-icons_53876-43091.jpg?w=2000" className={`${styles.img} d-block w-100 h-100`} alt="..." />
                        {/* <h3 style={{color:'white'}}>1</h3> */}
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRkGDxnBEtn6sXa_91FjhiZff9eFS5hx7-g&usqp=CAU" className={`${styles.img} d-block w-100`} alt="..." />
                        {/* <h3 style={{color:'white'}}>2</h3> */}
                    </div>
                    <div>
                        <img src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" className={`${styles.img} d-block w-100`} alt="..." />
                        {/* <h3 style={{color:'white'}}>3</h3> */}
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-vector/people-carrying-donation-charity-related-icons_53876-43091.jpg?w=2000" className={`${styles.img} d-block w-100 h-100`} alt="..." />
                        {/* <h3 style={{color:'white'}}>4</h3> */}
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRkGDxnBEtn6sXa_91FjhiZff9eFS5hx7-g&usqp=CAU" className={`${styles.img} d-block w-100`} alt="..." />
                        {/* <h3 style={{color:'white'}}>5</h3> */}
                    </div>
                    <div>
                        <img src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" className={`${styles.img} d-block w-100`} alt="..." />
                        {/* <h3 style={{color:'white'}}>6</h3> */}
                    </div>
                </Slider>
            </div>
        // </div>
    )
}

export default Carousel



{/* <div  id="myCarousel" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className={`${styles.button} active `} aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className={styles.button} aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className={styles.button} aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
    <div  className={`${styles.carouselItem} carousel-item active w-100`} data-bs-interval="2000">
        <img src="https://img.freepik.com/free-vector/people-carrying-donation-charity-related-icons_53876-43091.jpg?w=2000" className={`${styles.img} d-block w-100 h-100`} alt="..." />
    </div>
    <div className={`${styles.carouselItem} carousel-item active w-100`} data-bs-interval="2000">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRkGDxnBEtn6sXa_91FjhiZff9eFS5hx7-g&usqp=CAU" className={`${styles.img} d-block w-100`} alt="..." />
    </div>
    <div className={`${styles.carouselItem} carousel-item active w-100`}>
        <img src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" className={`${styles.img} d-block w-100`} alt="..." />
    </div>
</div>
<button  className="carousel-control-prev" type="button" data-bs-target="#myCarousel"  data-bs-slide="prev">
    <span className={`${styles.previous} carousel-control-prev-icon`} aria-hidden="true"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span className={`${styles.next} carousel-control-next-icon`} aria-hidden="true"></span>
</button>
</div> */}
