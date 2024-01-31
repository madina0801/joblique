import React, { useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  const [jobApplications, setJobApplications] = useState([]);

  const addJobApplication = (newApplication) => {
    setJobApplications([...jobApplications, newApplication]);
  };

  return (
    <div>
      <h1>Job Application Tracker</h1>
      <JobForm onAddJob={addJobApplication} />
      <JobList jobApplications={jobApplications} />
    </div>
  );
}

export default App;