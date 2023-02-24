import React, { Component } from "react";
import Router from "./Router";
import { Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NavBar from "./components/NavBar";
import Register from "./Components/Register";

class App extends Component {
  
  render() {
    return (
      <Box justifyContent="center" sx={{ height: "100%", bgcolor: "blue", p: 2, my: -1, mx: -1, flexWrap: "wrap", flexGrow:1 }}>
        {/* <Router /> */}
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Box>
    );
  }
}

export default App;