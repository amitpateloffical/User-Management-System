import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import PopUp from "../PopUp/PopUp";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";

const AssetsMaster = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [assetTypeFilter, setAssetTypeFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [newAsset, setNewAsset] = useState({
    assetType: "",
    assetID: "",
    make: "",
    model: "",
    serialNo: "",
    status: "Active",
  });

  const [data, setData] = useState([
    // your initial data
  ]);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleAssetTypeFilterChange = (event) => {
    setAssetTypeFilter(event.target.value);
  };

  const handleChange = (e) => {
    setNewAsset({ ...newAsset, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setData([...data, newAsset]);
    setPopupOpen(false);
    setNewAsset({
      assetType: "",
      assetID: "",
      make: "",
      model: "",
      serialNo: "",
      status: "Active",
    });
  };

  const filteredData = data.filter(item => {
    return (
      (statusFilter === "All" ||
        (statusFilter === "Active" && item.status === "Active") ||
        (statusFilter === "Inactive" && item.status === "Inactive")) &&
      (searchText === "" ||
        item.assetID.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  return (
    <div>
      <div
        className={`content-with-fixed-header px-4 flex flex-col gap-10 ${
          sidebarOpen ? "ml-64" : ""
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 border-b pb-5">
          <div className="text-3xl font-semibold text-[#673ab7]">
            Assets Master
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-5">
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="" className="font-bold">
                Status
              </label>
              <select
                className="border border-black rounded-md py-2"
                onChange={handleStatusFilterChange}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="" className="font-bold">
                Search
              </label>
              <input
                type="text"
                className="border border-black rounded-md pr-24 py-2"
                placeholder="Search Asset By ID"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div
              className="bg-[#d3eafd] text-[#2196f3] w-full md:w-auto h-[40px] flex justify-center items-center cursor-pointer"
              onClick={togglePopup}
            >
              <MdAddBox className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Reusable ImportExportButtons */}
        <ImportExportButtons
          data={data}
          setData={setData}
          fileName="AssetsData.xlsx"
        />

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-center">SR.NO.</th>
                <th className="border-b px-4 py-2 text-center">ASSET TYPE</th>
                <th className="border-b px-4 py-2 text-center">ASSET ID</th>
                <th className="border-b px-4 py-2 text-center">MAKE</th>
                <th className="border-b px-4 py-2 text-center">MODEL</th>
                <th className="border-b px-4 py-2 text-center">SERIAL NO.</th>
                <th className="border-b px-4 py-2 text-center">STATUS</th>
                <th className="border-b px-4 py-2 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((itm, index) => (
                <tr key={index}>
                  <td className="border-b px-4 py-2 text-center">{itm.srNo}</td>
                  <td className="border-b px-4 py-2 text-center">
                    {itm.assetType}
                  </td>
                  <td className="border-b px-4 py-2 text-center">{itm.assetID}</td>
                  <td className="border-b px-4 py-2 text-center">{itm.make}</td>
                  <td className="border-b px-4 py-2 text-center">{itm.model}</td>
                  <td className="border-b px-4 py-2 text-center">
                    {itm.serialNo}
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    <div className="flex justify-center items-center">
                      <div
                        className={`rounded-full px-2 ${
                          itm.status === "Active"
                            ? "bg-green-300 text-green-700"
                            : "bg-red-300 text-red-700"
                        }`}
                      >
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

      {/* Modal for adding new asset */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md w-[400px]">
            <h2 className="text-xl font-bold mb-4">Add New Asset</h2>
            <div className="mb-4">
              <label>Asset Type</label>
              <input
                type="text"
                name="assetType"
                value={newAsset.assetType}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label>Asset ID</label>
              <input
                type="text"
                name="assetID"
                value={newAsset.assetID}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label>Make</label>
              <input
                type="text"
                name="make"
                value={newAsset.make}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label>Model</label>
              <input
                type="text"
                name="model"
                value={newAsset.model}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label>Serial No.</label>
              <input
                type="text"
                name="serialNo"
                value={newAsset.serialNo}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label>Status</label>
              <select
                name="status"
                value={newAsset.status}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Submit
            </button>
            <button onClick={togglePopup} className="bg-red-500 text-white py-2 px-4 rounded-md ml-2">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetsMaster;
