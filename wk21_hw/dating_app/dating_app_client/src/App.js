import React, { Component } from 'react';
import Daters from './components/Daters.js'
import Footer from './components/Footer'
// import logo from './logo.svg';
import './App.css';

class App extends Component {


  handleAdd = (event, formInputs) => {
    event.preventDefault()
    fetch('http://localhost:3000/users', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
  }

  render(){
    return (
      <div className="App">
        <header><h1>Hello Dating World</h1></header>
        <div className="hg-body">
        <Daters />
        </div>
       <Footer handleSubmit={this.handleAdd}/>
      </div>
    )
  }
}

export default App;
