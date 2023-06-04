import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-primary-100 mt-10">
      <Router>
      <Navbar/>
        <Routes>
          <Route>404 not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
