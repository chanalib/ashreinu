"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface LanguageContextType {
  language: "he" | "fr"
  setLanguage: (lang: "he" | "fr") => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "he",
  setLanguage: () => {},
  t: (key: string) => key,
})

const translations = {
  he: {
    // Header
    home: "דף הבית",
    about: "מי אנחנו",
    activities: "פעילויות",
    projects: "פרויקטים בשיתוף",
    stories: "סיפורי בחורים",
    recommendations: "המלצות רבנים",
    contact: "יצירת קשר",

    // HomePage
    title: "איגוד בני הישיבות אשרינו",
    subtitle: "בהכוונת גדולי ישראל",
    description: "הבית החם של בני הישיבות יוצאי צרפת בארץ ישראל",
    donate: "תרומה",
    viewActivities: "צפייה בפעילויות",
    newsletter: "הצטרפות לניוזלטר",
    getHelp: "פנייה לקבלת עזרה",

    // Stats
    studentsHelped: "בחורים מקבלים עזרה",
    yearsActive: "שנות פעילות",
    yeshivot: "ישיבות בישראל",

    // Activities
    nextActivity: "הפעילות הקרובה",
    activityTitle: "חלוקת חבילות אישית לבחורים בתחילת זמן אלול",
    activityDesc:
      "לקראת תחילת זמן אלול אנחנו מכינים חבילות אישיות מלאות באהבה לכל בחור - עם פריטים נחוצים, ממתקים וברכה אישית",

    // Projects
    projectTitle: "מרכזי תמיכה אזוריים",
    projectDesc: "הקמת נקודות תמיכה באזורים שונים לקירוב העזרה לבחורים",
    partners: "שותפים: עמותות ומוסדות מקומיים",
  },
  fr: {
    // Header
    home: "Accueil",
    about: "Qui sommes-nous",
    activities: "Activités",
    projects: "Projets en partenariat",
    stories: "Histoires de jeunes",
    recommendations: "Recommandations rabbiniques",
    contact: "Contact",

    // HomePage
    title: "Union des Bné Yeshivot originaires de France",
    subtitle: "Sous la direction des grands d'Israël",
    description: "Le foyer chaleureux des Bné Yeshivot originaires de France en Terre d'Israël",
    donate: "Faire un don",
    viewActivities: "Voir les activités",
    newsletter: "S'abonner à la newsletter",
    getHelp: "Demander de l'aide",

    // Stats
    studentsHelped: "jeunes aidés",
    yearsActive: "années d'activité",
    yeshivot: "yeshivot en Israël",

    // Activities
    nextActivity: "Prochaine activité",
    activityTitle: "Distribution de colis personnels aux jeunes en début d'Eloul",
    activityDesc:
      "À l'approche du début d'Eloul, nous préparons des colis personnels remplis d'amour pour chaque jeune - avec des articles nécessaires, des friandises et une bénédiction personnelle",

    // Projects
    projectTitle: "Centres de soutien régionaux",
    projectDesc: "Établissement de points de soutien dans différentes régions pour rapprocher l'aide des jeunes",
    partners: "Partenaires: associations et institutions locales",
  },
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"he" | "fr">("he")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["he"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider")
  return context
}
