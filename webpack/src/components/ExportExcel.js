import * as FileSaver from "file-saver";
// import XLSX from "sheetjs-style";
import { Tooltip, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

//Custom ExportExcel function
const ExportExcel = ({ excelData, fileName }) => {

    //Sets the file format of the excel file
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheethtml.sheet;charset=UTF-8';

    //Sets the file extension of the excel file
    const fileExtenstion = '.xlsx';

    // //This is called whenever the download button is being pressed
    // const exportToExcel = async () => {

    //     //It converts the excelData prop into an excel file
    //     const ws = XLXS.utils.json_to_sheet(excelData);

    //     //Creates the sheets and the sheetnames of the excel file
    //     const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

    //     //Creates the formatting of the excel file and sets its file type as xlsx
    //     const excelBuffer = XLXS.write(wb, { bookType: "xlsx", type: 'array' });

    //     //It converts the excelBuffer into a blob which will then be prepared for downloading
    //     const data = new Blob([excelBuffer], { type: fileType });

    //     //Creates an excel file with its name and extension type and displays the data in it
    //     //It will then be ready for download
    //     FileSaver.saveAs(data, fileName + fileExtenstion);
    // }

    const exportToExcel = async () => {
        const worksheet = XLSX.utils.json_to_sheet(excelData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        /* fix headers */
        XLSX.utils.sheet_add_aoa(worksheet, [["ID", "User ID", "Title", "Body"]], { origin: "A1" });

        /* calculate column width */
        const max_width = excelData.reduce((w, r) => Math.max(w, r.Body.length), 10);
        worksheet["!cols"] = [{ wch: max_width }];

        /* create an XLSX file and try to save to Presidents.xlsx */
        XLSX.writeFile(workbook, "Presidents.xlsx", { compression: true });
    }

    return (
        <>
            <Tooltip title="Download UserData">
                <Button variant="contained" onClick={(e) => exportToExcel(fileName)} color="primary"
                    style={{ cursor: "pointer", fontFize: 14 }}
                >Download UserData as Excel</Button>
            </Tooltip>
        </>
    )
}

export default ExportExcel;