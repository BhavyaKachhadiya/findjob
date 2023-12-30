import React from 'react'

function Jobcard() {
    function showModal() {
        var modal = document.getElementById('myModal');
        modal.classList.remove('hidden');
      }
  
      function hideModal() {
        var modal = document.getElementById('myModal');
        modal.classList.add('hidden');
      }
  
      // Close the modal if the user clicks outside of it
      window.onclick = function(event) {
        var modal = document.getElementById('myModal');
        if (event.target === modal) {
          hideModal();
        }
      };
  return (
    <>

    <div className="card h-[350px] w-[300px] m-5 border rounded-2xl">
            <div className="top bg-[#ffe1cc] h-[270px] m-2 rounded-2xl">
                <div className="p-3" ><p className="top__top p-2 flex justify-center bg-white w-[130px] font-medium rounded-full">20 May 2023</p></div>
                <div className="companys pl-4"><p>Amazon</p></div>
                <div className="jobs-title pl-4 flex justify-between items-center "><h2 className="text-2xl font-semibold">Senior UI/UX Designer</h2> <div className="mr-2"><img src="https://s3-symbol-logo.tradingview.com/amazon--600.png" className="rounded-full " width="40px" alt=""/></div></div>
                <div className="tags flex pl-4 mt-4 flex-wrap gap-2">
                    <span className="rounded-full border-[#d6bdab] border-2 px-3 py-2 font-light text-[#3f3a35] text-xs">Part time</span>
                    <span className="rounded-full border-[#d6bdab] border-2 px-3 py-2 font-light text-[#3f3a35] text-xs">Senior level</span>
                    <span className="rounded-full border-[#d6bdab] border-2 px-3 py-2 font-light text-[#3f3a35] text-xs">Distant</span>
                    <span className="rounded-full border-[#d6bdab] border-2 px-3 py-2 font-light text-[#3f3a35] text-xs">Project work</span>
                </div>
            </div>
            <div className="ml-4 bottom flex justify-between items-center">
                <div className="bottom__left">
                    <div className="price font-bold">₹ 1000/ hr</div>
                    <div className="at font-medium text-[#94969c]">India</div>
                </div>
                <div className="bottom__right mr-4">
                    <p className="Details px-4 py-2 font-light bg-black text-white rounded-full"><a href="#" onClick={showModal}>Details</a></p>
                </div>
            </div>
        </div>
        <div id="myModal" className="modal hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="modal-content bg-white p-8 rounded-lg h-[500px] w-[600px] m-auto;">
              <div className="top-modal flex justify-between">
                  <h2 className="text-3xl font-light">Amazon</h2>
                  <button  onClick={hideModal}>X</button>
              </div>
              <div className="mt-3 text-3xl font-bold">Senior UI/UX Designer</div>
              <div className="tags flex pl-4 mt-4 flex-wrap gap-2">
                <span className="rounded-full border-[#d6bdab] border-2 px-3 py-2 font-medium text-[#3f3a35] text-lg">Part time</span>
                <span className="rounded-full border-[#d6bdab] border-2 px-3 py-2 font-medium text-[#3f3a35] text-lg">Senior level</span>
                <span className="rounded-full border-[#d6bdab] border-2 px-3 py-2 font-medium text-[#3f3a35] text-lg">Distant</span>
                <span className="rounded-full border-[#d6bdab] border-2 px-3 py-2 font-medium text-[#3f3a35] text-lg">Project work</span>
            </div>
            <div className="jobs-details mt-3">
                <h4 className="text-2xl font-medium">Job Details</h4>
                <div className="role"><span className="font-medium" >Role: </span><span className="font-light">UI / UX Designer</span></div>
                <div className="industry"><span className=" font-medium">Industry Type: </span><span className="font-light">IT Services & Consulting</span></div>
                <div className="department"><span className=" font-medium">Department: </span><span className="font-light">UX, Design & Architecture</span></div>
            </div>
            <div className="education mt-3">
                <h4 className="text-2xl font-medium">Education</h4>
                <div className="UG"><span className="font-medium" >UG: </span><span className="font-light">B.Tech/B.E. in Any Specialization</span></div>
                <div className="PG"><span className="font-medium" >PG: </span><span className="font-light">MCA in Any Specialization, MS/M.Sc(Science) in Any Specialization</span></div>
            </div>
            <div className="bottom__left">
                <div className="mt-3 price text-2xl font-bold">₹ 1000/ hr</div>
                <div className="at font-medium text-lg text-[#94969c]">India</div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Jobcard;