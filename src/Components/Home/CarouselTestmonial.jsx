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
        slidesToShow: 4.2,
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
          <div >
            <img src="https://th.bing.com/th/id/OIP.urA1OQAvQeHrnmTB7e_o3AHaE7?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" width={'400px'} height={'300px'} alt="" style={{borderRadius: 50, margin: 20}}/>
          </div>
          <div>
          <img height={'300px'} width={'400px'} src="https://th.bing.com/th/id/OIP.AQWbN0mvvCj_T-QNxndQAgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" style={{borderRadius: 50, margin: 20}}/>
          </div>
          <div>
          <img height={'300px'} width={'400px'} src="https://th.bing.com/th/id/OIP.PyFNiTk-edap7LADnaw9IQHaEA?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" style={{borderRadius: 50, margin: 20}}/>
          </div>
          <div>
          <img height={'300px'} width={'400px'} src="https://th.bing.com/th/id/OIP.upVp_8A0fM4h63Ds_jE57AHaEL?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" style={{borderRadius: 50, margin: 20}}/>
          </div>
          <div>
          <img height={'300px'} width={'400px'} src="https://th.bing.com/th/id/OIP.A-_MbAsFQhWV_KdZ9xPUjAHaFH?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" style={{borderRadius: 50, margin: 20}}/>
          </div>
          <div>
          <img height={'300px'} width={'400px'} src="https://th.bing.com/th/id/OIP.PyFNiTk-edap7LADnaw9IQHaEA?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" style={{borderRadius: 50, margin: 20}}/>
          </div>
        </Slider>
      </div>
    );
  }
}