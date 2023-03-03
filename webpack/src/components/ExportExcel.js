import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
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

    //This is called whenever the download button is being pressed
    const exportToExcel = async () => {
        const rows = excelData.map(row => ({
            UserID: row.UserID,
            ID: row.ID,
            Title: row.Title,
            Body: row.Body
        }))
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        /* fix headers */
        XLSX.utils.sheet_add_aoa(worksheet, [["ID", "User ID", "Title", "Body"]], { origin: "A1" });

        /* set column width for each object data */
        worksheet["!cols"] = [{ width: 4 }, { width: 8 }, { width: 70 }, { width: 180 }];

        /* create an XLSX file and try to save to UserData.xlsx */
        XLSX.writeFile(workbook, "UserData.xlsx", { compression: true });
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