"use client"

import { useLanguage } from "./LanguageContext"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="page-title">{t("about")}</h1>
        <div className="about-content">
          <div className="about-card">
            <div className="card-header">
              <h2 className="card-title">אודות ארגון אשרינו</h2>
            </div>
            <div className="card-content">
              <p className="about-text">
                ארגון אשרינו הוקם במטרה לתמוך ולחזק את בני הישיבות יוצאי צרפת בארץ ישראל. אנו פועלים בהכוונת גדולי ישראל
                ומספקים מגוון רחב של שירותים ופעילויות המותאמים לצרכים הייחודיים של קהילתנו.
              </p>
              <p className="about-text">
                הארגון מתמחה במתן תמיכה רוחנית, חומרית וחברתית לבחורי הישיבות, תוך יצירת קהילה חמה ותומכת המסייעת להם
                להשתלב בחברה הישראלית תוך שמירה על זהותם התרבותית והדתית.
              </p>
              <div className="mission-section">
                <h3 className="mission-title">המשימה שלנו</h3>
                <ul className="mission-list">
                  <li>תמיכה חומרית ורוחנית בבני הישיבות</li>
                  <li>יצירת קהילה תומכת וחמה</li>
                  <li>חיזוק הזהות התרבותית והדתית</li>
                  <li>סיוע בהשתלבות בחברה הישראלית</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
