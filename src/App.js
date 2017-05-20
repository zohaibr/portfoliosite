"use strict";

import React, { Component } from 'react';
import '../public/App.css';
import Navbar from './Navbar';
import MainApp from './mainapp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <MainApp/>
      </div>
    );
  }
}

export default App;
