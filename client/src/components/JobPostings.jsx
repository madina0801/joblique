import React, { useEffect, useState } from "react";
import axios from "axios";
import JobPosting from "./JobPosting";

function JobPostings() {
 const [jobPostings, setJobPostings] = useState([]);
 const [error, setError] = useState("");

 useEffect(() => {
  const fetchJobs = async () => {
   axios
    .get("http://localhost:5000/api/remotive-rss")
    .then((res) => {
     setJobPostings(res.data);
    })
    .catch((err) => setError(err.message));
  };

  fetchJobs();
 }, []);

 return (
  <div className="mt-7">
   <h1 className="text-slate-800 mb-2 text-2xl text-center ">Jobs postings from <a className="hover:text-slate-500" target="_blank" href="https://remotive.com/">Remotive</a></h1>
   <ul className="text-slate-800 flex flex-col gap-5 mt-5">
    {jobPostings.map((posting, idx) => (
     <JobPosting
     posting={posting}
     idx={idx}
     />
    ))}
   </ul>
  </div>
 );
}

export default JobPostings;
