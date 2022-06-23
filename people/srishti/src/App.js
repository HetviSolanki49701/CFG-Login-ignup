// import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/quiz" element={<Quiz/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;