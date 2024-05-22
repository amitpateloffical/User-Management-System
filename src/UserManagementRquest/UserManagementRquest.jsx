import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";

const UserManagementRquest = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const data = [
      {
          srNo: "1.",
          action: "Calibrate",
          requestNo: "REQ-001",
          requestType: "Calibration",
          department: "QC",
          equipmentId: "EID-001",
          assetId: "AID-101",
          applicationNameVersion: "App A v1.0",
          requestedRole: "Technician",
          requestFor: "Self",
          selfExternal: "Self",
          remark: "Scheduled for routine calibration",
          status: "Active",
          initiatedOn: "2024-05-01"
      },
      {
          srNo: "2.",
          action: "Repair",
          requestNo: "REQ-002",
          requestType: "Maintenance",
          department: "Test-1",
          equipmentId: "EID-002",
          assetId: "AID-102",
          applicationNameVersion: "App B v1.1",
          requestedRole: "Engineer",
          requestFor: "System Check",
          selfExternal: "External",
          remark: "Reported malfunction",
          status: "Inactive",
          initiatedOn: "2024-05-02"
      },
      {
          srNo: "3.",
          action: "Check",
          requestNo: "REQ-003",
          requestType: "Inspection",
          department: "User",
          equipmentId: "EID-003",
          assetId: "AID-103",
          applicationNameVersion: "App A v1.2",
          requestedRole: "Inspector",
          requestFor: "Performance",
          selfExternal: "Self",
          remark: "Routine inspection",
          status: "Active",
          initiatedOn: "2024-05-03"
      },
      {
          srNo: "4.",
          action: "Replace",
          requestNo: "REQ-004",
          requestType: "Replacement",
          department: "IT",
          equipmentId: "EID-004",
          assetId: "AID-104",
          applicationNameVersion: "App C v2.0",
          requestedRole: "IT Specialist",
          requestFor: "System Upgrade",
          selfExternal: "External",
          remark: "Obsolete equipment",
          status: "Inactive",
          initiatedOn: "2024-05-04"
      },
      {
          srNo: "5.",
          action: "Calibrate",
          requestNo: "REQ-005",
          requestType: "Calibration",
          department: "QA",
          equipmentId: "EID-005",
          assetId: "AID-105",
          applicationNameVersion: "App A v1.3",
          requestedRole: "Technician",
          requestFor: "Self",
          selfExternal: "Self",
          remark: "Scheduled calibration",
          status: "Active",
          initiatedOn: "2024-05-05"
      },
      {
          srNo: "6.",
          action: "Repair",
          requestNo: "REQ-006",
          requestType: "Maintenance",
          department: "System Admin",
          equipmentId: "EID-006",
          assetId: "AID-106",
          applicationNameVersion: "App D v2.1",
          requestedRole: "Engineer",
          requestFor: "System Check",
          selfExternal: "External",
          remark: "Needs urgent repair",
          status: "Inactive",
          initiatedOn: "2024-05-06"
      },
      {
          srNo: "7.",
          action: "Check",
          requestNo: "REQ-007",
          requestType: "Inspection",
          department: "HR",
          equipmentId: "EID-007",
          assetId: "AID-107",
          applicationNameVersion: "App B v1.4",
          requestedRole: "Inspector",
          requestFor: "Performance",
          selfExternal: "Self",
          remark: "Regular check-up",
          status: "Active",
          initiatedOn: "2024-05-07"
      },
      {
          srNo: "8.",
          action: "Calibrate",
          requestNo: "REQ-008",
          requestType: "Calibration",
          department: "Finance",
          equipmentId: "EID-008",
          assetId: "AID-108",
          applicationNameVersion: "App A v1.5",
          requestedRole: "Technician",
          requestFor: "Self",
          selfExternal: "Self",
          remark: "Scheduled calibration",
          status: "Active",
          initiatedOn: "2024-05-08"
      },
      {
          srNo: "9.",
          action: "Repair",
          requestNo: "REQ-009",
          requestType: "Maintenance",
          department: "Marketing",
          equipmentId: "EID-009",
          assetId: "AID-109",
          applicationNameVersion: "App B v1.6",
          requestedRole: "Engineer",
          requestFor: "System Check",
          selfExternal: "External",
          remark: "Repair needed",
          status: "Inactive",
          initiatedOn: "2024-05-09"
      },
      {
          srNo: "10.",
          action: "Check",
          requestNo: "REQ-010",
          requestType: "Inspection",
          department: "Operations",
          equipmentId: "EID-010",
          assetId: "AID-110",
          applicationNameVersion: "App C v2.2",
          requestedRole: "Inspector",
          requestFor: "Performance",
          selfExternal: "Self",
          remark: "Routine inspection",
          status: "Active",
          initiatedOn: "2024-05-10"
      }
  ];

  const filteredData = data.filter(item => {
    return ( (searchText === "" || item.requestNo.toLowerCase().includes(searchText.toLowerCase())));
  });
    return (
      <div>
         <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? 'ml-64' : ''}`}>
      <div className="flex flex-col lg:flex-row justify-between items-center border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7] mb-4 lg:mb-0">
          User Management Request
        </div>
        <div className="flex justify-center items-center gap-5 w-full lg:w-auto">
          <div className="flex flex-col w-full">
            <label htmlFor="search" className="font-bold">
              Search
            </label>
            <input
              id="search"
              type="text"
              className="border border-black rounded-md py-2 w-full lg:w-auto"
              placeholder="Search By Request Number"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>
          <div className="bg-[#d3eafd] text-[#2196f3] w-10 h-10 flex justify-center items-center cursor-pointer">
            <MdAddBox />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">SR.NO.</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">ACTION</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">REQUEST NO</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">REQUEST TYPE</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">DEPARTMENT</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">EQUIPMENT ID</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">ASSET ID</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">APPLICATION NAME & VERSION</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">REQUESTED ROLE</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">REQUEST FOR</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">SELF / EXTERNAL</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">REMARK</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">INITIATED ON</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">STATUS</th>
              <th className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">EDIT</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((itm, index) => (
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
                    <div className={`rounded-full px-2 ${itm.status === 'Active' ? 'bg-green-300 text-green-700' : 'bg-red-300 text-red-700'}`}>
                      {itm.status}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-center flex justify-center gap-3 items-center">
                    <div className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer">
                      <FaRegEdit />
                    </div>
                    <div className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer">
                      <IoBan />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    );
}

export default UserManagementRquest