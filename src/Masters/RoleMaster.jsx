import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";

const RoleMaster = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const data = [
    {
        srNo: "1.",
        role: "QC",
        description: "Quality Control",
        addGroup: "Group A",
        status: "Active"
    },
    {
        srNo: "2.",
        role: "Test-1",
        description: "Testing Department 1",
        addGroup: "Group B",
        status: "Inactive"
    },
    {
        srNo: "3.",
        role: "User",
        description: "User Management",
        addGroup: "Group A",
        status: "Active"
    },
    {
        srNo: "4.",
        role: "IT",
        description: "Information Technology",
        addGroup: "Group C",
        status: "Inactive"
    },
    {
        srNo: "5.",
        role: "QA",
        description: "Quality Assurance",
        addGroup: "Group A",
        status: "Active"
    },
    {
        srNo: "6.",
        role: "System Admin",
        description: "System Administration",
        addGroup: "Group C",
        status: "Inactive"
    },
    {
        srNo: "7.",
        role: "HR",
        description: "Human Resources",
        addGroup: "Group B",
        status: "Active"
    },
    {
        srNo: "8.",
        role: "Finance",
        description: "Financial Department",
        addGroup: "Group A",
        status: "Active"
    },
    {
        srNo: "9.",
        role: "Marketing",
        description: "Marketing Department",
        addGroup: "Group B",
        status: "Inactive"
    },
    {
        srNo: "10.",
        role: "Operations",
        description: "Operations Management",
        addGroup: "Group C",
        status: "Active"
    }
];

    const handleStatusFilterChange = (event) => {
      setStatusFilter(event.target.value);
    };
    
    const filteredData = data.filter(item => {
      return (
        (statusFilter === "All" || 
        (statusFilter === "Active" && item.status === "Active") || 
        (statusFilter === "Inactive" && item.status === "Inactive"))
        &&
        (searchText === "" || item.role.toLowerCase().includes(searchText.toLowerCase()))
      );
    });
  return (
    <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? 'ml-64' : ''}`}>
    <div className="grid grid-cols-1 md:grid-cols-2 border-b pb-5">
      <div className="text-3xl font-semibold text-[#673ab7]">Role List</div>
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-5">
        <div className="flex flex-col w-full md:w-auto">
          <label htmlFor="status" className="font-bold">Status</label>
          <select id="status" className="border border-black rounded-md py-2" onChange={handleStatusFilterChange}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="flex flex-col w-full md:w-auto">
          <label htmlFor="search" className="font-bold">Search</label>
          <input
            id="search"
            type="text"
            className="border border-black rounded-md py-2"
            placeholder="Search Role By Name"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </div>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-center">SR.NO.</th>
            <th className="border-b px-4 py-2 text-center">ROLE</th>
            <th className="border-b px-4 py-2 text-center">DESCRIPTION</th>
            <th className="border-b px-4 py-2 text-center">ADD GROUP</th>
            <th className="border-b px-4 py-2 text-center">STATUS</th>
            <th className="border-b px-4 py-2 text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((itm, index) => (
            <tr key={index}>
              <td className="border-b px-4 py-2 text-center">{itm.srNo}</td>
              <td className="border-b px-4 py-2 text-center">{itm.role}</td>
              <td className="border-b px-4 py-2 text-center">{itm.description}</td>
              <td className="border-b px-4 py-2 text-center">{itm.addGroup}</td>
              <td className="border-b px-4 py-2 text-center">
                <div className="flex justify-center items-center">
                  <div className={`rounded-full px-2 ${itm.status === 'Active' ? 'bg-green-300 text-green-700' : 'bg-red-300 text-red-700'}`}>
                    {itm.status}
                  </div>
                </div>
              </td>
              <td className="border-b px-4 py-2 text-center">
                <div className="flex justify-center gap-3 items-center">
                  <div className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer">
                    <FaRegEdit />
                  </div>
                  <div className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer">
                    <IoBan />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default RoleMaster