import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import { Tooltip, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

//Custom ExportExcel function
const ExportExcel = ({ excelData, fileName }) => {

    //This is called whenever the download button is being pressed
    const exportToExcel = async () => {

        //Flatten the array of object
        const rows = excelData.map(row => ({
            UserID: row.UserID,
            ID: row.ID,
            Title: row.Title,
            Body: row.Body
        }))

        //Convert the rows object into a xlsx worksheet
        const worksheet = XLSX.utils.json_to_sheet(rows);
        //Appends a new book
        const workbook = XLSX.utils.book_new();
        //Sets the book's name to Sheet1
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