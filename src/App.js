
import './App.css';

import NavScrollExample from './components/Navbar';
import Login from './components/Login';
import {Routes, Route } from 'react-router-dom';
import About from './components/About';
import Register from './components/Register'
import Home from './components/Home';
import Adminlogin from './components/Adminlogin'

function App() {
  return (
    <div className="App">
        <NavScrollExample/>
         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/slogin" element={<Login/>}/>
        <Route path="/alogin" element={<Adminlogin/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>

      
        </Routes>
       
    </div>
  );
}

export default App;
