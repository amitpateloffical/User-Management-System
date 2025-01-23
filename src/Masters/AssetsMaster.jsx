import React, { useState, useEffect } from "react";
import { MdAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import ImportExportButtons from "../ImportExportButtons/ImportExportButtons";


const AssetsMaster = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [assetTypeFilter, setAssetTypeFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [newAsset, setNewAsset] = useState({
    assetType: "",
    assetID: "",
    make: "",
    model: "",
    serialNo: "",
    status: "Active",
  });
  const [editIndex, setEditIndex] = useState(null);

  const [data, setData] = useState([ ]);
  const staticAssetData = [
    { srNo: "1.", assetType: "Laptop", assetId: "A001", make: "Dell", model: "Inspiron 15", serialNo: "SN12345", status: "Active" },
    { srNo: "2.", assetType: "Printer", assetId: "A002", make: "HP", model: "LaserJet Pro", serialNo: "SN12346", status: "Inactive" },
    { srNo: "3.", assetType: "Monitor", assetId: "A003", make: "Samsung", model: "Curved 27\"", serialNo: "SN12347", status: "Active" },
    { srNo: "4.", assetType: "Desktop", assetId: "A004", make: "HP", model: "Pavilion", serialNo: "SN12348", status: "Active" },
    { srNo: "5.", assetType: "Laptop", assetId: "A005", make: "Lenovo", model: "ThinkPad", serialNo: "SN12349", status: "Inactive" },
    { srNo: "6.", assetType: "Scanner", assetId: "A006", make: "Canon", model: "imageFORMULA", serialNo: "SN12350", status: "Active" },
    { srNo: "7.", assetType: "Router", assetId: "A007", make: "TP-Link", model: "Archer C7", serialNo: "SN12351", status: "Inactive" },
    { srNo: "8.", assetType: "Server", assetId: "A008", make: "IBM", model: "Power Systems", serialNo: "SN12352", status: "Active" },
    { srNo: "9.", assetType: "Smartphone", assetId: "A009", make: "Apple", model: "iPhone 12", serialNo: "SN12353", status: "Active" },
    { srNo: "10.", assetType: "Tablet", assetId: "A010", make: "Samsung", model: "Galaxy Tab S6", serialNo: "SN12354", status: "Inactive" },
  ];
useEffect(()=>{
setData(staticAssetData)
},[])  

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
    if (popupOpen) {
      setNewAsset({
        assetType: "",
        assetID: "",
        make: "",
        model: "",
        serialNo: "",
        status: "Active",
      });
      setEditIndex(null);
    }
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleAssetTypeFilterChange = (event) => {
    setAssetTypeFilter(event.target.value);
  };

  const handleChange = (e) => {
    setNewAsset({ ...newAsset, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = { ...updatedData[editIndex], ...newAsset };
      setData(updatedData);
    } else {
      setData([...data, { srNo: (data.length + 1) + ".", ...newAsset }]);
    }
    setPopupOpen(false);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewAsset(data[index]);
    setPopupOpen(true);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, idx) => idx !== index);
    setData(updatedData);
  };

  const filteredData = data.filter(item => {
    return (
      (statusFilter === "All" || item.status === statusFilter) &&
      (assetTypeFilter === "All" || item.assetType === assetTypeFilter) &&
      (searchText === "" || item.assetID.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  return (
    <div className={`content-with-fixed-header px-4 flex flex-col gap-10 ${sidebarOpen ? 'ml-64' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 border-b pb-5">
        <div className="text-3xl font-semibold text-[#673ab7]">Assets Master</div>
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-5">
          <div className="flex flex-col w-full md:w-auto">
            <label htmlFor="status" className="font-bold">Status</label>
            <select id="status" className="border border-black rounded-md py-2" onChange={handleStatusFilterChange}>
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex flex-col w-full md:w-auto">
            <label htmlFor="assetType" className="font-bold">Asset Type</label>
            <select id="assetType" className="border border-black rounded-md py-2" onChange={handleAssetTypeFilterChange}>
              <option value="All">All</option>
              <option value="Server">Server</option>
              <option value="Desktop">Desktop</option>
              <option value="IPS">IPS</option>
            </select>
          </div>
          <div className="flex flex-col w-full md:w-auto">
            <label htmlFor="search" className="font-bold">Search</label>
            <input
              id="search"
              type="text"
              className="border border-black rounded-md py-2"
              placeholder="Search Assets By Asset ID"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="bg-[#d3eafd] text-[#2196f3] w-[20%] h-[40px] flex justify-center items-center cursor-pointer" onClick={togglePopup}>
            <MdAddBox />
          </div>
        </div>
      </div>
      {/* <ImportExportButtons
        data={data}
        setData={setData}
        fileName="Assets Master"
        sheetNumbers={4}
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
        fileName="Application Master"
        sheetNumbers={4}
      />
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-center">SR.NO.</th>
              <th className="border-b px-4 py-2 text-center">ASSET TYPE</th>
              <th className="border-b px-4 py-2 text-center">ASSET ID</th>
              <th className="border-b px-4 py-2 text-center">MAKE</th>
              <th className="border-b px-4 py-2 text-center">MODEL</th>
              <th className="border-b px-4 py-2 text-center">SERIAL NO.</th>
              <th className="border-b px-4 py-2 text-center">STATUS</th>
              <th className="border-b px-4 py-2 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((itm, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-2 text-center">{itm.srNo}</td>
                <td className="border-b px-4 py-2 text-center">{itm.assetType}</td>
                <td className="border-b px-4 py-2 text-center">{itm.assetId}</td>
                <td className="border-b px-4 py-2 text-center">{itm.make}</td>
                <td className="border-b px-4 py-2 text-center">{itm.model}</td>
                <td className="border-b px-4 py-2 text-center">{itm.serialNo}</td>
                <td className="border-b px-4 py-2 text-center">
                  <div className={`rounded-full px-2 ${itm.status === 'Active' ? 'bg-green-300 text-green-700' : 'bg-red-300 text-red-700'}`}>
                    {itm.status}
                  </div>
                </td>
                <td className="border-b px-4 py-2 text-center">
                  <div className="flex justify-center gap-3 items-center">
                    <div className="bg-cyan-200 w-[30px] h-[30px] flex justify-center items-center text-cyan-600 cursor-pointer" onClick={() => handleEdit(index)}>
                      <FaRegEdit />
                    </div>
                    <div className="bg-red-200 w-[30px] h-[30px] flex justify-center items-center text-red-600 cursor-pointer" onClick={() => handleDelete(index)}>
                      <IoBan />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding/editing asset */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md w-[400px]">
            <h2 className="text-xl font-bold mb-4">{editIndex !== null ? "Edit Asset" : "Add New Asset"}</h2>
            <div className="mb-4">
              <label>Asset Type</label>
              <input
                type="text"
                name="assetType"
                value={newAsset.assetType}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label>Asset ID</label>
              <input
                type="text"
                name="assetID"
                value={newAsset.assetID}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label>Make</label>
              <input
                type="text"
                name="make"
                value={newAsset.make}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label>Model</label>
              <input
                type="text"
                name="model"
                value={newAsset.model}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label>Serial No.</label>
              <input
                type="text"
                name="serialNo"
                value={newAsset.serialNo}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label>Status</label>
              <select
                name="status"
                value={newAsset.status}
                onChange={handleChange}
                className="border w-full px-3 py-2 mt-1"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Submit
            </button>
            <button onClick={togglePopup} className="bg-red-500 text-white py-2 px-4 rounded-md ml-2">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetsMaster;
