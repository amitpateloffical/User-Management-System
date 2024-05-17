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
    <div>
      
      <div  className="flex items-center justify-between pr-5">
        <img
          src="/login.png"
          className="h-[70px] w-[208px]"
        />

        <div className="flex justify-center items-center gap-3">
          <div onClick={onMenuClick} className="bg-[#e1d8f1] p-2 text-2xl text-[#673ab7] rounded-lg cursor-pointer hover:bg-[#673ab7] hover:text-white">
            <IoMenu />
          </div>{" "}
          <div>
          <b className="text-[#673ab7] text-2xl">
            USER MANAGEMENT RECORD SYSTEM
          </b>
          </div>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-20">
            <li>
              <b className="text-xl flex justify-center items-center text-[#673ab7]">
                <img />
                :Mayank
              </b>
            </li>
            <li>
              <b className="flex justify-between items-center text-[#673ab7]">
                <img
                  src="http://104.238.222.219/EUMR_JB/assets/images/pharmaceutical.png"
                  style={{ height: "40px", width: "48px" }}
                />
                <p className="text-xl">:VidyaGxP</p>
              </b>
            </li>
            <li className="flex justify-between items-center text-[#673ab7]">
              <b className="text-xl"> Test( EMP001)</b>
            </li>
            <li className="flex justify-center items-center bg-green-200 text-green-500 h-10 w-14 rounded-2xl">
              <FaWifi />
            </li>
            <li className="flex justify-center gap-3 items-center h-10 w-20 bg-blue-100 rounded-2xl hover:bg-blue-300  cursor-pointer">
              <a>
                <img
                  src="	http://104.238.222.219/EUMR_JB/assets/userPhoto/user.png"
                  alt=""
                  style={{ width: "32px", height: "22px" }}
                  className="rounded-full"
                />
              </a>
              <a onClick={handleDropdownToggle} className="text-cyan-500 hover:text-white text-xl">
              <IoSettingsOutline />
              </a>
              {dropdownOpen && (
        <div ref={dropdownRef} className="absolute right-0 mt-20 w-48 bg-white rounded-md shadow-lg z-10">
          <button
            onClick={()=>{handleLogout,navigate("/")}}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Log Out
          </button>
        </div>
      )}
            </li>
           
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
