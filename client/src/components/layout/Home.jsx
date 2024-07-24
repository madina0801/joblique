import HomeImage from "../../assets/home-image.webp";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Home() {
 const { t } = useTranslation();
 return (
  <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center text-darkblue tracking-normal dark:text-light">{t('homePage.homeTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-red-700">{t('homePage.homeTitleHighlight')}</span></h1>
    <p className="text-lg text-center text-neutral-700 max-w-4xl dark:text-light">{t('homePage.homeDesc')}</p>
    <button className="absolute left-2 rounded-lg bg-darkblue text-white font-semibold px-4 py-2">
     <NavLink to="/signup">{t("homePage.homeButton")}</NavLink>
    </button>

  </div>
 );
}

export default Home;
