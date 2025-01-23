import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";
const ConsolidateMaster = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [serverBaseModalOpen, setServerBaseModalOpen] = useState(false);
  const [standaloneModalOpen, setStandaloneModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false); // State for edit modal
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  // New states for modal inputs
  const [consolidate, setConsolidate] = useState("");
  const [equipmentId, setEquipmentId] = useState("");
  const [assetId, setAssetId] = useState("");
  const [applicationNameVersion, setApplicationNameVersion] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("Active");

  // State to hold data
  const [data, setData] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null); // To store the item to be edited

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

  const handleEditData = (item) => {
    setSelectedItem(item); // Set the selected item for editing
    setConsolidate(item.consolidate);
    setEquipmentId(item.equipmentId);
    setAssetId(item.assetId);
    setApplicationNameVersion(item.applicationNameVersion);
    setDepartment(item.department);
    setStatus(item.status);
    setEditModalOpen(true); // Open the edit modal
  };

  const handleUpdateData = () => {
    const updatedData = data.map(item => 
      item.srNo === selectedItem.srNo 
        ? { ...item, consolidate, equipmentId, assetId, applicationNameVersion, department, status } 
        : item
    );
    setData(updatedData);
    resetModalFields();
    setEditModalOpen(false); // Close the edit modal
  };

  const handleDeleteData = (srNo) => {
    setData(data.filter(item => item.srNo !== srNo)); // Remove the item from the state
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
      <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? 'ml-64' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-b pb-5">
          <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
            Consolidate Master
          </div>
          <div className="flex justify-around col-span-1 w-full">
            <div
              className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40%] h-[40px] flex justify-center items-center"
              onClick={() => setStandaloneModalOpen(true)}
            >
              Add Consolidate &nbsp;<MdAddBox />
            </div>
          </div>
        </div>
        <ImportExportButtons
        data={data}
        setData={setData}
        fileName="ConsolidateMaster"
        sheetNumbers={7}
      />

        {/* Filter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5">
          <div className="col-span-3 flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col w-full">
              <label htmlFor="status" className="font-bold">Status</label>
              <select id="status" className="border border-black rounded-md py-2" onChange={handleStatusFilterChange}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="search" className="font-bold">Search</label>
              <input
                id="search"
                type="text"
                className="border border-black rounded-md py-2 lg:pr-24"
                placeholder="Search Consolidate"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">SR.NO.</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">CONSOLIDATE</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">EQUIPMENT/INSTRUMENT ID</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">ASSET ID</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">APPLICATION NAME & VERSION</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">DEPARTMENT</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">STATUS</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">ACTION</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.length === 0 ? (
              <tr>
                <td className="border-b px-4 py-2 text-center" colSpan="4">
                  No Data Available
                </td>
              </tr>
            ) : (
              
              filteredData.map((itm, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{itm["SR.NO."]}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{itm["CONSOLIDATE"]}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{itm["EQUIPMENT/INSTRUMENT ID"]}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{itm["ASSET ID"]}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{itm["APPLICATION NAME & VERSION"]}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{itm["DEPARTMENT"]}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{itm["STATUS"]}</td>
                  <td>
                    <div className="text-center flex justify-center gap-3 items-center">
                      <div className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer"
                        onClick={() => handleEditData(itm)}>
                        <FaRegEdit />
                      </div>
                      <div className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer"
                        onClick={() => handleDeleteData(itm.srNo)}>
                        <IoBan />
                      </div>
                    </div>
                  </td>
                </tr>
             ) ))}
            </tbody>
          </table>
        </div>

        {/* Add Data Modal */}
        {standaloneModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-2xl mb-4">Add Consolidate</h2>
              <form>
                <div>
                  <label>Consolidate</label>
                  <input type="text" className="w-full p-2 mb-2 border" value={consolidate} onChange={e => setConsolidate(e.target.value)} />
                </div>
                <div>
                  <label>Equipment/Instrument ID</label>
                  <input type="text" className="w-full p-2 mb-2 border" value={equipmentId} onChange={e => setEquipmentId(e.target.value)} />
                </div>
                <div>
                  <label>Asset ID</label>
                  <input type="text" className="w-full p-2 mb-2 border" value={assetId} onChange={e => setAssetId(e.target.value)} />
                </div>
                <div>
                  <label>Application Name & Version</label>
                  <input type="text" className="w-full p-2 mb-2 border" value={applicationNameVersion} onChange={e => setApplicationNameVersion(e.target.value)} />
                </div>
                <div>
                  <label>Department</label>
                  <input type="text" className="w-full p-2 mb-2 border" value={department} onChange={e => setDepartment(e.target.value)} />
                </div>
                <div>
                  <label>Status</label>
                  <select className="w-full p-2 mb-2 border" value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={handleAddData}
                  className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setStandaloneModalOpen(false)}
                  className="bg-gray-500 text-white p-2 rounded mt-4 w-full"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Edit Data Modal */}
        {editModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-2xl mb-4">Edit Consolidate</h2>
              <form>
                <div>
                  <label>Consolidate</label>
                  <input type="text" className="w-full p-2 mb-2 border" value={consolidate} onChange={e => setConsolidate(e.target.value)} />
                </div>
                <div>
                  <label>Equipment/Instrument ID</label>
                  <input type="text" className="w-full p-2 mb-2 border" value={equipmentId} onChange={e => setEquipmentId(e.target.value)} />
                </div>
                <div>
                  <label>Asset ID</label>
                  <input type="text" className="w-full p-2 mb-2 border" value={assetId} onChange={e => setAssetId(e.target.value)} />
                </div>
                <div>
                  <label>Application Name & Version</label>
                  <input type="text" className="w-full p-2 mb-2 border" value={applicationNameVersion} onChange={e => setApplicationNameVersion(e.target.value)} />
                </div>
                <div>
                  <label>Department</label>
                  <input type="text" className="w-full p-2 mb-2 border" value={department} onChange={e => setDepartment(e.target.value)} />
                </div>
                <div>
                  <label>Status</label>
                  <select className="w-full p-2 mb-2 border" value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={handleUpdateData}
                  className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="bg-gray-500 text-white p-2 rounded mt-4 w-full"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsolidateMaster;
