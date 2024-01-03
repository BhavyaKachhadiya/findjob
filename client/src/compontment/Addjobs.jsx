import React, { useState } from 'react';

const Addjobs = () => {
  function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  const [jobData, setJobData] = useState({
    companyName: '',
    logo:'',
    post: '',
    tags: [],
    salary: 0,
    location: '',
    role: '',
    industry: '',
    department: '',
    ug: '',
    pg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: trim(value),
    }));
  };

  const handleTagsChange = (e) => {
    const tagsArray = e.target.value.split(',').map((tag) => trim(tag));
    setJobData((prevData) => ({
      ...prevData,
      tags: tagsArray,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/addjobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        // Handle success, maybe redirect or show a success message
        console.log('Job added successfully!');
      } else {
        // Handle errors, maybe show an error message
        console.error('Failed to add job.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
            Company Name:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            type="text"
            name="companyName"
            value={jobData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logo">
            Company Logo (URL):
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            type="text"
            name="logo"
            value={jobData.logo}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="post">
            Post:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            type="text"
            name="post"
            value={jobData.post}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
            Tags (comma-separated):
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            type="text"
            name="tags"
            value={jobData.tags.join(',')}
            onChange={handleTagsChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
            Salary:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            type="number"
            name="salary"
            value={jobData.salary}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            type="text"
            name="role"
            value={jobData.role}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="industry">
            Industry:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            type="text"
            name="industry"
            value={jobData.industry}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
            Department:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            type="text"
            name="department"
            value={jobData.department}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ug">
            UG:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            type="text"
            name="ug"
            value={jobData.ug}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pg">
            PG:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            type="text"
            name="pg"
            value={jobData.pg}
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          type="submit" onClick={handleSubmit}
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default Addjobs;
