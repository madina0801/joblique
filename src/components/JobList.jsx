import { useEffect, useState } from "react";
import JobItem from "./JobItem";

function JobList({ jobApplications, setJobApplications }) {

  const [savedJobs, setSavedJobs] = useState([])
  useEffect(() =>{
    const storedJobs= JSON.parse(localStorage.getItem('jobApplications')) || []
    setSavedJobs(storedJobs)
  },[])
  
 return (
  <div className="jobcontainer">
    {jobApplications.length > 0 && (
    <div className="flex justify-center text-xl font-bold text-darkblue mt-5">
     <h2 className="">All Jobs</h2>
    </div>
    )}
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
