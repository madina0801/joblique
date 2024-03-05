// JobForm.js
import React, { useState } from "react";
import "../index.css";
import Error from "./Error";

import { RiArrowDropDownLine } from "react-icons/ri";

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
  <form className="w-full max-w-lg" onSubmit={handleSubmit}>
   <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
     <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor="company"
     >
      Company:
     </label>
     <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      id="company"
      type="text"
      value={company}
      onChange={(e) => setCompany(e.target.value)}
     />
    </div>

    <div className="w-full md:w-1/2 px-3">
     <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor="position"
     >
      Position:
     </label>
     <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="position"
      type="text"
      value={position}
      onChange={(e) => setPosition(e.target.value)}
     />
    </div>
   </div>

   <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor="date"
     >
      {" "}
      Date Applied:
     </label>
     <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="date"
      type="date"
      value={dateApplied}
      onChange={(e) => setDateApplied(e.target.value)}
     />
    </div>

    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor="type"
     >
      {" "}
      Job Type:
     </label>
     <div className="relative">
      <select
       className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       id="type"
       onChange={(e) => setJobtype(e.target.value)}
      >
       <option className="text-sm" value="">
        Select
       </option>
       <option value="Internship">Internship</option>
       <option value="Part Time">Part time</option>
       <option value="Full Time">Full time</option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
       <RiArrowDropDownLine className="fill-current h-5 w-5" />
      </div>
     </div>
    </div>

    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor="status"
     >
      {" "}
      Status:
     </label>
     <div className="relative">
      <select
       className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       id="status"
       onChange={(e) => setJobtype(e.target.value)}
      >
       <option value="">Select</option>
       <option value="Applied">Applied</option>
       <option value="Pending">Pending</option>
       <option value="Interviewing">Interviewing</option>
       <option value="Hired">Hired</option>
       <option value="Rejected">Rejected</option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
       <RiArrowDropDownLine className="fill-current h-5 w-5" />
      </div>
     </div>
    </div>
   </div>
   {!isfill && <Error className="text-danger" />}
   <div className="flex justify-center mt-5">
    <button
     className="bg-transparent font-semibold text-darkblue border py-2 px-4 border-darkblue hover:bg-darkblue hover:text-light rounded transition ease-in-out delay-150 hover:transition-all"
     type="submit"
    >
     Add Job
    </button>
   </div>
  </form>
 );
}

export default JobForm;
