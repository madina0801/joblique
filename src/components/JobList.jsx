// JobList.js
import React from 'react';

function JobList({ jobApplications }) {
  return (
    <div>
      <h2>Job Applications</h2>
      <ul>
        {jobApplications.map((job, index) => (
          <li key={index}>
            <strong>{job.company}</strong> - {job.position} (Applied on {job.dateApplied})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;