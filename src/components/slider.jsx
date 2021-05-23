import Image1 from "../assets/ecommerce.jpg";
import Image2 from "../assets/cloths.jpg";
import Image3 from "../assets/jewelry.jpg";
import Image4 from "../assets/electronics-products1.jpg";
import Image5 from "../assets/electronics-products2.jpg";

import React, { Component } from "react";
import Slider from "react-slick";

export default class FadeSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      arrows: false
    };

    const styling = {
        width: '100%',
        height: '350px',
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Image1} alt="Slider Image1" {...styling}/>
          </div>
          <div>
            <img src={Image2} alt="Slider Image2" {...styling} />
          </div>
          <div>
            <img src={Image3} alt="Slider Image3" {...styling} />
          </div>
          <div>
            <img src={Image4} alt="Slider Image4" {...styling} />
          </div>
          <div>
            <img src={Image5} alt="Slider Image5" {...styling} />
          </div>
        </Slider>
      </div>
    );
  }
}