import day from "../assets/day.svg";
import building from "../assets/building.svg";
import position from "../assets/position.svg";
import briefcase from "../assets/briefcase.svg";
import list from "../assets/list.svg";
import { IoTrashBin } from "react-icons/io5";

function JobItem({ job, idx }) {
  const handleDeleteJob = () => {
    const existingApplications =
      JSON.parse(localStorage.getItem("jobApplications")) || [];

    if (idx >= 0) {
      existingApplications.splice(idx, 1);
      localStorage.setItem(
        "jobApplications",
        JSON.stringify(existingApplications)
      );
    } else {
      console.log("no item found");
    }
  };

  return (
    <div className="jobitem">
      <div>
        <div>
          <img src={position} alt="" />
          <span>{job.position}</span>
        </div>

        <div>
          <img src={building} alt="" />
          <span>{job.company}</span>
        </div>
      </div>

      <div>
        <div>
          <img src={briefcase} alt="" />
          <span>{job.jobtype}</span>
        </div>

        <div>
          <img src={day} alt="" />
          <span>{job.dateApplied}</span>
        </div>
      </div>
      {/*my modification*/}
      <div>
        <div id="status">
          <img src={list} alt="" />
          <span>{job.status}</span>
        </div>
        <div id="delete-btn">
          <span onClick={handleDeleteJob}>
            <IoTrashBin />
            Delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default JobItem;
