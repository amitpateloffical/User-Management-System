import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import PopUp from "../PopUp/PopUp";

const ApplicationMaster = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [access, setAccess] = useState("");

    const data = [
      {
          srNo: "1.",
          application: "App A",
          version: "1.0",
          make: "Make X",
          assignRole: "QC",
          status: "Active"
      },
      {
          srNo: "2.",
          application: "App B",
          version: "1.1",
          make: "Make Y",
          assignRole: "Test-1",
          status: "Inactive"
      },
      {
          srNo: "3.",
          application: "App A",
          version: "1.2",
          make: "Make X",
          assignRole: "User",
          status: "Active"
      },
      {
          srNo: "4.",
          application: "App C",
          version: "2.0",
          make: "Make Z",
          assignRole: "IT",
          status: "Inactive"
      },
      {
          srNo: "5.",
          application: "App A",
          version: "1.3",
          make: "Make X",
          assignRole: "QA",
          status: "Active"
      },
      {
          srNo: "6.",
          application: "App D",
          version: "2.1",
          make: "Make W",
          assignRole: "System Admin",
          status: "Inactive"
      },
      {
          srNo: "7.",
          application: "App B",
          version: "1.4",
          make: "Make Y",
          assignRole: "HR",
          status: "Active"
      },
      {
          srNo: "8.",
          application: "App A",
          version: "1.5",
          make: "Make X",
          assignRole: "Finance",
          status: "Active"
      },
      {
          srNo: "9.",
          application: "App B",
          version: "1.6",
          make: "Make Y",
          assignRole: "Marketing",
          status: "Inactive"
      },
      {
          srNo: "10.",
          application: "App C",
          version: "2.2",
          make: "Make Z",
          assignRole: "Operations",
          status: "Active"
      }
  ];
  
    const togglePopup = () => {
      setPopupOpen(!popupOpen);
    };

    const handleStatusFilterChange = (event) => {
      setStatusFilter(event.target.value);
    };

    const handleAccessFilterChange = (event) => {
      setAccess(event.target.value);
    };
    
    const filteredData = data.filter(item => {
      return (
        (statusFilter === "All" || 
        (statusFilter === "Active" && item.status === "Active") || 
        (statusFilter === "Inactive" && item.status === "Inactive"))
        &&
        (searchText === "" || item.application.toLowerCase().includes(searchText.toLowerCase()))
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
        Application Master
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
            Access Type
            </label>
            <select className="border border-black rounded-md  py-2 " onChange={handleAccessFilterChange}>
              <option value="All">All</option>
              <option value="Group">Group</option>
              <option value="Role">Role</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-bold">
              Search
            </label>
            <input
              type="text"
              className="border border-black rounded-md pr-24 py-2 "
              placeholder="Search Application By Name"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>

          <div className="bg-[#d3eafd] text-[#2196f3] w-[20%] h-[40px] flex justify-center items-center" onClick={togglePopup}>
            <MdAddBox />
          </div>
        </div>
      </div>
      <div>
          <table>
              <thead>
                  <tr >
                      <th className="text-center">SR.NO.</th>
                      <th className="text-center">APPLICATION</th>
                      <th className="text-center">VERSION</th>
                      <th className="text-center">MAKE</th>
                      <th className="text-center">ASSIGN ROLE</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-center">ACTION</th>
                  </tr>
              </thead>
              <tbody>
                 
{filteredData.map(( itm, index)=>{
  return(
     
       <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.application}</td>
<td className="text-center">{itm.version}</td>
<td className="text-center">{itm.make}</td>
<td className="text-center">{itm.assignRole}</td>
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
        heading="Application Master"
        buttonText="Submit"
       
        inputs={[
          { label: 'Application', placeholder: '', type:"text" },
          { label: 'Application Version', placeholder: '', type:"text" },
          { label: 'Make', placeholder: '', type:"text" },
        
        ]}
        open={popupOpen}
        onClose={togglePopup}
      />
  </div>
  )
}

export default ApplicationMaster