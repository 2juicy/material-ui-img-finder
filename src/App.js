import React, { Component } from "react";
import { MuiThemeProvider, getMuiTheme } from "material-ui/styles";
import { orange600, deepOrange600 } from "material-ui/styles/colors";
import NavBar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Notes from "./components/Notes/Notes";
import "./App.css";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange600,
    accent1Color: deepOrange600
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <NavBar />
        <div>
          <Search />
          <Notes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
