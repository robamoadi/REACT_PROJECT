import React, {Component} from 'react';
import './App.css';
import Garage from './components/Garage';
import CarFilter from './components/CarFilter';
import NewCar from './components/NewCar';

class App extends Component {

  static car_seq_next = 4

  state ={
    cars :[
      {brand : "Honda" , modal: 'CIVIC' , color : 'lightblue', year: 2024,coast : 150000, id : 1},
      {brand : "Ferrari" , modal: 'Testa rossa' , color : 'lightpink', year: 2020 ,coast : 500000,  id:2},
      {brand : "Chevrolet" , modal: 'CIVIC' , color : 'white', year: 2023, coast : 100000, id:3},
    ],
    filter_by_year : 0,
    filter_by_coast:0
  }

  deleteCar = (_id) =>{
    //console.log(_id);
    const filtered_cars = this.state.cars.filter(car => car.id !== _id)
    console.log(filtered_cars);
    this.setState({
      cars : filtered_cars
    })
  }

  setFilter = (filter) =>{
    this.setState(filter)
  }

  addCar = (_car) => {
    const new_cars = [...this.state.cars , {..._car , id : App.car_seq_next++}]
    console.log(new_cars);
    this.setState({
      cars : new_cars
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
      <NewCar addCar={this.addCar}/>
      <CarFilter setFilter={this.setFilter} />
      <Garage cars = {this.state.cars} deleteCar={this.deleteCar} addYear={this.addYear} filte_by_year={this.state.filter_by_year} filter_by_coast={this.state.filter_by_coast}/>
      </header>
    </div>
  );
}
}

export default App;
