import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";

const RoleMaster = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [formData, setFormData] = useState({
    role: "",
    description: "",
    addGroup: "",
    status: "Active",
  });
  const [data, setData] = useState([
    { srNo: "1.", role: "QC", description: "Quality Control", addGroup: "Group A", status: "Active" },
    { srNo: "2.", role: "Test-1", description: "Testing Department 1", addGroup: "Group B", status: "Inactive" },
    { srNo: "3.", role: "User", description: "User Management", addGroup: "Group A", status: "Active" },
    { srNo: "4.", role: "IT", description: "Information Technology", addGroup: "Group C", status: "Inactive" },
  ]);
  const [editIndex, setEditIndex] = useState(null);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
    if (!popupOpen) {
      setFormData({ role: "", description: "", addGroup: "", status: "Active" });
      setEditIndex(null);
    }
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleAddOrUpdateRole = () => {
    if (!formData.role.trim() || !formData.description.trim() || !formData.addGroup.trim()) {
      alert("Please fill all fields.");
      return;
    }

    if (editIndex !== null) {
      // Update existing role
      const updatedData = [...data];
      updatedData[editIndex] = { ...formData, srNo: data[editIndex].srNo };
      setData(updatedData);
    } else {
      // Add new role
      const newEntry = {
        srNo: `${data.length + 1}.`,
        role: formData.role,
        description: formData.description,
        addGroup: formData.addGroup,
        status: formData.status,
      };
      setData([...data, newEntry]);
    }

    togglePopup();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(data[index]);
    togglePopup();
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const filteredData = data.filter((item) => {
    return (
      (statusFilter === "All" ||
        (statusFilter === "Active" && item.status === "Active") ||
        (statusFilter === "Inactive" && item.status === "Inactive")) &&
      (searchText === "" || item.role.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  return (
    <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? "ml-64" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7]">Role List</div>
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-5">
          <div className="flex flex-col w-full md:w-auto">
            <label htmlFor="status" className="font-bold">Status</label>
            <select id="status" className="border border-black rounded-md py-2" onChange={handleStatusFilterChange}>
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex flex-col w-full md:w-auto">
            <label htmlFor="search" className="font-bold">Search</label>
            <input
              id="search"
              type="text"
              className="border border-black rounded-md py-2"
              placeholder="Search Role By Name"
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
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-center">SR.NO.</th>
              <th className="border-b px-4 py-2 text-center">ROLE</th>
              <th className="border-b px-4 py-2 text-center">DESCRIPTION</th>
              <th className="border-b px-4 py-2 text-center">ADD GROUP</th>
              <th className="border-b px-4 py-2 text-center">STATUS</th>
              <th className="border-b px-4 py-2 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((itm, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-2 text-center">{itm.srNo}</td>
                <td className="border-b px-4 py-2 text-center">{itm.role}</td>
                <td className="border-b px-4 py-2 text-center">{itm.description}</td>
                <td className="border-b px-4 py-2 text-center">{itm.addGroup}</td>
                <td className="border-b px-4 py-2 text-center">
                  <div className={`rounded-full px-2 ${itm.status === "Active" ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700"}`}>
                    {itm.status}
                  </div>
                </td>
                <td className="border-b px-4 py-2 text-center">
                  <div className="flex justify-center gap-3 items-center">
                    <div className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer" onClick={() => handleEdit(index)}>
                      <FaRegEdit />
                    </div>
                    <div className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer" onClick={() => handleDelete(index)}>
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold mb-4">{editIndex !== null ? "Edit Role" : "Add New Role"}</h2>
            <div className="flex flex-col gap-4">
              <label htmlFor="role" className="font-bold">Role</label>
              <input
                id="role"
                type="text"
                className="border border-black rounded-md py-2 px-3"
                placeholder="Enter Role Name"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              />
              <label htmlFor="description" className="font-bold">Description</label>
              <input
                id="description"
                type="text"
                className="border border-black rounded-md py-2 px-3"
                placeholder="Enter Role Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <label htmlFor="addGroup" className="font-bold">Add Group</label>
              <input
                id="addGroup"
                type="text"
                className="border border-black rounded-md py-2 px-3"
                placeholder="Enter Group Name"
                value={formData.addGroup}
                onChange={(e) => setFormData({ ...formData, addGroup: e.target.value })}
              />
              <label htmlFor="status" className="font-bold">Status</label>
              <select
                id="status"
                className="border border-black rounded-md py-2"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button className="bg-gray-300 text-black py-2 px-4 rounded-md" onClick={togglePopup}>Cancel</button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={handleAddOrUpdateRole}>{editIndex !== null ? "Update" : "Add"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleMaster;
