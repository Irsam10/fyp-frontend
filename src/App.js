import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/home' element={<HomePage/>}></Route>
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
