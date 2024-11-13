import React from "react";
import "./productsdropdown.scss";
import { NavLink } from "react-router-dom";

export default function Productsdropdown({ isOpen }) {
  return (
    <div className={`products-dropdown-main ${isOpen ? "open" : ""}`}>
      <div className="products-dropdown-grd-main">
        <div className="products-dropdown-grd-box-one">
          <div className="products-dropdown-grd-box-one-inner-div-one">
            <NavLink to={"/"}>
              <div className="products-dropdown-grd-box-one-inner-div-one-content">
                <span>All our products</span>
              </div>
            </NavLink>
          </div>
          <div className="products-dropdown-grd-box-one-inner-div-two">
            <NavLink to={"/armchairs"}>
              <div className="products-dropdown-grd-box-one-inner-div-one-content">
                <span>Armchairs</span>
              </div>
            </NavLink>
          </div>
          <div className="products-dropdown-grd-box-one-inner-div-three">
            <NavLink to={"/benches"}>
              <div className="products-dropdown-grd-box-one-inner-div-one-content">
                <span>Benches</span>
              </div>
            </NavLink>
          </div>
          <div className="products-dropdown-grd-box-one-inner-div-four">
            <NavLink to={"/coffeetables"}>
              <div className="products-dropdown-grd-box-one-inner-div-one-content">
                <span>Coffee tables</span>
              </div>
            </NavLink>
          </div>
          <div className="products-dropdown-grd-box-one-inner-div-five">
            <NavLink to={"/diningtables"}>
              <div className="products-dropdown-grd-box-one-inner-div-one-content">
                <span>Dining Tables</span>
              </div>
            </NavLink>
          </div>
          <div className="products-dropdown-grd-box-one-inner-div-six">
            <NavLink to={"/otherfurniture"}>
              <div className="products-dropdown-grd-box-one-inner-div-one-content">
                <span>Other furniture</span>
              </div>
            </NavLink>
          </div>
          <div className="products-dropdown-grd-box-one-inner-div-seven">
            <NavLink to={"/sofas"}>
              <div className="products-dropdown-grd-box-one-inner-div-one-content">
                <span>Sofas</span>
              </div>
            </NavLink>
          </div>
          <div className="products-dropdown-grd-box-one-inner-div-eight">
            <NavLink to={"/stools"}>
              <div className="products-dropdown-grd-box-one-inner-div-one-content">
                <span>Stools</span>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="products-dropdown-grd-box-two-main">
          <div className="products-dropdown-grd-box-two">
            <div className="products-dropdown-grd-box-two-inner-one"></div>
            <div className="products-dropdown-grd-box-two-inner-two">
              <span className="products-square-one"></span>
              <span className="products-square-two"></span>
              <span className="products-square-three"></span>
              <span className="products-square-four"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
