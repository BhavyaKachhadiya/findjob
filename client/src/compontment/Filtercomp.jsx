import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Filtercomp({ onFilterChange }) {
  const [tags, setTags] = useState([]);
  const [companyName, setCompanyName] = useState([]);
 
  const handleCheckboxChange = () => {
    // Collect selected tags and company names
    const selectedTags = Array.from(document.querySelectorAll('input[name="tags"]:checked')).map(checkbox => checkbox.value);
    const selectedCompanies = Array.from(document.querySelectorAll('input[name="company"]:checked')).map(checkbox => checkbox.value);

    // Call the provided callback with the selected filters
    onFilterChange({
      tags: selectedTags,
      companyName: selectedCompanies, 
    });
  };

  useEffect(() => {
    const fetchTagsAndCompanyName = async () => {
      try {
        const tagsResponse = await axios.get('https://api-findjobs.vercel.app/api/tags');
        const companyNameResponse = await axios.get('https://api-findjobs.vercel.app/api/companyName');

        setTags(tagsResponse.data);
        setCompanyName(companyNameResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTagsAndCompanyName();
  }, []);
  
  return (
    <div className='h-[500px] w-[400px] rounded-lg m-2 bg-[#ffe1cc]'>
      <div id="filters" className='m-5'>
        <div id="tag">
          <label htmlFor="tags" className='text-2xl'>Tags</label>
        </div>
        <div id="tagschoose" className='mt-2'>
          {tags.map((tag) => (
            <div key={tag}>
              <input type="checkbox" id={tag} name="tags" value={tag} onChange={handleCheckboxChange} />
              <label className='ml-2' htmlFor={tag}>{tag}</label>
            </div>
          ))}
        </div>
        <div id="companyName" className='mt-2'>
          <label htmlFor="companyName" className='text-2xl'>Company Name</label>
        </div>
        <div id="companyNamechoose" className='mt-2'>
          {companyName.map((company) => (
            <div key={company}>
              <input type="checkbox" id={company} name="company" value={company} onChange={handleCheckboxChange} />
              <label className='ml-2' htmlFor={company}>{company}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filtercomp;
