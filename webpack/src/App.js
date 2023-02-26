import * as React from "react";
import { Stack, Button, Typography } from "@mui/material";
import Display1 from "./components/Display1";

import Hoc from "./components/HOC";
import Display2 from "./components/Display2";

class App extends React.Component {
	render() {
		return (
			<Stack spacing={2} direction="column">
			<Typography fontSize={32}>HOC. Press refresh to change the color randomly</Typography>
			<Display1/>
			<Display2/>
			</Stack>
		)
	}
}

export default App;