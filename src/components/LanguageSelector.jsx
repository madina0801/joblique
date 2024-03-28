import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({ languages, onSelectLanguage }) => {
 const { i18n } = useTranslation();
 const [showOptions, setShowOptions] = useState(false);

 const handleLanguageSelect = (languageCode) => {
  i18n.changeLanguage(languageCode);
  setShowOptions(false);
  localStorage.setItem("lng", languageCode);
 };

 return (
  <div className="relative w-48">
   <div className="relative">
    <button
     className="w-full px-4 py-2 border border-gray-300 rounded bg-white cursor-pointer text-left"
     onClick={() => setShowOptions(!showOptions)}
    >
     {i18n.language}
    </button>
    {showOptions && (
     <div className="absolute top-full left-0 z-50 w-full border border-gray-300 rounded-b bg-white">
      {languages.map((language) => (
       <button
        className="w-full px-4 py-2 border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
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
