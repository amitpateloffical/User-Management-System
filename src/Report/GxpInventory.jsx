import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const GxpInventory = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");

  const data = [
    {
        srNo: "1.",
        departmentName: "QC",
        equipmentName: "Thermometer",
        equipmentId: "EID-001",
        equipmentType: "Measurement",
        applicationNameVersion: "App A v1.0",
        assetType: "Instrument",
        systemType: "Standalone",
        assignedTo: "Technician A",
        assetId: "AID-101",
        make: "Make X",
        model: "Model A1",
        serviceTag: "ST-001",
        serialNumber: "SN-001",
        domain: "Domain A",
        hostname: "Host-A",
        numberOfProcessor: 1,
        processor: "Intel i5",
        ram: "8GB",
        sataHdd: "500GB",
        sataSdd: "None",
        sasHdd: "None",
        sasSsd: "None",
        nvmeSsd: "None",
        raid: "None",
        os: "Windows 10",
        ipAddress: "192.168.1.1",
        monitorSize: "24 inches",
        monitorSrNo: "MSN-001",
        noOfUserGroup: 5,
        backupScheduleTime: "02:00 AM",
        backupType: "Incremental",
        backupFrequency: "Daily",
        backupPath: "C:\\Backups\\QC",
        status: "Active"
    },
    {
        srNo: "2.",
        departmentName: "Test-1",
        equipmentName: "Multimeter",
        equipmentId: "EID-002",
        equipmentType: "Testing",
        applicationNameVersion: "App B v1.1",
        assetType: "Equipment",
        systemType: "Networked",
        assignedTo: "Engineer B",
        assetId: "AID-102",
        make: "Make Y",
        model: "Model B1",
        serviceTag: "ST-002",
        serialNumber: "SN-002",
        domain: "Domain B",
        hostname: "Host-B",
        numberOfProcessor: 2,
        processor: "Intel i7",
        ram: "16GB",
        sataHdd: "1TB",
        sataSdd: "256GB",
        sasHdd: "None",
        sasSsd: "None",
        nvmeSsd: "None",
        raid: "RAID 1",
        os: "Linux",
        ipAddress: "192.168.1.2",
        monitorSize: "27 inches",
        monitorSrNo: "MSN-002",
        noOfUserGroup: 3,
        backupScheduleTime: "03:00 AM",
        backupType: "Full",
        backupFrequency: "Weekly",
        backupPath: "C:\\Backups\\Test1",
        status: "Inactive"
    },
    {
        srNo: "3.",
        departmentName: "User",
        equipmentName: "Oscilloscope",
        equipmentId: "EID-003",
        equipmentType: "Measurement",
        applicationNameVersion: "App A v1.2",
        assetType: "Instrument",
        systemType: "Standalone",
        assignedTo: "Technician C",
        assetId: "AID-103",
        make: "Make X",
        model: "Model A2",
        serviceTag: "ST-003",
        serialNumber: "SN-003",
        domain: "Domain C",
        hostname: "Host-C",
        numberOfProcessor: 1,
        processor: "Intel i3",
        ram: "4GB",
        sataHdd: "500GB",
        sataSdd: "128GB",
        sasHdd: "None",
        sasSsd: "None",
        nvmeSsd: "None",
        raid: "None",
        os: "Windows 10",
        ipAddress: "192.168.1.3",
        monitorSize: "22 inches",
        monitorSrNo: "MSN-003",
        noOfUserGroup: 4,
        backupScheduleTime: "01:00 AM",
        backupType: "Differential",
        backupFrequency: "Daily",
        backupPath: "C:\\Backups\\User",
        status: "Active"
    },
    {
        srNo: "4.",
        departmentName: "IT",
        equipmentName: "Power Supply",
        equipmentId: "EID-004",
        equipmentType: "Power",
        applicationNameVersion: "App C v2.0",
        assetType: "Equipment",
        systemType: "Networked",
        assignedTo: "IT Specialist D",
        assetId: "AID-104",
        make: "Make Z",
        model: "Model C1",
        serviceTag: "ST-004",
        serialNumber: "SN-004",
        domain: "Domain D",
        hostname: "Host-D",
        numberOfProcessor: 4,
        processor: "AMD Ryzen 5",
        ram: "32GB",
        sataHdd: "2TB",
        sataSdd: "512GB",
        sasHdd: "None",
        sasSsd: "None",
        nvmeSsd: "None",
        raid: "RAID 5",
        os: "Windows Server 2016",
        ipAddress: "192.168.1.4",
        monitorSize: "29 inches",
        monitorSrNo: "MSN-004",
        noOfUserGroup: 2,
        backupScheduleTime: "04:00 AM",
        backupType: "Full",
        backupFrequency: "Monthly",
        backupPath: "C:\\Backups\\IT",
        status: "Inactive"
    },
    {
        srNo: "5.",
        departmentName: "QA",
        equipmentName: "Spectrum Analyzer",
        equipmentId: "EID-005",
        equipmentType: "Measurement",
        applicationNameVersion: "App A v1.3",
        assetType: "Instrument",
        systemType: "Standalone",
        assignedTo: "Technician E",
        assetId: "AID-105",
        make: "Make X",
        model: "Model A3",
        serviceTag: "ST-005",
        serialNumber: "SN-005",
        domain: "Domain E",
        hostname: "Host-E",
        numberOfProcessor: 1,
        processor: "Intel i5",
        ram: "8GB",
        sataHdd: "500GB",
        sataSdd: "None",
        sasHdd: "None",
        sasSsd: "None",
        nvmeSsd: "None",
        raid: "None",
        os: "Windows 10",
        ipAddress: "192.168.1.5",
        monitorSize: "24 inches",
        monitorSrNo: "MSN-005",
        noOfUserGroup: 3,
        backupScheduleTime: "02:00 AM",
        backupType: "Incremental",
        backupFrequency: "Weekly",
        backupPath: "C:\\Backups\\QA",
        status: "Active"
    },
    {
        srNo: "6.",
        departmentName: "System Admin",
        equipmentName: "Function Generator",
        equipmentId: "EID-006",
        equipmentType: "Signal",
        applicationNameVersion: "App D v2.1",
        assetType: "Equipment",
        systemType: "Networked",
        assignedTo: "Engineer F",
        assetId: "AID-106",
        make: "Make W",
        model: "Model D1",
        serviceTag: "ST-006",
        serialNumber: "SN-006",
        domain: "Domain F",
        hostname: "Host-F",
        numberOfProcessor: 2,
        processor: "Intel i7",
        ram: "16GB",
        sataHdd: "1TB",
        sataSdd: "256GB",
        sasHdd: "None",
        sasSsd: "None",
        nvmeSsd: "None",
        raid: "RAID 1",
        os: "Linux",
        ipAddress: "192.168.1.6",
        monitorSize: "27 inches",
        monitorSrNo: "MSN-006",
        noOfUserGroup: 4,
        backupScheduleTime: "03:00 AM",
        backupType: "Full",
        backupFrequency: "Daily",
        backupPath: "C:\\Backups\\SystemAdmin",
        status: "Inactive"
    },
    {
        srNo: "7.",
        departmentName: "HR",
        equipmentName: "Data Logger",
        equipmentId: "EID-007",
        equipmentType: "Recording",
        applicationNameVersion: "App B v1.4",
        assetType: "Instrument",
        systemType: "Standalone",
        assignedTo: "Technician G",
        assetId: "AID-107",
        make: "Make Y",
        model: "Model B2",
        serviceTag: "ST-007",
        serialNumber: "SN-007",
        domain: "Domain G",
        hostname: "Host-G",
        numberOfProcessor: 1,
        processor: "Intel i3",
        ram: "4GB",
        sataHdd: "500GB",
        sataSdd: "128GB",
        sasHdd: "None",
        sasSsd: "None",
        nvmeSsd: "None",
        raid: "None",
        os: "Windows 10",
        ipAddress: "192.168.1.7",
        monitorSize: "22 inches",
        monitorSrNo: "MSN-007",
        noOfUserGroup: 2,
        backupScheduleTime: "01:00 AM",
        backupType: "Differential",
        backupFrequency: "Weekly",
        backupPath: "C:\\Backups\\HR",
        status: "Active"
    },
    {
        srNo: "8.",
        departmentName: "Finance",
        equipmentName: "Anemometer",
        equipmentId: "EID-008",
        equipmentType: "Measurement",
        applicationNameVersion: "App A v1.5",
        assetType: "Instrument",
        systemType: "Standalone",
        assignedTo: "Technician H",
        assetId: "AID-108",
        make: "Make X",
        model: "Model A4",
        serviceTag: "ST-008",
        serialNumber: "SN-008",
        domain: "Domain H",
        hostname: "Host-H",
        numberOfProcessor: 1,
        processor: "Intel i5",
        ram: "8GB",
        sataHdd: "500GB",
        sataSdd: "None",
        sasHdd: "None",
        sasSsd: "None",
        nvmeSsd: "None",
        raid: "None",
        os: "Windows 10",
        ipAddress: "192.168.1.8",
        monitorSize: "24 inches",
        monitorSrNo: "MSN-008",
        noOfUserGroup: 5,
        backupScheduleTime: "02:00 AM",
        backupType: "Incremental",
        backupFrequency: "Daily",
        backupPath: "C:\\Backups\\Finance",
        status: "Active"
    },
    {
        srNo: "9.",
        departmentName: "Marketing",
        equipmentName: "LCR Meter",
        equipmentId: "EID-009",
        equipmentType: "Testing",
        applicationNameVersion: "App B v1.6",
        assetType: "Equipment",
        systemType: "Networked",
        assignedTo: "Engineer I",
        assetId: "AID-109",
        make: "Make Y",
        model: "Model B3",
        serviceTag: "ST-009",
        serialNumber: "SN-009",
        domain: "Domain I",
        hostname: "Host-I",
        numberOfProcessor: 2,
        processor: "Intel i7",
        ram: "16GB",
        sataHdd: "1TB",
        sataSdd: "256GB",
        sasHdd: "None",
        sasSsd: "None",
        nvmeSsd: "None",
        raid: "RAID 1",
        os: "Linux",
        ipAddress: "192.168.1.9",
        monitorSize: "27 inches",
        monitorSrNo: "MSN-009",
        noOfUserGroup: 3,
        backupScheduleTime: "03:00 AM",
        backupType: "Full",
        backupFrequency: "Monthly",
        backupPath: "C:\\Backups\\Marketing",
        status: "Inactive"
    },
    {
        srNo: "10.",
        departmentName: "Operations",
        equipmentName: "Temperature Chamber",
        equipmentId: "EID-010",
        equipmentType: "Environmental",
        applicationNameVersion: "App C v2.2",
        assetType: "Equipment",
        systemType: "Networked",
        assignedTo: "Technician J",
        assetId: "AID-110",
        make: "Make Z",
        model: "Model C2",
        serviceTag: "ST-010",
        serialNumber: "SN-010",
        domain: "Domain J",
        hostname: "Host-J",
        numberOfProcessor: 4,
        processor: "AMD Ryzen 5",
        ram: "32GB",
        sataHdd: "2TB",
        sataSdd: "512GB",
        sasHdd: "None",
        sasSsd: "None",
        nvmeSsd: "None",
        raid: "RAID 5",
        os: "Windows Server 2019",
        ipAddress: "192.168.1.10",
        monitorSize: "29 inches",
        monitorSrNo: "MSN-010",
        noOfUserGroup: 4,
        backupScheduleTime: "04:00 AM",
        backupType: "Full",
        backupFrequency: "Weekly",
        backupPath: "C:\\Backups\\Operations",
        status: "Active"
    },
];

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
    <div className="fixed grid grid-cols-3 border-b pb-5 w-[80%]" >
      <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
      GxP Inventory
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
    <div className="mt-16 grid grid-cols-4 justify-center items-center gap-5">
      <div className="fixed w-[30%] mt-16  col-span-1 flex items-center gap-5">
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
        <div className="bg-purple-200 mt-5 rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-purple-700 hover:text-white cursor-pointer text-purple-500 w-[15%] h-[40px] flex justify-center items-center">
        <IoSearchSharp size={25}/>
        </div>
      </div>

        
      </div>
    <div className="overflow-auto">
        <table className="min-w-full border-collapse mt-16">
            <thead className="sticky top-0 bg-white">
                <tr >
                    <th className="text-center">SR.NO.</th>
                    <th className="text-center">DEPARTMENT NAME</th>
                    <th className="text-center">EQUIPMENT/INSTRUMENT NAME	</th>
                    <th className="text-center">EQUIPMENT/INSTRUMENT ID	</th>
                    <th className="text-center">EQUIPMENT/INSTRUMENT TYPE</th>
                    <th className="text-center">APPLICATION NAME & VERSION</th>
                    <th className="text-center">ASSETS TYPE	</th>
                    <th className="text-center">SYSTEM TYPE</th>
                    <th className="text-center">ASSIGNED TO</th>
                    <th className="text-center">ASSETS ID	</th>
                    <th className="text-center">MAKE</th>
                    <th className="text-center">MODEL</th>
                    <th className="text-center">SERVICE TAG</th>
                    <th className="text-center">SERIAL NUMBER</th>
                    <th className="text-center">DOMAIN</th>
                    <th className="text-center">HOSTNAME</th>
                    <th className="text-center">NUMBER OF PROCESSOR</th>
                    <th className="text-center">PROCESSOR</th>
                    <th className="text-center">RAM</th>
                    <th className="text-center">SATA HDD	</th>
                    <th className="text-center">SATA SDD </th>
                    <th className="text-center">SAS HDD</th>
                    <th className="text-center">SAS SSD</th>
                    <th className="text-center">NVME SSD</th>
                    <th className="text-center">RAID</th>
                    <th className="text-center">OS</th>
                    <th className="text-center">IP ADDRESS</th>
                    <th className="text-center">MONITER SIZE</th>
                    <th className="text-center">MONITER SR.NO</th>
                    <th className="text-center">NO OF USER GROUP</th>
                    <th className="text-center">BACKUP SCHEDULE TIME</th>
                    <th className="text-center">BACKUP TYPE</th>
                    <th className="text-center">BACKUP FREQUENCY</th>
                    <th className="text-center">BACKUP PATH</th>
                    <th className="text-center">STATUS</th>
                   
                </tr>
            </thead>
            <tbody>
               
