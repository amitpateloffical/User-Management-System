import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
const UserList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const data = [
    {
        srNo: "1.",
        empCode: "E001",
        name: "John Doe",
        department: "IT",
        designation: "Software Engineer",
        accessRole: "Admin",
        emailAddress: "john.doe@example.com",
        contactNumber: "9876543210",
        reportingManager: "Jane Smith",
        status: "Active"
    },
    {
        srNo: "2.",
        empCode: "E002",
        name: "Alice Johnson",
        department: "HR",
        designation: "HR Manager",
        accessRole: "Manager",
        emailAddress: "alice.johnson@example.com",
        contactNumber: "8765432109",
        reportingManager: "Robert Brown",
        status: "Active"
    },
    {
        srNo: "3.",
        empCode: "E003",
        name: "Bob Williams",
        department: "Finance",
        designation: "Accountant",
        accessRole: "User",
        emailAddress: "bob.williams@example.com",
        contactNumber: "7654321098",
        reportingManager: "Susan Davis",
        status: "Inactive"
    },
    {
        srNo: "4.",
        empCode: "E004",
        name: "Charlie Brown",
        department: "Marketing",
        designation: "Marketing Executive",
        accessRole: "User",
        emailAddress: "charlie.brown@example.com",
        contactNumber: "6543210987",
        reportingManager: "David Wilson",
        status: "Active"
    },
    {
        srNo: "5.",
        empCode: "E005",
        name: "Eve Black",
        department: "Sales",
        designation: "Sales Manager",
        accessRole: "Manager",
        emailAddress: "eve.black@example.com",
        contactNumber: "5432109876",
        reportingManager: "Michael Miller",
        status: "Inactive"
    },
    {
        srNo: "6.",
        empCode: "E006",
        name: "Frank White",
        department: "Operations",
        designation: "Operations Manager",
        accessRole: "Manager",
        emailAddress: "frank.white@example.com",
        contactNumber: "4321098765",
        reportingManager: "Linda Anderson",
        status: "Active"
    },
    {
        srNo: "7.",
        empCode: "E007",
        name: "Grace Green",
        department: "IT",
        designation: "Network Engineer",
        accessRole: "User",
        emailAddress: "grace.green@example.com",
        contactNumber: "3210987654",
        reportingManager: "John Doe",
        status: "Active"
    },
    {
        srNo: "8.",
        empCode: "E008",
        name: "Henry Gold",
        department: "Support",
        designation: "Support Specialist",
        accessRole: "User",
        emailAddress: "henry.gold@example.com",
        contactNumber: "2109876543",
        reportingManager: "Karen Scott",
        status: "Inactive"
    },
    {
        srNo: "9.",
        empCode: "E009",
        name: "Ivy Blue",
        department: "Development",
        designation: "Developer",
        accessRole: "User",
        emailAddress: "ivy.blue@example.com",
        contactNumber: "1098765432",
        reportingManager: "John Doe",
        status: "Active"
    },
    {
        srNo: "10.",
        empCode: "E010",
        name: "Jack Brown",
        department: "Design",
        designation: "Designer",
        accessRole: "User",
        emailAddress: "jack.brown@example.com",
        contactNumber: "9876543211",
        reportingManager: "Alice Johnson",
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
        (searchText === "" || item.name.toLowerCase().includes(searchText.toLowerCase()))
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
                placeholder="Enter Search Value"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
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
               
{filteredData.map(( itm, index)=>{
return(
   
     <tr key={index}>
<td className="text-center">{itm.srNo}</td>
<td className="text-center">{itm.empCode}</td>
<td className="text-center">{itm.name}</td>
<td className="text-center">{itm.department}</td>
<td className="text-center">{itm.designation}</td>
<td className="text-center">{itm.accessRole}</td>
<td className="text-center">{itm.emailAddress}</td>
<td className="text-center">{itm.contactNumber}</td>
<td className="text-center">{itm.reportingManager}</td>
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

export default UserList