// JobList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Jobcard from './Jobcard';

function JobList({ filters }) {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'http://localhost:3000/api/jobs/filter';

        // Apply filters if available
        if (filters && (filters.tags || filters.companies)) {
          const params = new URLSearchParams(filters);
          url += `?${params.toString()}`;
          console.log(url);
        }

        const response = await axios.get(url);
        setJobData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filters]);

  return (
    <>
      {jobData.map((job) => (
        <Jobcard key={job._id} job={job} />
      ))}
    </>
  );
}

export default JobList;