import React, { useState } from "react";
import { MdAddBox } from "react-icons/md"; // Add icon for the Add button
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";


const UserManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState([
    // Initial Data
    {
      srNo: "1.",
      empCode: "E001",
      worklineID: "WL-001",
      userRole: "Admin",
      name: "John Doe",
      emailAddress: "john.doe@example.com",
      contact: "9876543210",
      department: "IT",
      designation: "Software Engineer",
      status: "Active",
    },
    {
      srNo: "2.",
      empCode: "E001",
      worklineID: "WL-001",
      userRole: "Admin",
      name: "John Doe",
      emailAddress: "john.doe@example.com",
      contact: "9876543210",
      department: "IT",
      designation: "Software Engineer",
      status: "Active",
    },
    {
      srNo: "3.",
      empCode: "E001",
      worklineID: "WL-001",
      userRole: "Admin",
      name: "John Doe",
      emailAddress: "john.doe@example.com",
      contact: "9876543210",
      department: "IT",
      designation: "Software Engineer",
      status: "Active",
    },
    {
      srNo: "4.",
      empCode: "E001",
      worklineID: "WL-001",
      userRole: "Admin",
      name: "John Doe",
      emailAddress: "john.doe@example.com",
      contact: "9876543210",
      department: "IT",
      designation: "Software Engineer",
      status: "Active",
    },
    // Add other users as in the original data...
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newUser, setNewUser] = useState({
    empCode: "",
    worklineID: "",
    userRole: "",
    name: "",
    emailAddress: "",
    contact: "",
    department: "",
    designation: "",
    status: "Active",
  });

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = users.filter((item) => {
    return (
      (statusFilter === "All" ||
        (statusFilter === "Active" && item.status === "Active") ||
        (statusFilter === "Inactive" && item.status === "Inactive")) &&
      (searchText === "" ||
        item.empCode.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  const handleCreateUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateUser = () => {
    setUsers([
      ...users,
      { ...newUser, srNo: `${users.length + 1}.` },
    ]);
    setShowCreateModal(false);
    setNewUser({
      empCode: "",
      worklineID: "",
      userRole: "",
      name: "",
      emailAddress: "",
      contact: "",
      department: "",
      designation: "",
      status: "Active",
    });
  };

  const handleDeleteUser = (empCode) => {
    setUsers(users.filter((user) => user.empCode !== empCode));
  };

  const handleEditUser = (empCode) => {
    const userToEdit = users.find((user) => user.empCode === empCode);
    setNewUser(userToEdit);
    setShowCreateModal(true);
  };

  return (
    <div>
      <div
        className={`content-with-fixed-header px-4 flex flex-col gap-10 ${
          sidebarOpen ? "ml-64" : ""
        }`}
      >
        <div className="grid md:grid-cols-2 grid-cols-1 border-b pb-5">
          <div className="text-3xl font-semibold text-[#673ab7]">
            User Management
          </div>
          <div className="flex justify-center items-center gap-5 mt-5 md:mt-0">
            <div className="flex flex-col w-full">
              <label htmlFor="statusFilter" className="font-bold">
                Status
              </label>
              <select
                id="statusFilter"
                className="border border-black rounded-md py-2"
                onChange={handleStatusFilterChange}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex flex-col w-full">
                <label htmlFor="search" className="font-bold">
                  Search
                </label>
                <input
                  id="search"
                  type="text"
                  className="border border-black rounded-md py-2"
                  placeholder="Search"
                  value={searchText}
                  onChange={handleSearchTextChange}
                />
              </div>
              <div
                onClick={() => setShowCreateModal(true)}
                className="bg-blue-500 text-white p-3 rounded-full cursor-pointer"
              >
                <MdAddBox size={24} />
              </div>
            </div>
            <ImportExportButtons
        data={users}
        setData={(importedData) => {
          const updatedData = importedData.map((item, index) => ({
            ...item,
            srNo: `${users.length + index + 1}.`, // Continue SR.NO.
          }));
          setUsers((prev) => [...prev, ...updatedData]); // Append data
        }}
        fileName="User Management"
        sheetNumbers={14}
      />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-center">SR.NO.</th>
                <th className="text-center">EMP CODE</th>
                <th className="text-center">WORKLINE ID</th>
                <th className="text-center">USER ROLE</th>
                <th className="text-center">NAME</th>
                <th className="text-center">EMAIL ADDRESS</th>
                <th className="text-center">CONTACT</th>
                <th className="text-center">DEPARTMENT</th>
                <th className="text-center">DESIGNATION</th>
                <th className="text-center">STATUS</th>
                <th className="text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((itm, index) => (
                <tr key={index}>
                  <td className="text-center">{itm.srNo}</td>
                  <td className="text-center">{itm.empCode}</td>
                  <td className="text-center">{itm.worklineID}</td>
                  <td className="text-center">{itm.userRole}</td>
                  <td className="text-center">{itm.name}</td>
                  <td className="text-center">{itm.emailAddress}</td>
                  <td className="text-center">{itm.contact}</td>
                  <td className="text-center">{itm.department}</td>
                  <td className="text-center">{itm.designation}</td>
                  <td>
                    <div className="text-center flex justify-center items-center">
                      <div
                        className={`rounded-full text-center w-[70px] ${
                          itm.status === "Active"
                            ? "bg-green-300 text-green-700"
                            : "bg-red-300 text-red-700"
                        }`}
                      >
                        {itm.status}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-center flex justify-center gap-3 items-center">
                      <div
                        onClick={() => handleEditUser(itm.empCode)}
                        className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer"
                      >
                        <FaRegEdit />
                      </div>
                      <div
                        onClick={() => handleDeleteUser(itm.empCode)}
                        className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer"
                      >
                        <IoBan />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Create User Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md w-[400px] max-h-[500px] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">
                {newUser.empCode ? "Edit User" : "Create User"}
              </h2>
              <div className="mb-4">
                <label className="block font-semibold">Emp Code</label>
                <input
                  type="text"
                  name="empCode"
                  value={newUser.empCode}
                  onChange={handleCreateUserChange}
                  className="border border-black rounded-md py-2 w-full"
                  disabled={newUser.empCode ? true : false}
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Workline ID</label>
                <input
                  type="text"
                  name="worklineID"
                  value={newUser.worklineID}
                  onChange={handleCreateUserChange}
                  className="border border-black rounded-md py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleCreateUserChange}
                  className="border border-black rounded-md py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={newUser.emailAddress}
                  onChange={handleCreateUserChange}
                  className="border border-black rounded-md py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={newUser.contact}
                  onChange={handleCreateUserChange}
                  className="border border-black rounded-md py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Department</label>
                <input
                  type="text"
                  name="department"
                  value={newUser.department}
                  onChange={handleCreateUserChange}
                  className="border border-black rounded-md py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={newUser.designation}
                  onChange={handleCreateUserChange}
                  className="border border-black rounded-md py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Status</label>
                <select
                  name="status"
                  value={newUser.status}
                  onChange={handleCreateUserChange}
                  className="border border-black rounded-md py-2 w-full"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={handleCreateUser}
                >
                  {newUser.empCode ? "Update" : "Create"}
                </button>
                <button
                  className="bg-gray-300 text-black py-2 px-4 rounded"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
