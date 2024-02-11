import day from "../assets/day.svg"
import building from "../assets/building.svg";
import position from "../assets/position.svg";
import briefcase from "../assets/briefcase.svg";
import list from "../assets/list.svg";

function JobItem({ job }) {
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
     <div  id="status" >
       <img src={list} alt="" />
       <span>{job.status}</span>
     </div>
     
   </div>
 );
}

export default JobItem;
