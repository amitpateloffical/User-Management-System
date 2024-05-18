import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import PopUp from "../PopUp/PopUp";

const AssetsMaster = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState("All");
    const [assetTypeFilter, setAssetTypeFilter] = useState("All");
    const [searchText, setSearchText] = useState("");
    const data = [
      {
        srNo: "1.",
        assetType: "Server",
        assetID: "ASSET001",
        make: "Dell",
        model: "PowerEdge R740",
        serialNo: "SN001",
        status :"Active"
      },
      {
        srNo: "2.",
        assetType: "Desktop",
        assetID: "ASSET002",
        make: "HP",
        model: "EliteDesk 800 G6",
        serialNo: "SN002",
        status :"Inactive"
      },
      {
        srNo: "3.",
        assetType: "IPS",
        assetID: "ASSET003",
        make: "Advantech",
        model: "UNO-2372G-J0A1E",
        serialNo: "SN003",
        status :"Active"
      },
      {
        srNo: "4.",
        assetType: "Server",
        assetID: "ASSET004",
        make: "IBM",
        model: "System x3650 M5",
        serialNo: "SN004",
        status :"Active"
      },
      {
        srNo: "5.",
        assetType: "Desktop",
        assetID: "ASSET005",
        make: "Lenovo",
        model: "ThinkCentre M720",
        serialNo: "SN005",
        status :"Inactive"
      },
      {
        srNo: "6.",
        assetType: "IPS",
        assetID: "ASSET006",
        make: "Siemens",
        model: "Simatic IPS127E",
        serialNo: "SN006",
        status :"Active"
      },
      {
        srNo: "7.",
        assetType: "Server",
        assetID: "ASSET007",
        make: "Cisco",
        model: "UCS C240 M5",
        serialNo: "SN007",
        status :"Inactive"
      },
      {
        srNo: "8.",
        assetType: "Desktop",
        assetID: "ASSET008",
        make: "Apple",
        model: "iMac Pro",
        serialNo: "SN008",
        status :"Inactive"
      },
      {
        srNo: "9.",
        assetType: "IPS",
        assetID: "ASSET009",
        make: "Rockwell",
        model: "1756-EN2TR",
        serialNo: "SN009",
        status :"Active"
      },
      {
        srNo: "10.",
        assetType: "Server",
        assetID: "ASSET010",
        make: "Supermicro",
        model: "SYS-5019S-M",
        serialNo: "SN010",
        status :"Inactive"
      }
    ]

    const togglePopup = () => {
      setPopupOpen(!popupOpen);
    };
    const handleStatusFilterChange = (event) => {
      setStatusFilter(event.target.value);
    };
    
    const handleAssetTypeFilterChange = (event) => {
      setAssetTypeFilter(event.target.value);
    };

  const handleSearchTextChange = (event) => {
      setSearchText(event.target.value);
  };

  const filteredData = data.filter(item => {
    return (
      (statusFilter === "All" || 
      (statusFilter === "Active" && item.status === "Active") || 
      (statusFilter === "Inactive" && item.status === "Inactive"))&&
      ((assetTypeFilter === "All") || 
    (assetTypeFilter === "Server" && item.assetType === "Server") || 
    (assetTypeFilter === "Desktop" && item.assetType === "Desktop") || 
    (assetTypeFilter === "IPS" && item.assetType === "IPS")) &&
      (searchText === "" || item.assetID.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  return (
    <div>
      
      
    <div
      className={`content-with-fixed-header  px-4 flex flex-col gap-10 ${
        sidebarOpen ? "ml-64" : ""
      } content-with-fixed-header  px-4 flex flex-col gap-10`}
    >
      <div className="grid grid-cols-2 border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7]">
        Assets Master
        </div>
        <div className="flex justify-center items-center gap-5">
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
            <select className="border border-black rounded-md  py-2 " onChange={handleAssetTypeFilterChange}>
              <option value="All">All</option>
              <option value="Server">Server</option>
              <option value="Desktop">Desktop</option>
              <option value="IPS">IPS</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-bold">
              Search
            </label>
            <input
              type="text"
              className="border border-black rounded-md pr-24 py-2 "
              placeholder="Search Assets By Name"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>

          <div className="bg-[#d3eafd] text-[#2196f3] w-[10%] h-[40px] flex justify-center items-center" onClick={togglePopup}>
            <MdAddBox />
          </div>
        </div>
      </div>
      <div>
          <table>
              <thead>
                  <tr >
                      <th className="text-center">SR.NO.</th>
                      <th className="text-center">ASSET TYPE</th>
                      <th className="text-center">ASSET ID	</th>
                      <th className="text-center">MAKE</th>
                      <th className="text-center">MODEL</th>
                      <th className="text-center">SERIAL NO.</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-center">ACTION</th>
                  </tr>
              </thead>
              <tbody>
                
{filteredData.map((itm, index) => (
                                <tr key={index}>
                                   <td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.assetType}</td>
<td className="text-center">{itm.assetID}</td>
<td className="text-center">{itm.make}</td>
<td className="text-center">{itm.model}</td>
<td className="text-center">{itm.serialNo}</td>
<td > <div className="text-center flex justify-center items-center"><div className="bg-green-300 text-green-700 rounded-full text-center w-[70px]">{itm.status}</div></div> </td>
<td > <div className="text-center flex justify-center gap-3 items-center"><div className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer"><FaRegEdit /></div> <div className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer"><IoBan /></div></div></td>
                                </tr>
                            ))}
                  
              </tbody>
          </table>
      </div>
    </div>
    <PopUp
        heading="Asset Master"
        buttonText="Submit"
        inputs={[
          { label: 'Asset Type', type:"text" },
          { label: 'Assets Id', type:"text" },
          { label: 'Make', type:"text" },
          { label: 'Modal', type:"text" },
          { label: 'Serial Number', type:"text" },
          { label: 'Assign To', type:"text" },
          { label: 'Purchased ON', type:"date" },
        ]}
        open={popupOpen}
        onClose={togglePopup}
      />
  </div>
  )
}

export default AssetsMaster