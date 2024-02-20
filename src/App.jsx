import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";

import "./index.css";

function App() {
 const [jobApplications, setJobApplications] = useState([]);

 useEffect(() => {
  const existingApplications =
   JSON.parse(localStorage.getItem("jobApplications")) || [];
  setJobApplications(existingApplications);
 }, []);

 const addJobApplication = (newApplication) => {
  setJobApplications([...jobApplications, newApplication]);
 };

 return (
  <div>
   <Router>
    <Navbar />
    <Routes>
     <Route path="/about" element={<About />} />
     <Route exact path="/" />
     {/* Define other routes that you need*/}
    </Routes>
   </Router>
   <div className="main">
    <JobForm onAddJob={addJobApplication} />
    <JobList jobApplications={jobApplications} />
   </div>
  </div>
 );
}

export default App;
