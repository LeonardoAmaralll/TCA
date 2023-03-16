import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import History from './pages/Companyhistory/history'
import Team from './pages/Team/team'
import Mission from './pages/Mission/mission'
import Problems from './pages/Problems/problems'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/team' element={<Team />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/problems' element={<Problems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
