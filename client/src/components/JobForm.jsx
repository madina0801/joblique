// JobForm.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../index.css";
import Error from "./Error";

import { RiArrowDropDownLine, RiCalendar2Fill } from "react-icons/ri";

function JobForm({ onAddJob }) {
 const { t } = useTranslation();
 const [isfill, setIsfill] = useState(true);
 const [company, setCompany] = useState("");
 const [position, setPosition] = useState("");
 const [dateApplied, setDateApplied] = useState("");
 const [jobtype, setJobtype] = useState("");
 const [status, setStatus] = useState("");

 const [startDate, setStartDate] = useState(new Date());
 const [selectedDate, setSelectedDate] = useState(new Date());

 const handleSubmit = (e) => {
  e.preventDefault();
  const newApplication = { company, position, dateApplied, jobtype, status };

  if (company.length == 0 || position.length == 0 || dateApplied.length == 0) {
   setIsfill(false);

   setTimeout(() => {
    setIsfill(true);
   }, 2000);
  }
  if (company.length == 0 || position.length == 0 || dateApplied.length == 0)
   return;

  onAddJob(newApplication);
  saveToLocalStorage(newApplication);

  setCompany("");
  setPosition("");
  setDateApplied("");
 };

 const saveToLocalStorage = (newApplication) => {
  const existingApplications =
   JSON.parse(localStorage.getItem("jobApplications")) || [];
  const updatedApplications = [...existingApplications, newApplication];
  localStorage.setItem("jobApplications", JSON.stringify(updatedApplications));
 };

 return (
  <div className="flex justify-center">
   <form
    className="flex flex-col gap-3 w-full max-w-lg mt-5"
    onSubmit={handleSubmit}
   >
    <div>
     <label
      className="block uppercase tracking-wide text-darkblue text-xs font-bold mb-2 dark:text-light"
      htmlFor="company"
     >
      {t("form.company")}
     </label>
     <input
      className="appearance-none block w-full bg-gray text-darkblue border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      id="company"
      type="text"
      value={company}
      placeholder="Company Name"
      onChange={(e) => setCompany(e.target.value)}
     />
    </div>

    <div>
     <label
      className="block uppercase tracking-wide text-darkblue text-xs font-bold mb-2 dark:text-light"
      htmlFor="position"
     >
      {t("form.position")}
     </label>
     <input
      className="appearance-none block w-full bg-gray text-darkblue border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
      id="position"
      type="text"
      value={position}
      placeholder="Job Position"
      onChange={(e) => setPosition(e.target.value)}
     />
    </div>

    <div>
     <label
      className="block uppercase tracking-wide text-darkblue text-xs font-bold mb-2 dark:text-light"
      htmlFor="date"
     >
      {" "}
      {t("form.dateApplied")}
     </label>
     <div className="">
      <DatePicker
       id="date"
       className="w-full px-5 text-slate-900 rounded-md focus:outline-none focus:border focus:border-gray-600"
       showIcon
       toggleCalendarOnIconClick
       selected={selectedDate}
       onChange={(date) => {
        setDateApplied(JSON.stringify(date).slice(1, 11));
        setSelectedDate(date);
       }}
      />
     </div>
    </div>

    <div className="-mx-3 flex flex-wrap">
     <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
      <label
       className="block uppercase tracking-wide text-darkblue text-xs font-bold mb-2 dark:text-light"
       htmlFor="type"
      >
       {" "}
       {t("form.jobType")}
      </label>
      <div className="relative">
       <select
        className="block appearance-none w-full bg-gray border border-gray-200 text-darkblue py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white"
        id="type"
        onChange={(e) => setJobtype(e.target.value)}
       >
        <option className="text-sm" value="">
         {t("form.select")}
        </option>
        <option value={t("form.typeInternship")}>
         {t("form.typeInternship")}
        </option>
        <option value={t("form.typePart")}>{t("form.typePart")}</option>
        <option value={t("form.typeFull")}>{t("form.typeFull")}</option>
       </select>

       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-darkblue">
        <RiArrowDropDownLine className="fill-current h-5 w-5" />
       </div>
      </div>
     </div>
     <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
      <label
       className="block uppercase tracking-wide text-darkblue gray-700 text-xs font-bold mb-2 dark:text-light"
       htmlFor="status"
      >
       {" "}
       {t("form.jobStatus")}
      </label>
      <div className="relative">
       <select
        className="block appearance-none w-full bg-gray border border-gray-200 text-darkblue py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white"
        id="status"
        onChange={(e) => setStatus(e.target.value)}
       >
        <option value="">{t("form.select")}</option>
        <option value={t("form.statusApplied")}>
         {t("form.statusApplied")}
        </option>
        <option value={t("form.statusPending")}>
         {t("form.statusPending")}
        </option>
        <option value={t("form.statusInterviewing")}>
         {t("form.statusInterviewing")}
        </option>
        <option value={t("form.statusHired")}>{t("form.statusHired")}</option>
        <option value={t("form.statusRejected")}>
         {t("form.statusRejected")}
        </option>
       </select>

       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-darkblue">
        <RiArrowDropDownLine className="fill-current h-5 w-5" />
       </div>
      </div>
     </div>
    </div>

    {!isfill && <Error className="text-danger" />}
    <div className="flex justify-center mt-5">
     <button
      className="bg-transparent font-semibold text-darkblue border py-2 px-4 border-darkblue hover:bg-darkblue hover:text-light rounded transition ease-in-out delay-150 hover:transition-all dark:bg-light dark:hover:bg-darkblue dark:hover:border-light dark:hover:text-light"
      type="submit"
     >
      {t("form.jobButton")}
     </button>
    </div>
   </form>
  </div>
 );
}

export default JobForm;
