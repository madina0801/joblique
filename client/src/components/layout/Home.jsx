import HomeImage from "../../assets/home-image.webp";
import { useTranslation } from "react-i18next";

function Home() {
 const { t } = useTranslation();
 return (
  <div className="relative text-center text-darkblue">
   <img src={HomeImage} className="object-cover" />
   <div className="absolute -translate-x-2/4 -translate-y-2/4 right-60 top-52">
    <h1>{t("homePage.homeTitle")}</h1>
    <p className="text-left absolute left-2 bottom-2 text-xl">
     {t("homePage.homeDesc")}
    </p>
    <button className="absolute left-2 rounded-lg bg-darkblue text-white font-semibold px-4 py-2">
     {t("homePage.homeButton")}
    </button>
   </div>
  </div>
 );
}

export default Home;
