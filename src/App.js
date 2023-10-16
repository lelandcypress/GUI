import './App.css';
import React from "react";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Log from './pages/Log';
import Search from './pages/Search';
import Navigate from './Components/nav';
import Footer from './Components/footer';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
    <Container className='bg-primary'>
    <div className="App">
    <Navigate />
      <Routes>  
        <Route path="/search" Component={Search} />
        <Route path="/dllog"  Component={Log} />
      </Routes>
      <Footer />
    </div>
    </Container>
    </Router>
  );
}

export default App;
