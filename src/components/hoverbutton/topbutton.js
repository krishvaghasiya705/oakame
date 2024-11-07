import React from "react";
import "./topbutton.scss";
// import Dropdownicon from "../../assets/svg/dropdownicon";

export default function Topbutton({ text1, text2, icon1, icon2 }) {
  return (
    <>
      <div className="common-top-button-div-alignment">
        <div className="common-top-button-div">
          <span>{text1}</span>
          {icon1}
        </div>
        <div className="common-top-button-div-sc">
          <div className="common-top-button-div-panel">
            <div className="common-top-button-div-panel-button">
              <span>{text2}</span>
              {icon2}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
