import React from 'react';
import './App.css';

class App extends React.Component {

  //component data
  state ={
    userNamee: 'Roba ',
    email : 'roba123@gmail.com',
    age : 27
  }

  hanndleNameChange = (e) =>{
    this.setState({[e.target.name] : e.target.value})
    //this.setState({userNamee : e.target.value})
    //this.setState({email : e.target.value})
    //this.setState({age : e.target.value})
  }

   //function render
  render(){
    return (
    <div className="App">
      <header className="App-header">
      <h2>Hellow {this.state.userNamee}</h2>
      <h4>Age : {this.state.age}</h4>
      <h4>Email : {this.state.email}</h4>
      <button onClick={() => this.setState({age: ++this.state.age})}>Add age</button>
      <button onClick={() => this.setState({age: --this.state.age})}>Sub age</button>
      <input type='text' name='userNamee' value={this.state.userNamee} onChange={this.hanndleNameChange}></input>
      <input type='number' name='age' value={this.state.age} onChange={this.hanndleNameChange}></input>
      <input type='text' name='email' value={this.state.email} onChange={this.hanndleNameChange}></input>
      </header>
    </div>
    )
  } 
};

export default App;
