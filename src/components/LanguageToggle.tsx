"use client"

import { useLanguage } from "./LanguageContext"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
      <div className="language-toggle">
        <button
          onClick={() => setLanguage(language === "he" ? "fr" : "he")}
          className="language-btn"
        >
          {language === "he" ? "FR" : "עב"}
          <span className="language-btn-tooltip">
            {language === "he" ? "לחץ לשינוי השפה לצרפתית" : "Appuyez pour changer la langue en hébreu"}
          </span>
        </button>
      </div>
  )
}
