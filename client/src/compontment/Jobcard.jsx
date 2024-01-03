import React, { useState, useEffect } from 'react';

const SkeletonLoading = () => (
  <div className="animate-pulse">
    {/* Your skeleton loading UI for the job card, adjust styles accordingly */}
    <div className="m-2 h-[270px] bg-gray-300 rounded-2xl">
      <div className="p-3">
        <p className="top__top p-2 flex justify-center bg-gray-100 w-[130px] h-[40px] font-medium rounded-full"></p>
      </div>
      <div className=' companys pl-4 '>
        <p className="pl-4 bg-gray-100 w-[100px] rounded-xl h-[20px] "></p>
      </div>
      <div className="jobs-title pl-4 flex justify-between items-center">
        <h2 className=" bg-gray-100 w-[200px] rounded-xl mt-1 h-[60px] "></h2>
        <div className="mr-2">
          <div className='rounded-full h-[40px] bg-gray-100 w-[40px]'></div>
        </div>
      </div>
        <div className="tags flex pl-4 mt-4 flex-wrap gap-2">
          <span className="rounded-full  border-2 px-3 py-2 h-[40px] w-[100px] font-light bg-gray-50 text-xs"></span>
          <span className="rounded-full  border-2 px-3 py-2 h-[40px] w-[100px] font-light bg-gray-50 text-xs"></span>
          <span className="rounded-full  border-2 px-3 py-2 h-[40px] w-[100px] font-light bg-gray-50 text-xs"></span>

        </div>

    </div>
    <div className="mt-3 m-2 flex items-center justify-between h-[50px] bg-gray-300 rounded-2xl">
      <div className='ml-3'><p className='bg-gray-100 rounded-lg w-[100px] h-[30px]'></p></div>
      <div className='rounded-full bg-gray-100 w-[82px] mr-2 h-[40px]'></div>
    </div>
    {/* ... Repeat for other job card details ... */}
  </div>
);


function Jobcard({ job }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay to show the skeleton loading effect
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);
  function showModal() {
    var modal = document.getElementById(`myModal${job._id}`);
    modal.classList.remove('hidden');
  }

  function hideModal() {
    var modal = document.getElementById(`myModal${job._id}`);
    modal.classList.add('hidden');
  }

  // Close the modal if the user clicks outside of it
  window.onclick = function (event) {
    var modal = document.getElementById(`myModal${job._id}`);
    if (event.target === modal) {
      hideModal();
    }
  };

  return (
    <>
      <div className="card h-[350px] w-[300px] m-5 border rounded-2xl">
        {loading ? (
          <SkeletonLoading />
        ) : (
          <>
            <div className="top bg-[#ffe1cc] h-[270px] m-2 rounded-2xl">
              <div className="p-3">
                <p className="top__top p-2 flex justify-center bg-white w-[130px] font-medium rounded-full">
                  {job.date.substring(0, 10)}
                </p>
              </div>
              <div className="companys pl-4">
                <p>{job.companyName}</p>
              </div>
              <div className="jobs-title pl-4 flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{job.post}</h2>
                <div className="mr-2 rounded-full overflow-hidden">
                  <img src={job.logo}  width="50px" alt="" />
                </div>
              </div>
              <div className="tags flex pl-4 mt-4 flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border-[#d6bdab] border-2 px-3 py-2 font-light text-[#3f3a35] text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="ml-4 bottom flex justify-between items-center">
              <div className="bottom__left">
                <div className="bottom__left">
                  <div className="mt-3 price font-bold">₹ {job.salary} / hr</div>
                  <div className="at font-medium text-[#94969c]">{job.location}</div>
                </div>
              </div>
              <div className="bottom__right mr-4">
                <p className="Details px-4 py-2 font-light bg-black text-white rounded-full">
                  <a href="#" onClick={showModal}>
                    Details
                  </a>
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <div id={`myModal${job._id}`} className="modal hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="modal-content bg-white p-8 rounded-lg h-[500px] w-[600px] m-auto;">
          <div className="top-modal flex justify-between">
            <h2 className="text-3xl font-light">{job.companyName}</h2>
            <button onClick={hideModal}>X</button>
          </div>
          <div className="mt-3 text-3xl font-bold">{job.post}</div>
          <div className="tags flex pl-4 mt-4 flex-wrap gap-2">
            {job.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border-[#d6bdab] border-2 px-3 py-2 font-medium text-[#3f3a35] text-lg"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="jobs-details mt-3">
            <h4 className="text-2xl font-medium">Job Details</h4>
            <div className="role"><span className="font-medium" >Role: </span><span className="font-light">{job.role}</span></div>
            <div className="industry"><span className=" font-medium">Industry Type: </span><span className="font-light">{job.industry}</span></div>
            <div className="department"><span className=" font-medium">Department: </span><span className="font-light">{job.department}</span></div>
          </div>
          <div className="education mt-3">
            <h4 className="text-2xl font-medium">Education</h4>
            <div className="UG"><span className="font-medium" >UG: </span><span className="font-light">{job.ug}</span></div>
            <div className="PG"><span className="font-medium" >PG: </span><span className="font-light">{job.pg}</span></div>
          </div>
          <div className="bottom__left">
            <div className="mt-3 price text-2xl font-bold">₹ {job.salary} hr</div>
            <div className="at font-medium text-lg text-[#94969c]">{job.location}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobcard;