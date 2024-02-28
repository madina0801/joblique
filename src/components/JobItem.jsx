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
  <div className="jobitem">
   <div>
    <div>
     <IoPersonSharp className="jobitem-icon" />
     <span>{job.position}</span>
    </div>

    <div>
     <FaRegBuilding className="jobitem-icon" />
     <span>{job.company}</span>
    </div>
   </div>

   <div>
    <div>
     <IoBriefcase className="jobitem-icon" />
     <span>{job.jobtype}</span>
    </div>

    <div>
     <IoCalendar className="jobitem-icon"/>
     <span>{job.dateApplied}</span>
    </div>
   </div>

   <div>
    <div id="status">
     <FaListCheck className="jobitem-icon" />
     <span>{job.status}</span>
    </div>

    <div id="delete-btn">
     <span onClick={handleDeleteJob}>
      <IoTrashBin className="jobitem-icon" />
      Delete
     </span>
    </div>
   </div>
  </div>
 );
}

export default JobItem;
