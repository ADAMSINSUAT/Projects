import React, { Component } from "react";
import Lodash from "./components/Lodash";
import { SearchBar } from "./components/Searchbar";
import { Stack } from "@mui/material/node";
class App extends Component {
	render() {
		return (
			<Stack display="flex" alignContent="center" justifyContent="center" sx={{m:2, flexWrap:"wrap", width:"100%", height:"100%"}} spacing={5} direction="column">
				<SearchBar></SearchBar>
				<Lodash></Lodash>
			</Stack>
		)
	}
}
export default App;