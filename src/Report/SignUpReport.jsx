import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";

const SignUpReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([
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
      requestedOn: "2024-05-01",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    srNo: "",
    report: "",
    attachment: "",
    name: "",
    empCode: "",
    worklineID: "",
    accessRole1: "",
    designation: "",
    emailAddress: "",
    reportingManager: "",
    requestedOn: "",
  });

  const handleAdd = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    const newData = {
      ...formData,
      srNo: `${data.length + 1}.`,
    };
    setData([...data, newData]);
    setFormData({
      srNo: "",
      report: "",
      attachment: "",
      name: "",
      empCode: "",
      worklineID: "",
      accessRole1: "",
      designation: "",
      emailAddress: "",
      reportingManager: "",
      requestedOn: "",
    });
    setShowModal(false);
  };

  const filteredData = data.filter((item) => {
    return (
      searchText === "" || item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div
      className={`content-with-fixed-header px-4 flex flex-col gap-10 ${
        sidebarOpen ? "ml-0 md:ml-64" : ""
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7] md:col-span-2">
          Sign-Up Report
        </div>
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
            <label htmlFor="search" className="font-bold">
              Search
            </label>
            <input
              type="text"
              className="border border-black rounded-md py-2"
              placeholder="Enter Search Value"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div
            className="bg-purple-200 mt-5 md:mt-0 rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-purple-700 hover:text-white cursor-pointer text-purple-500 w-full md:w-[15%] h-[40px] flex justify-center items-center"
          >
            <IoSearchSharp size={25} />
          </div>
        </div>
        <button
          className="bg-purple-200 mt-5 rounded-md hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:bg-purple-700 hover:text-white cursor-pointer text-purple-500 w-3/4 md:w-[15%] h-[40px] flex justify-center items-center"
          onClick={handleAdd}
        >
         <MdAddBox size={25} />
        </button>
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

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-xl font-bold mb-4">Add New Record</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Report"
                className="border border-gray-300 rounded-md p-2"
                value={formData.report}
                onChange={(e) =>
                  setFormData({ ...formData, report: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md p-2"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="EMP Code"
                className="border border-gray-300 rounded-md p-2"
                value={formData.empCode}
                onChange={(e) =>
                  setFormData({ ...formData, empCode: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Workline ID"
                className="border border-gray-300 rounded-md p-2"
                value={formData.worklineID}
                onChange={(e) =>
                  setFormData({ ...formData, worklineID: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Access Role"
                className="border border-gray-300 rounded-md p-2"
                value={formData.accessRole1}
                onChange={(e) =>
                  setFormData({ ...formData, accessRole1: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Designation"
                className="border border-gray-300 rounded-md p-2"
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Email Address"
                className="border border-gray-300 rounded-md p-2"
                value={formData.emailAddress}
                onChange={(e) =>
                  setFormData({ ...formData, emailAddress: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Reporting Manager"
                className="border border-gray-300 rounded-md p-2"
                value={formData.reportingManager}
                onChange={(e) =>
                  setFormData({ ...formData, reportingManager: e.target.value })
                }
              />
              <input
                type="date"
                className="border border-gray-300 rounded-md p-2"
                value={formData.requestedOn}
                onChange={(e) =>
                  setFormData({ ...formData, requestedOn: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-gray-300 py-2 px-4 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpReport;
