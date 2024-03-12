import { IoTrashBin, IoPersonSharp, IoBriefcase, IoCalendar } from "react-icons/io5";
import { FaRegBuilding, FaListCheck } from "react-icons/fa6";

function JobItem({ job, idx, setJobApplications }) {
 const handleDeleteJob = () => {
  const existingApplications =
   JSON.parse(localStorage.getItem("jobApplications")) || [];

  if (idx >= 0) {
   existingApplications.splice(idx, 1);
   localStorage.setItem(
    "jobApplications",
    JSON.stringify(existingApplications)
   );
   setJobApplications([...existingApplications]);
  } else {
   console.log("no item found");
  }
 };

 return (
  // className="bg-slate-50 gap-[2em] w-[300px] flex justify-center flex-col shadow-lg p-2.5 rounded-[3px]"
  <div className="bg-lightblue w-[250px] p-7">

   <div className="flex space-x-12">
    <div className="flex items-center">
     <IoPersonSharp className="w-6 h-6 mr-2" />
     <span>{job.position}</span>
    </div>

    <div className="flex items-center">
     <FaRegBuilding className="w-6 h-6 mr-2" />
     <span>{job.company}</span>
    </div>
   </div>

   <div>
    <div className="flex items-center">
     <IoBriefcase className="w-6 h-6 mr-2" />
     <span>{job.jobtype}</span>
    </div>

    <div className="flex items-center">
     <IoCalendar className="w-6 h-6 mr-2"/>
     <span>{job.dateApplied}</span>
    </div>
   </div>

   <div className="flex items-center">
    <div id="status">
     <FaListCheck className="w-6 h-6 mr-2" />
     <span>{job.status}</span>
    </div>

    <div id="delete-btn">
     <span onClick={handleDeleteJob}>
      <IoTrashBin className="h-[1.2em] w-[1.2em]" />
      Delete
     </span>
    </div>
   </div>
   
  </div>
 );
}

export default JobItem;
