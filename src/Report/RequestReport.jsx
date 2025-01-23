import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";


const RequestReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selfFilter,setSelfFilter]=useState("All")
  const [data,setData] =useState([])


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
          <ImportExportButtons
        data={data}
        setData={setData}
        fileName="RequestReport"
        sheetNumbers={10}
      />
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
                <td className="text-center px-6 py-4">{itm["SR.NO."]}</td>
                <td className="text-center px-6 py-4">{itm["REPORT"]}</td>
                <td className="text-center px-6 py-4">{itm["REQUEST NO"]}</td>
                <td className="text-center px-6 py-4">{itm["DEPARTMENT"]}</td>
                <td className="text-center px-6 py-4">{itm["REQUEST TYPE"]}</td>
                <td className="text-center px-6 py-4">{itm["EQUIPMENT ID"]}</td>
                <td className="text-center px-6 py-4">{itm["ASSET ID"]}</td>
                <td className="text-center px-6 py-4">{itm["APPLICATION NAME & VERSION"]}</td>
                <td className="text-center px-6 py-4">{itm["REQUESTED ROLE"]}</td>
                <td className="text-center px-6 py-4">{itm["REQUEST FOR"]}</td>
                <td className="text-center px-6 py-4">{itm["SELF / EXTERNAL"]}</td>
                <td className="text-center px-6 py-4">{itm["REMARK"]}</td>
                <td className="text-center px-6 py-4">{itm["INITIATED BY"]}</td>
                <td className="text-center px-6 py-4">{itm["INITIATED ON"]}</td>
                <td className="text-center px-6 py-4">{itm["STATUS"]}</td>
                {/* <td className="text-center px-6 py-4">
                  <div className="flex justify-center items-center">
                    <div className={`rounded-full px-2 ${itm.status === 'Active' ? 'bg-green-300 text-green-700' : 'bg-red-300 text-red-700'}`}>
                      {itm.status}
                    </div>
                  </div>
                </td> */}
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