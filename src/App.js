import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
    return (
        <div className="App bg-primary-100 mt-10">
        <Router>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route>404 not found!</Route>
            </Routes>
        </Router>
        </div>
    );
}

export default App;
