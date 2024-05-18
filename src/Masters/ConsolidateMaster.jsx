import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import PopUp from "../PopUp/PopUp";

const ConsolidateMaster = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupOpenII, setPopupOpenII] = useState(false);
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
    const togglePopupII = () => {
      setPopupOpenII(!popupOpenII);
    };
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
            <select className="border border-black rounded-md  py-2 ">
              <option>---select---</option>
              <option>Active</option>
              <option>Inactive</option>
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