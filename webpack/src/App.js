import React, { Component } from "react";
import Counter from "./components/Counter";
import ClassUpdate from "./components/ClassUpdate";
import FunctionUpdate from "./components/FunctionUpdate";

class App extends Component {
	render() {
		return (
			<div style={{flexDirection:"column", width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
				<h1>Class Update</h1>
				<ClassUpdate/>
				<br/>
				<h1>Function Update</h1>
				<FunctionUpdate/>
			</div>
		)
	}
}
export default App;