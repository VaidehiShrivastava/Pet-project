import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import classes from "./Clintele.module.css";

import { Data } from "./data";

export default class MultipleItems extends Component {
  state = {
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0,
  };
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: (current) => this.setState({ activeSlide2: current }),
      autoplay: true,
      autoplaySpeed: 3000,
      className: "kuch_bhi",
      centerMode: true,
    };
    return (
      // <section>
          
          <div style={{padding:"2rem 8rem"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                  <h2 className="py-10 text-white underline items-center justify-around">Fun Facts</h2>
                  </div>

            <Slider {...settings}>
              {Data.map((slide, index) => (
                <div
                  key={index}
                  className={
                    index === this.state.activeSlide ? "redyy" : "blueeeyy"
                  }
                >
                  <div
                    style={{ position: "absolute", bottom: "0", right: "0" }}
                  >
                    <Image src={"/Cat/cat2.jpg"} width={50} height={50} alt="not found" priority />
                  </div>
                  <div
                    className={classes.slider_content}
                    style={{ width: "100%" }}
                  >
                    {slide.para}
                  </div>
                  
                </div>
              ))}
            </Slider>
          </div>
      // </section>
    );
  }
}
