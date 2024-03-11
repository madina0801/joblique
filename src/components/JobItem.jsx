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
  <div className="bg-slate-50 gap-[2em] w-[300px] flex justify-center flex-col shadow-lg p-2.5 rounded-[3px]">

   <div className="gap-[0.8em] flex justify-around">
    <div>
     <IoPersonSharp className="h-[1.2em] w-[1.2em]" />
     <span>{job.position}</span>
    </div>

    <div>
     <FaRegBuilding className="h-[1.2em] w-[1.2em]" />
     <span>{job.company}</span>
    </div>
   </div>

   <div className="gap-[0.8em] flex justify-around">
    <div>
     <IoBriefcase className="h-[1.2em] w-[1.2em]" />
     <span>{job.jobtype}</span>
    </div>

    <div>
     <IoCalendar className="h-[1.2em] w-[1.2em]"/>
     <span>{job.dateApplied}</span>
    </div>
   </div>

   <div className="gap-[0.8em] flex justify-around">
    <div id="status">
     <FaListCheck className="h-[1.2em] w-[1.2em]" />
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
