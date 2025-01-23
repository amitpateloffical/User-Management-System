                import React from 'react';
                import * as XLSX from 'xlsx';
                
                const ImportExportButtons = ({ data, setData, fileName, sheetNumbers }) => {
                
                  const handleImport = (event) => {
                    const file = event.target.files[0];
                    const reader = new FileReader();
                
                    reader.onload = (e) => {
                      const workbook = XLSX.read(e.target.result, { type: 'binary' });
                
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
                
                  return (
                    <div className="flex gap-3">
                      <input
                        type="file"
                        accept=".xlsx, .xls"
                        onChange={handleImport}
                        className="hidden"
                        id="importButton"
                      />
                      <label htmlFor="importButton" className="cursor-pointer">
                        Import
                      </label>
                      {/* You can add export logic here as well */}
                    </div>
                  );
                };
                
                export default ImportExportButtons;
                
