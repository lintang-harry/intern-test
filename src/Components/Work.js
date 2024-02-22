import React from "react";
import PickMeals from "../Assets/gambar3.png";
import ChooseMeals from "../Assets/gambar4.png";
import DeliveryMeals from "../Assets/gambar5.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Mie Ayam Original",
      text: "Mie ayam original diracik dengan bahan-bahan yang berkualitas, sehingga memiliki rasa yang autentik",
    },
    {
      image: ChooseMeals,
      title: "Mie ayam Ceker",
      text: "Perpaduan mie dan ceker yang bikin nagih dan nikmat ",
    },
    {
      image: DeliveryMeals,
      title: "Mie Ayam Bakso",
      text: "Mie ayam yang diberikan bakso 100% daging sapi asli dan berkualitas",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Menu Makanan</p>
        <h1 className="primary-heading">Daftar menu</h1>
        <p className="primary-text">
          Ada 3 Varian menu mie aya di antaranya yaitu
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
