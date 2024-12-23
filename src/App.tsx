import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Cards from './components/Cards';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

