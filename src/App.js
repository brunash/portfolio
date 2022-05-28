import './main.scss';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import About from './components/About/About';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/projects' exact element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
