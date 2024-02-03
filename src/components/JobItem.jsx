// JobItem.js


function JobItem({ job }) {
    return (
        <li>
            <strong>{job.company}</strong> - {job.position} (Applied on {job.dateApplied})
        </li>
    );
}

export default JobItem;
