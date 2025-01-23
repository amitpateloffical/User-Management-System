import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";

const UserManagementRequest = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newRequest, setNewRequest] = useState({
    action: "",
    requestNo: "",
    requestType: "",
    department: "",
    equipmentId: "",
    assetId: "",
    applicationNameVersion: "",
    requestedRole: "",
    requestFor: "",
    selfExternal: "",
    remark: "",
    status: "Active",
    initiatedOn: "",
  });
  const [data, setData] = useState([
    // Static data
    {
      srNo: "1.",
      action: "ADD",
      requestNo: "REQ001",
      requestType: "New Request",
      department: "HR",
      equipmentId: "EQUIP001",
      assetId: "ASSET001",
      applicationNameVersion: "App1 v1.0",
      requestedRole: "Admin",
      requestFor: "John Doe",
      selfExternal: "Self",
      remark: "Urgent request",
      status: "Active",
      initiatedOn: "01-01-2025",
    },
    {
      srNo: "2.",
      action: "UPDATE",
      requestNo: "REQ002",
      requestType: "Update Request",
      department: "IT",
      equipmentId: "EQUIP002",
      assetId: "ASSET002",
      applicationNameVersion: "App2 v2.0",
      requestedRole: "User",
      requestFor: "Jane Smith",
      selfExternal: "External",
      remark: "Regular update",
      status: "Active",
      initiatedOn: "02-01-2025",
    },
    // Add more static data as required
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddRequest = () => {
    setData((prev) => [
      ...prev,
      {
        ...newRequest,
        srNo: `${prev.length + 1}.`,
        initiatedOn: new Date().toLocaleDateString(),
      },
    ]);
    setShowAddModal(false);
    setNewRequest({
      action: "",
      requestNo: "",
      requestType: "",
      department: "",
      equipmentId: "",
      assetId: "",
      applicationNameVersion: "",
      requestedRole: "",
      requestFor: "",
      selfExternal: "",
      remark: "",
      status: "Active",
      initiatedOn: "",
    });
  };

  const handleDeleteRequest = (requestNo) => {
    setData((prev) => prev.filter((item) => item.requestNo !== requestNo));
  };

  const handleEditRequest = (requestNo) => {
    const requestToEdit = data.find((item) => item.requestNo === requestNo);
    setNewRequest(requestToEdit);
    setShowAddModal(true); // Show the modal to edit
  };

  const filteredData = data.filter((item) => {
    return searchText === "" || item.requestNo.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? "ml-64" : ""}`}>
        <div className="flex w-[75%] justify-between items-center border-b pb-5">
          <div className="text-3xl font-semibold text-[#673ab7] mb-4 lg:mb-0">User Management Request</div>
          <div className="mt-2 flex justify-center items-center gap-x-10 fixed right-2">
          <div className=" flex justify-start md:justify-between items-center gap-10">
              <ImportExportButtons
                data={data}
                setData={(importedData) => {
                  const updatedData = importedData.map((item, index) => ({
                    ...item,
                    initiatedOn: new Date(item.initiatedOn).toLocaleDateString(),
                    srNo: `${data.length + index + 1}.`,
                  }));
                  setData((prev) => [...prev, ...updatedData]);
                }}
                fileName="User Management Request"
                sheetNumbers={8}
              />
              </div>
          <div className="flex justify-center items-center gap-5 w-full lg:w-auto">
            <div className="flex flex-row items-center gap-x-10 w-full">
              <label htmlFor="search" className="font-bold">Search</label>
              <input
                id="search"
                type="text"
                className="border border-black rounded-md py-2 px-2 text-sm w-full lg:w-auto"
                placeholder="Search By Request Number"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

            <div
              className="bg-[#d3eafd] text-[#2196f3] w-10 h-10 flex justify-center items-center cursor-pointer"
              onClick={() => setShowAddModal(true)}
            >
              <MdAddBox />
            </div>            </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">SR.NO.</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">ACTION</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">REQUEST NO</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">REQUEST TYPE</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">DEPARTMENT</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">EQUIPMENT ID</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">ASSET ID</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">APPLICATION NAME & VERSION</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">REQUESTED ROLE</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">REQUEST FOR</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">SELF / EXTERNAL</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">REMARK</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">INITIATED ON</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">STATUS</th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">EDIT</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.length > 0 ? (
                filteredData.map((itm, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.srNo}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.action}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.requestNo}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.requestType}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.department}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.equipmentId}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.assetId}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.applicationNameVersion}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.requestedRole}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.requestFor}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.selfExternal}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.remark}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{itm.initiatedOn}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <div className="text-center flex justify-center items-center">
                        <div
                          className={`rounded-full px-2 ${itm.status === "Active" ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700"}`}
                        >
                          {itm.status}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <div className="text-center flex justify-center gap-3 items-center">
                        <div
                          className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer"
                          onClick={() => handleEditRequest(itm.requestNo)}
                        >
                          <FaRegEdit />
                        </div>
                        <div
                          className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer"
                          onClick={() => handleDeleteRequest(itm.requestNo)}
                        >
                          <IoBan />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="14" className="text-center py-4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Request Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-[400px]">
            <h2 className="text-xl font-semibold mb-4">{newRequest.requestNo ? "Edit Request" : "Add New Request"}</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="action" className="block">Action</label>
                <input
                  type="text"
                  id="action"
                  name="action"
                  className="border border-black rounded-md p-2 w-full"
                  value={newRequest.action}
                  onChange={handleInputChange}
                />
              </div>
              {/* Add other form fields similarly */}
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-blue-500 text-white p-2 rounded-md"
                  onClick={handleAddRequest}
                >
                  {newRequest.requestNo ? "Save" : "Add"}
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white p-2 rounded-md"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagementRequest;
