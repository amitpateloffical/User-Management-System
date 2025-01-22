                import React from "react";
                import * as XLSX from "xlsx";

                const ImportExportButtons = ({ data, setData, fileName }) => {
                // Handle importing data from Excel
                const handleImport = (event) => {
                    const file = event.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                    const workbook = XLSX.read(e.target.result, { type: "binary" });
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    const importedData = XLSX.utils.sheet_to_json(worksheet);
                    setData(importedData); // Update parent state
                    };
                    reader.readAsBinaryString(file);
                };

                // Handle exporting data to Excel
                const handleExport = () => {
                    const worksheet = XLSX.utils.json_to_sheet(data);
                    const workbook = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
                    XLSX.writeFile(workbook, fileName || "Data.xlsx");
                };

                return (
                    <div className="flex gap-4 justify-end mb-1">
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded"
                        onClick={handleExport}
                    >
                        Export to Excel
                    </button>
                    <label className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
                        Import Excel
                        <input
                        type="file"   
                        accept=".xlsx, .xls"
                        className="hidden"
                        onChange={handleImport}
                        />
                    </label>
                    </div>
                );
                };

                export default ImportExportButtons;
