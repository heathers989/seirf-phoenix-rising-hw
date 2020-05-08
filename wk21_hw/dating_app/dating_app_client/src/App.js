import React, { Component } from 'react';
import Daters from './components/Daters.js'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header><h1>Hello Dating World</h1></header>
        <div className="hg-body">
        <Daters />
        </div>
      </div>
    )
  }
}

export default App;
