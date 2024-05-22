import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const RequestReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selfFilter,setSelfFilter]=useState("All")

  const data = [
    {
        srNo: "1.",
        report: "Calibration Report",
        requestNo: "REQ-001",
        department: "QC",
        requestType: "Calibration",
        equipmentId: "EID-001",
        assetId: "AID-101",
        applicationNameVersion: "App A v1.0",
        requestedRole: "Technician",
        requestFor: "Self",
        selfExternal: "Self",
        remark: "Scheduled for routine calibration",
        initiatedBy: "Admin",
        initiatedOn: "2024-05-01",
        status: "Active"
    },
    {
        srNo: "2.",
        report: "Maintenance Report",
        requestNo: "REQ-002",
        department: "Test-1",
        requestType: "Maintenance",
        equipmentId: "EID-002",
        assetId: "AID-102",
        applicationNameVersion: "App B v1.1",
        requestedRole: "Engineer",
        requestFor: "System Check",
        selfExternal: "External",
        remark: "Reported malfunction",
        initiatedBy: "Admin",
        initiatedOn: "2024-05-02",
        status: "Inactive"
    },
    {
        srNo: "3.",
        report: "Inspection Report",
        requestNo: "REQ-003",
        department: "User",
        requestType: "Inspection",
        equipmentId: "EID-003",
        assetId: "AID-103",
        applicationNameVersion: "App A v1.2",
        requestedRole: "Inspector",
        requestFor: "Performance",
        selfExternal: "Self",
        remark: "Routine inspection",
        initiatedBy: "Admin",
        initiatedOn: "2024-05-03",
        status: "Active"
    },
    {
        srNo: "4.",
        report: "Replacement Report",
        requestNo: "REQ-004",
        department: "IT",
        requestType: "Replacement",
        equipmentId: "EID-004",
        assetId: "AID-104",
        applicationNameVersion: "App C v2.0",
        requestedRole: "IT Specialist",
        requestFor: "System Upgrade",
        selfExternal: "External",
        remark: "Obsolete equipment",
        initiatedBy: "Admin",
        initiatedOn: "2024-05-04",
        status: "Inactive"
    },
    {
        srNo: "5.",
        report: "Calibration Report",
        requestNo: "REQ-005",
        department: "QA",
        requestType: "Calibration",
        equipmentId: "EID-005",
        assetId: "AID-105",
        applicationNameVersion: "App A v1.3",
        requestedRole: "Technician",
        requestFor: "Self",
        selfExternal: "Self",
        remark: "Scheduled calibration",
        initiatedBy: "Admin",
        initiatedOn: "2024-05-05",
        status: "Active"
    },
    {
        srNo: "6.",
        report: "Maintenance Report",
        requestNo: "REQ-006",
        department: "System Admin",
        requestType: "Maintenance",
        equipmentId: "EID-006",
        assetId: "AID-106",
        applicationNameVersion: "App D v2.1",
        requestedRole: "Engineer",
        requestFor: "System Check",
        selfExternal: "External",
        remark: "Needs urgent repair",
        initiatedBy: "Admin",
        initiatedOn: "2024-05-06",
        status: "Inactive"
    },
    {
        srNo: "7.",
        report: "Inspection Report",
        requestNo: "REQ-007",
        department: "HR",
        requestType: "Inspection",
        equipmentId: "EID-007",
        assetId: "AID-107",
        applicationNameVersion: "App B v1.4",
        requestedRole: "Inspector",
        requestFor: "Performance",
        selfExternal: "Self",
        remark: "Regular check-up",
        initiatedBy: "Admin",
        initiatedOn: "2024-05-07",
        status: "Active"
    },
    {
        srNo: "8.",
        report: "Calibration Report",
        requestNo: "REQ-008",
        department: "Finance",
        requestType: "Calibration",
        equipmentId: "EID-008",
        assetId: "AID-108",
        applicationNameVersion: "App A v1.5",
        requestedRole: "Technician",
        requestFor: "Self",
        selfExternal: "Self",
        remark: "Scheduled calibration",
        initiatedBy: "Admin",
        initiatedOn: "2024-05-08",
        status: "Active"
    },
    {
        srNo: "9.",
        report: "Maintenance Report",
        requestNo: "REQ-009",
        department: "Marketing",
        requestType: "Maintenance",
        equipmentId: "EID-009",
        assetId: "AID-109",
        applicationNameVersion: "App B v1.6",
        requestedRole: "Engineer",
        requestFor: "System Check",
        selfExternal: "External",
        remark: "Repair needed",
        initiatedBy: "Admin",
        initiatedOn: "2024-05-09",
        status: "Inactive"
    },
    {
        srNo: "10.",
        report: "Inspection Report",
        requestNo: "REQ-010",
        department: "Operations",
        requestType: "Inspection",
        equipmentId: "EID-010",
        assetId: "AID-110",
        applicationNameVersion: "App C v2.2",
        requestedRole: "Inspector",
        requestFor: "Performance",
        selfExternal: "Self",
        remark: "Routine inspection",
        initiatedBy: "Admin",
        initiatedOn: "2024-05-10",
        status: "Active"
    }
];


