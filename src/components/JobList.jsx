import JobItem from "./JobItem";

function JobList({ jobApplications }) {
 return (
  <div>
   <h2>Job Applications</h2>
   <ul>
    {jobApplications.map((job, index) => (
     <JobItem key={index} job={job} />
    ))}
   </ul>
  </div>
 );
}

export default JobList;