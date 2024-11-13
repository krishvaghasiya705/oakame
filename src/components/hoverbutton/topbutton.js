import React, { useState, useRef, useEffect } from "react";
import "./topbutton.scss";
// import Dropdownicon from "../../assets/svg/dropdownicon";

export default function Topbutton({ text1, text2, icon1, icon2, className = "", style = {} }) {
  const [active, setActive] = useState(false);
  const buttonRef = useRef(null);

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        ref={buttonRef}
        className={`common-top-button-div-alignment ${active ? "common-top-button-div-alignment-active" : ""} ${className}`}
        style={style}
        onClick={toggleActive}
      >
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
