"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/HomePage.css"
import { useLanguage } from "./LanguageContext"

export default function HomePage() {
  const { t } = useLanguage()
  const [counts, setCounts] = useState({ students: 0, years: 0, yeshivot: 0 })

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
            <button className="home-donate-button">{t("donate")} </button>
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
          <h2 className="home-section-title">{t("nextActivity")}</h2>
          <div className="home-activity-card">
            <h3 className="home-activity-title">{t("activityTitle")}</h3>
            <p className="home-activity-description">{t("activityDescription")}</p>
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
