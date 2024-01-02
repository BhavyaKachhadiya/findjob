import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Jobcard from './compontment/Jobcard';
import Addjobs from './compontment/Addjobs';

function App() {
  const [showAddJobs, setShowAddJobs] = useState(false);
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/jobs');
        setJobData(response.data); // Assuming data is an array of job objects
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleToggleAddJobs = () => {
    setShowAddJobs(!showAddJobs);
  };

  return (
    <div>
      <nav>
        <ul className='flex justify-center gap-5 font-medium text-2xl'>
          <li>
            <button onClick={() => setShowAddJobs(false)}>Home</button>
          </li>
          <li>
            <button onClick={handleToggleAddJobs}>Add Jobs</button>
          </li>
        </ul>
      </nav>

      {showAddJobs ? (
        <Addjobs />
      ) : (
        // <div className="flex justify-center">
          <div className="grid grid-cols-3 place-items-center w-[1060px]">
           {jobData.map((job) => (
          <Jobcard key={job._id} job={job} />
        ))}
          </div>
        // </div>
      )}
    </div>
  );
}

export default App;
