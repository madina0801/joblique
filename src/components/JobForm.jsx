// JobForm.js
import React, { useState } from 'react';

function JobForm({ onAddJob }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [dateApplied, setDateApplied] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = { company, position, dateApplied };
    onAddJob(newApplication);
    setCompany('');
    setPosition('');
    setDateApplied('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company:
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
      </label>
      <label>
        Position:
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
      </label>
      <label>
        Date Applied:
        <input type="date" value={dateApplied} onChange={(e) => setDateApplied(e.target.value)} />
      </label>
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;