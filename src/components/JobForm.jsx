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
  onAddJob(newApplication);
  setCompany("");
  setPosition("");
  setDateApplied("");
 };

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
