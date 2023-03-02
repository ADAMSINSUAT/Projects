import * as FileSaver from "file-saver";
import XLXS from "sheetjs-style";
import { Tooltip, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ExportExcel = ({ excelData, fileName }) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheethtml.sheet;charset=UTF-8';
    const fileExtenstion = '.xlsx';

    const exportToExcel = async () => {
        const ws = XLXS.utils.json_to_sheet(excelData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLXS.write(wb, { bookType: "xlsx", type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtenstion);
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