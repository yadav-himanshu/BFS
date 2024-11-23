import { AlignJustify, Home, Info, Phone, Wrench } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileViewNav = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
  return (
    <div className="md:hidden relative">
      <button
        className="text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <AlignJustify size={24} />
      </button>
      {open && (
        <div className="flex flex-col gap-1 text-black absolute right-0 bg-slate-50 rounded-md shadow-md z-50">
          <Link
            className={`flex items-center gap-2 font-semibold px-4 pt-2 pb-1 border-b border-gray-300 transition duration-300 ${
              isActive("/home") ? "text-gray-900" : "hover:text-gray-700"
            }`}
            to="/home"
            onClick={() => setOpen(false)}
          >
            <Home size={20} /> Home
          </Link>
          <Link
            className={`flex items-center gap-2 font-semibold px-4 py-1 border-b border-gray-300 transition duration-300 ${
              isActive("/services") ? "text-gray-900" : "hover:text-gray-700"
            }`}
            to="/services"
            onClick={() => setOpen(false)}
          >
            <Wrench size={20} /> Services
          </Link>
          <Link
            className={`flex items-center gap-2 font-semibold px-4 py-1 border-b border-gray-300 transition duration-300 ${
              isActive("/about") ? "text-gray-900" : "hover:text-gray-700"
            }`}
            to="/about"
            onClick={() => setOpen(false)}
          >
            <Info size={20} /> About
          </Link>
          <Link
            className={`flex items-center gap-2 font-semibold px-4 bt-1 pb-2 transition duration-300 ${
              isActive("/contact") ? "text-gray-900" : "hover:text-gray-700"
            }`}
            to="/contact"
            onClick={() => setOpen(false)}
          >
            <Phone size={20} /> Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileViewNav;
