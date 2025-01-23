import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import { useEffect } from "react";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";

const DepartmentMaster = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    department: "",
    status: "Active",
  });

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    if (!modalOpen) setFormData({ department: "", status: "Active" });
    setEditIndex(null);
  };

  const handleAddOrEditDepartment = () => {
    if (!formData.department.trim()) {
      alert("Please enter a department name.");
      return;
    }

    if (editIndex !== null) {
      // Edit existing department
      const updatedDepartments = [...departments];
      updatedDepartments[editIndex] = {
        ...updatedDepartments[editIndex],
        department: formData.department,
        status: formData.status,
      };
      setDepartments(updatedDepartments);
    } else {
      // Add new department
      const newEntry = {
        srNo: `${departments.length + 1}.`,
        department: formData.department,
        status: formData.status,
      };
      setDepartments([...departments, newEntry]);
    }

    toggleModal();
  };

  const handleDelete = (index) => {
    const updatedDepartments = data.filter((_, i) => i !== index);
    setData(updatedDepartments);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(departments[index]);
    toggleModal();
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      (statusFilter === "All" ||
        (statusFilter === "Active" && item.STATUS === "Active") ||
        (statusFilter === "Inactive" && item.STATUS === "Inactive")) &&
      (searchText === "" ||
        item.DESIGNATION?.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  useEffect(() => {
    // Add this useEffect to check the data being set and filtered
    console.log("Filtered Data: ", filteredData);
  }, [filteredData]);

  return (
    <div className="content-with-fixed-header px-4 flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b pb-5">
        <div classNamae="text-3xl font-semibold text-[#673ab7]">
          Department Master
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-5">
          <div className="flex flex-col w-full md:w-auto">
            <label htmlFor="status" className="font-bold">
              Status
            </label>
            <select
              id="status"
              className="border border-black rounded-md py-2"
              onChange={handleStatusFilterChange}>
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex flex-col w-full md:w-auto">
            <label htmlFor="search" className="font-bold">
              Search
            </label>
            <input
              id="search"
              type="text"
              className="border border-black rounded-md pr-24 py-2"
              placeholder="Search Department By Name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div
            className="bg-[#d3eafd] text-[#2196f3] w-full md:w-auto h-[40px] flex justify-center items-center cursor-pointer"
            onClick={toggleModal}>
            <MdAddBox className="text-2xl" />
          </div>
        </div>
      </div>
      <ImportExportButtons
        data={data}
        setData={setData}
        fileName="Designation_Master"
        sheetNumbers={0}
      />
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-center">SR.NO.</th>
              <th className="border-b px-4 py-2 text-center">DEPARTMENT</th>
              <th className="border-b px-4 py-2 text-center">STATUS</th>
              <th className="border-b px-4 py-2 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td className="border-b px-4 py-2 text-center" colSpan="4">
                  No Data Available
                </td>
              </tr>
            ) : (
              filteredData.map((itm, index) => (
                <tr key={index}>
                  <td className="border-b px-4 py-2 text-center">
                    {itm["srNo"]}
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    {itm["department"]}
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    {itm["status"]}
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer"
                        onClick={() => handleEdit(index)}>
                        <FaRegEdit />
                      </button>
                      <button
                        className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer"
                        onClick={() => handleDelete(index)}>
                        <IoBan />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold mb-4">
              {editIndex !== null ? "Edit Department" : "Add New Department"}
            </h2>
            <div className="flex flex-col gap-4">
              <label htmlFor="department" className="font-bold">
                Department Name
              </label>
              <input
                id="department"
                type="text"
                className="border border-black rounded-md py-2 px-3"
                placeholder="Enter Department Name"
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
              />
              <label htmlFor="status" className="font-bold">
                Status
              </label>
              <select
                id="status"
                className="border border-black rounded-md py-2"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="bg-gray-300 text-black py-2 px-4 rounded-md"
                onClick={toggleModal}>
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={handleAddOrEditDepartment}>
                {editIndex !== null ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentMaster;
