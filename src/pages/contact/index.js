import React, { useState } from "react";
import Hero from "components/Hero/Hero";
// import Container from "components/Container/Container";
import MainFooter from "components/MainFooter/MainFooter";
import ContactComponent from "components/Contact/Contact";

const Contact = () => {
  const [images, setimages] = useState([
    {
      image: "images/slider/contact.jpg",
    },
  ]);

  return (
    <div className="contact">
      <Hero images={images} bookingDisabled title="contacto"/>
      <ContactComponent />
      <MainFooter />
    </div>
  );
};

export default Contact;
