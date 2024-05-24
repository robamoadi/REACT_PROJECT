import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Post } from './components/Posts';

function App() {
  return (
    <div className="App">
      <Navbar / >
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact/:id' element={<Contact/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/posts/:id' element={<Post/>} />
        </Routes>
    </div>
  );
}

export default App;
