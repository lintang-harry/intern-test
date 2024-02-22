import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Mie ayam mae terkenal oleh masyarakat sekitar yang memiliki cita rasa
          yang luar biasa dan harga mia ayam sangat terjangkau
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Mie nya kenyal, kuah nya penyh dengan rempah-rempah berkualitas,
          harganya anak kostan banget
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Lintang Harry</h2>
      </div>
    </div>
  );
};

export default Testimonial;
