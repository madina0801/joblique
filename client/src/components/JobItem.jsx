import { useTranslation } from "react-i18next";

import {
 IoPersonSharp,
 IoBriefcase,
 IoCalendar,
} from "react-icons/io5";

import { RxCross2 } from "react-icons/rx";

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
  <div
   className="w-full relative flex border rounded-lg bg-light  border-darkblue text-darkblue p-7 shadow-xl shadow-lightblue hover:shadow-[darkblue]"
  >
     <div>
      <IoPersonSharp className="w-6 h-6 mr-1" />
     </div>
     <span className="">{job.position}</span>


     <div>
      <FaRegBuilding className="w-6 h-6 mr-1" />
     </div>
     <span>{job.company}</span>


     <div>
      <IoBriefcase className="w-6 h-6 mr-1" />
     </div>
     <span>{job.jobtype}</span>

    <div className="flex items-center text-sm">
     <IoCalendar className="w-6 h-6 mr-1" />
     <span>{job.dateApplied}</span>
    </div>


    <div id="status" className="text-sm">
     <FaListCheck className="w-6 h-6 mr-1" />
     <span>{job.status}</span>
    </div>

    <div id="delete-btn" className="cursor-pointer text-gray-500 absolute top-1 right-1 text-sm hover:text-gray-950">
     <span onClick={handleDeleteJob}>
      <RxCross2 className="h-6 w-6 mr-1" />
     </span>
    </div>
  </div>
 );
}

export default JobItem;
