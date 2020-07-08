import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Navbar from './Component/Navbar'
import Index from './Component/index'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Route exact path= '/' component={Index}/>

      </BrowserRouter>
    );
  }
}


export default App;
