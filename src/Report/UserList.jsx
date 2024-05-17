import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
const UserList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const data = [
    {
        srNo : "1.",
        department:"QC"
    },
    {
        srNo : "2.",
        department:"Test-1"
    },
    {
        srNo : "3.",
        department:"User"
    },
    {
        srNo : "4.",
        department:"IT"
    },
    {
        srNo : "5.",
        department:"QA"
    },
    {
        srNo : "6.",
        department:"System Admin"
    },
    {
        srNo : "7.",
        department:"HR"
    },
  ]
return (
  <div>
    
    
  <div
    className={`content-with-fixed-header  px-4 flex flex-col gap-10 ${
      sidebarOpen ? "ml-64" : ""
    } content-with-fixed-header  px-4 flex flex-col gap-10 `}
  >
    <div className="grid grid-cols-3 border-b pb-5">
      <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
      User List
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
      <div className="col-span-2 flex items-center gap-5">
      <div className="flex flex-col w-full">
          <label htmlFor="" className="font-bold">
            Status
          </label>
          <select className="border border-black rounded-md  py-2 ">
            <option>---select---</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
              <label htmlFor="" className="font-bold">
                Search
              </label>
              <input
                type="text"
                className="border border-black rounded-md pr-24 py-2 "
                placeholder="Enter Search Value"
              />
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
                    <th className="text-center">EMP CODE</th>
                    <th className="text-center">NAME	</th>
                    <th className="text-center">DEPARTMENT	</th>
                    <th className="text-center">DESIGNATION</th>
                    <th className="text-center">ACCESS ROLE</th>
                    <th className="text-center">EMAIL ADDRESS</th>
                    <th className="text-center">CONTACT NUMBER</th>
                    <th className="text-center">REPORTING MANAGER</th>
                    <th className="text-center">STATUS</th>
                </tr>
            </thead>
            <tbody>
               
{data.map(( itm, index)=>{
return(
   
     <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.department}</td>
<td > <div className="text-center flex justify-center items-center"><div className="bg-green-300 text-green-700 rounded-full text-center w-[70px]">Active</div></div> </td>
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

export default UserList