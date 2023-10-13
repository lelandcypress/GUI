import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Log from './pages/Log';
import Search from './pages/Search';
import Nav from './Components/nav';
import Footer from './Components/footer';
import Header from './Components/header';

function App() {
  return (
    <Router>
    <div className="App">
     <Header />
      <Nav />
      <Routes>  
        <Route path="/search" Component={Search} />
        <Route path="/dllog"  Component={Log} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
