import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import JobPosting from "./JobPosting";
import { useInView } from "react-intersection-observer";

function JobPostings() {
 const [jobPostings, setJobPostings] = useState([]);
 const [error, setError] = useState("");
 const [loading, setLoading] = useState(false);
 const [page, setPage] = useState(1);
 const [total, setTotal] = useState(0);
 const { ref, inView } = useInView();

 const fetchJobs = useCallback(async (numPage) => {
  setLoading(true);
  try {
   const res = await axios.get(import.meta.env.VITE_RSS_FEED, {
    params: { page: numPage, limit: 10 },
   });
   setJobPostings((prevJobs) => [...prevJobs, ...res.data.jobPostings]);
   setTotal(res.data.total);
  } catch (err) {
   setError(err.message);
  } finally {
   setLoading(false);
  }
 }, []);

 useEffect(() => {
  fetchJobs(page);
 }, [fetchJobs, page]);

 useEffect(() => {
  if (inView && !loading && jobPostings.length < total) {
   setPage((prevPage) => prevPage + 1);
  }
 }, [inView, loading, jobPostings.length, total]);

 return (
  <div className="mt-7">
   <h1 className="text-slate-800 mb-2 text-2xl text-center ">
    Jobs postings from{" "}
    <a
     className="hover:text-slate-500"
     target="_blank"
     href="https://remotive.com/"
    >
     Remotive
    </a>
   </h1>
   <ul className="text-slate-800 flex flex-col gap-5 mt-5">
    {jobPostings.map((posting, idx) => (
     <JobPosting posting={posting} key={idx} idx={idx} />
    ))}
   </ul>
   <div ref={ref}></div>
   {loading && <p className="text-center">Loading more jobs...</p>}
  </div>
 );
}

export default JobPostings;
