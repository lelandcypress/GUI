import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Log from './pages/Log';
import Search from './pages/Search';
import
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>  
        <Route path="/search" Component={Search} />
        <Route path="/dllog"  Component={Log} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
