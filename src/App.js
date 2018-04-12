import React, { Component } from 'react';
//eslint-disable-next-line
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './App.css';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//eslint-disable-next-line
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import PaperBoxStuff from './PaperBoxFile';
import PaperBoxCalc from './PaperBoxCalcFile';




class App extends Component { 
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="Nav-bar">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">MAKING LIFE MULTIPLANETARY</h1>
            </div>
        </header>
        <MuiThemeProvider MuiTheme={getMuiTheme(darkBaseTheme)}>  
          <div className="Paper-box">
            <div className="Paper-box-stuff">
              <PaperBoxStuff />
            </div>
            <div className="Paper-box-calc">
              <PaperBoxCalc />
            </div>
          </div>  
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
