import React from "react";
import * as XLSX from "xlsx";

const ImportExportButtons = ({ data, setData, fileName, sheetNumbers }) => {
  const handleImport = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });

      // Validate sheetNumbers, as it might be undefined or an incorrect value
      const sheetIndex = parseInt(sheetNumbers, 10);

      if (isNaN(sheetIndex) || sheetIndex < 0 || sheetIndex >= workbook.SheetNames.length) {
        console.error("Invalid sheet number.");
        return;
      }

      // Get the sheet name from the sheetNumbers index
      const sheetName = workbook.SheetNames[sheetIndex];

      // Get the sheet data
      const worksheet = workbook.Sheets[sheetName];

      // Convert sheet data to JSON
      const importedData = XLSX.utils.sheet_to_json(worksheet);

      // Log imported data for debugging
      console.log(importedData);

      // Update state with the imported data
      setData(importedData);
    };

    reader.readAsBinaryString(file);
  };

  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(data); // Convert data to worksheet
    const wb = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(wb, ws, fileName); // Append sheet to workbook

    // Generate the Excel file and trigger download
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };

  return (
    <div className="flex gap-6 items-center justify-center">
      {/* Import Button */}
      <div className="relative">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleImport}
          className="absolute inset-0 opacity-0 cursor-pointer"
          id="importButton"
        />
        <label
          htmlFor="importButton"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm cursor-pointer hover:bg-blue-600 transition-all"
        >
          Import
        </label>
      </div>

      {/* Export Button */}
      <button
        onClick={handleExport}
        className="bg-green-500 text-white px-6 py-2 rounded-md shadow-sm cursor-pointer hover:bg-green-600 transition-all"
      >
        Export
      </button>
    </div>
  );
};

export default ImportExportButtons;
