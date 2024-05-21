import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ActiveUserList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");


  const data = [
    {
        srNo: "1.",
        empCode: "EMP-001",
        employeeName: "John Doe",
        equipmentId: "EID-001",
        equipmentName: "Thermometer",
        assetId: "AID-101",
        assetName: "Asset A",
        application: "App A",
        applicationVersion: "1.0",
        role: "Technician",
        department: "QC",
        createdBy: "Admin",
        createdDate: "2024-05-01",
        status: "Active"
    },
    {
        srNo: "2.",
        empCode: "EMP-002",
        employeeName: "Jane Smith",
        equipmentId: "EID-002",
        equipmentName: "Multimeter",
        assetId: "AID-102",
        assetName: "Asset B",
        application: "App B",
        applicationVersion: "1.1",
        role: "Engineer",
        department: "Test-1",
        createdBy: "Admin",
        createdDate: "2024-05-02",
        status: "Inactive"
    },
    {
        srNo: "3.",
        empCode: "EMP-003",
        employeeName: "Alice Johnson",
        equipmentId: "EID-003",
        equipmentName: "Oscilloscope",
        assetId: "AID-103",
        assetName: "Asset C",
        application: "App A",
        applicationVersion: "1.2",
        role: "Inspector",
        department: "User",
        createdBy: "Admin",
        createdDate: "2024-05-03",
        status: "Active"
    },
    {
        srNo: "4.",
        empCode: "EMP-004",
        employeeName: "Bob Brown",
        equipmentId: "EID-004",
        equipmentName: "Power Supply",
        assetId: "AID-104",
        assetName: "Asset D",
        application: "App C",
        applicationVersion: "2.0",
        role: "IT Specialist",
        department: "IT",
        createdBy: "Admin",
        createdDate: "2024-05-04",
        status: "Inactive"
    },
    {
        srNo: "5.",
        empCode: "EMP-005",
        employeeName: "Charlie Davis",
        equipmentId: "EID-005",
        equipmentName: "Spectrum Analyzer",
        assetId: "AID-105",
        assetName: "Asset E",
        application: "App A",
        applicationVersion: "1.3",
        role: "Technician",
        department: "QA",
        createdBy: "Admin",
        createdDate: "2024-05-05",
        status: "Active"
    },
    {
        srNo: "6.",
        empCode: "EMP-006",
        employeeName: "Dana Lee",
        equipmentId: "EID-006",
        equipmentName: "Function Generator",
        assetId: "AID-106",
        assetName: "Asset F",
        application: "App D",
        applicationVersion: "2.1",
        role: "Engineer",
        department: "System Admin",
        createdBy: "Admin",
        createdDate: "2024-05-06",
        status: "Inactive"
    },
    {
        srNo: "7.",
        empCode: "EMP-007",
        employeeName: "Eve Clark",
        equipmentId: "EID-007",
        equipmentName: "Data Logger",
        assetId: "AID-107",
        assetName: "Asset G",
        application: "App B",
        applicationVersion: "1.4",
        role: "Inspector",
        department: "HR",
        createdBy: "Admin",
        createdDate: "2024-05-07",
        status: "Active"
    },
    {
        srNo: "8.",
        empCode: "EMP-008",
        employeeName: "Frank Evans",
        equipmentId: "EID-008",
        equipmentName: "Anemometer",
        assetId: "AID-108",
        assetName: "Asset H",
        application: "App A",
        applicationVersion: "1.5",
        role: "Technician",
        department: "Finance",
        createdBy: "Admin",
        createdDate: "2024-05-08",
        status: "Active"
    },
    {
        srNo: "9.",
        empCode: "EMP-009",
        employeeName: "Grace Hill",
        equipmentId: "EID-009",
        equipmentName: "LCR Meter",
        assetId: "AID-109",
        assetName: "Asset I",
        application: "App B",
        applicationVersion: "1.6",
        role: "Engineer",
        department: "Marketing",
        createdBy: "Admin",
        createdDate: "2024-05-09",
        status: "Inactive"
    },
    {
        srNo: "10.",
        empCode: "EMP-010",
        employeeName: "Hank Green",
        equipmentId: "EID-010",
        equipmentName: "Temperature Chamber",
        assetId: "AID-110",
        assetName: "Asset J",
        application: "App C",
        applicationVersion: "2.2",
        role: "Inspector",
        department: "Operations",
        createdBy: "Admin",
        createdDate: "2024-05-10",
        status: "Active"
    }
];


  const downloadPDF = () => {
    const input = document.getElementById("active-user-list");
    html2canvas(input, {
      scrollY: -window.scrollY,
      scale: 3,
      backgroundColor: "#ffffff",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0); 
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "pt",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
      pdf.save("active_user_list.pdf");
    });
  
};

