import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";

const ConsolidateMaster = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [serverBaseModalOpen, setServerBaseModalOpen] = useState(false);
  const [standaloneModalOpen, setStandaloneModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  
  // New states for modal inputs
  const [consolidate, setConsolidate] = useState("");
  const [equipmentId, setEquipmentId] = useState("");
  const [assetId, setAssetId] = useState("");
  const [applicationNameVersion, setApplicationNameVersion] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("Active");

  const [data, setData] = useState([
    { srNo: "1.", consolidate: "Group 1", equipmentId: "EID-001", assetId: "AID-101", applicationNameVersion: "App A v1.0", department: "QC", status: "Active" },
    { srNo: "2.", consolidate: "Group 2", equipmentId: "EID-002", assetId: "AID-102", applicationNameVersion: "App B v1.1", department: "Test-1", status: "Inactive" },
    { srNo: "3.", consolidate: "Group 1", equipmentId: "EID-003", assetId: "AID-103", applicationNameVersion: "App A v1.2", department: "User", status: "Active" },
    { srNo: "4.", consolidate: "Group 3", equipmentId: "EID-004", assetId: "AID-104", applicationNameVersion: "App C v2.0", department: "IT", status: "Inactive" },
    { srNo: "5.", consolidate: "Group 1", equipmentId: "EID-005", assetId: "AID-105", applicationNameVersion: "App A v1.3", department: "QA", status: "Active" },
    { srNo: "6.", consolidate: "Group 4", equipmentId: "EID-006", assetId: "AID-106", applicationNameVersion: "App D v2.1", department: "System Admin", status: "Inactive" },
    { srNo: "7.", consolidate: "Group 2", equipmentId: "EID-007", assetId: "AID-107", applicationNameVersion: "App B v1.4", department: "HR", status: "Active" },
    { srNo: "8.", consolidate: "Group 1", equipmentId: "EID-008", assetId: "AID-108", applicationNameVersion: "App A v1.5", department: "Finance", status: "Active" },
    { srNo: "9.", consolidate: "Group 2", equipmentId: "EID-009", assetId: "AID-109", applicationNameVersion: "App B v1.6", department: "Marketing", status: "Inactive" },
    { srNo: "10.", consolidate: "Group 3", equipmentId: "EID-010", assetId: "AID-110", applicationNameVersion: "App C v2.2", department: "Operations", status: "Active" }
  ]);

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredData = data.filter(item => {
    return (
      (statusFilter === "All" ||
        (statusFilter === "Active" && item.status === "Active") ||
        (statusFilter === "Inactive" && item.status === "Inactive")) &&
      (searchText === "" || item.consolidate.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  const handleAddData = () => {
    const newEntry = {
      srNo: (data.length + 1).toString() + ".",
      consolidate,
      equipmentId,
      assetId,
      applicationNameVersion,
      department,
      status
    };

    setData(prevData => [...prevData, newEntry]);
    resetModalFields();
    setStandaloneModalOpen(false);
  };

  const resetModalFields = () => {
    setConsolidate("");
    setEquipmentId("");
    setAssetId("");
    setApplicationNameVersion("");
    setDepartment("");
    setStatus("Active");
  };

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
