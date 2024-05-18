import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import PopUp from "../PopUp/PopUp";


const EquipmentInstrumentMaster = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const data = [
      {
          srNo : "1.",
          department:"QC"
      },
      {
          srNo : "2.",
          department:"Test-1"
      },
      {
          srNo : "3.",
          department:"User"
      },
      {
          srNo : "4.",
          department:"IT"
      },
      {
          srNo : "5.",
          department:"QA"
      },
      {
          srNo : "6.",
          department:"System Admin"
      },
      {
          srNo : "7.",
          department:"HR"
      },
    ]

    const togglePopup = () => {
      setPopupOpen(!popupOpen);
    };
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
            <select className="border border-black rounded-md  py-2 ">
              <option>---select---</option>
              <option>Active</option>
              <option>Inactive</option>
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
                 
{data.map(( itm, index)=>{
  return(
     
       <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.department}</td>
<td > <div className="text-center flex justify-center items-center"><div className="bg-green-300 text-green-700 rounded-full text-center w-[70px]">Active</div></div> </td>
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