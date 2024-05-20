import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import PopUp from "../PopUp/PopUp";

const ConsolidateMaster = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupOpenII, setPopupOpenII] = useState(false);
    const [statusFilter, setStatusFilter] = useState("All");
    const [searchText, setSearchText] = useState("");

    const data = [
      {
          srNo: "1.",
          consolidate: "Group 1",
          equipmentId: "EID-001",
          assetId: "AID-101",
          applicationNameVersion: "App A v1.0",
          department: "QC",
          status: "Active"
      },
      {
          srNo: "2.",
          consolidate: "Group 2",
          equipmentId: "EID-002",
          assetId: "AID-102",
          applicationNameVersion: "App B v1.1",
          department: "Test-1",
          status: "Inactive"
      },
      {
          srNo: "3.",
          consolidate: "Group 1",
          equipmentId: "EID-003",
          assetId: "AID-103",
          applicationNameVersion: "App A v1.2",
          department: "User",
          status: "Active"
      },
      {
          srNo: "4.",
          consolidate: "Group 3",
          equipmentId: "EID-004",
          assetId: "AID-104",
          applicationNameVersion: "App C v2.0",
          department: "IT",
          status: "Inactive"
      },
      {
          srNo: "5.",
          consolidate: "Group 1",
          equipmentId: "EID-005",
          assetId: "AID-105",
          applicationNameVersion: "App A v1.3",
          department: "QA",
          status: "Active"
      },
      {
          srNo: "6.",
          consolidate: "Group 4",
          equipmentId: "EID-006",
          assetId: "AID-106",
          applicationNameVersion: "App D v2.1",
          department: "System Admin",
          status: "Inactive"
      },
      {
          srNo: "7.",
          consolidate: "Group 2",
          equipmentId: "EID-007",
          assetId: "AID-107",
          applicationNameVersion: "App B v1.4",
          department: "HR",
          status: "Active"
      },
      {
          srNo: "8.",
          consolidate: "Group 1",
          equipmentId: "EID-008",
          assetId: "AID-108",
          applicationNameVersion: "App A v1.5",
          department: "Finance",
          status: "Active"
      },
      {
          srNo: "9.",
          consolidate: "Group 2",
          equipmentId: "EID-009",
          assetId: "AID-109",
          applicationNameVersion: "App B v1.6",
          department: "Marketing",
          status: "Inactive"
      },
      {
          srNo: "10.",
          consolidate: "Group 3",
          equipmentId: "EID-010",
          assetId: "AID-110",
          applicationNameVersion: "App C v2.2",
          department: "Operations",
          status: "Active"
      }
  ];
  

    const togglePopup = () => {
      setPopupOpen(!popupOpen);
    };
    const togglePopupII = () => {
      setPopupOpenII(!popupOpenII);
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
        (searchText === "" || item.consolidate.toLowerCase().includes(searchText.toLowerCase()))
      );
    });
  return (
    <div>
      
      
    <div
      className={`content-with-fixed-header  px-4 flex flex-col gap-10 ${
        sidebarOpen ? "ml-64" : ""
      } content-with-fixed-header  px-4 flex flex-col gap-10`}
    >
      <div className="grid grid-cols-3 border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
        Consolidate Master
        </div>
       <div className="flex justify-around col-span-1 w-full">
       <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[30%] h-[40px] flex justify-center items-center" onClick={togglePopup}>
           Server Base &nbsp;<MdAddBox />
          </div>
          <div className="bg-[#d3eafd]  rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[30%] h-[40px] flex justify-center items-center" onClick={togglePopupII}>
           Standalone &nbsp;<MdAddBox />
          </div>
       </div>
      </div>
      <div className="grid grid-cols-3 justify-center items-center gap-5">
        <div className="col-span-2 flex gap-5">
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
            Asset Type
            </label>
            <select className="border border-black rounded-md  py-2 ">
              <option>---select---</option>
              <option>HMI</option>
              <option>SCADA</option>
              <option>IPC</option>
              <option>COMPUTER SYSTEM</option>
              <option>OTHER</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-bold">
              Search
            </label>
            <input
              type="text"
              className="border border-black rounded-md pr-24 py-2 "
              placeholder="Search Consolodate"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>
        </div>

          
        </div>
      <div>
          <table>
              <thead>
                  <tr >
                      <th className="text-center">SR.NO.</th>
                      <th className="text-center">CONSOLIDATE</th>
                      <th className="text-center">EQUIPMENT/INSTRUMENT ID	</th>
                      <th className="text-center">ASSET ID</th>
                      <th className="text-center">APPLICATION NAME & VERSION</th>
                      <th className="text-center">DEPARTMENT</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-center">ACTION</th>
                  </tr>
              </thead>
              <tbody>
                 
{filteredData.map(( itm, index)=>{
  return(
     
       <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.consolidate}</td>
<td className="text-center">{itm.equipmentId}</td>
<td className="text-center">{itm.assetId}</td>
<td className="text-center">{itm.applicationNameVersion}</td>
<td className="text-center">{itm.department}</td>
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
        heading="Server Base"
        buttonText="Submit"
        inputs={[
          { label: 'Consolidate', type:"text" },
          {
            label: 'Assets Id',
            type: 'dropdown',
            options: [
              { label: '-select-', value: 'select' },
              { label: 'HMI', value: 'hmi' },
              { label: 'SCADA', value: 'scada' },
              { label: 'IPC', value: 'ipc' },
              { label: 'COMPUTER SYSTEM', value: 'cs' },
              { label: 'Other', value: 'other' },
            ],
          },
          {
            label: 'Application Name & Version',
            type: 'dropdown',
            options: [
              { label: '-select-', value: 'select' },
              { label: 'HMI', value: 'hmi' },
              { label: 'SCADA', value: 'scada' },
              { label: 'IPC', value: 'ipc' },
              { label: 'COMPUTER SYSTEM', value: 'cs' },
              { label: 'Other', value: 'other' },
            ],
          },
          {
            label: 'Department',
            type: 'dropdown',
            options: [
              { label: '-select-', value: 'select' },
              { label: 'HMI', value: 'hmi' },
              { label: 'SCADA', value: 'scada' },
              { label: 'IPC', value: 'ipc' },
              { label: 'COMPUTER SYSTEM', value: 'cs' },
              { label: 'Other', value: 'other' },
            ],
          },
          {
            label: 'Backup Frequency',
            type: 'dropdown',
            options: [
              { label: '-select-', value: 'select' },
              { label: 'HMI', value: 'hmi' },
              { label: 'SCADA', value: 'scada' },
              { label: 'IPC', value: 'ipc' },
              { label: 'COMPUTER SYSTEM', value: 'cs' },
              { label: 'Other', value: 'other' },
            ],
          },
          {
            label: 'Backup Type',
            type: 'dropdown',
            options: [
              { label: '-select-', value: 'select' },
              { label: 'HMI', value: 'hmi' },
              { label: 'SCADA', value: 'scada' },
              { label: 'IPC', value: 'ipc' },
              { label: 'COMPUTER SYSTEM', value: 'cs' },
              { label: 'Other', value: 'other' },
            ],
          },
          { label: 'Backup Path', type:"text" },
        ]}
        open={popupOpen}
        onClose={togglePopup}
      />
       <PopUp
        heading="Equipment/Instrument Master"
        buttonText="Submit"
        inputs={[
          { label: 'Consolidate', type:"text" },
          {
            label: 'Equipment/Instrument ID',
            type: 'dropdown',
            options: [
              { label: '-select-', value: 'select' },
              { label: 'HMI', value: 'hmi' },
              { label: 'SCADA', value: 'scada' },
              { label: 'IPC', value: 'ipc' },
              { label: 'COMPUTER SYSTEM', value: 'cs' },
              { label: 'Other', value: 'other' },
            ],
          },
          {
            label: 'Application Name & Version',
            type: 'dropdown',
            options: [
              { label: '-select-', value: 'select' },
              { label: 'HMI', value: 'hmi' },
              { label: 'SCADA', value: 'scada' },
              { label: 'IPC', value: 'ipc' },
              { label: 'COMPUTER SYSTEM', value: 'cs' },
              { label: 'Other', value: 'other' },
            ],
          },
          {
            label: 'Department',
            type: 'dropdown',
            options: [
              { label: '-select-', value: 'select' },
              { label: 'HMI', value: 'hmi' },
              { label: 'SCADA', value: 'scada' },
              { label: 'IPC', value: 'ipc' },
              { label: 'COMPUTER SYSTEM', value: 'cs' },
              { label: 'Other', value: 'other' },
            ],
          },
          {
            label: 'Backup Frequency',
            type: 'dropdown',
            options: [
              { label: '-select-', value: 'select' },
              { label: 'HMI', value: 'hmi' },
              { label: 'SCADA', value: 'scada' },
              { label: 'IPC', value: 'ipc' },
              { label: 'COMPUTER SYSTEM', value: 'cs' },
              { label: 'Other', value: 'other' },
            ],
          },
          {
            label: 'Backup Type',
            type: 'dropdown',
            options: [
              { label: '-select-', value: 'select' },
              { label: 'HMI', value: 'hmi' },
              { label: 'SCADA', value: 'scada' },
              { label: 'IPC', value: 'ipc' },
              { label: 'COMPUTER SYSTEM', value: 'cs' },
              { label: 'Other', value: 'other' },
            ],
          },
          { label: 'Backup Path', type:"text" },
        ]}
        open={popupOpenII}
        onClose={togglePopupII}
      />
  </div>
  )
}

export default ConsolidateMaster