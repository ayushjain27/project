import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    // const settings = {
    //     dots: true,
    //   className: "center",
    //   centerMode: true,
    //   infinite: true,
    //   centerPadding: "60px",
    //   slidesToShow: 3,
    // slidesToScroll: 1,
    //   speed: 500
    // };
    const settings = {
        infinite: true,
        dots: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000}
    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     fade: true,
    //     arrows: false,
    //     centerMode: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // }
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/300/300" alt="" />
          </div>
          <div>
          <img src="https://picsum.photos/300/300" alt="" />
          </div>
          <div>
          <img src="https://picsum.photos/300/300" alt="" />
          </div>
          <div>
          <img src="https://picsum.photos/300/300" alt="" />
          </div>
          <div>
          <img src="https://picsum.photos/300/300" alt="" />
          </div>
          <div>
          <img src="https://picsum.photos/300/300" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}