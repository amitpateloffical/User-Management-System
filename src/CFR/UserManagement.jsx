import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";

const UserManagement = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
    const data = [
      {
          srNo: "1.",
          empCode: "E001",
          worklineID: "WL-001",
          userRole: "Admin",
          name: "John Doe",
          emailAddress: "john.doe@example.com",
          contact: "9876543210",
          department: "IT",
          designation: "Software Engineer",
          status: "Active"
      },
      {
          srNo: "2.",
          empCode: "E002",
          worklineID: "WL-002",
          userRole: "Manager",
          name: "Alice Johnson",
          emailAddress: "alice.johnson@example.com",
          contact: "8765432109",
          department: "HR",
          designation: "HR Manager",
          status: "Active"
      },
      {
          srNo: "3.",
          empCode: "E003",
          worklineID: "WL-003",
          userRole: "User",
          name: "Bob Williams",
          emailAddress: "bob.williams@example.com",
          contact: "7654321098",
          department: "Finance",
          designation: "Accountant",
          status: "Inactive"
      },
      {
          srNo: "4.",
          empCode: "E004",
          worklineID: "WL-004",
          userRole: "User",
          name: "Charlie Brown",
          emailAddress: "charlie.brown@example.com",
          contact: "6543210987",
          department: "Marketing",
          designation: "Marketing Executive",
          status: "Active"
      },
      {
          srNo: "5.",
          empCode: "E005",
          worklineID: "WL-005",
          userRole: "Manager",
          name: "Eve Black",
          emailAddress: "eve.black@example.com",
          contact: "5432109876",
          department: "Sales",
          designation: "Sales Manager",
          status: "Inactive"
      },
      {
          srNo: "6.",
          empCode: "E006",
          worklineID: "WL-006",
          userRole: "Manager",
          name: "Frank White",
          emailAddress: "frank.white@example.com",
          contact: "4321098765",
          department: "Operations",
          designation: "Operations Manager",
          status: "Active"
      },
      {
          srNo: "7.",
          empCode: "E007",
          worklineID: "WL-007",
          userRole: "User",
          name: "Grace Green",
          emailAddress: "grace.green@example.com",
          contact: "3210987654",
          department: "IT",
          designation: "Network Engineer",
          status: "Active"
      },
      {
          srNo: "8.",
          empCode: "E008",
          worklineID: "WL-008",
          userRole: "User",
          name: "Henry Gold",
          emailAddress: "henry.gold@example.com",
          contact: "2109876543",
          department: "Support",
          designation: "Support Specialist",
          status: "Inactive"
      },
      {
          srNo: "9.",
          empCode: "E009",
          worklineID: "WL-009",
          userRole: "User",
          name: "Ivy Blue",
          emailAddress: "ivy.blue@example.com",
          contact: "1098765432",
          department: "Development",
          designation: "Developer",
          status: "Active"
      },
      {
          srNo: "10.",
          empCode: "E010",
          worklineID: "WL-010",
          userRole: "User",
          name: "Jack Brown",
          emailAddress: "jack.brown@example.com",
          contact: "9876543211",
          department: "Design",
          designation: "Designer",
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
      &&
      (searchText === "" || item.empCode.toLowerCase().includes(searchText.toLowerCase()))
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
        <div className="text-3xl font-semibold text-[#673ab7] ">
        User Management
        </div>
        <div className=" justify-center items-center gap-5">
        <div className="flex gap-5">
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
              Search
            </label>
            <input
              type="text"
              className="border border-black rounded-md pr-24 py-2 "
              placeholder="Search"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>
        </div>

          
        </div>
      </div>
      
      <div>
          <table>
              <thead>
                  <tr >
                      <th className="text-center">SR.NO.</th>
                      <th className="text-center">EMP CODE</th>
                      <th className="text-center">WORKLINE ID	</th>
                      <th className="text-center">USER ROLE</th>
                      <th className="text-center">NAME</th>
                      <th className="text-center">EMAIL ADDRESS</th>
                      <th className="text-center">CONTACT</th>
                      <th className="text-center">DEPARTMENT</th>
                      <th className="text-center">DESIGNATION</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-center">ACTION</th>
                  </tr>
              </thead>
              <tbody>
                 
{filteredData.map(( itm, index)=>{
  return(
     
       <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.empCode}</td>
<td className="text-center">{itm.worklineID}</td>
<td className="text-center">{itm.userRole}</td>
<td className="text-center">{itm.name}</td>
<td className="text-center">{itm.emailAddress}</td>
<td className="text-center">{itm.contact}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.designation}</td>
<td > <div className="text-center flex justify-center items-center"><div className="bg-green-300 text-green-700 rounded-full text-center w-[70px]">{itm.status}</div></div> </td>
<td > <div className="text-center flex justify-center gap-3 items-center"><div className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer"><FaRegEdit /></div> <div className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer"><IoBan /></div></div></td>
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

export default UserManagement