import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import JobApp from "./components/JobApp";
import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";
import Footer from "./components/layout/Footer";

import "./index.css";

function App() {
 return (
  <div>
   <Router>
    <Navbar />
    <Routes>
     <Route path="/about" element={<About />} />
     <Route exact path="/" element={<JobApp />} />
    </Routes>
   </Router>
   <Footer />
  </div>
 );
}

export default App;
