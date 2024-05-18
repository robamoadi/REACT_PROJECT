import './App.css';
import React from 'react';
import Flags from "./components/Country_flags"
import FlagFilter from './components/FlagFilter'; 
import AddCountry from './components/AddCountry';

class App extends React.Component {

  static flag_next_seq = 5

  state = {
    flags:[
      {country_name: "United States" , population: 331000000 , continent: "North America" , capital:"washington D.C" , id:1},
      {country_name: "Brazil" , population: 213000000  , continent: "South America" , capital:"Brasilia" , id:2},
      {country_name: "Spain" , population: 47000000 , continent: "Europe" , capital:"Madrid" , id:3},
      {country_name: "Japan" , population: 125000000  , continent: "Asia" , capital:"Tokyo" , id:4}
    ],
    filter_population : 0
  }

  delete_contry = (_id) => {
    console.log(_id);
    const filtered_flags = this.state.flags.filter(flag => flag.id !== _id)
    this.setState({
      flags: filtered_flags
    })
  }

  setfilter = (filter_population) =>{
    this.setState({
      filter_population
    })
  }

  addCountry = (_contry) =>{
    const new_contry = [...this.state.flags , {..._contry , id: App.flag_next_seq++}]
    this.setState({
      flags : new_contry
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>WORLD FLAGS</h1>
        <AddCountry addCountry={this.addCountry} />
        <FlagFilter setfilter = {this.setfilter}/>
        <Flags flags = {this.state.flags} delete_contry={this.delete_contry} filter_population={this.state.filter_population} />
        </header>
      </div>
    );
  }
}

export default App;
