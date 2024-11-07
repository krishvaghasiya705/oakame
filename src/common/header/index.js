import React from "react";
import "./header.scss";
import Mainlogo from "../../assets/svg/mainlogo";
import { NavLink } from "react-router-dom";
import Dropdownicon from "../../assets/svg/dropdownicon";
import Topbutton from "../../components/hoverbutton/topbutton";

function Header() {
  return (
    <header>
      <div className="header-main">
        <div className="header-logo-main">
          <NavLink to={"/"}>
            <Mainlogo />
          </NavLink>
        </div>
        <div className="products-div-main">
          <NavLink to={"/"}>
            <Topbutton
              text1="products"
              text2="products"
              icon1={<Dropdownicon />}
              icon2={<Dropdownicon />}
            />
          </NavLink>
        </div>
        <div className="header-right-content-main">
          <div className="look-pro-sign-button-header-main">
            <div className="look-button-header">
              <NavLink to={"/"}>
                <Topbutton
                  text1="lookbook"
                  text2="lookbook"
                  icon1={""}
                  icon2={""}
                />
              </NavLink>
            </div>
            <div className="pro-button-header">
              <NavLink to={"/"}>
                <Topbutton text1="pro" text2="pro" icon1={""} icon2={""} />
              </NavLink>
            </div>
            <div className="sign-button-header">
              <NavLink to={"/"}>
                <Topbutton
                  text1="sign in"
                  text2="sign in"
                  icon1={""}
                  icon2={""}
                />
              </NavLink>
            </div>
          </div>
          <div className="cart-button-main">
            <Topbutton text1="cart" text2="cart" icon1={""} icon2={""} />
            <div className="cart-items-number">
              <span>0</span>
            </div>
          </div>
          <div className="language-button-main">
            <Topbutton
              text1="en"
              text2="en"
              icon1={<Dropdownicon />}
              icon2={<Dropdownicon />}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
