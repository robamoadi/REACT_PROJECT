import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  //component data
  state ={
    name: 'Roba ',
    age : 27
  }

   //function render
  render(){
    return (
    <div className="App">
      <header className="App-header">
      <h2>Hellow {this.state.name}</h2>
      <h2>Age : {this.state.age}</h2>
      </header>
    </div>
    )
  } 
};

export default App;
