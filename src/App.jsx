import React, { useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import './index.css';

function App() {
  const [jobApplications, setJobApplications] = useState([]);

  const addJobApplication = (newApplication) => {
    setJobApplications([...jobApplications, newApplication]);
  };

  return (
    <div>
      <h1>JobTrackr</h1>
      <JobForm onAddJob={addJobApplication} />
      <JobList jobApplications={jobApplications} />
    </div>
  );
}

export default App;