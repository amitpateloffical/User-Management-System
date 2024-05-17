import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaList } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdGitPullRequest } from "react-icons/io";
import { FcDepartment } from "react-icons/fc";
import { SiRotaryinternational } from "react-icons/si";
import { SiCriticalrole } from "react-icons/si";
import { IoIdCardOutline } from "react-icons/io5";
import { TbAsset } from "react-icons/tb";
import { MdOutlineQuickreply } from "react-icons/md";
import { SiConsul } from "react-icons/si";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const [masters, setMasters] = useState(false);
  const [report, setReport] = useState(false);
  const [CFR, setCFR] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-purple-500" : "";
  };

  const isMasterActive = () => {
    const masterPaths = [
      "/department-master",
      "/designation-master",
      "/role-master",
      "/application-master",
      "/assets-master",
      "/equipment-master",
      "/consolidate-master",
    ];
    return masterPaths.some((path) => location.pathname === path);
  };

  const isReportActive = () => {
    const reportPaths = [
      "/active-users-list",
      "/request-report",
      "/assets-inventory",
      "/gxp-inventory",
      "/user-list",
      "/sign-up-report",
    ];
    return reportPaths.some((path) => location.pathname === path);
  };

  const isCFRActive = () => {
    const CFRPaths = ["/user-management", "/audit-trail"];
    return CFRPaths.some((path) => location.pathname === path);
  };

  return (
    <div>
      {sidebarOpen && (
        <div className="fixed top-24 h-full w-64 flex flex-col gap-10  p-4">
          <div
            className={`flex gap-5 items-center cursor-pointer ${isActive(
              "/dashboard"
            )}`}
            onClick={() => handleNavigation("/dashboard")}
          >
            <AiOutlineDashboard size={30} />
            Dashboard
          </div>
          <div
            className={`items-center pl-1 cursor-pointer ${
              isMasterActive() ? "text-purple-500" : ""
            }`}
            onClick={() => setMasters(!masters)}
          >
            <p className="flex   gap-5 items-center">
              <FaList size={22} /> Masters{" "}
              {masters ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
            </p>

            <div
              className="px-5 flex pt-3 cursor-pointer text-md"
              onClick={stopPropagation}
            >
              {masters && (
                <div className="flex flex-col gap-5 text-gray-500 ">
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/department-master"
                    )}`}
                    onClick={() => handleNavigation("/department-master")}
                  >
                    <FcDepartment /> Department Master
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/designation-master"
                    )}`}
                    onClick={() => handleNavigation("/designation-master")}
                  >
                    <SiRotaryinternational />
                    Designation Master
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/role-master"
                    )}`}
                    onClick={() => handleNavigation("/role-master")}
                  >
                    <SiCriticalrole /> Role Master
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/application-master"
                    )}`}
                    onClick={() => handleNavigation("/application-master")}
                  >
                    <IoIdCardOutline /> Application Master
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/assets-master"
                    )}`}
                    onClick={() => handleNavigation("/assets-master")}
                  >
                    <TbAsset /> Assets Master
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/equipment-master"
                    )}`}
                    onClick={() => handleNavigation("/equipment-master")}
                  >
                    <MdOutlineQuickreply /> Equipment/Instrument Master
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/consolidate-master"
                    )}`}
                    onClick={() => handleNavigation("/consolidate-master")}
                  >
                    <SiConsul /> Consolidate Master
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className={`flex gap-5 items-center cursor-pointer ${isActive(
              "/user-management-request"
            )}`}
            onClick={() => handleNavigation("/user-management-request")}
          >
            <IoMdGitPullRequest size={22} />
            User Management Request
          </div>

          <div
            className={`items-center pl-1 cursor-pointer ${
              isReportActive() ? "text-purple-500" : ""
            }`}
            onClick={() => setReport(!report)}
          >
            <p className="flex   gap-5 items-center">
              <FaList size={22} /> Report{" "}
              {report ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
            </p>

            <div
              className="px-5 flex pt-3 cursor-pointer text-md"
              onClick={stopPropagation}
            >
              {report && (
                <div
                  className="flex flex-col gap-2 text-gray-500 "
                  onClick={stopPropagation}
                >
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/active-users-list"
                    )}`}
                    onClick={() => handleNavigation("/active-users-list")}
                  >
                    Active Users List
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/request-report"
                    )}`}
                    onClick={() => handleNavigation("/request-report")}
                  >
                    Request Report
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/assets-inventory"
                    )}`}
                    onClick={() => handleNavigation("/assets-inventory")}
                  >
                    Assets Inventory
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/gxp-inventory"
                    )}`}
                    onClick={() => handleNavigation("/gxp-inventory")}
                  >
                    GxP Inventory
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/user-list"
                    )}`}
                    onClick={() => handleNavigation("/user-list")}
                  >
                    User List
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/sign-up-report"
                    )}`}
                    onClick={() => handleNavigation("/sign-up-report")}
                  >
                    Sign-Up Report
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className={`items-center pl-1 cursor-pointer ${
              isCFRActive() ? "text-purple-500" : ""
            }`}
            onClick={() => setCFR(!CFR)}
          >
            <p className="flex   gap-5 items-center">
              <FaList size={22} /> 21 CFR Part 11{" "}
              {CFR ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
            </p>

            <div
              className="px-5 flex pt-3 cursor-pointer text-md"
              onClick={stopPropagation}
            >
              {CFR && (
                <div className="flex flex-col gap-2 text-gray-500 ">
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/user-management"
                    )}`}
                    onClick={() => handleNavigation("/user-management")}
                  >
                    {" "}
                    User Management{" "}
                  </p>
                  <p
                    className={`hover:text-purple-500 flex items-center gap-3 ${isActive(
                      "/audit-trail"
                    )}`}
                    onClick={() => handleNavigation("/audit-trail")}
                  >
                    {" "}
                    Audit Trail{" "}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