const handleSelfFilter = (event)=>{
  setSelfFilter(event.target.value);
}

const filteredData = data.filter(item=>{
  return(
    (selfFilter ==="All"||
    (selfFilter==="Self" && item.selfExternal ==="Self")||
    (selfFilter==="External" && item.selfExternal==="External"))
  )
})

return (
  <div>
    
    
    <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? 'ml-64' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7] col-span-2">Request Report</div>
        <div className="flex justify-end gap-4 md:gap-7 col-span-1 w-full">
          <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40px] md:w-[10%] h-[40px] flex justify-center items-center">
            <FiRefreshCw />
          </div>
          <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40px] md:w-[10%] h-[40px] flex justify-center items-center">
            <FaFilePdf />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-1 md:col-span-3 flex flex-wrap md:flex-nowrap gap-5 items-end">
          <div className="flex flex-col w-full md:w-1/5">
            <label htmlFor="selfExternal" className="font-bold">Self/External</label>
            <select className="border border-black rounded-md py-2" onChange={handleSelfFilter}>
              <option value="All">All</option>
              <option value="Self">Self</option>
              <option value="External">External</option>
            </select>
          </div>
          <div className="flex flex-col w-full md:w-1/5">
            <label htmlFor="requestNo" className="font-bold">Request No</label>
            <select className="border border-black rounded-md py-2">
              <option>---select---</option>
              <option>HMI</option>
              <option>SCADA</option>
              <option>IPC</option>
              <option>COMPUTER SYSTEM</option>
              <option>OTHER</option>
            </select>
          </div>
          <div className="flex flex-col w-full md:w-1/5">
            <label htmlFor="user" className="font-bold">User</label>
            <select className="border border-black rounded-md py-2">
              <option>---select---</option>
              <option>HMI</option>
              <option>SCADA</option>
              <option>IPC</option>
              <option>COMPUTER SYSTEM</option>
              <option>OTHER</option>
            </select>
          </div>
          <div className="bg-purple-200 mt-5 md:mt-0 rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-purple-700 hover:text-white cursor-pointer text-purple-500 w-full md:w-[15%] h-[40px] flex justify-center items-center">
            <IoSearchSharp size={25} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-center px-6 py-3">SR.NO.</th>
              <th className="text-center px-6 py-3">REPORT</th>
              <th className="text-center px-6 py-3">REQUEST NO</th>
              <th className="text-center px-6 py-3">DEPARTMENT</th>
              <th className="text-center px-6 py-3">REQUEST TYPE</th>
              <th className="text-center px-6 py-3">EQUIPMENT ID</th>
              <th className="text-center px-6 py-3">ASSET ID</th>
              <th className="text-center px-6 py-3">APPLICATION NAME & VERSION</th>
              <th className="text-center px-6 py-3">REQUESTED ROLE</th>
              <th className="text-center px-6 py-3">REQUEST FOR</th>
              <th className="text-center px-6 py-3">SELF / EXTERNAL</th>
              <th className="text-center px-6 py-3">REMARK</th>
              <th className="text-center px-6 py-3">INITIATED BY</th>
              <th className="text-center px-6 py-3">INITIATED ON</th>
              <th className="text-center px-6 py-3">STATUS</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((itm, index) => (
              <tr key={index}>
                <td className="text-center px-6 py-4">{itm.srNo}</td>
                <td className="text-center px-6 py-4">{itm.report}</td>
                <td className="text-center px-6 py-4">{itm.requestNo}</td>
                <td className="text-center px-6 py-4">{itm.department}</td>
                <td className="text-center px-6 py-4">{itm.requestType}</td>
                <td className="text-center px-6 py-4">{itm.equipmentId}</td>
                <td className="text-center px-6 py-4">{itm.assetId}</td>
                <td className="text-center px-6 py-4">{itm.applicationNameVersion}</td>
                <td className="text-center px-6 py-4">{itm.requestedRole}</td>
                <td className="text-center px-6 py-4">{itm.requestFor}</td>
                <td className="text-center px-6 py-4">{itm.selfExternal}</td>
                <td className="text-center px-6 py-4">{itm.remark}</td>
                <td className="text-center px-6 py-4">{itm.initiatedBy}</td>
                <td className="text-center px-6 py-4">{itm.initiatedOn}</td>
                <td className="text-center px-6 py-4">
                  <div className="flex justify-center items-center">
                    <div className={`rounded-full px-2 ${itm.status === 'Active' ? 'bg-green-300 text-green-700' : 'bg-red-300 text-red-700'}`}>
                      {itm.status}
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
)
}

export default RequestReport