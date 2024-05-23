

import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const AuditTrail = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const data = [
    {
        srNo: "1.",
        dateTime: "2024-05-21 08:30:00",
        actionFrom: "System",
        actionRowName: "Department",
        oldValue: "IT",
        newValue: "HR",
        employeeName: "John Doe",
        remark: "Updated department from IT to HR"
    },
    {
        srNo: "2.",
        dateTime: "2024-05-21 10:45:00",
        actionFrom: "User",
        actionRowName: "Designation",
        oldValue: "Software Engineer",
        newValue: "Senior Software Engineer",
        employeeName: "Alice Johnson",
        remark: "Promoted to Senior Software Engineer"
    },
    {
        srNo: "3.",
        dateTime: "2024-05-21 14:20:00",
        actionFrom: "Admin",
        actionRowName: "Status",
        oldValue: "Active",
        newValue: "Inactive",
        employeeName: "Bob Williams",
        remark: "Deactivated account"
    },
    {
        srNo: "4.",
        dateTime: "2024-05-22 09:15:00",
        actionFrom: "System",
        actionRowName: "Department",
        oldValue: "Sales",
        newValue: "Marketing",
        employeeName: "Charlie Brown",
        remark: "Transferred to Marketing department"
    },
    {
        srNo: "5.",
        dateTime: "2024-05-22 11:30:00",
        actionFrom: "User",
        actionRowName: "Designation",
        oldValue: "Sales Manager",
        newValue: "Sales Director",
        employeeName: "Eve Black",
        remark: "Promoted to Sales Director"
    },
    {
        srNo: "6.",
        dateTime: "2024-05-23 09:30:00",
        actionFrom: "System",
        actionRowName: "Department",
        oldValue: "HR",
        newValue: "Finance",
        employeeName: "Frank White",
        remark: "Transferred to Finance department"
    },
    {
        srNo: "7.",
        dateTime: "2024-05-24 14:45:00",
        actionFrom: "Admin",
        actionRowName: "Status",
        oldValue: "Active",
        newValue: "Inactive",
        employeeName: "Grace Green",
        remark: "Deactivated account"
    },
    {
        srNo: "8.",
        dateTime: "2024-05-25 11:20:00",
        actionFrom: "User",
        actionRowName: "Designation",
        oldValue: "Network Engineer",
        newValue: "Senior Network Engineer",
        employeeName: "Henry Gold",
        remark: "Promoted to Senior Network Engineer"
    },
    {
        srNo: "9.",
        dateTime: "2024-05-26 08:00:00",
        actionFrom: "System",
        actionRowName: "Department",
        oldValue: "Marketing",
        newValue: "IT",
        employeeName: "Ivy Blue",
        remark: "Transferred to IT department"
    },
    {
        srNo: "10.",
        dateTime: "2024-05-27 10:10:00",
        actionFrom: "Admin",
        actionRowName: "Status",
        oldValue: "Inactive",
        newValue: "Active",
        employeeName: "Jack Brown",
        remark: "Activated account"
    }
];

data.map(entry => console.log(entry.employeeName));

    const handleStatusFilterChange = (event) => {
      setStatusFilter(event.target.value);
    };

    
    const filteredData = data.filter(item => {
      return (
        (statusFilter === "All" || 
        (statusFilter === "System" && item.actionFrom === "System") || 
        (statusFilter === "User" && item.actionFrom === "User")||
        (statusFilter === "Admin" && item.actionFrom === "Admin"))
        &&
        (searchText === "" || item.employeeName.toLowerCase().includes(searchText.toLowerCase()))
      );
    });
return (
  <div>
    
    
    <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? "ml-64" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7] md:col-span-2">
          Audit Trail
        </div>
        <div className="flex justify-end gap-3 md:gap-7 col-span-1 w-full mt-5 md:mt-0">
          <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40px] h-[40px] flex justify-center items-center">
            <FiRefreshCw />
          </div>
          <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-[40px] h-[40px] flex justify-center items-center">
            <FaFilePdf />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-3 flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="actionFilter" className="font-bold">
              Action
            </label>
            <select id="actionFilter" className="border border-black rounded-md py-2" onChange={handleStatusFilterChange}>
              <option value="All">All</option>
              <option value="System">System</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="search" className="font-bold">
              Search
            </label>
            <input
              id="search"
              type="text"
              className="border border-black rounded-md py-2"
              placeholder="Search By Name"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="fromDate" className="font-bold">
              From Date
            </label>
            <input
              id="fromDate"
              type="date"
              className="border border-black rounded-md py-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="toDate" className="font-bold">
              To Date
            </label>
            <input
              id="toDate"
              type="date"
              className="border border-black rounded-md py-2"
            />
          </div>
          <div className="bg-purple-200 mt-5 lg:mt-0 lg:ml-5 rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-purple-700 hover:text-white cursor-pointer text-purple-500 w-full lg:w-auto h-[40px] flex justify-center items-center">
            <IoSearchSharp size={25} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-center">SR.NO.</th>
              <th className="text-center">DATE & TIME</th>
              <th className="text-center">ACTION FROM</th>
              <th className="text-center">ACTION ROW NAME</th>
              <th className="text-center">OLD VALUE</th>
              <th className="text-center">NEW VALUE</th>
              <th className="text-center">EMPLOYEE NAME</th>
              <th className="text-center">REMARK</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((itm, index) => (
              <tr key={index}>
                <td className="text-center">{itm.srNo}</td>
                <td className="text-center">{itm.dateTime}</td>
                <td className="text-center">{itm.actionFrom}</td>
                <td className="text-center">{itm.actionRowName}</td>
                <td className="text-center">{itm.oldValue}</td>
                <td className="text-center">{itm.newValue}</td>
                <td className="text-center">{itm.employeeName}</td>
                <td className="text-center">{itm.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
</div>
)
}

export default AuditTrail