import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, UserCheck } from "lucide-react";
import AdminSigninModal from "./AdminSigninModal";

const AdminAuth = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogin = () => {
    const adminUser = {
      username: import.meta.env.VITE_ADMIN_USERNAME,
      password: import.meta.env.VITE_ADMIN_PASSWORD,
    };

    if (
      credentials.username === adminUser.username &&
      credentials.password === adminUser.password
    ) {
      setIsLoggedIn(true);
      setShowModal(false);
    } else {
      alert("Invalid credentials! Access Denied.");
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="">
      {!isLoggedIn && (
        <Link
          onClick={() => setShowModal(true)}
          className="font-semibold transition duration-30 flex items-center gap-2 whitespace-nowrap px-4 md:px-0 bt-1 md:bt-0 pb-2 md:pb-0"
        >
          <UserCheck size={20} className="text-black block md:hidden" />
          Admin Access
        </Link>
        
      )}

      {showModal && (
        <AdminSigninModal
          credentials={credentials}
          handleLogin={handleLogin}
          setCredentials={setCredentials}
          setShowModal={setShowModal}
        />
      )}

      {isLoggedIn && (
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer dropdown"
            onClick={toggleDropdown}
          >
            <span className="font-semibold text-yellow-300 hidden md:block">Hello, Admin</span>
            <User size={24} className="text-yellow-300" />
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-50 text-black dropdown">
              <Link
                to="/generate-receipts"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Generate Receipts
              </Link>
              <Link
                to="/calculate-salary"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Calculate Salary
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminAuth;
