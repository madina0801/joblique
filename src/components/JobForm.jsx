// JobForm.js
import React, { useState } from "react";
import "../index.css";

function JobForm({ onAddJob }) {
 const [company, setCompany] = useState("");
 const [position, setPosition] = useState("");
 const [dateApplied, setDateApplied] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  const newApplication = { company, position, dateApplied };

  saveToLocalStorage(newApplication);

  onAddJob(newApplication);
  
  setCompany("");
  setPosition("");
  setDateApplied("");
 };

 const saveToLocalStorage = (newApplication) => {
  const existingApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];
  const updatedApplications = [...existingApplications, newApplication];
  localStorage.setItem('jobApplications', JSON.stringify(updatedApplications));
 }

 return (
  <div className="formContainer">
   <form onSubmit={handleSubmit}>
    <label htmlFor="id">Company:</label>
    <input
     id="company"
     type="text"
     value={company}
     onChange={(e) => setCompany(e.target.value)}
    />
    <label htmlFor="position">Position:</label>
    <input
     id="position"
     type="text"
     value={position}
     onChange={(e) => setPosition(e.target.value)}
    />
    <label htmlFor="date"> Date Applied:</label>
    <input
     id="date"
     type="date"
     value={dateApplied}
     onChange={(e) => setDateApplied(e.target.value)}
    />
    <button type="submit">Add Job</button>
   </form>
  </div>
 );
}

export default JobForm;
