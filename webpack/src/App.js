import React, { Component } from "react";
import Router from "./Router";
import { Box, Button } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetAllAppointments from "./components/GetAllAppointments";
import GetAppointmentById from "./components/GetAppointmentById";
import NavBar from "./assets/common/NavBar";
import AddAppointment from "./components/AddAppointment";

class App extends Component {
  render() {
    return (
      <Box justifyContent="center" sx={{ height: "100%", bgcolor: "blue", p: 2, my: -1, mx: -1, flexWrap: "wrap", flexGrow: 1 }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/getallappointments" element={<GetAllAppointments />} />
            <Route exact path="/getappointmentbyid" element={<GetAppointmentById />} />
            <Route exact path="/addappointment" element={<AddAppointment />} />
          </Routes>
        </BrowserRouter>
      </Box>
    );
  }
}

export default App;