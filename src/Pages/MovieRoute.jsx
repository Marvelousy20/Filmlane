import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../Layout/MainNavigation";
import Footer from "../Layout/Footer";

const MovieRoute = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default MovieRoute;
