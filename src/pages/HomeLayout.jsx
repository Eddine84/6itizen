import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollTop from "../components/ScrollToTop";
const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <ScrollTop />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
