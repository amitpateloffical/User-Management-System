import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const AssetsInventory = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");

  const data = [
    {
        srNo: "1.",
        assetType: "Instrument",
        assetId: "AID-101",
        make: "Make X",
        model: "Model A1",
        serialNo: "SN-001",
        status: "Active"
    },
    {
        srNo: "2.",
        assetType: "Equipment",
        assetId: "AID-102",
        make: "Make Y",
        model: "Model B1",
        serialNo: "SN-002",
        status: "Inactive"
    },
    {
        srNo: "3.",
        assetType: "Instrument",
        assetId: "AID-103",
        make: "Make X",
        model: "Model A2",
        serialNo: "SN-003",
        status: "Active"
    },
    {
        srNo: "4.",
        assetType: "Equipment",
        assetId: "AID-104",
        make: "Make Z",
        model: "Model C1",
        serialNo: "SN-004",
        status: "Inactive"
    },
    {
        srNo: "5.",
        assetType: "Instrument",
        assetId: "AID-105",
        make: "Make X",
        model: "Model A3",
        serialNo: "SN-005",
        status: "Active"
    },
    {
        srNo: "6.",
        assetType: "Equipment",
        assetId: "AID-106",
        make: "Make W",
        model: "Model D1",
        serialNo: "SN-006",
        status: "Inactive"
    },
    {
        srNo: "7.",
        assetType: "Instrument",
        assetId: "AID-107",
        make: "Make Y",
        model: "Model B2",
        serialNo: "SN-007",
        status: "Active"
    },
    {
        srNo: "8.",
        assetType: "Instrument",
        assetId: "AID-108",
        make: "Make X",
        model: "Model A4",
        serialNo: "SN-008",
        status: "Active"
    },
    {
        srNo: "9.",
        assetType: "Equipment",
        assetId: "AID-109",
        make: "Make Y",
        model: "Model B3",
        serialNo: "SN-009",
        status: "Inactive"
    },
    {
        srNo: "10.",
        assetType: "Equipment",
        assetId: "AID-110",
        make: "Make Z",
        model: "Model C2",
        serialNo: "SN-010",
        status: "Active"
    }
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
    <div className="grid grid-cols-3 border-b pb-5">
      <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
      Assets Inventory
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
          Asset Type
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
                    <th className="text-center">ASSET TYPE</th>
                    <th className="text-center">ASSET ID</th>
                    <th className="text-center">MAKE	</th>
                    <th className="text-center">MODEL</th>
                    <th className="text-center">SERIAL NO.</th>
                    <th className="text-center">STATUS</th>
                   
                </tr>
            </thead>
            <tbody>
               
{filteredData.map(( itm, index)=>{
return(
   
     <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.assetType}</td>
<td className="text-center">{itm.assetId}</td>
<td className="text-center">{itm.make}</td>
<td className="text-center">{itm.model}</td>
<td className="text-center">{itm.serialNo}</td>
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

export default AssetsInventory