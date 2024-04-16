import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "/node_modules/flag-icons/css/flag-icons.min.css";

const LanguageSelector = ({ onSelectLanguage }) => {
 const { i18n } = useTranslation();

 const [showOptions, setShowOptions] = useState(false);

 const languages = [
  { code: "en", name: "English", flagCode: "gb" },
  { code: "ru", name: "Русский", flagCode: "ru" },
  { code: "pl", name: "Polski", flagCode: "pl" },
 ];

 const handleLanguageSelect = (languageCode) => {
  i18n.changeLanguage(languageCode);
  setShowOptions(false);
  localStorage.setItem("lng", languageCode);
 };

 const selectedLang = languages.find(
  (language) => language.code === i18n.language
 );

 return (
  <div className="relative w-32">
   <div className="absolute left-12 top-6 md:left-44 md:top-5 lg:left-0 lg:top-0 w-[120px]">
    <div className="w-fit shadow-lg">
     <button
      className={`w-fit bg-white border border-lightblue cursor-pointer text-left ${
       showOptions ? "rounded-t" : "rounded"
      } `}
      id="openButton"
      onClick={() => setShowOptions(!showOptions)}
     >
      <span className={`px-5 fi fi-${selectedLang.flagCode}`}></span>
     </button>
     {showOptions && (
      <div className="absolute bg-white">
       {languages.map((language, inx) => (
        <button
         className={`w-full px-1 py-2 shadow-lg border-b border-lightblue hover:bg-gray-100 cursor-pointer text-left z-50 ${
          inx % 2 === 0 ? "rounded-r" : "rounded-l"
         }`}
         key={language.code}
         onClick={() => handleLanguageSelect(language.code)}
        >
         {language.name}
         <span className={`ml-5 fi fi-${language.flagCode}`}></span>
        </button>
       ))}
      </div>
     )}
    </div>
   </div>
  </div>
 );
};

export default LanguageSelector;
