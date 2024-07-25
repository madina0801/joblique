import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import JobForm from "./JobForm";
import JobList from "./JobList";

function JobApp() {
 const { t } = useTranslation();
 const [jobApplications, setJobApplications] = useState([]);

 useEffect(() => {
  const existingApplications =
   JSON.parse(localStorage.getItem("jobApplications")) || [];
  setJobApplications(existingApplications);
 }, []);

 const addJobApplication = (newApplication) => {
  const updatedApplications = [...jobApplications, newApplication];
  setJobApplications(updatedApplications);
  localStorage.setItem("jobApplication", JSON.stringify(updatedApplications));
 };
 return (
  <div className="dark:bg-darkblue">
   <JobForm onAddJob={addJobApplication} />
   {jobApplications.length > 0 && (
    <div className="flex justify-center text-xl font-bold text-darkblue mt-10 dark:text-light">
     <h2 className="text-2xl">{t("jobsTitle")}</h2>
     <span>{jobApplications.length}</span>
    </div>
   )}
   <JobList
    jobApplications={jobApplications}
    setJobApplications={setJobApplications}
   />
  </div>
 );
}

export default JobApp;
