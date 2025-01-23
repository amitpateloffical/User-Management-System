import React, { useState, useEffect } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";


const ActiveUserList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "All",
    department: "",
    role: "",
    employeeName: "",
  });
  const [data, setData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    srNo: "",
    empCode: "",
    employeeName: "",
    equipmentId: "",
    equipmentName: "",
    assetId: "",
    assetName: "",
    application: "",
    applicationVersion: "",
    role: "",
    department: "",
    createdBy: "",
    createdDate: "",
    status: "Active",
  });

  const staticEmployeeData = [
    { 
      srNo: "1.", empCode: "E001", employeeName: "John Doe", equipmentId: "EQ001", equipmentName: "Laptop", assetId: "A123", assetName: "Dell XPS", application: "Windows 10", applicationVersion: "v10.0", role: "Manager", department: "IT", createdBy: "Admin", createdDate: "2022-01-15", status: "Active" 
    },
    { 
      srNo: "2.", empCode: "E002", employeeName: "Jane Smith", equipmentId: "EQ002", equipmentName: "Monitor", assetId: "A124", assetName: "LG 27", application: "Windows 11", applicationVersion: "v11.0", role: "Developer", department: "Engineering", createdBy: "Admin", createdDate: "2022-03-18", status: "Inactive" 
    },
    { 
      srNo: "3.", empCode: "E003", employeeName: "Alex Johnson", equipmentId: "EQ003", equipmentName: "Keyboard", assetId: "A125", assetName: "Logitech K840", application: "macOS", applicationVersion: "v12.2", role: "Designer", department: "Marketing", createdBy: "Admin", createdDate: "2022-02-10", status: "Active" 
    },
    { 
      srNo: "4.", empCode: "E004", employeeName: "Emily Davis", equipmentId: "EQ004", equipmentName: "Mouse", assetId: "A126", assetName: "Razer DeathAdder", application: "Windows 7", applicationVersion: "v7.0", role: "Analyst", department: "Finance", createdBy: "Admin", createdDate: "2021-11-05", status: "Active" 
    },
    { 
      srNo: "5.", empCode: "E005", employeeName: "Michael Brown", equipmentId: "EQ005", equipmentName: "Laptop", assetId: "A127", assetName: "HP Spectre", application: "Linux Ubuntu", applicationVersion: "v20.04", role: "HR", department: "Human Resources", createdBy: "Admin", createdDate: "2023-01-22", status: "Inactive" 
    },
    { 
      srNo: "6.", empCode: "E006", employeeName: "Sophia Lee", equipmentId: "EQ006", equipmentName: "Monitor", assetId: "A128", assetName: "Samsung Curved", application: "Windows 10", applicationVersion: "v10.1", role: "Tester", department: "QA", createdBy: "Admin", createdDate: "2022-04-25", status: "Active" 
    },
    { 
      srNo: "7.", empCode: "E007", employeeName: "David Wilson", equipmentId: "EQ007", equipmentName: "Printer", assetId: "A129", assetName: "Canon PIXMA", application: "macOS", applicationVersion: "v11.6", role: "Supervisor", department: "Operations", createdBy: "Admin", createdDate: "2021-12-30", status: "Active" 
    },
    { 
      srNo: "8.", empCode: "E008", employeeName: "Olivia Martinez", equipmentId: "EQ008", equipmentName: "Scanner", assetId: "A130", assetName: "Epson V600", application: "Linux Ubuntu", applicationVersion: "v18.04", role: "Manager", department: "Logistics", createdBy: "Admin", createdDate: "2022-05-15", status: "Inactive" 
    },
    { 
      srNo: "9.", empCode: "E009", employeeName: "James Harris", equipmentId: "EQ009", equipmentName: "Laptop", assetId: "A131", assetName: "MacBook Pro", application: "Windows 10", applicationVersion: "v10.2", role: "Developer", department: "Engineering", createdBy: "Admin", createdDate: "2022-06-10", status: "Active" 
    },
    { 
      srNo: "10.", empCode: "E010", employeeName: "Isabella Clark", equipmentId: "EQ010", equipmentName: "Desktop", assetId: "A132", assetName: "iMac", application: "macOS", applicationVersion: "v11.4", role: "Designer", department: "Marketing", createdBy: "Admin", createdDate: "2023-02-01", status: "Active" 
    },
  ];
