import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const RequestReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selfFilter, setSelfFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [newData, setNewData] = useState({});
  const [data, setData] = useState([
    {
      srNo: "1.",
      report: "Calibration Report",
      requestNo: "REQ-001",
      department: "QC",
      requestType: "Calibration",
      equipmentId: "EID-001",
      assetId: "AID-101",
      applicationNameVersion: "App A v1.0",
      requestedRole: "Technician",
      requestFor: "Self",
      selfExternal: "Self",
      remark: "Scheduled for routine calibration",
      initiatedBy: "Admin",
      initiatedOn: "2024-05-01",
      status: "Active",
    },
    // More sample data...
  ]);

  const handleSelfFilter = (event) => {
    setSelfFilter(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      selfFilter === "All" ||
      (selfFilter === "Self" && item.selfExternal === "Self") ||
      (selfFilter === "External" && item.selfExternal === "External")
    );
  });

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setNewData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    const updatedData = [
      ...data,
      {
        srNo: `${data.length + 1}.`,
        ...newData,
      },
    ];
    setData(updatedData);
    setShowModal(false);
    setNewData({});
  };

  return (
    <div>
      <div
        className={`content-with-fixed-header px-4 flex flex-col gap-10 ${
          sidebarOpen ? "ml-64" : ""
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 border-b pb-5">
          <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
            Request Report
          </div>
          <div className="flex justify-end gap-4 md:gap-7 col-span-1 w-full">
            <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40px] md:w-[10%] h-[40px] flex justify-center items-center">
              <FiRefreshCw />
            </div>
            <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40px] md:w-[10%] h-[40px] flex justify-center items-center">
              <FaFilePdf />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-1 md:col-span-3 flex flex-wrap md:flex-nowrap gap-5 items-end">
            <div className="flex flex-col w-full md:w-1/5">
              <label htmlFor="selfExternal" className="font-bold">
                Self/External
              </label>
              <select
                className="border border-black rounded-md py-2"
                onChange={handleSelfFilter}
              >
                <option value="All">All</option>
                <option value="Self">Self</option>
                <option value="External">External</option>
              </select>
            </div>
            <div className="bg-purple-200 mt-5 md:mt-0 rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-purple-700 hover:text-white cursor-pointer text-purple-500 w-full md:w-[15%] h-[40px] flex justify-center items-center">
              <IoSearchSharp size={25} />
            </div>
            <div
              onClick={handleAddButtonClick}
              className="bg-purple-200 mt-5 rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-purple-700 hover:text-white cursor-pointer text-purple-500 w-3/4 md:w-[15%] h-[40px] flex justify-center items-center"
            >
              <MdAddBox size={25} />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-center px-6 py-3">SR.NO.</th>
                <th className="text-center px-6 py-3">REPORT</th>
                <th className="text-center px-6 py-3">REQUEST NO</th>
                <th className="text-center px-6 py-3">DEPARTMENT</th>
                <th className="text-center px-6 py-3">REQUEST TYPE</th>
                <th className="text-center px-6 py-3">EQUIPMENT ID</th>
                <th className="text-center px-6 py-3">ASSET ID</th>
                <th className="text-center px-6 py-3">APPLICATION NAME & VERSION</th>
                <th className="text-center px-6 py-3">REQUESTED ROLE</th>
                <th className="text-center px-6 py-3">REQUEST FOR</th>
                <th className="text-center px-6 py-3">SELF / EXTERNAL</th>
                <th className="text-center px-6 py-3">REMARK</th>
                <th className="text-center px-6 py-3">INITIATED BY</th>
                <th className="text-center px-6 py-3">INITIATED ON</th>
                <th className="text-center px-6 py-3">STATUS</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((itm, index) => (
                <tr key={index}>
                  <td className="text-center px-6 py-4">{itm.srNo}</td>
                  <td className="text-center px-6 py-4">{itm.report}</td>
                  <td className="text-center px-6 py-4">{itm.requestNo}</td>
                  <td className="text-center px-6 py-4">{itm.department}</td>
                  <td className="text-center px-6 py-4">{itm.requestType}</td>
                  <td className="text-center px-6 py-4">{itm.equipmentId}</td>
                  <td className="text-center px-6 py-4">{itm.assetId}</td>
                  <td className="text-center px-6 py-4">{itm.applicationNameVersion}</td>
                  <td className="text-center px-6 py-4">{itm.requestedRole}</td>
                  <td className="text-center px-6 py-4">{itm.requestFor}</td>
                  <td className="text-center px-6 py-4">{itm.selfExternal}</td>
                  <td className="text-center px-6 py-4">{itm.remark}</td>
                  <td className="text-center px-6 py-4">{itm.initiatedBy}</td>
                  <td className="text-center px-6 py-4">{itm.initiatedOn}</td>
                  <td className="text-center px-6 py-4">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/2">
            <h2 className="text-lg font-bold mb-4">Add New Report</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="report"
                placeholder="Report"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="requestNo"
                placeholder="Request No"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="department"
                placeholder="Department"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="requestType"
                placeholder="Request Type"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="equipmentId"
                placeholder="Equipment ID"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="assetId"
                placeholder="Asset ID"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="applicationNameVersion"
                placeholder="App Name & Version"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="requestedRole"
                placeholder="Requested Role"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="requestFor"
                placeholder="Request For"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="selfExternal"
                placeholder="Self/External"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="remark"
                placeholder="Remark"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="initiatedBy"
                placeholder="Initiated By"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="initiatedOn"
                className="border p-2 rounded"
                onChange={handleInputChange}
              />
              <select
                name="status"
                className="border p-2 rounded"
                onChange={handleInputChange}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={handleModalClose}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestReport;