const handleStatusFilterChange = (event) => {
  setStatusFilter(event.target.value);
};

const filteredData = data.filter(item => {
  return (
    (statusFilter === "All" || 
    (statusFilter === "Active" && item.status === "Active") || 
    (statusFilter === "Inactive" && item.status === "Inactive"))
   
  );
});




return (
  <div>
    
    
  <div
    className={`content-with-fixed-header  px-4 flex flex-col gap-10 ${
      sidebarOpen ? "ml-64" : ""
    } content-with-fixed-header  px-4 flex flex-col gap-10 `}
  >
    <div className="grid grid-cols-3 border-b pb-5">
      <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
      Active Users List
      </div>
     <div className="flex justify-end gap-7 col-span-1 w-full">
     <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[10%] h-[40px] flex justify-center items-center">
     <FiRefreshCw />
        </div>
        <div className="bg-[#d3eafd]  rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[10%] h-[40px] flex justify-center items-center"  onClick={downloadPDF}>
        <FaFilePdf />
        </div>
     </div>
    </div>
    <div className="grid grid-cols-4 justify-center items-center gap-5">
      <div className="col-span-3 flex items-center gap-5">
      <div className="flex flex-col w-full">
          <label htmlFor="" className="font-bold">
            Status
          </label>
          <select className="border border-black rounded-md  py-2 " onChange={handleStatusFilterChange}>
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="" className="font-bold">
          Application Name & Version
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
        <div className="flex flex-col w-full">
          <label htmlFor="" className="font-bold">
          Equipment ID
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
    <div id="active-user-list">
        <table>
            <thead>
                <tr >
                    <th className="text-center">SR.NO.</th>
                    <th className="text-center">EMP CODE</th>
                    <th className="text-center">EMPLOYEE NAME</th>
                    <th className="text-center">EQUIPMENT/INSTRUMENT ID	</th>
                    <th className="text-center">EQUIPMENT/INSTRUMENT NAME</th>
                    <th className="text-center">ASSETS ID</th>
                    <th className="text-center">ASSETS NAME</th>
                    <th className="text-center">APPLICATION</th>
                    <th className="text-center">APPLICATION VERSION</th>
                    <th className="text-center">ROLE</th>
                    <th className="text-center">DEPARTMENT</th>
                    <th className="text-center">CREATED BY</th>
                    <th className="text-center">CREATED DATE</th>
                    <th className="text-center">STATUS</th>
                   
                </tr>
            </thead>
            <tbody>
               
{filteredData.map(( itm, index)=>{
return(
   
     <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.empCode}</td>
<td className="text-center">{itm.employeeName}</td>
<td className="text-center">{itm.equipmentId}</td>
<td className="text-center">{itm.equipmentName}</td>
<td className="text-center">{itm.assetId}</td>
<td className="text-center">{itm.assetName}</td>
<td className="text-center">{itm.application}</td>
<td className="text-center">{itm.applicationVersion}</td>
<td className="text-center">{itm.role}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.createdBy}</td>
<td className="text-center">{itm.createdDate}</td>
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

export default ActiveUserList