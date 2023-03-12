import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetAllAppointments from "./components/GetAllAppointments";
import NavBar from "./assets/common/NavBar";
import GetAppointmentById from "./components/GetAppointmentById";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/getallappointments" element={<GetAllAppointments />} />
                    <Route exact path="/getappointmentbyid" element={<GetAppointmentById />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
