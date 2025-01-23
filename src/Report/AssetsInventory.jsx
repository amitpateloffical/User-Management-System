import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";

const AssetsInventory = () => {
  const [data, setData] = useState([
    {
      srNo: "1.",
      assetType: "Instrument",
      assetId: "AID-101",
      make: "Make X",
      model: "Model A1",
      serialNo: "SN-001",
      status: "Active",
    },
    {
      srNo: "2.",
      assetType: "Instrument",
      assetId: "AID-101",
      make: "Make X",
      model: "Model A1",
      serialNo: "SN-001",
      status: "Active",
    },
    {
      srNo: "3.",
      assetType: "Instrument",
      assetId: "AID-101",
      make: "Make X",
      model: "Model A1",
      serialNo: "SN-001",
      status: "Active",
    },
    // Add initial data here...
  ]);

  const [modalData, setModalData] = useState({
    assetType: "",
    assetId: "",
    make: "",
    model: "",
    serialNo: "",
    status: "Active",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");

  const handleStatusFilterChange = (event) => setStatusFilter(event.target.value);

  const filteredData = data.filter(
    (item) =>
      statusFilter === "All" ||
      (statusFilter === "Active" && item.status === "Active") ||
      (statusFilter === "Inactive" && item.status === "Inactive")
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    setShowModal(true);
    setIsEdit(false);
    setModalData({
      assetType: "",
      assetId: "",
      make: "",
      model: "",
      serialNo: "",
      status: "Active",
    });
  };

  const handleEdit = (index) => {
    setModalData(data[index]);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleSave = () => {
    if (isEdit) {
      const updatedData = data.map((item) =>
        item.assetId === modalData.assetId ? modalData : item
      );
      setData(updatedData);
    } else {
      setData((prev) => [...prev, { ...modalData, srNo: `${prev.length + 1}.` }]);
    }
    setShowModal(false);
  };

  return (
    <div>
      <div className="content-with-fixed-header px-4 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 border-b pb-5">
          <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
            Assets Inventory
          </div>
          <div className="flex justify-end gap-4 md:gap-7 col-span-1 w-full">
            <div
              className="bg-[#d3eafd] rounded-md hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40px] h-[40px] flex justify-center items-center"
              onClick={handleAdd}
            >
              <span>+</span>
            </div>
            <div className="bg-[#d3eafd] rounded-md hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40px] h-[40px] flex justify-center items-center">
              <FiRefreshCw />
            </div>
            <div className="bg-[#d3eafd] rounded-md hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40px] h-[40px] flex justify-center items-center">
              <FaFilePdf />
            </div>
          </div>
        </div>
        <ImportExportButtons
        data={data}
        setData={(importedData) => {
          const updatedData = importedData.map((item, index) => ({
            ...item,
            srNo: `${data.length + index + 1}.`, // Continue SR.NO.
          }));
          setData((prev) => [...prev, ...updatedData]); // Append data
        }}
        fileName="Asset Inventory"
        sheetNumbers={11}
      />
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-center px-6 py-3">SR.NO.</th>
                <th className="text-center px-6 py-3">ASSET TYPE</th>
                <th className="text-center px-6 py-3">ASSET ID</th>
                <th className="text-center px-6 py-3">MAKE</th>
                <th className="text-center px-6 py-3">MODEL</th>
                <th className="text-center px-6 py-3">SERIAL NO.</th>
                <th className="text-center px-6 py-3">STATUS</th>
                <th className="text-center px-6 py-3">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((itm, index) => (
                <tr key={index}>
                  <td className="text-center px-6 py-4">{itm.srNo}</td>
                  <td className="text-center px-6 py-4">{itm.assetType}</td>
                  <td className="text-center px-6 py-4">{itm.assetId}</td>
                  <td className="text-center px-6 py-4">{itm.make}</td>
                  <td className="text-center px-6 py-4">{itm.model}</td>
                  <td className="text-center px-6 py-4">{itm.serialNo}</td>
                  <td className="text-center px-6 py-4">
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
                  <td className="text-center px-6 py-4">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded">
            <h2>{isEdit ? "Edit Asset" : "Add Asset"}</h2>
            <div>
              <label>Asset Type</label>
              <input
                type="text"
                name="assetType"
                value={modalData.assetType}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Asset ID</label>
              <input
                type="text"
                name="assetId"
                value={modalData.assetId}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Make</label>
              <input
                type="text"
                name="make"
                value={modalData.make}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Model</label>
              <input
                type="text"
                name="model"
                value={modalData.model}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Serial No</label>
              <input
                type="text"
                name="serialNo"
                value={modalData.serialNo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Status</label>
              <select
                name="status"
                value={modalData.status}
                onChange={handleInputChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div>
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )} */}
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {isEdit ? "Edit Asset" : "Add Asset"}
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Asset Type</label>
          <input
            type="text"
            name="assetType"
            value={modalData.assetType}
            onChange={handleInputChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Asset ID</label>
          <input
            type="text"
            name="assetId"
            value={modalData.assetId}
            onChange={handleInputChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Make</label>
          <input
            type="text"
            name="make"
            value={modalData.make}
            onChange={handleInputChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Model</label>
          <input
            type="text"
            name="model"
            value={modalData.model}
            onChange={handleInputChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Serial No</label>
          <input
            type="text"
            name="serialNo"
            value={modalData.serialNo}
            onChange={handleInputChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={modalData.status}
            onChange={handleInputChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setShowModal(false)}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            {isEdit ? "Save Changes" : "Add Asset"}
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default AssetsInventory;
