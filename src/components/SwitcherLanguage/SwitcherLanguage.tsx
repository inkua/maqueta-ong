import styles from "./SwitcherLanguage.module.css";

import { useEffect } from "react";

type SwitchProps = {
  languages: string[];
};

// eslint-disable-next-line react/prop-types
const SwitcherLanguage: React.FC<SwitchProps> = ({ languages }) => {
  //Use Effect to load the Script cdn google Translate
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'uk, en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
      }
    `;

    document.body.appendChild(script);
  }, [languages]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;

    document.body.appendChild(script);
  }, [languages]);

  return (
    <div className={styles.switcher}>
      <div
        id="google_translate_element"
        className={`google ${styles["google-button"]}`}
      ></div>
    </div>
  );
};

export default SwitcherLanguage;
