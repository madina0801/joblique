import { useState, useEffect } from "react";
import JobForm from "./JobForm";
import JobList from "./JobList";

function JobApp() {
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
  <div className="bg-light dark:bg-darkblue">
   <JobForm onAddJob={addJobApplication} />
   <JobList
    jobApplications={jobApplications}
    setJobApplications={setJobApplications}
   />
  </div>
 );
}

export default JobApp;
