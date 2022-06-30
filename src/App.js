import './main.scss';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import "./styles/partials/_mixins.scss";
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
        <Route path='/' exact element={<About/>}/>
        <Route path='/portfolio' exact element={<Projects/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