useEffect(()=>{
  setData(staticEmployeeData)
},[])  
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

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredData = data.filter((item) => {
    return (
      (filters.status === "All" || item.status === filters.status) &&
      (filters.department === "" || item.department.includes(filters.department)) &&
      (filters.role === "" || item.role.includes(filters.role)) &&
      (filters.employeeName === "" ||
        item.employeeName.toLowerCase().includes(filters.employeeName.toLowerCase()))
    );
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    setData([...data, { ...newUser, srNo: `${data.length + 1}.` }]);
    setShowModal(false);
    setNewUser({
      srNo: "",
      empCode: "",
      employeeName: "",
      equipmentId: "",
      equipmentName: "",
      assetId: "",
      assetName: "",
      application: "",
      applicationVersion: "",
      role: "",
      department: "",
      createdBy: "",
      createdDate: "",
      status: "Active",
    });
  };

  return (
    <div>
      <div
        className={`content-with-fixed-header px-4 flex flex-col gap-10 ${
          sidebarOpen ? "ml-64" : ""
        }`}
      >
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b pb-5">
          <div className="text-3xl font-semibold text-[#673ab7] col-span-2">
            Active Users List
          </div>
          <div className="flex justify-end gap-7 col-span-1">
            <div className="bg-[#d3eafd] rounded-md cursor-pointer text-[#2196f3] w-10 h-10 flex justify-center items-center">
              <FiRefreshCw />
            </div>
            <div
              className="bg-[#d3eafd] rounded-md cursor-pointer text-[#2196f3] w-10 h-10 flex justify-center items-center"
              onClick={downloadPDF}
            >
              <FaFilePdf />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-3 flex flex-wrap gap-5">
            <div className="flex flex-col w-full md:w-1/5">
              <label htmlFor="status" className="font-bold">
                Status
              </label>
              <select
                className="border border-black rounded-md py-2"
                name="status"
                onChange={handleFilterChange}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-1/5">
              <label htmlFor="department" className="font-bold">
                Department
              </label>
              <input
                type="text"
                className="border border-black rounded-md py-2"
                name="department"
                placeholder="Search Department"
                onChange={handleFilterChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/5">
              <label htmlFor="role" className="font-bold">
                Role
              </label>
              <input
                type="text"
                className="border border-black rounded-md py-2"
                name="role"
                placeholder="Search Role"
                onChange={handleFilterChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/5">
              <label htmlFor="employeeName" className="font-bold">
                Employee Name
              </label>
              <input
                type="text"
                className="border border-black rounded-md py-2"
                name="employeeName"
                placeholder="Search Employee Name"
                onChange={handleFilterChange}
              />
            </div>
            <div
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5 cursor-pointer hover:bg-blue-600"
              onClick={() => setShowModal(true)}
            >
              Add
            </div>
          </div>
          {/* <ImportExportButtons
        data={data}
        setData={setData}
        fileName="Active User List"
        sheetNumbers={9}
      /> */}
         <ImportExportButtons
        data={data}
        setData={(importedData) => {
          const updatedData = importedData.map((item, index) => ({
            ...item,
            srNo: `${data.length + index + 1}.`, // Continue SR.NO.
          }));
          setData((prev) => [...prev, ...updatedData]); // Append data
        }}
        fileName="Active User List"
        sheetNumbers={9}
      />
        </div>

        {/* Table */}
        <div id="active-user-list">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                {/* <th className="border border-gray-400 px-4 py-2">#</th> */}
                <th className="border border-gray-400 px-4 py-2">SR.NO.</th>
                <th className="border border-gray-400 px-4 py-2">Employee Code</th>
                <th className="border border-gray-400 px-4 py-2">Employee Name</th>
                <th className="border border-gray-400 px-4 py-2">Equipment ID</th>
                <th className="border border-gray-400 px-4 py-2">Equipment Name</th>
                <th className="border border-gray-400 px-4 py-2">Asset ID</th>
                <th className="border border-gray-400 px-4 py-2">Asset Name</th>
                <th className="border border-gray-400 px-4 py-2">Application</th>
                <th className="border border-gray-400 px-4 py-2">App Version</th>
                <th className="border border-gray-400 px-4 py-2">Role</th>
                <th className="border border-gray-400 px-4 py-2">Department</th>
                <th className="border border-gray-400 px-4 py-2">Created By</th>
                <th className="border border-gray-400 px-4 py-2">Created Date</th>
                <th className="border border-gray-400 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((user) => (
                <tr key={user.srNo}>
                  <td className="border border-gray-400 px-4 py-2">{user.srNo}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.empCode}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.employeeName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.equipmentId}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.equipmentName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.assetId}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.assetName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.application}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.applicationVersion}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.role}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.department}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.createdBy}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.createdDate}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md w-[90%] md:w-[60%]">
            <h2 className="text-xl font-bold mb-4">Add New User</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(newUser).map((field, index) => (
                  <input
                    key={index}
                    type="text"
                    name={field}
                    placeholder={field.split(/(?=[A-Z])/).join(" ")}
                    className="border p-2 rounded-md"
                    value={newUser[field]}
                    onChange={handleInputChange}
                  />
                ))}
              </div>
            </form>
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleAddUser}
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

export default ActiveUserList;
