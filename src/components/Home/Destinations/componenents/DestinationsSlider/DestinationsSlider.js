import React from "react";
import Slider from "react-slick";
import { data } from "data/data.json";

// Configuracion Carousel
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 100,
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

// Controles para Slider
function SampleNextArrow({ onClick }) {
  return (
    <span className="destinations-arrow" onClick={onClick}>
      <i className="fa fa-angle-left" />
    </span>
  );
}

// Controles para Slider
function SamplePrevArrow({ onClick }) {
  return (
    <span className="destinations-arrow disabled" onClick={onClick}>
      <i className="fa fa-angle-left" />
    </span>
  );
}

const DestinationsSlider = () => {
  return (
    <Slider {...settings} style={{ width: "60%" }}>
      {data[0].destinations.map((dest, key) => (
        <div className="destinations-item" key={key}>
          <div className="destinations-card">
            <img className="destinations-image" src={`images/${dest.image}`} />
            <h3 className="destinations-country">{dest.country}</h3>
            <div className="destinations-price">
              <span>USD</span> {dest.price}
            </div>
          </div>

          <div style={{ width: "240px" }}>
            <h5 className="destinations-city">{dest.city}</h5>
            <p className="destinations-description">{dest.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default DestinationsSlider;
