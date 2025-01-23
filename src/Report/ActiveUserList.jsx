import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ActiveUserList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "All",
    department: "",
    role: "",
    employeeName: "",
  });
  const [data, setData] = useState([
    {
      srNo: "1.",
      empCode: "EMP-001",
      employeeName: "John Doe",
      equipmentId: "EID-001",
      equipmentName: "Thermometer",
      assetId: "AID-101",
      assetName: "Asset A",
      application: "App A",
      applicationVersion: "1.0",
      role: "Technician",
      department: "Quality Control",
      createdBy: "Admin",
      createdDate: "2024-05-01",
      status: "Active",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    srNo: "",
    empCode: "",
    employeeName: "",
    equipmentId: "",
    equipmentName: "",
    assetId: "",
    assetName: "",
    application: "",
    applicationVersion: "",
    role: "",
    department: "",
    createdBy: "",
    createdDate: "",
    status: "Active",
  });

  const downloadPDF = () => {
    const input = document.getElementById("active-user-list");
    html2canvas(input, {
      scrollY: -window.scrollY,
      scale: 3,
      backgroundColor: "#ffffff",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "pt",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
      pdf.save("active_user_list.pdf");
    });
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredData = data.filter((item) => {
    return (
      (filters.status === "All" || item.status === filters.status) &&
      (filters.department === "" || item.department.includes(filters.department)) &&
      (filters.role === "" || item.role.includes(filters.role)) &&
      (filters.employeeName === "" ||
        item.employeeName.toLowerCase().includes(filters.employeeName.toLowerCase()))
    );
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    setData([...data, { ...newUser, srNo: `${data.length + 1}.` }]);
    setShowModal(false);
    setNewUser({
      srNo: "",
      empCode: "",
      employeeName: "",
      equipmentId: "",
      equipmentName: "",
      assetId: "",
      assetName: "",
      application: "",
      applicationVersion: "",
      role: "",
      department: "",
      createdBy: "",
      createdDate: "",
      status: "Active",
    });
  };

  return (
    <div>
      <div
        className={`content-with-fixed-header px-4 flex flex-col gap-10 ${
          sidebarOpen ? "ml-64" : ""
        }`}
      >
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b pb-5">
          <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
            Active Users List
          </div>
          <div className="flex justify-end gap-7 col-span-1">
            <div className="bg-[#d3eafd] rounded-md cursor-pointer text-[#2196f3] w-10 h-10 flex justify-center items-center">
              <FiRefreshCw />
            </div>
            <div
              className="bg-[#d3eafd] rounded-md cursor-pointer text-[#2196f3] w-10 h-10 flex justify-center items-center"
              onClick={downloadPDF}
            >
              <FaFilePdf />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-3 flex flex-wrap gap-5">
            <div className="flex flex-col w-full md:w-1/5">
              <label htmlFor="status" className="font-bold">
                Status
              </label>
              <select
                className="border border-black rounded-md py-2"
                name="status"
                onChange={handleFilterChange}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-1/5">
              <label htmlFor="department" className="font-bold">
                Department
              </label>
              <input
                type="text"
                className="border border-black rounded-md py-2"
                name="department"
                placeholder="Search Department"
                onChange={handleFilterChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/5">
              <label htmlFor="role" className="font-bold">
                Role
              </label>
              <input
                type="text"
                className="border border-black rounded-md py-2"
                name="role"
                placeholder="Search Role"
                onChange={handleFilterChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/5">
              <label htmlFor="employeeName" className="font-bold">
                Employee Name
              </label>
              <input
                type="text"
                className="border border-black rounded-md py-2"
                name="employeeName"
                placeholder="Search Employee Name"
                onChange={handleFilterChange}
              />
            </div>
            <div
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5 cursor-pointer hover:bg-blue-600"
              onClick={() => setShowModal(true)}
            >
              Add
            </div>
          </div>
        </div>

        {/* Table */}
        <div id="active-user-list">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">#</th>
                <th className="border border-gray-400 px-4 py-2">Employee Code</th>
                <th className="border border-gray-400 px-4 py-2">Employee Name</th>
                <th className="border border-gray-400 px-4 py-2">Equipment ID</th>
                <th className="border border-gray-400 px-4 py-2">Equipment Name</th>
                <th className="border border-gray-400 px-4 py-2">Asset ID</th>
                <th className="border border-gray-400 px-4 py-2">Asset Name</th>
                <th className="border border-gray-400 px-4 py-2">Application</th>
                <th className="border border-gray-400 px-4 py-2">App Version</th>
                <th className="border border-gray-400 px-4 py-2">Role</th>
                <th className="border border-gray-400 px-4 py-2">Department</th>
                <th className="border border-gray-400 px-4 py-2">Created By</th>
                <th className="border border-gray-400 px-4 py-2">Created Date</th>
                <th className="border border-gray-400 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((user) => (
                <tr key={user.srNo}>
                  <td className="border border-gray-400 px-4 py-2">{user.srNo}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.empCode}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.employeeName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.equipmentId}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.equipmentName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.assetId}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.assetName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.application}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.applicationVersion}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.role}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.department}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.createdBy}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.createdDate}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md w-[90%] md:w-[60%]">
            <h2 className="text-xl font-bold mb-4">Add New User</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(newUser).map((field, index) => (
                  <input
                    key={index}
                    type="text"
                    name={field}
                    placeholder={field.split(/(?=[A-Z])/).join(" ")}
                    className="border p-2 rounded-md"
                    value={newUser[field]}
                    onChange={handleInputChange}
                  />
                ))}
              </div>
            </form>
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleAddUser}
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

export default ActiveUserList;
