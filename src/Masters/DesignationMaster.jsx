import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import PopUp from "../PopUp/PopUp";
const DesignationMaster = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

    const data = [
      {
          srNo: "1.",
          designation: "QC",
          status: "Active"
      },
      {
          srNo: "2.",
          designation: "Test-1",
          status: "Inactive"
      },
      {
          srNo: "3.",
          designation: "User",
          status: "Active"
      },
      {
          srNo: "4.",
          designation: "IT",
          status: "Inactive"
      },
      {
          srNo: "5.",
          designation: "QA",
          status: "Active"
      },
      {
          srNo: "6.",
          designation: "System Admin",
          status: "Inactive"
      },
      {
          srNo: "7.",
          designation: "HR",
          status: "Active"
      },
      {
          srNo: "8.",
          designation: "Finance",
          status: "Active"
      },
      {
          srNo: "9.",
          designation: "Marketing",
          status: "Inactive"
      },
      {
          srNo: "10.",
          designation: "Operations",
          status: "Active"
      }
  ]
    const togglePopup = () => {
      setPopupOpen(!popupOpen);
    };

    const handleStatusFilterChange = (event) => {
      setStatusFilter(event.target.value);
    };

    const filteredData = data.filter(item => {
      return (
        (statusFilter === "All" || 
        (statusFilter === "Active" && item.status === "Active") || 
        (statusFilter === "Inactive" && item.status === "Inactive"))
        &&
        (searchText === "" || item.designation.toLowerCase().includes(searchText.toLowerCase()))
      );
    });

  return (
    <div>
   
    <div
      className={`content-with-fixed-header  px-4 flex flex-col gap-10 ${
        sidebarOpen ? "ml-64" : ""
      } content-with-fixed-header  px-4 flex flex-col gap-10`}
    >
      <div className="grid grid-cols-2 border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7]">
        Designation Master
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-bold">
              Status
            </label>
            <select className="border border-black rounded-md  py-2 " onChange={handleStatusFilterChange}>
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-bold">
              Search
            </label>
            <input
              type="text"
              className="border border-black rounded-md pr-24 py-2 "
              placeholder="Search Designation By Name"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>

          <div className="bg-[#d3eafd] text-[#2196f3] w-[10%] h-[40px] flex justify-center items-center" onClick={togglePopup}>
            <MdAddBox />
          </div>
        </div>
      </div>
      <div>
          <table>
              <thead>
                  <tr >
                      <th className="text-center">SR.NO.</th>
                      <th className="text-center">DESIGNATION</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-center">ACTION</th>
                  </tr>
              </thead>
              <tbody>
                 
{filteredData.map(( itm, index)=>{
  return(
     
       <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.designation}</td>
<td > <div className="text-center flex justify-center items-center"><div className="bg-green-300 text-green-700 rounded-full text-center w-[70px]">{itm.status}</div></div> </td>
<td > <div className="text-center flex justify-center gap-3 items-center"><div className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer"><FaRegEdit /></div> <div className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer"><IoBan /></div></div></td>
</tr>
      
  )
})}
                  
              </tbody>
          </table>
      </div>
    </div>
    <PopUp
        heading="Designation Master"
        buttonText="Submit"
        labelHeading="Designation"
        inputs={[
          { label: 'Designation', placeholder: 'Enter Designation Name' },
        ]}
        open={popupOpen}
        onClose={togglePopup}
      />
  </div>
  )
}

export default DesignationMaster