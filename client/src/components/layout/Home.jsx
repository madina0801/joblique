import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Home() {
 const { t } = useTranslation();
 return (
  <div className="flex flex-col items-center mt-10 lg:mt-20">
   <h1 className="mb-5 text-4xl sm:text-6xl lg:text-7xl text-center text-darkblue tracking-normal dark:text-light">
    {t("homePage.homeTitle")}{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-red-700">
     {t("homePage.homeTitleHighlight")}
    </span>
   </h1>
   <p className="mb-5 text-lg text-center text-neutral-700 max-w-4xl dark:text-light">
    {t("homePage.homeDesc")}
   </p>
   <div className="flex items-start">
    <button className="rounded-lg border border-darkblue bg-darkblue text-white font-semibold px-4 py-2 mr-3 dark:bg-light dark:text-darkblue dark:border-light">
     <NavLink to="/signup">{t("homePage.homeButton")}</NavLink>
    </button>
    <button className="rounded-lg bg-transparent text-darkblue border border-darkblue font-semibold px-4 py-2 dark:border-light dark:text-light">
     <NavLink to="/about">{t("homePage.moreButton")}</NavLink>
    </button>
   </div>
  </div>
 );
}

export default Home;
