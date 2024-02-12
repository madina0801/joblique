// JobForm.js
import React, { useState } from "react";
import "../index.css";
import Error from "./Error";

function JobForm({ onAddJob }) { 
const [isfill,setIsfill]=useState(true);
 const [company, setCompany] = useState("");
 const [position, setPosition] = useState("");
 const [dateApplied, setDateApplied] = useState("");
 const [jobtype, setJobtype] = useState("");
 const [status, setStatus] = useState("");


 const handleSubmit = (e) => {
  e.preventDefault();
  const newApplication = { company, position, dateApplied ,jobtype,status};
  
  if(company.length==0 || position.length==0 || dateApplied.length==0 ){
setIsfill(false);

    setTimeout(()=>{
setIsfill(true);

    },2000)
    
    
  }
if (company.length == 0 || position.length == 0 || dateApplied.length == 0)return ;
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

       <label htmlFor="type"> Job Type:</label>
       <select id="type" onChange={(e) => setJobtype(e.target.value)} >
         <option value="">Select</option>
         <option value="Internship">Internship</option>
         <option value="Part Time">Part time</option>
         <option value="Full Time">Full time</option>
       </select>

       <label htmlFor="status"> Status:</label>
       <select id="status" onChange={(e) => setStatus(e.target.value)}>
         <option value="">Select</option>
         <option value="Applied">Applied</option>
         <option value="Pending">Pending</option>
         <option value="Interviewing">Interviewing</option>
         <option value="Hired">Hired</option>
         <option value="Rejected">Rejected</option>
       </select>

       {!isfill && <Error/>}

       <button type="submit">Add Job</button>
     </form>
   </div>
 );
}

export default JobForm;
