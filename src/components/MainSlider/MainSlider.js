import React from "react";
import Slider from "react-slick";

// Configuracion Carousel
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  fade: true,
  arrows: false,
};

const MainSlider = ({ images }) => {
  return (
    <Slider {...settings}>
      {images.map((item, key) => (
        <div className="slider-item" key={key}>
          <img className="slider-img" src={item.image} alt={item.image} />
        </div>
      ))}
    </Slider>
  );
};

export default MainSlider;
