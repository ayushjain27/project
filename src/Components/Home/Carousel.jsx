import React from 'react'
import styles from './Carousel.module.css'

const Carousel = () => {
    return (
        <div style={{marginTop: '12px'}}>
            <div  id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className={`${styles.button} active `} aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className={styles.button} aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className={styles.button} aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div  className={`${styles.carouselItem} carousel-item active`} data-bs-interval="2000">
                        <img src="https://img.freepik.com/free-vector/people-carrying-donation-charity-related-icons_53876-43091.jpg?w=2000" className={`${styles.img} d-block w-100 h-100`} alt="..." />
                    </div>
                    <div className={`${styles.carouselItem} carousel-item`} data-bs-interval="2000">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRkGDxnBEtn6sXa_91FjhiZff9eFS5hx7-g&usqp=CAU" className={`${styles.img} d-block w-100`} alt="..." />
                    </div>
                    <div className={`${styles.carouselItem} carousel-item`}>
                        <img src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" className={`${styles.img} d-block w-100`} alt="..." />
                    </div>
                </div>
                <button  className="carousel-control-prev" type="button" data-bs-target="#myCarousel"  data-bs-slide="prev">
                    <span className={`${styles.previous} carousel-control-prev-icon`} aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className={`${styles.next} carousel-control-next-icon`} aria-hidden="true"></span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
