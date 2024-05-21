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
    
    
  <div
    className={`content-with-fixed-header  px-4 flex flex-col gap-10 ${
      sidebarOpen ? "ml-64" : ""
    } content-with-fixed-header  px-4 flex flex-col gap-10 `}
  >
    <div className="grid grid-cols-3 border-b pb-5">
      <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
      Request Report
      </div>
     <div className="flex justify-end gap-7 col-span-1 w-full">
     <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[10%] h-[40px] flex justify-center items-center">
     <FiRefreshCw />
        </div>
        <div className="bg-[#d3eafd]  rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[10%] h-[40px] flex justify-center items-center">
        <FaFilePdf />
        </div>
     </div>
    </div>
    <div className="grid grid-cols-4 justify-center items-center gap-5">
      <div className="col-span-3 flex items-center gap-5">
      <div className="flex flex-col w-full">
          <label htmlFor="" className="font-bold">
          Self/External
          </label>
          <select className="border border-black rounded-md  py-2 " onChange={handleSelfFilter}>
            <option value="All" >All</option>
            <option value="Self">Self</option>
            <option value="External">External</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="" className="font-bold">
          Request No
          </label>
          <select className="border border-black rounded-md  py-2 ">
            <option>---select---</option>
            <option>HMI</option>
            <option>SCADA</option>
            <option>IPC</option>
            <option>COMPUTER SYSTEM</option>
            <option>OTHER</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="" className="font-bold">
          User
          </label>
          <select className="border border-black rounded-md  py-2 ">
            <option>---select---</option>
            <option>HMI</option>
            <option>SCADA</option>
            <option>IPC</option>
            <option>COMPUTER SYSTEM</option>
            <option>OTHER</option>
          </select>
        </div>
        <div className="bg-purple-200 mt-5 rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-purple-700 hover:text-white cursor-pointer text-purple-500 w-[15%] h-[40px] flex justify-center items-center">
        <IoSearchSharp size={25}/>
        </div>
      </div>

        
      </div>
    <div>
        <table>
            <thead>
                <tr >
                    <th className="text-center">SR.NO.</th>
                    <th className="text-center">REPORT</th>
                    <th className="text-center">REQUEST NO</th>
                    <th className="text-center">DEPARTMENT	</th>
                    <th className="text-center">REQUEST TYPE</th>
                    <th className="text-center">EQUIPMENT ID</th>
                    <th className="text-center">ASSET ID	</th>
                    <th className="text-center">APPLICATION NAME & VERSION	</th>
                    <th className="text-center">REQUESTED ROLE	</th>
                    <th className="text-center">REQUEST FOR</th>
                    <th className="text-center">SELF / EXTERNAL</th>
                    <th className="text-center">REMARK</th>
                    <th className="text-center">INITIATED BY</th>
                    <th className="text-center">INITIATED ON</th>
                    <th className="text-center">STATUS</th>
                   
                </tr>
            </thead>
            <tbody>
               
{filteredData.map(( itm, index)=>{
return(
   
     <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.report}</td>
<td className="text-center">{itm.requestNo}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.requestType}</td>
<td className="text-center">{itm.equipmentId}</td>
<td className="text-center">{itm.assetId}</td>
<td className="text-center">{itm.applicationNameVersion}</td>
<td className="text-center">{itm.requestedRole}</td>
<td className="text-center">{itm.requestFor}</td>
<td className="text-center">{itm.selfExternal}</td>
<td className="text-center">{itm.remark}</td>
<td className="text-center">{itm.initiatedBy}</td>
<td className="text-center">{itm.initiatedOn}</td>
<td > <div className="text-center flex justify-center items-center"><div className="bg-green-300 text-green-700 rounded-full text-center w-[70px]">{itm.status}</div></div> </td>
</tr>
    
)
})}
                
            </tbody>
        </table>
    </div>
  </div>
</div>
)
}

export default RequestReport