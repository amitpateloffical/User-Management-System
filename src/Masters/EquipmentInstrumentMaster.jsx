import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import PopUp from "../PopUp/PopUp";


const EquipmentInstrumentMaster = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState("All");
    const [searchText, setSearchText] = useState("");

    const data = [
      {
          srNo: "1.",
          equipmentId: "EID-001",
          equipmentName: "Thermometer",
          make: "Make X",
          model: "Model A1",
          type: "Measurement",
          status: "Active",
          action: "Calibrate"
      },
      {
          srNo: "2.",
          equipmentId: "EID-002",
          equipmentName: "Multimeter",
          make: "Make Y",
          model: "Model B1",
          type: "Testing",
          status: "Inactive",
          action: "Repair"
      },
      {
          srNo: "3.",
          equipmentId: "EID-003",
          equipmentName: "Oscilloscope",
          make: "Make X",
          model: "Model A2",
          type: "Measurement",
          status: "Active",
          action: "Check"
      },
      {
          srNo: "4.",
          equipmentId: "EID-004",
          equipmentName: "Power Supply",
          make: "Make Z",
          model: "Model C1",
          type: "Power",
          status: "Inactive",
          action: "Replace"
      },
      {
          srNo: "5.",
          equipmentId: "EID-005",
          equipmentName: "Spectrum Analyzer",
          make: "Make X",
          model: "Model A3",
          type: "Measurement",
          status: "Active",
          action: "Calibrate"
      },
      {
          srNo: "6.",
          equipmentId: "EID-006",
          equipmentName: "Function Generator",
          make: "Make W",
          model: "Model D1",
          type: "Signal",
          status: "Inactive",
          action: "Repair"
      },
      {
          srNo: "7.",
          equipmentId: "EID-007",
          equipmentName: "Data Logger",
          make: "Make Y",
          model: "Model B2",
          type: "Recording",
          status: "Active",
          action: "Check"
      },
      {
          srNo: "8.",
          equipmentId: "EID-008",
          equipmentName: "Anemometer",
          make: "Make X",
          model: "Model A4",
          type: "Measurement",
          status: "Active",
          action: "Calibrate"
      },
      {
          srNo: "9.",
          equipmentId: "EID-009",
          equipmentName: "LCR Meter",
          make: "Make Y",
          model: "Model B3",
          type: "Testing",
          status: "Inactive",
          action: "Repair"
      },
      {
          srNo: "10.",
          equipmentId: "EID-010",
          equipmentName: "Temperature Chamber",
          make: "Make Z",
          model: "Model C2",
          type: "Environmental",
          status: "Active",
          action: "Check"
      }
  ];

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
        (searchText === "" || item.equipmentId.toLowerCase().includes(searchText.toLowerCase()))
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
        Equipment/Instrument Master 
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
            Equipment Type
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
              placeholder="Search EQP By ID"
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
                      <th className="text-center">EQUIPMENT/INSTRUMENT ID</th>
                      <th className="text-center">EQUIPMENT/INSTRUMENT NAME	</th>
                      <th className="text-center">MAKE</th>
                      <th className="text-center">MODEL</th>
                      <th className="text-center">TYPE</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-center">ACTION</th>
                  </tr>
              </thead>
              <tbody>
                 
{filteredData.map(( itm, index)=>{
  return(
     
       <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.equipmentId}</td>
<td className="text-center">{itm.equipmentName}</td>
<td className="text-center">{itm.make}</td>
<td className="text-center">{itm.model}</td>
<td className="text-center">{itm.type}</td>
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
        heading="Equipment/Instrument Master"
        buttonText="Submit"
        inputs={[
          { label: 'Equipment/Instrument Id', type:"text" },
          { label: 'Equipment/Instrument Name', type:"text" },
          { label: 'Make', type:"text" },
          { label: 'Modal', type:"text" },
          {
            label: 'Type',
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
        ]}
        open={popupOpen}
        onClose={togglePopup}
      />
  </div>
  )
}

export default EquipmentInstrumentMaster