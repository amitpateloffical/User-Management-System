import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";

const ApplicationMaster = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [accessFilter, setAccessFilter] = useState("All");

  const [formData, setFormData] = useState({
    application: "",
    version: "",
    make: "",
  });

  // Dummy data state
  const [data, setData] = useState([
    { srNo: "1.", application: "App A", version: "1.0", make: "Make X", assignRole: "QC", status: "Active" },
    { srNo: "2.", application: "App B", version: "1.1", make: "Make Y", assignRole: "Test-1", status: "Inactive" },
    { srNo: "3.", application: "App C", version: "1.2", make: "Make Z", assignRole: "User", status: "Active" },
    { srNo: "4.", application: "App D", version: "2.0", make: "Make A", assignRole: "QC", status: "Inactive" },
    { srNo: "5.", application: "App E", version: "1.3", make: "Make B", assignRole: "Test-1", status: "Active" },
  ]);

  // Open or close popup
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
    if (!popupOpen) {
      setFormData({ application: "", version: "", make: "" });
      setEditIndex(null);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save (add/update) logic
  const handleSave = () => {
    if (editIndex !== null) {
      // Update existing item
      const updatedData = [...data];
      updatedData[editIndex] = { ...updatedData[editIndex], ...formData };
      setData(updatedData);
    } else {
      // Add new item
      const newEntry = {
        srNo: (data.length + 1) + ".",
        ...formData,
        assignRole: "Default Role",
        status: "Active",
      };
      setData([...data, newEntry]);
    }

    togglePopup(); // Close popup
  };

  // Edit logic
  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(data[index]);
    setPopupOpen(true);
  };

  // Delete logic
  const handleDelete = (index) => {
    const updatedData = data.filter((_, idx) => idx !== index);
    setData(updatedData);
  };

  // Filter logic
  const filteredData = data.filter((item) => {
    const matchesStatus =
      statusFilter === "All" || item.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesAccess =
      accessFilter === "All" || item.assignRole.toLowerCase().includes(accessFilter.toLowerCase());
    const matchesSearch =
      searchText === "" || item.application.toLowerCase().includes(searchText.toLowerCase());
    return matchesStatus && matchesAccess && matchesSearch;
  });

  return (
    <div>
      <div className="content-with-fixed-header px-4 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 border-b pb-5">
          <div className="text-3xl font-semibold text-[#673ab7]">Application Master</div>
          <div className="flex flex-col md:flex-row justify-end items-center gap-5">
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="status" className="font-bold">Status</label>
              <select
                id="status"
                className="border border-black rounded-md py-2"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="access" className="font-bold">Access Type</label>
              <select
                id="access"
                className="border border-black rounded-md py-2"
                value={accessFilter}
                onChange={(e) => setAccessFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="QC">QC</option>
                <option value="User">User</option>
                <option value="Test-1">Test-1</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="search" className="font-bold">Search</label>
              <input
                id="search"
                type="text"
                className="border border-black rounded-md pr-24 py-2"
                placeholder="Search Application By Name"
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

        {/* Data table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-center">SR.NO.</th>
                <th className="border-b px-4 py-2 text-center">APPLICATION</th>
                <th className="border-b px-4 py-2 text-center">VERSION</th>
                <th className="border-b px-4 py-2 text-center">MAKE</th>
                <th className="border-b px-4 py-2 text-center">STATUS</th>
                <th className="border-b px-4 py-2 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="border-b px-4 py-2 text-center">{item.srNo}</td>
                  <td className="border-b px-4 py-2 text-center">{item.application}</td>
                  <td className="border-b px-4 py-2 text-center">{item.version}</td>
                  <td className="border-b px-4 py-2 text-center">{item.make}</td>
                  <td className="border-b px-4 py-2 text-center">
                    <div
                      className={`rounded-full px-2 ${
                        item.status === "Active" ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700"
                      }`}
                    >
                      {item.status}
                    </div>
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer"
                        onClick={() => handleEdit(index)}
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer"
                        onClick={() => handleDelete(index)}
                      >
                        <IoBan />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {popupOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-[400px]">
            <h2 className="text-2xl mb-4">{editIndex !== null ? "Edit Application" : "Add Application"}</h2>
            <label>Application</label>
            <input
              type="text"
              name="application"
              className="w-full border p-2 mb-4"
              value={formData.application}
              onChange={handleChange}
            />
            <label>Version</label>
            <input
              type="text"
              name="version"
              className="w-full border p-2 mb-4"
              value={formData.version}
              onChange={handleChange}
            />
            <label>Make</label>
            <input
              type="text"
              name="make"
              className="w-full border p-2 mb-4"
              value={formData.make}
              onChange={handleChange}
            />
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSave}>
                Save
              </button>
              <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={togglePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationMaster;
