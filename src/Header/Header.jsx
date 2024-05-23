import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = ({onMenuClick }) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar open/close
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="w-full px-4 py-2 bg-white shadow-md">
  <div className="flex items-center justify-between">
  

    <div className="flex items-center gap-3">
      <div
        onClick={onMenuClick}
        className="bg-[#e1d8f1] p-2 text-2xl text-[#673ab7] rounded-lg cursor-pointer hover:bg-[#673ab7] hover:text-white"
      >
        <IoMenu />
      </div>
      <div className="hidden sm:block">
        <b className="text-[#673ab7] text-2xl">
          USER MANAGEMENT RECORD SYSTEM
        </b>
      </div>
    </div>

 
      <div className="flex items-center gap-4">
      <div className="  flex items-center gap-2">
         
    <img
      src="/login.png"
      className="h-[70px] w-[208px]"
    />
        <div className=" hidden lg:flex justify-center items-center bg-green-200 text-green-500 h-10 w-10 rounded-full">
          <FaWifi />
        </div>
        <div className="relative flex items-center justify-center gap-2 h-10 w-10 sm:w-10 bg-blue-100 rounded-full hover:bg-blue-300 cursor-pointer">
         
          <button onClick={handleDropdownToggle} className="text-cyan-500 hover:text-white text-xl">
            <IoSettingsOutline />
          </button>
          {dropdownOpen && (
            <div ref={dropdownRef} className="absolute right-0 mt-12 w-48 bg-white rounded-md shadow-lg z-10">
              <button
                onClick={() => { handleLogout(); navigate("/"); }}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

  
  );
};

export default Header;
