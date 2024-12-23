import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import Cards from './components/Cards';
function App() {
  return (

    <>
      <Cards />
      <BrowserRouter>
        <Navbar />
        <Routes>

        </Routes>
        <Footer />
      </BrowserRouter></>
  );
}

export default App;

