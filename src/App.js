import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Log from './pages/Log';
import Search from './pages/Search';
import
function App() {
  return (
    <div className="App">
      <Router>
      <Search />
      
       </Router>

    </div>
  );
}

export default App;
