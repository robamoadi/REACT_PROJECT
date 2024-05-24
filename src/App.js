import './App.css';
import { Display } from './components/display';
import { ColorPicker } from './components/colorPicker';
import ColorProvider from './context/ColorProvider';
//import ColorContext from './context/ColorContext';
//import { useState } from "react";


 // const [color, setColor] = useState('lightseagreen')
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Context Hook</h2>
          <hr />
          <ColorProvider>
            <ColorPicker />
            <hr />
            <Display />
            <hr />
          </ColorProvider>
        </div>
      </header>
    </div>
  );
}


export default App;
