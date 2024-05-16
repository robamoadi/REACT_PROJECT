import './App.css';
import Car from './components/Car'

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Garage</h1>
      <Car />
      </header>
    </div>
  );
}
}

export default App;