{filteredData.map(( itm, index)=>{
return(
   
     <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.departmentName}</td>
<td className="text-center">{itm.equipmentName}</td>
<td className="text-center">{itm.equipmentId}</td>
<td className="text-center">{itm.equipmentType}</td>
<td className="text-center">{itm.applicationNameVersion}</td>
<td className="text-center">{itm.assetType}</td>
<td className="text-center">{itm.systemType}</td>
<td className="text-center">{itm.assignedTo}</td>
<td className="text-center">{itm.assetId}</td>
<td className="text-center">{itm.make}</td>
<td className="text-center">{itm.model}</td>
<td className="text-center">{itm.serviceTag}</td>
<td className="text-center">{itm.serialNumber}</td>
<td className="text-center">{itm.domain}</td>
<td className="text-center">{itm.hostname}</td>
<td className="text-center">{itm.numberOfProcessor}</td>
<td className="text-center">{itm.processor}</td>
<td className="text-center">{itm.ram}</td>
<td className="text-center">{itm.sataHdd}</td>
<td className="text-center">{itm.sataSdd}</td>
<td className="text-center">{itm.sasHdd}</td>
<td className="text-center">{itm.sasSsd}</td>
<td className="text-center">{itm.nvmeSsd}</td>
<td className="text-center">{itm.raid}</td>
<td className="text-center">{itm.os}</td>
<td className="text-center">{itm.ipAddress}</td>
<td className="text-center">{itm.monitorSize}</td>
<td className="text-center">{itm.monitorSrNo}</td>
<td className="text-center">{itm.noOfUserGroup}</td>
<td className="text-center">{itm.backupScheduleTime}</td>
<td className="text-center">{itm.backupType}</td>
<td className="text-center">{itm.backupFrequency}</td>
<td className="text-center">{itm.backupPath}</td>
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

export default GxpInventory