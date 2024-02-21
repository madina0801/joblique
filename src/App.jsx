import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import JobApp from "./components/JobApp";
import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";

import "./index.css";

function App() {
 return (
  <div>
   <Router>
    <Navbar />
    <Routes>
     <Route path="/about" element={<About />} />
     <Route exact path="/" element={<JobApp />} />
     {/* Define other routes that you need*/}
    </Routes>
   </Router>
  </div>
 );
}

export default App;
