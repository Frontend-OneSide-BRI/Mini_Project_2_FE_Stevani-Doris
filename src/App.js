import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
    return (
        <div className="App bg-primary-100 mt-10">
        <Router>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/modal" element={<Modal />} />
                <Route>404 not found!</Route>
            </Routes>
        </Router>
        <Footer/>
        </div>
    );
}

export default App;
