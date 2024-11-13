import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <div style={{ margin: "-1.2rem 0 0 0" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}