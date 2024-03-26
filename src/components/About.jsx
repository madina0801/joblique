import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const {t} = useTranslation();

 return (
  <div className="h-screen flex flex-col items-center text-darkblue bg-light dark:text-light dark:bg-darkblue pt-5">
   <h2 className="text-xl font-semibold">{t('')}</h2>
   <p className="text-md px-20 mt-3 text-justify">
    I wanted to create simple and effective application to keep track of jobs
    I've applied for. And decided to share it with everyone. JobTrackr is an
    open-source project. So, everyone can contribute, I review code changes and
    the contributors can see their changes live. I aim to make this community
    friendly and inviting.
   </p>
   <p className="text-center text-md mt-3">Created with love. &#x1F497;</p>
  </div>
 );
}

export default About;
