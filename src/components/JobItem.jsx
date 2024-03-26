import { useTranslation } from "react-i18next";

import {
 IoTrashBin,
 IoPersonSharp,
 IoBriefcase,
 IoCalendar,
} from "react-icons/io5";

import { FaRegBuilding, FaListCheck } from "react-icons/fa6";

function JobItem({ job, idx, setJobApplications }) {
 const { t } = useTranslation();
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
  <div className="bg-light border border-darkblue text-darkblue w-fit p-7 rounded-lg shadow-xl shadow-lightblue
     hover:shadow-[#00ff00]">
        {/* if tailwind was working properly then it would be written like this hover:shadow-green-200 */}
   <div className="flex space-x-7 mb-7">
    <div className="flex items-center text-sm">
     <div>
      <IoPersonSharp className="w-6 h-6 mr-1" />
     </div>
     <span className="">{job.position}</span>
    </div>

    <div className="flex items-center text-sm">
     <div>
      <FaRegBuilding className="w-6 h-6 mr-1" />
     </div>
     <span>{job.company}</span>
    </div>
   
   <div id="delete-btn" className="text-sm">
     <span onClick={handleDeleteJob}>
      <IoTrashBin className="h-6 w-6 mr-1" />
      Delete
     </span>
    </div>
    </div>
   <div className="flex space-x-7 mb-7">
    <div className="flex items-center text-sm">
     <div>
      <IoBriefcase className="w-6 h-6 mr-1" />
     </div>
     <span>{job.jobtype}</span>
    </div>

    <div className="flex items-center text-sm">
     <IoCalendar className="w-6 h-6 mr-1" />
     <span>{job.dateApplied}</span>
    </div>
   </div>

   <div className="flex items-center place-content-around">
    <div id="status" className="text-sm">
     <FaListCheck className="w-6 h-6 mr-1" />
     <span>{job.status}</span>
    </div>

    <div id="delete-btn" className="text-sm">
     <span onClick={handleDeleteJob}>
      <IoTrashBin className="h-6 w-6 mr-1" />
      {t("form.deleteButton")}
     </span>
    </div>
   </div>
  </div>
 );
}

export default JobItem;
