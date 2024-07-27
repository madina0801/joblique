import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import JobItem from "./JobItem";

function JobList({ jobApplications, setJobApplications }) {
 const { t } = useTranslation();
 const [savedJobs, setSavedJobs] = useState([]);
 useEffect(() => {
  const storedJobs = JSON.parse(localStorage.getItem("jobApplications")) || [];
  setSavedJobs(storedJobs);
 }, []);

 return (
    <div className="lg:mx-20 mx-10 mt-7 mb-40 items-center flex flex-col gap-3">
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
