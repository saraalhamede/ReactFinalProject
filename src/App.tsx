import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import Cards from './components/Cards';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
function App() {
  return (

    <>
      <Cards />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<RegisterForm />} />

        </Routes>
      </BrowserRouter></>
  );
}

export default App;

