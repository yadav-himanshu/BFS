import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import MobileViewNav from "./MobileViewNav";
import DesktopViewNav from "./DesktopViewNav";
import AdminAuth from '../adminData/AdminAuth'

const Navbar = () => {

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-3">
      <div className="flex items-center items-center justify-between max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/home">
            <img
              className="h-20 rounded-md object-cover"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Title */}
        <h2 className="font-bold text-2xl hidden md:block">
          Bombay Facility Service
        </h2>
        <h2 className="font-bold text-2xl block md:hidden">BFS</h2>
        <div className="flex items-center gap-3">
          {/* Desktop Navigation */}
          <DesktopViewNav/>
          {/* Mobile Navigation */}
          <MobileViewNav/>
          <AdminAuth/>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
