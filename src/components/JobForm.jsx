// JobForm.js
import React, { useState } from "react";
import "../index.css";
import Error from "./Error";

function JobForm({ onAddJob }) {
 const [isfill, setIsfill] = useState(true);
 const [company, setCompany] = useState("");
 const [position, setPosition] = useState("");
 const [dateApplied, setDateApplied] = useState("");
 const [jobtype, setJobtype] = useState("");
 const [status, setStatus] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  const newApplication = { company, position, dateApplied, jobtype, status };

  if (company.length == 0 || position.length == 0 || dateApplied.length == 0) {
   setIsfill(false);

   setTimeout(() => {
    setIsfill(true);
   }, 2000);
  }
  if (company.length == 0 || position.length == 0 || dateApplied.length == 0)
   return;
  saveToLocalStorage(newApplication);

  onAddJob(newApplication);

  setCompany("");
  setPosition("");
  setDateApplied("");
 };

 const saveToLocalStorage = (newApplication) => {
  const existingApplications =
   JSON.parse(localStorage.getItem("jobApplications")) || [];
  const updatedApplications = [...existingApplications, newApplication];
  localStorage.setItem("jobApplications", JSON.stringify(updatedApplications));
 };

 return (
  <div className="container-fluid">
   <form onSubmit={handleSubmit}>
    <label className="mb-2" htmlFor="company">Company:</label>
    <input
     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
     id="company"
     type="text"
     value={company}
     onChange={(e) => setCompany(e.target.value)}
    />

    <label className="mb-2" htmlFor="position">Position:</label>
    <input
     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
     id="position"
     type="text"
     value={position}
     onChange={(e) => setPosition(e.target.value)}
    />

    <label className="mb-2" htmlFor="date"> Date Applied:</label>
    <input
     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
     id="date"
     type="date"
     value={dateApplied}
     onChange={(e) => setDateApplied(e.target.value)}
    />

    <label className="mb-2" htmlFor="type"> Job Type:</label>
    <select
     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
     id="type"
     onChange={(e) => setJobtype(e.target.value)}
    >
     <option value="">Select</option>
     <option value="Internship">Internship</option>
     <option value="Part Time">Part time</option>
     <option value="Full Time">Full time</option>
    </select>

    <label className="mb-2" htmlFor="status"> Status:</label>
    <select
     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
     id="status"
     onChange={(e) => setStatus(e.target.value)}
    >
     <option value="">Select</option>
     <option value="Applied">Applied</option>
     <option value="Pending">Pending</option>
     <option value="Interviewing">Interviewing</option>
     <option value="Hired">Hired</option>
     <option value="Rejected">Rejected</option>
    </select>

    {!isfill && <Error className="text-danger" />}

    <button className="rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" type="submit">
      <span className="text-darkblue">Add Job</span>
    </button>
   </form>
  </div>
 );
}

export default JobForm;
