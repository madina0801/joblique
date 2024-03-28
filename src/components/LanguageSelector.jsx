import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({ onSelectLanguage }) => {
 const { i18n } = useTranslation();
 const [showOptions, setShowOptions] = useState(false);
 
 const languages = [
  { code: "en", name: "English"},
  { code: "ru", name: "Russian" },
 ]; 

 const handleLanguageSelect = (languageCode) => {
  i18n.changeLanguage(languageCode);
  setShowOptions(false);
  localStorage.setItem("lng", languageCode);
 };

 return (
  <div className="relative w-20">
   <div className="relative">
    <button
     className="px-1 w-full bg-lightgray border border-gray-300 bg-white cursor-pointer text-left"
     id="openButton"
     onClick={() => setShowOptions(!showOptions)}
    >
     {i18n.language.toUpperCase()}
    </button>
    {showOptions && (
     <div className="absolute bg-lightgray top-full left-0 z-50 w-full border border-gray-300 text-sm">
      {languages.map((language) => (
       <button
        className="w-full px-1 py-2 border-b border-gray-300 hover:bg-gray-100 cursor-pointer text-left z-50"
        key={language.code}
        onClick={() => handleLanguageSelect(language.code)}
       >
        {language.name}
       </button>
      ))}
     </div>
    )}
   </div>
  </div>
 );
};

export default LanguageSelector;
