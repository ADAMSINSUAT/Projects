import { Box } from "@mui/material";
import React, {Component} from "react";
import Hook from "./components.js/Hook";
// function handleChange() {

// }
class App extends Component {

	render() {
		return (
			<Box sx={{width:"100%", height:"100%"}} alignContent="center" justifyContent="center">
				<Hook></Hook>
			</Box>
		)
	}
}
export default App;