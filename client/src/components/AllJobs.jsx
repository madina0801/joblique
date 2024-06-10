import React, { useEffect, useState } from "react";
import axios from "axios";

const AllJobs = () => {
 const [jobPostings, setJobPostings] = useState([]);

 useEffect(() => {
  const fetchJobPostings = async () => {
   try {
    const response = await axios.get("http://localhost:5000/api/data");
    setJobPostings(response.data.jobs);
   } catch (error) {
    console.error("Error fetching job postings:", error);
   }
  };

  fetchJobPostings();
 }, []);

 return (
  <div>
   <div>
    <h1>Job Listings</h1>
    {jobPostings.length > 0 ? (
     <ul>
      {jobPostings.map((job, index) => (
       <li key={index} className="text-darkblue">
        <h2>{job.title}</h2>
        <p>{job.company_name}</p>
        <p>
         <strong>Location:</strong> {job.location}
        </p>
        <a href={job.application_url} target="_blank">Apply</a>
       </li>
      ))}
     </ul>
    ) : (
     <p>Loading...</p>
    )}
   </div>

   {/* {jobPostings ? (
    <div className="text-darkblue">
     <h1>Data from API:</h1>
     <pre>{JSON.stringify(jobPostings, null, 2)}</pre>
    </div>
   ) : (
    <p>Loading...</p>
   )} */}
  </div>
 );
};

export default AllJobs;
