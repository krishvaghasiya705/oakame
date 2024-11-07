import React from "react";
import "./homeherobanner.scss";

import Homeherobannerimag1 from "../../../assets/images/herobannerimage1.jpg";
import Homeherobannerimag2 from "../../../assets/images/herobannerimage2.jpg";
import Homeherobannerimag3 from "../../../assets/images/herobannerimage3.jpg";

export default function Homeherobanner() {
  return (
    <div className="home-herobanner-alignment">
      <div className="home-herobanner-main">
        <div className="home-herobanner-slider-pagination">
          <div className="home-herobanner-slider-pagination-box">
            <img src={Homeherobannerimag1} alt="Homeherobannerimag1" />
            <div className="home-herobanner-slider-pagination-box-overlay"></div>
          </div>
          <div className="home-herobanner-slider-pagination-box">
            <img src={Homeherobannerimag2} alt="Homeherobannerimag2" />
            <div className="home-herobanner-slider-pagination-box-overlay"></div>
          </div>
          <div className="home-herobanner-slider-pagination-box">
            <img src={Homeherobannerimag3} alt="Homeherobannerimag3" />
            <div className="home-herobanner-slider-pagination-box-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
