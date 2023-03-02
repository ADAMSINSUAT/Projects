import React, { Component } from "react";
import { Box } from "@mui/material"
import APIDisplay from "./components/APIDisplay";
class App extends Component {

  render() {
    return (
      <Box justifyContent="center" sx={{ minWidth:"600px", minHeight:"550px", height: "100%", bgcolor: "blue", p: 2, my: -1, mx: -1, flexWrap: "wrap", flexGrow: 1 }}>
        <APIDisplay/>
      </Box>
    );
  }
}

export default App;