import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import PopUp from "../PopUp/PopUp";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";

const EquipmentInstrumentMaster = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([
    // Your existing data
  ]);

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
        (statusFilter === "Inactive" && item.status === "Inactive")) &&
      (searchText === "" || item.equipmentId.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  return (
    <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? 'ml-64' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b pb-5 gap-5 lg:gap-0">
        <div className="text-3xl font-semibold text-[#673ab7]">
          Equipment/Instrument Master
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-5">
          <div className="flex flex-col w-full lg:w-auto">
            <label htmlFor="status" className="font-bold">Status</label>
            <select id="status" className="border border-black rounded-md py-2" onChange={handleStatusFilterChange}>
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex flex-col w-full lg:w-auto">
            <label htmlFor="equipmentType" className="font-bold">Equipment Type</label>
            <select id="equipmentType" className="border border-black rounded-md py-2">
              <option>---select---</option>
              <option>HMI</option>
              <option>SCADA</option>
              <option>IPC</option>
              <option>COMPUTER SYSTEM</option>
              <option>OTHER</option>
            </select>
          </div>
          <div className="flex flex-col w-full lg:w-auto">
            <label htmlFor="search" className="font-bold">Search</label>
            <input
              id="search"
              type="text"
              className="border border-black rounded-md py-2 lg:pr-24"
              placeholder="Search EQP By ID"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>
          <div className="bg-[#d3eafd] text-[#2196f3] w-full lg:w-auto h-[40px] flex justify-center items-center cursor-pointer mt-2 lg:mt-0" onClick={togglePopup}>
            <MdAddBox size={24} />
          </div>
        </div>
      </div>

      {/* Import/Export Buttons */}
        <ImportExportButtons data={data} setData={setData} fileName="Equipment_Instrument_Data.xlsx" />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-white">
            <tr className="text-white">
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">SR.NO.</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">EQUIPMENT/INSTRUMENT ID</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">EQUIPMENT/INSTRUMENT NAME</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">MAKE</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">MODEL</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">TYPE</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">STATUS</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">ACTION</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-gray-200">
            {filteredData.map((itm, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm.srNo}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm.equipmentId}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm.equipmentName}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm.make}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm.model}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm.type}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className={`rounded-full px-2 ${itm.status === 'Active' ? 'bg-green-300 text-green-700' : 'bg-red-300 text-red-700'}`}>
                    {itm.status}
                  </div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
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

      {popupOpen && (
        <PopUp
          title="Add Equipment"
          closePopup={togglePopup}
        >
          {/* Popup content */}
        </PopUp>
      )}
    </div>
  );
};

export default EquipmentInstrumentMaster;
