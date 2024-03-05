import { useEffect, useState } from "react";
import JobItem from "./JobItem";

function JobList({ jobApplications, setJobApplications }) {

 return (
  <div className="jobcontainer">
  {localStorage.getItem("jobApplications") !== "[]"? (
    <div className="flex justify-center text-xl font-bold text-darkblue mt-5">
     <h2 className="">All Jobs</h2>
    </div>
  ) : null}
    
   {jobApplications.map((job, index) => (
    <JobItem
     key={index}
     job={job}
     idx={index}
     setJobApplications={setJobApplications}
    />
   ))}
  </div>
 );
}

export default JobList;
