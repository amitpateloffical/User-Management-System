import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";

const ConsolidateMaster = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupOpenII, setPopupOpenII] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([
    {
      srNo: "1.",
      consolidate: "Group 1",
      equipmentId: "EID-001",
      assetId: "AID-101",
      applicationNameVersion: "App A v1.0",
      department: "QC",
      status: "Active",
    },
    // Additional rows here...
  ]);

  const togglePopup = () => setPopupOpen(!popupOpen);
  const togglePopupII = () => setPopupOpenII(!popupOpenII);

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      (statusFilter === "All" ||
        (statusFilter === "Active" && item.status === "Active") ||
        (statusFilter === "Inactive" && item.status === "Inactive")) &&
      (searchText === "" ||
        item.consolidate.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  return (
    <div>
      <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? "ml-64" : ""}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-b pb-5">
          <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
            Consolidate Master
          </div>
          <div className="flex justify-around col-span-1 w-full">
            <div
              className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40%] h-[40px] flex justify-center items-center"
              onClick={togglePopup}
            >
              Server Base &nbsp;<MdAddBox />
            </div>
            <div
              className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40%] h-[40px] flex justify-center items-center"
              onClick={togglePopupII}
            >
              Standalone &nbsp;<MdAddBox />
            </div>
          </div>
        </div>

        {/* Import/Export Buttons */}

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5">
          <div className="col-span-3 flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col w-full">
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
            <div className="flex flex-col w-full">
              <label htmlFor="assetType" className="font-bold">
                Asset Type
              </label>
              <select id="assetType" className="border border-black rounded-md py-2">
                <option>---select---</option>
                <option>HMI</option>
                <option>SCADA</option>
                <option>IPC</option>
                <option>COMPUTER SYSTEM</option>
                <option>OTHER</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="search" className="font-bold">
                Search
              </label>
              <input
                id="search"
                type="text"
                className="border border-black rounded-md py-2 lg:pr-24"
                placeholder="Search Consolidate"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>
        <ImportExportButtons data={data} setData={setData} fileName="ConsolidateData.xlsx" />
    
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">SR.NO.</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Consolidate</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Equipment ID</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Asset ID</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                  Application Name/Version
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-center">{item.srNo}</td>
                  <td className="px-6 py-4 text-center">{item.consolidate}</td>
                  <td className="px-6 py-4 text-center">{item.equipmentId}</td>
                  <td className="px-6 py-4 text-center">{item.assetId}</td>
                  <td className="px-6 py-4 text-center">{item.applicationNameVersion}</td>
                  <td className="px-6 py-4 text-center">{item.department}</td>
                  <td className="px-6 py-4 text-center">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConsolidateMaster;
