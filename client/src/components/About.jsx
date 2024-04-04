import React from "react";
import { useTranslation } from "react-i18next";

function About() {
 const { t } = useTranslation();

 return (
  <div className="h-screen flex flex-col items-center text-darkblue bg-light dark:text-light dark:bg-darkblue pt-5">
   <h2 className="text-xl font-semibold">{t("aboutPage.aboutTitle")}</h2>
   <p className="text-md px-20 mt-3 text-justify">
    {t("aboutPage.aboutDesc")}
   </p>
   <p className="text-center text-md mt-3">{t("aboutPage.aboutLine")} &#x1F497; </p>
  </div>
 );
}

export default About;
