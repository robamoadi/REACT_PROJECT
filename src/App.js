import React, {Component} from 'react';
import './App.css';
import Garage from './components/Garage'

class App extends Component {

  state ={
    cars :[
      {brand : "Honda" , modal: 'CIVIC' , color : 'lightblue', year: 2024,coast : 150000, id : 1},
      {brand : "Ferrari" , modal: 'Testa rossa' , color : 'lightpink', year: 2020 ,coast : 500000,  id:2},
      {brand : "Chevrolet" , modal: 'CIVIC' , color : 'white', year: 2023, coast : 100000, id:3},
    ]
  }

  deleteCar = (_id) =>{
    //console.log(_id);
    const filtered_cars = this.state.cars.filter(car => car.id !== _id)
    console.log(filtered_cars);
    this.setState({
      cars : filtered_cars
    })
  }

  addYear = () =>{
    const new_year = this.setState({year : this.state.cars.year +1})

  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Garage</h1>
      <Garage cars = {this.state.cars} deleteCar={this.deleteCar} addYear={this.addYear}/>
      </header>
    </div>
  );
}
}

export default App;
