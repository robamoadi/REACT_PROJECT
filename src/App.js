import './App.css';
import React from 'react';
import Flags from "./components/Country_flags"

class App extends React.Component {

  state = {
    flags:[
      {country_name: "United States" , population: "331 million" , continent: "North America" , capital:"washington D.C" , id:1},
      {country_name: "Brazil" , population: "213 million" , continent: "South America" , capital:"Brasilia" , id:2},
      {country_name: "Spain" , population: "47 million" , continent: "Europe" , capital:"Madrid" , id:3},
      {country_name: "Japan" , population: "125 million" , continent: "Asia" , capital:"Tokyo" , id:4}
    ]
  }

  delete_contry = (_id) => {
    console.log(_id);
    const filtered_flags = this.state.flags.filter(flag => flag.id !== _id)
    this.setState({
      flags: filtered_flags
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>WORLD FLAGS</h1>
        <Flags flags = {this.state.flags} delete_contry={this.delete_contry} />
        </header>
      </div>
    );
  }
}

export default App;
