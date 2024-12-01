import React from "react";
import { Link, useLocation } from "react-router-dom";
import AdminAuth from "../adminData/AdminAuth";

const DesktopViewNav = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
  return (
    <div className="hidden md:flex gap-4 text-sm">
    <Link
      className={`font-semibold transition duration-300 ${
        isActive("/home")
          ? "text-yellow-300 underline"
          : "hover:text-yellow-300"
      }`}
      to="/home"
    >
      Home
    </Link>
    <Link
      className={`font-semibold transition duration-300 ${
        isActive("/services")
          ? "text-yellow-300 underline"
          : "hover:text-yellow-300"
      }`}
      to="/services"
    >
      Services
    </Link>
    <Link
      className={`font-semibold transition duration-300 ${
        isActive("/about")
          ? "text-yellow-300 underline"
          : "hover:text-yellow-300"
      }`}
      to="/about"
    >
      About
    </Link>
    <Link
      className={`font-semibold transition duration-300 ${
        isActive("/contact")
          ? "text-yellow-300 underline"
          : "hover:text-yellow-300"
      }`}
      to="/contact"
    >
      Contact
    </Link>
    <AdminAuth/>
  </div>
  )
}

export default DesktopViewNav