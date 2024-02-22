import JobItem from "./JobItem";

function JobList({ jobApplications }) {
  return (
    <div className="jobcontainer-grid">
      <h2 style={{ textAlign: "center" }}>All Jobs</h2>
      <div className="jobcontainer">
        {jobApplications.map((job, index) => (
          <JobItem key={index} job={job} idx={index} />
        ))}
      </div>
    </div>
  );
}

export default JobList;
