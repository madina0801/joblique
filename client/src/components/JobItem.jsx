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
   className="w-full relative flex md:flex-row min-[320px]:flex-col gap-3 border rounded-lg bg-light  border-darkblue text-darkblue p-7 shadow-xl shadow-lightblue hover:shadow-[darkblue]"
  >
     <div className="flex gap-1">
      <IoPersonSharp className="w-5 h-5 mr-1" />
      <span className="">{job.position}</span>
     </div>


     <div className="flex gap-1">
      <FaRegBuilding className="w-5 h-5 mr-1" />
      <span>{job.company}</span>
     </div>


     <div className="flex gap-1">
      <IoBriefcase className="w-5 h-5 mr-1" />
      <span>{job.jobtype}</span>
     </div>

    <div className="flex gap-1">
     <IoCalendar className="w-5 h-5 mr-1" />
     <span>{job.dateApplied}</span>
    </div>


    <div className="flex gap-1">
     <FaListCheck className="w-5 h-5 mr-1" />
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
