import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";

const ActiveUserList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const[data,setData] =useState([])

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
    
    
    <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? 'ml-64' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
          Active Users List
        </div>
        <div className="flex justify-end gap-7 col-span-1">
          <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-10 h-10 flex justify-center items-center">
            <FiRefreshCw />
          </div>
          <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-10 h-10 flex justify-center items-center" onClick={downloadPDF}>
            <FaFilePdf />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        
        <div className="col-span-3 flex flex-wrap gap-5">
          <div className="flex flex-col w-full md:w-1/5">
            <label htmlFor="status" className="font-bold">
              Status
            </label>
            <select className="border border-black rounded-md py-2" onChange={handleStatusFilterChange}>
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          
          <div className="flex flex-col w-full md:w-1/5">
            <label htmlFor="appNameVersion" className="font-bold">
              Application Name & Version
            </label>
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
            <label htmlFor="user" className="font-bold">
              User
            </label>
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
            <label htmlFor="equipmentId" className="font-bold">
              Equipment ID
            </label>
            <select className="border border-black rounded-md py-2">
              <option>---select---</option>
              <option>HMI</option>
              <option>SCADA</option>
              <option>IPC</option>
              <option>COMPUTER SYSTEM</option>
              <option>OTHER</option>
            </select>
          </div>
          
          <div className="bg-purple-200 w-[5%]   mt-5 rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-purple-700 hover:text-white cursor-pointer text-purple-500  h-[40px] flex justify-center items-center">
            <IoSearchSharp size={25} />
          </div>
          <ImportExportButtons
        data={data}
        setData={setData}
        fileName="Designation_Master"
        sheetNumbers={9} 
      />
        </div>
      </div>
      
      <div id="active-user-list" className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-center px-6 py-3">SR.NO.</th>
              <th className="text-center px-6 py-3">EMP CODE</th>
              <th className="text-center px-6 py-3">EMPLOYEE NAME</th>
              <th className="text-center px-6 py-3">EQUIPMENT/INSTRUMENT ID</th>
              <th className="text-center px-6 py-3">EQUIPMENT/INSTRUMENT NAME</th>
              <th className="text-center px-6 py-3">ASSETS ID</th>
              <th className="text-center px-6 py-3">ASSETS NAME</th>
              <th className="text-center px-6 py-3">APPLICATION</th>
              <th className="text-center px-6 py-3">APPLICATION VERSION</th>
              <th className="text-center px-6 py-3">ROLE</th>
              <th className="text-center px-6 py-3">DEPARTMENT</th>
              <th className="text-center px-6 py-3">CREATED BY</th>
              <th className="text-center px-6 py-3">CREATED DATE</th>
              <th className="text-center px-6 py-3">STATUS</th>
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
                <td className="text-center px-6 py-4">{itm["SR.NO."]}</td>
                <td className="text-center px-6 py-4">{itm["EMP CODE"]}</td>
                <td className="text-center px-6 py-4">{itm["EMPLOYEE NAME"]}</td>
                <td className="text-center px-6 py-4">{itm["EQUIPMENT/INSTRUMENT ID"]}</td>
                <td className="text-center px-6 py-4">{itm["EQUIPMENT/INSTRUMENT NAME"]}</td>
                <td className="text-center px-6 py-4">{itm["ASSETS ID"]}</td>
                <td className="text-center px-6 py-4">{itm["ASSETS NAME"]}</td>
                <td className="text-center px-6 py-4">{itm["APPLICATION"]}</td>
                <td className="text-center px-6 py-4">{itm["APPLICATION VERSION"]}</td>
                <td className="text-center px-6 py-4">{itm["ROLE"]}</td>
                <td className="text-center px-6 py-4">{itm["DEPARTMENT"]}</td>
                <td className="text-center px-6 py-4">{itm["CREATED BY"]}</td>
                <td className="text-center px-6 py-4">{itm["CREATED DATE"]}</td>
                <td className="text-center px-6 py-4">{itm["STATUS"]}</td>
                {/* <td className="text-center px-6 py-4">
                  <div className="text-center flex justify-center items-center">
                    <div className={`rounded-full px-2 ${itm.status === 'Active' ? 'bg-green-300 text-green-700' : 'bg-red-300 text-red-700'}`}>
                      {itm.status}
                    </div>
                  </div>
                </td> */}
              </tr>
            )))}
          </tbody>
        </table>
      </div>
    </div>
</div>
)
}

export default ActiveUserList