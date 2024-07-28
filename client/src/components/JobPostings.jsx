import React, { useEffect, useState } from "react";
import axios from "axios";

function JobPostings() {
 const [jobPostings, setJobPostings] = useState([]);
 const [error, setError] = useState("");

 useEffect(() => {
  const fetchJobs = async () => {
   axios
    .get("http://localhost:5000/api/remotive-rss")
    .then((res) => {
     setJobPostings(res.data);
     console.log(jobPostings);
    })
    .catch((err) => setError(err.message));
  };

  fetchJobs();
 }, []);

 return (
  <div>
    <h1>Jobs are from <a target="_blank" href="https://remotive.com/">Remotive</a></h1>
   <ul className="text-darkblue">
    {jobPostings.map((posting, index) => (
     <li key={index}>
      <h2>{posting.jobTitle}</h2>
      <p>{posting.companyName}</p>
      <p>{posting.contentSnippet}</p>
      <a href={posting.jobLink} target="_blank" rel="noopener noreferrer">
       Apply Here
      </a>
     </li>
    ))}
   </ul>
  </div>
 );
}

export default JobPostings;
