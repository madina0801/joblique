import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({ languages, onSelectLanguage }) => {
 const { i18n } = useTranslation();
 const changeLanguage = (language) => {
  i18n.changeLanguage(language);
 };

 return (
  <div className="language-selector">
   <button onClick={() => changeLanguage("en")}>English</button>
   <button onClick={() => changeLanguage("ru")}>Russian</button>
  </div>
 );
};

export default LanguageSelector;
