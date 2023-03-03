import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import { Tooltip, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

//Custom ExportExcel function
const ExportExcel = ({ excelData }) => {
    //excelData is the prop for importing the getUsers object from the APIDisplay component

    //This is called whenever the download button is being pressed
    const exportToExcel = async () => {

        //Flattens the excelData array of object for it to be properly formatted when converting it into
        //an Excel file
        const rows = excelData.map(row => ({
            //This the userID number of the data
            UserID: row.UserID,
            //This is the ID numbrt of the data
            ID: row.ID,
            //This is the Title text of the data
            Title: row.Title,
            //This is the Body text of the data
            Body: row.Body
        }))

        //Convert the rows object into a xlsx worksheet
        const worksheet = XLSX.utils.json_to_sheet(rows);
        //Appends a new book
        const workbook = XLSX.utils.book_new();
        //Sets the book's name to Sheet1
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        /* fix headers */
        XLSX.utils.sheet_add_aoa(worksheet, [["UserID", "ID", "Title", "Body"]], { origin: "A1" });

        /* set column width for each object data */
        worksheet["!cols"] = [{ width: 4 }, { width: 8 }, { width: 70 }, { width: 180 }];

        /* create an XLSX file and try to save to UserData.xlsx */
        XLSX.writeFile(workbook, "UserData.xlsx", { compression: true });
    }

    return (
        <>
            <Tooltip title="Download UserData">
                {/* Pressing this button will call the exportToExcel to export the excelData into an Excel File */}
                <Button variant="contained" onClick={(e) => exportToExcel()} color="primary"
                    style={{ cursor: "pointer", fontFize: 14 }}
                >Download UserData as Excel</Button>
            </Tooltip>
        </>
    )
}

export default ExportExcel;