import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between pr-5">
        <img
          src="/login.png"
          className="h-[88px] w-[208px]"
        />

        <div className="flex justify-center items-center gap-3">
          <div className="bg-[#e1d8f1] p-2 text-2xl text-[#673ab7] rounded-lg cursor-pointer hover:bg-[#673ab7] hover:text-white">
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
                :Ankleshwar
              </b>
            </li>
            <li>
              <b className="flex justify-between items-center text-[#673ab7]">
                <img
                  src="http://104.238.222.219/EUMR_JB/assets/images/pharmaceutical.png"
                  style={{ height: "40px", width: "48px" }}
                />
                <p className="text-xl">:JB Pharma</p>
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
              <a onClick={()=>{}} className="text-cyan-500 hover:text-white text-xl">
              <IoSettingsOutline />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
