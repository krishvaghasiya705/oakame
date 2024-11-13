import React from "react";
import "./overlay.scss";

export default function Blankoverlay({ onClick }) {
  return (
    <div
      className="blankoverlay"
      // style={{ width: width }}
      onClick={onClick}
    ></div>
  );
}
