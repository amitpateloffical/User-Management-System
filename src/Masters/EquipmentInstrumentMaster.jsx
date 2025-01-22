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
  const [newEquipment, setNewEquipment] = useState({
    equipmentId: "",
    equipmentName: "",
    make: "",
    model: "",
    type: "select",
  });

  const [data, setData] = useState([
    {
      srNo: "1.",
      equipmentId: "EID-001",
      equipmentName: "Thermometer",
      make: "Make X",
      model: "Model A1",
      type: "Measurement",
      status: "Active",
      action: "Calibrate",
    },
    // Add more initial data if needed
  ]);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleInputChange = (e) => {
    setNewEquipment({ ...newEquipment, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newEntry = {
      srNo: (data.length + 1).toString() + ".",
      ...newEquipment,
      status: "Active", // Default status is active
      action: "Calibrate", // Default action (can adjust as needed)
    };

    setData([...data, newEntry]);
    setNewEquipment({
      equipmentId: "",
      equipmentName: "",
      make: "",
      model: "",
      type: "select",
    });
    setPopupOpen(false);
  };

  const filteredData = data.filter((item) => {
    return (
      (statusFilter === "All" ||
        (statusFilter === "Active" && item.status === "Active") ||
        (statusFilter === "Inactive" && item.status === "Inactive")) &&
      (searchText === "" ||
        item.equipmentId.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  return (
    <div
      className={`content-with-fixed-header px-4 flex flex-col gap-10 ${
        sidebarOpen ? "ml-64" : ""
      }`}
    >
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b pb-5 gap-5 lg:gap-0">
        <div className="text-3xl font-semibold text-[#673ab7]">
          Equipment/Instrument Master
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-5">
          <div className="flex flex-col w-full lg:w-auto">
            <label htmlFor="status" className="font-bold">
              Status
            </label>
            <select
              id="status"
              className="border border-black rounded-md py-2"
              onChange={handleStatusFilterChange}
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex flex-col w-full lg:w-auto">
            <label htmlFor="search" className="font-bold">
              Search
            </label>
            <input
              id="search"
              type="text"
              className="border border-black rounded-md py-2 lg:pr-24"
              placeholder="Search EQP By ID"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div
            className="bg-[#d3eafd] text-[#2196f3] w-full lg:w-auto h-[40px] flex justify-center items-center cursor-pointer mt-2 lg:mt-0"
            onClick={togglePopup}
          >
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
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">
                SR.NO.
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">
                EQUIPMENT/INSTRUMENT ID
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">
                EQUIPMENT/INSTRUMENT NAME
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">
                MAKE
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">
                MODEL
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">
                TYPE
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">
                STATUS
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ">
                ACTION
              </th>
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
                  <div
                    className={`rounded-full px-2 ${
                      itm.status === "Active"
                        ? "bg-green-300 text-green-700"
                        : "bg-red-300 text-red-700"
                    }`}
                  >
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

      {/* Modal Component */}
      {popupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-[80%] lg:w-[40%]">
            <div className="text-center text-2xl font-bold mb-4">Add New Equipment</div>
            <form>
              <div className="mb-4">
                <label className="block font-semibold">Equipment/Instrument ID</label>
                <input
                  type="text"
                  name="equipmentId"
                  value={newEquipment.equipmentId}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                  placeholder="Enter ID"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Equipment/Instrument Name</label>
                <input
                  type="text"
                  name="equipmentName"
                  value={newEquipment.equipmentName}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Make</label>
                <input
                  type="text"
                  name="make"
                  value={newEquipment.make}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                  placeholder="Enter Make"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Model</label>
                <input
                  type="text"
                  name="model"
                  value={newEquipment.model}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                  placeholder="Enter Model"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Type</label>
                <select
                  name="type"
                  value={newEquipment.type}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                >
                  <option value="select">-select-</option>
                  <option value="HMI">HMI</option>
                  <option value="SCADA">SCADA</option>
                  <option value="IPC">IPC</option>
                  <option value="COMPUTER SYSTEM">COMPUTER SYSTEM</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={togglePopup}
                  className="bg-red-500 text-white py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EquipmentInstrumentMaster;
