"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseDnHover: false,
  };
  const SlideData = [
    {
      id: 0,
      img: "/image/banner3.png",
      title: "Tranding Items",
      mainTitle: "WOMEN'S  FASHION SALE",
      price: "$15",
    },
    {
      id: 1,
      img: "/image/banner2.png",
      title: "Tranding Items",
      mainTitle: "WOMEN'S FASHION SALE",
      price: "$25",
    },
    {
      id: 2,
      img: "/image/boybanner.png",
      title: "Tranding Items",
      mainTitle: "MEN'S LATEST FASHION SALE",
      price: "$15",
    },
  ];
  return (
    <div>
      <Slider {...settings}>
        {SlideData.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
