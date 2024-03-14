import { useEffect, useState } from "react";
import JobItem from "./JobItem";

function JobList({ jobApplications, setJobApplications }) {
 const [savedJobs, setSavedJobs] = useState([]);
 useEffect(() => {
  const storedJobs = JSON.parse(localStorage.getItem("jobApplications")) || [];
  setSavedJobs(storedJobs);
 }, []);
 console.log(jobApplications);

 return (
  <div>
   {jobApplications.length > 0 && (
    <div className="flex justify-center text-xl font-bold text-darkblue mt-5">
     <h2 className="">All Jobs</h2>
    </div>
   )}
   <div className="flex justify-center m-10">
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
     {jobApplications.map((job, index) => (
      <JobItem
       key={index}
       job={job}
       idx={index}
       setJobApplications={setJobApplications}
      />
     ))}
    </div>
   </div>
  </div>
 );
}

export default JobList;
