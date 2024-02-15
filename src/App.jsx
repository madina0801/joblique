import React, { useEffect, useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import Navbar from './components/layout/Navbar';
import ModalAbout from './components/layout/ModalAbout';
import './index.css';
import AboutModal from './components/layout/ModalAbout';

function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [jobApplications, setJobApplications] = useState([]);

  const openAboutModal = (e) => {
    e.preventDefault();
    setIsAboutModalOpen(true);
  }
  const closeAboutModal = (e) => {
    e.preventDefault();
    setIsAboutModalOpen(false);
  }

  useEffect(() => {
    const existingApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];
    setJobApplications(existingApplications);
  }, []);

  const addJobApplication = (newApplication) => {
    setJobApplications([...jobApplications, newApplication]);
  };

  return (
    <div >
      <Navbar onAboutClick={openAboutModal} />
      <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} />

      <div className='main'>
        <JobForm onAddJob={addJobApplication} />
        <JobList jobApplications={jobApplications} />

      </div>
    </div>

  );
}

export default App;