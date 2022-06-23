
import './App.css';

import NavScrollExample from './components/Navbar';
import Login from './components/Login';
import {Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <NavScrollExample/>
         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/slogin" element={<Login/>}/>
        <Route path="/alogin" element={<Login/>}/>
        <Route path="/aboutus" element={<About/>}/>
      
        </Routes>
       
    </div>
  );
}

export default App;
