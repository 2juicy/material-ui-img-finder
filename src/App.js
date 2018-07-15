import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
