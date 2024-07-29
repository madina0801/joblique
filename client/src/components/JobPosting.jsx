function JobPosting({posting, idx}) {
  return (
    <li class="border pb-5 px-14 md:relative border-b-neutral-400 border-r-0 border-l-0 border-t-0" key={idx}>
      <h2 class="font-semibold">{posting.jobTitle}</h2>
      <p class="text-slate-600 text-opacity-80">{posting.companyName}</p>
      <p class="md:absolute top-0 right-5 text-slate-600 text-opacity-80">{posting.pubDate}</p>
      <p class="mb-3">{posting.contentSnippet}</p>
      <a class="border border-slate-700 px-4 py-2 rounded-md hover:bg-slate-800 hover:text-slate-50 hover:transition-all" href={posting.jobLink} target="_blank" rel="noopener noreferrer">
       Apply
      </a>
    </li>
  )
};

export default JobPosting;