import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import MobileViewNav from "./MobileViewNav";
import DesktopViewNav from "./DesktopViewNav";

const Navbar = () => {

  return (
    <div className="bg-gradient-to-r from-white via-gray-700 to-gray-900 text-white p-3">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/home">
            <img
              className="h-16 w-20 rounded-md object-cover mix-blend-multiply"
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

        {/* Desktop Navigation */}
        <DesktopViewNav/>
        {/* Mobile Navigation */}
        <MobileViewNav/>

      </div>
    </div>
  );
};

export default Navbar;
