import React, { Component } from "react";
import Router from "./Router";
import { Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Box justifyContent="center" sx={{ minWidth:"600px", minHeight:"550px", height: "100%", bgcolor: "blue", p: 2, my: -1, mx: -1, flexWrap: "wrap", flexGrow: 1 }}>
        <Router></Router>
      </Box>
    );
  }
}

export default App;