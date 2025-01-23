import React, { useState, useEffect } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import PopUp from "../PopUp/PopUp";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";

const DepartmentMaster = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]); // State for department data

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      (statusFilter === "All" ||
        (statusFilter === "Active" && item.STATUS === "Active") ||
        (statusFilter === "Inactive" && item.STATUS === "Inactive")) &&
      (searchText === "" || item.DEPARTMENT?.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  useEffect(() => {
    // Add this useEffect to check the data being set and filtered
    console.log("Filtered Data: ", filteredData);
  }, [filteredData]);

  return (
    <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? "ml-64" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7]">Department Master</div>
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-5">
          <div className="flex flex-col w-full md:w-auto">
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
            onClick={togglePopup}
          >
            <MdAddBox className="text-2xl" />
          </div>
        </div>
      </div>

      {/* ImportExportButtons Component with Sheet Numbers */}
      <ImportExportButtons
        data={data}
        setData={setData}
        fileName="Department_Master"
        sheetNumbers={0} // Pass sheet number directly here
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
                  <td className="border-b px-4 py-2 text-center">{itm["srNo"]}</td>
                  <td className="border-b px-4 py-2 text-center">{itm["department"]}</td>
                  <td className="border-b px-4 py-2 text-center">{itm["status"]}</td>
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
              ))
            )}
          </tbody>
        </table>
      </div>

      <PopUp
        heading="Department Master"
        buttonText="Submit"
        labelHeading="Department"
        inputs={[{ label: "Department", placeholder: "Enter Department Name" }]}
        open={popupOpen}
        onClose={togglePopup}
      />
    </div>
  );
};

export default DepartmentMaster;
