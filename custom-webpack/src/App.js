import * as React from "react";
import AddInfo from "./AddInfo";
import NavBar from "./components/NavBar";
import Display from "./Display";
import { Stack } from "@mui/system";

class App extends React.Component {
  state = {
    personData: [],
  }

  addInfo = (props) => {
    console.log(props);

    let personData = [...this.state.personData, props];

    this.setState({
      personData,
    });
  };

  render() {
    return (
      <>
        <Stack variant="outlined" sx={{ m: 5 }} spacing={2} direction="column" display="flex" justifyContent="center" alignItems="center">
          <NavBar></NavBar>
          <AddInfo addData={this.addInfo}></AddInfo>
          <Display personData={this.state.personData} />
        </Stack>
      </>
    )
  }
}

export default App;
