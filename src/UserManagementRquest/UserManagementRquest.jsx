import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";


const UserManagementRquest = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState([]);


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
        <ImportExportButtons
        data={data}
        setData={setData}
        fileName="UserManagement"
        sheetNumbers={8}
      />
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
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["ACTION"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["REQUEST NO"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["REQUEST TYPE"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["DEPARTMENT"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["EQUIPMENT ID"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["ASSET ID"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["APPLICATION NAME & VERSION"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["REQUESTED ROLE"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["REQUEST FOR"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["SELF / EXTERNAL"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["REMARK"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["INITIATED ON"]}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">{itm["STATUS"]}</td>
                {/* <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-center flex justify-center items-center">
                    <div className={`rounded-full px-2 ${itm.status === 'Active' ? 'bg-green-300 text-green-700' : 'bg-red-300 text-red-700'}`}>
                      {itm.status}
                    </div>
                  </div>
                </td> */}
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
            )))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    );
}

export default UserManagementRquest