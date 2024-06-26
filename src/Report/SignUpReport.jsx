import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const SignUpReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const data = [
    {
        srNo: "1.",
        report: "Quality Control",
        attachment: "Attachment 001",
        name: "John Doe",
        empCode: "E001",
        worklineID: "WL-001",
        accessRole1: "Admin",
        designation: "Software Engineer",
        emailAddress: "john.doe@example.com",
        reportingManager: "Jane Smith",
        requestedOn: "2024-05-01"
    },
    {
        srNo: "2.",
        report: "Testing Phase 1",
        attachment: "Attachment 002",
        name: "Alice Johnson",
        empCode: "E002",
        worklineID: "WL-002",
        accessRole1: "Manager",
        designation: "HR Manager",
        emailAddress: "alice.johnson@example.com",
        reportingManager: "Robert Brown",
        requestedOn: "2024-05-02"
    },
    {
        srNo: "3.",
        report: "User Experience Feedback",
        attachment: "Attachment 003",
        name: "Bob Williams",
        empCode: "E003",
        worklineID: "WL-003",
        accessRole1: "User",
        designation: "Accountant",
        emailAddress: "bob.williams@example.com",
        reportingManager: "Susan Davis",
        requestedOn: "2024-05-03"
    },
    {
        srNo: "4.",
        report: "IT Maintenance",
        attachment: "Attachment 004",
        name: "Charlie Brown",
        empCode: "E004",
        worklineID: "WL-004",
        accessRole1: "User",
        designation: "Marketing Executive",
        emailAddress: "charlie.brown@example.com",
        reportingManager: "David Wilson",
        requestedOn: "2024-05-04"
    },
    {
        srNo: "5.",
        report: "Quality Assurance",
        attachment: "Attachment 005",
        name: "Eve Black",
        empCode: "E005",
        worklineID: "WL-005",
        accessRole1: "Manager",
        designation: "Sales Manager",
        emailAddress: "eve.black@example.com",
        reportingManager: "Michael Miller",
        requestedOn: "2024-05-05"
    },
    {
        srNo: "6.",
        report: "System Administration",
        attachment: "Attachment 006",
        name: "Frank White",
        empCode: "E006",
        worklineID: "WL-006",
        accessRole1: "Manager",
        designation: "Operations Manager",
        emailAddress: "frank.white@example.com",
        reportingManager: "Linda Anderson",
        requestedOn: "2024-05-06"
    },
    {
        srNo: "7.",
        report: "HR Policies Update",
        attachment: "Attachment 007",
        name: "Grace Green",
        empCode: "E007",
        worklineID: "WL-007",
        accessRole1: "User",
        designation: "Network Engineer",
        emailAddress: "grace.green@example.com",
        reportingManager: "John Doe",
        requestedOn: "2024-05-07"
    },
    {
        srNo: "8.",
        report: "Support Ticket Analysis",
        attachment: "Attachment 008",
        name: "Henry Gold",
        empCode: "E008",
        worklineID: "WL-008",
        accessRole1: "User",
        designation: "Support Specialist",
        emailAddress: "henry.gold@example.com",
        reportingManager: "Karen Scott",
        requestedOn: "2024-05-08"
    },
    {
        srNo: "9.",
        report: "Product Development Review",
        attachment: "Attachment 009",
        name: "Ivy Blue",
        empCode: "E009",
        worklineID: "WL-009",
        accessRole1: "User",
        designation: "Developer",
        emailAddress: "ivy.blue@example.com",
        reportingManager: "John Doe",
        requestedOn: "2024-05-09"
    },
    {
        srNo: "10.",
        report: "Design Presentation",
        attachment: "Attachment 010",
        name: "Jack Brown",
        empCode: "E010",
        worklineID: "WL-010",
        accessRole1: "User",
        designation: "Designer",
        emailAddress: "jack.brown@example.com",
        reportingManager: "Alice Johnson",
        requestedOn: "2024-05-10"
    }
];
const filteredData = data.filter(item => {
  return (

    (searchText === "" || item.name.toLowerCase().includes(searchText.toLowerCase()))
  );
});
return (

    <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? 'ml-0 md:ml-64' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7] md:col-span-2">Sign-Up Report</div>
        <div className="flex justify-end gap-4 md:gap-7 col-span-1 w-full mt-4 md:mt-0">
          <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-1/6 md:w-[10%] h-[40px] flex justify-center items-center">
            <FiRefreshCw />
          </div>
          <div className="bg-[#d3eafd] rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-[#2196f3] hover:text-white cursor-pointer text-[#2196f3] w-1/6 md:w-[10%] h-[40px] flex justify-center items-center">
            <FaFilePdf />
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-16 grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-5">
        <div className="col-span-2 md:col-span-1 flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="search" className="font-bold">Search</label>
            <input
              type="text"
              className="border border-black rounded-md py-2"
              placeholder="Enter Search Value"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>
          <div className="bg-purple-200 mt-5 md:mt-0 rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-purple-700 hover:text-white cursor-pointer text-purple-500 w-full md:w-[15%] h-[40px] flex justify-center items-center">
            <IoSearchSharp size={25}/>
          </div>
        </div>
      </div>
      <div className="overflow-auto mt-6 md:mt-16">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th className="text-center px-4 md:px-6 py-3">SR.NO.</th>
              <th className="text-center px-4 md:px-6 py-3">REPORT</th>
              <th className="text-center px-4 md:px-6 py-3">ATTACHMENT</th>
              <th className="text-center px-4 md:px-6 py-3">NAME</th>
              <th className="text-center px-4 md:px-6 py-3">EMP CODE</th>
              <th className="text-center px-4 md:px-6 py-3">WORKLINE ID</th>
              <th className="text-center px-4 md:px-6 py-3">ACCESS ROLE</th>
              <th className="text-center px-4 md:px-6 py-3">DESIGNATION</th>
              <th className="text-center px-4 md:px-6 py-3">EMAIL ADDRESS</th>
              <th className="text-center px-4 md:px-6 py-3">REPORTING MANAGER</th>
              <th className="text-center px-4 md:px-6 py-3">REQUESTED ON</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((itm, index) => (
              <tr key={index}>
                <td className="text-center px-4 md:px-6 py-4">{itm.srNo}</td>
                <td className="text-center px-4 md:px-6 py-4">{itm.report}</td>
                <td className="text-center px-4 md:px-6 py-4"><input type="file" /></td>
                <td className="text-center px-4 md:px-6 py-4">{itm.name}</td>
                <td className="text-center px-4 md:px-6 py-4">{itm.empCode}</td>
                <td className="text-center px-4 md:px-6 py-4">{itm.worklineID}</td>
                <td className="text-center px-4 md:px-6 py-4">{itm.accessRole1}</td>
                <td className="text-center px-4 md:px-6 py-4">{itm.designation}</td>
                <td className="text-center px-4 md:px-6 py-4">{itm.emailAddress}</td>
                <td className="text-center px-4 md:px-6 py-4">{itm.reportingManager}</td>
                <td className="text-center px-4 md:px-6 py-4">{itm.requestedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
)
}

export default SignUpReport