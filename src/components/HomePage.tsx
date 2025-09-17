"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "../styles/HomePage.css"
import { useLanguage } from "./LanguageContext"

export default function HomePage() {
  const { t } = useLanguage()
  const [counts, setCounts] = useState({ students: 0, years: 0, yeshivot: 0 })
  const navigate = useNavigate()

  // Activities data (copied from ActivitiesPage)
  const activities = [
    {
      id: 1,
      title: "שיעור תורה שבועי",
      description: "שיעור תורה מעמיק עם הרב המוסד, כל שבוע נושא חדש ומרתק מעולם ההלכה והאגדה",
      image: "/1.jpg",
      frequency: "שבועי",
      uploadDate: "2024-01-15",
    },
    {
      id: 2,
      title: "חברותא לימוד",
      description: "זיווג תלמידים ללימוד בחברותא, פיתוח כישורי לימוד והעמקה בסוגיות",
      image: "/2.jpg",
      frequency: "יומי",
      uploadDate: "2024-02-10",
    },
    {
      id: 3,
      title: "סיוע כלכלי",
      description: "תמיכה כלכלית לתלמידי ישיבות הזקוקים לעזרה, כולל מלגות ותמיכה בהוצאות לימוד",
      image: "/3.jpg",
      frequency: "חודשי",
      uploadDate: "2024-03-05",
    },
    {
      id: 4,
      title: "ארוחות שבת",
      description: "ארוחות שבת חמות ומזינות לתלמידים, יצירת אווירה משפחתית ותמיכה רוחנית",
      image: "/4.jpg",
      frequency: "שבועי",
      uploadDate: "2024-04-20",
    },
    {
      id: 5,
      title: "ייעוץ אישי",
      description: "ליווי אישי ותמיכה רגשית לתלמידים, פתרון בעיות אישיות והכוונה בחיים",
      image: "/logo.png",
      frequency: "לפי צורך",
      uploadDate: "2024-05-12",
    },
  ]

  // Find the most recent activity
  const mostRecentActivity = activities.reduce((latest, activity) => {
    return new Date(activity.uploadDate) > new Date(latest.uploadDate) ? activity : latest
  }, activities[0])

  // Animated counter effect
  useEffect(() => {
    const targets = { students: 500, years: 8, yeshivot: 35 }
    const duration = 2000
    const steps = 60

    const increment = {
      students: targets.students / steps,
      years: targets.years / steps,
      yeshivot: targets.yeshivot / steps,
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        students: Math.min(Math.floor(increment.students * step), targets.students),
        years: Math.min(Math.floor(increment.years * step), targets.years),
        yeshivot: Math.min(Math.floor(increment.yeshivot * step), targets.yeshivot),
      })

      if (step >= steps) {
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="home-page">
      <section className="home-hero-section">
        <div className="home-hero-container">
          <div className="home-hero-content animate-fade-in-up">
            <h1 className="home-hero-title">{t("title")}</h1>
            <p className="home-hero-subtitle">{t("subtitle")}</p>
            <p className="home-hero-description">{t("description")}</p>
          </div>

          {/* Action Buttons */}
          <div className="home-action-buttons">
            <button className="home-donate-button">  <a
                  href="https://nedarimplus.org/?aff=ashreinu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  תרום כעת
                </a> </button>
            <Link to="/activities" className="home-view-activities-btn">
              {t("viewActivities")}
            </Link>
          </div>

          {/* Stats Section */}
          <div className="home-stats-grid">
            <div className="home-stat-card animate-count-up">
              <div className="home-stat-number home-primary">{counts.students}+</div>
              <div className="home-stat-label">{t("studentsHelped")}</div>
            </div>
            <div className="home-stat-card animate-count-up">
              <div className="home-stat-number home-secondary">{counts.years}+</div>
              <div className="home-stat-label">{t("yearsActive")}</div>
            </div>
            <div className="home-stat-card animate-count-up">
              <div className="home-stat-number home-accent">{counts.yeshivot}+</div>
              <div className="home-stat-label">{t("yeshivot")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Activity Section */}
        <section className="home-next-activity-section">
          <div className="home-activity-container">
            <h2 className="home-section-title">הפעילות האחרונה</h2>
            <div className="activity-card-main home-next-activity-card" onClick={() => navigate(`/activity/${mostRecentActivity.id}`)} style={{ cursor: "pointer" }}>
              <div className="activity-image">
                <img
                  src={mostRecentActivity.image || "/placeholder.svg"}
                  alt={mostRecentActivity.title}
                />
                <div className="frequency-badge">{mostRecentActivity.frequency}</div>
              </div>
              <div className="activitys-content">
                <h2 className="activity-title">{mostRecentActivity.title}</h2>
                <p className="activity-description">{mostRecentActivity.description}</p>
                <div className="activity-meta">
                  <span className="upload-date">
                    הועלה: {new Date(mostRecentActivity.uploadDate).toLocaleDateString("he-IL")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Newsletter & Help Section */}
      <section className="home-newsletter-section">
        <div className="home-newsletter-container">
          <div className="home-newsletter-grid">
            <div className="home-newsletter-card">
              <h3 className="home-card-title">{t("newsletter")}</h3>
              <input type="email" placeholder="כתובת אימייל" className="home-email-input" />
              <button className="home-subscribe-btn">הצטרפות</button>
            </div>
            <div className="home-help-card">
              <h3 className="home-card-title">{t("getHelp")}</h3>
              <p className="home-card-description">זקוקים לעזרה? אנחנו כאן בשבילכם</p>
              <Link to="/contact" className="home-help-btn">
                פנייה לעזרה
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
