import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from 'react-icons/fa';

function About() {
 const { t } = useTranslation();

 return (
  <div className="h-screen flex flex-col items-center text-darkblue dark:text-light dark:bg-darkblue pt-5">
   <h2 className="text-xl font-semibold">{t("aboutPage.aboutTitle")}</h2>
   <p className="text-md px-20 mt-3 text-justify">
    {t("aboutPage.aboutDesc")}
   </p>
   <p className="text-center text-md mt-3">{t("aboutPage.aboutLine")} &#x1F497; </p>

   <a
    href="https://github.com/madina0801/JobTrackr"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-lightblue mt-5"
   >
    <FaGithub className="mr-2" />
    {t("aboutPage.githubLink")}
   </a>
  </div>
 );
}

export default About;
