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
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content animate-fade-in-up">
            <h1 className="hero-title">{t("title")}</h1>

            <p className="hero-subtitle">{t("subtitle")}</p>
            <p className="hero-description">{t("description")}</p>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
                <Link to="/donate" className="donate-button alt-donate">
                  תרום והיה שותף
                </Link>
                <Link to="/activities" className="view-activities-btn alt-activities">
                  {t("viewActivities")}
                </Link>
          </div>

          {/* Stats Section */}
          <div className="stats-grid">
            <div className="stat-card animate-count-up">
              <div className="stat-number primary">{counts.students}+</div>
              <div className="stat-label">{t("studentsHelped")}</div>
            </div>
            <div className="stat-card animate-count-up">
              <div className="stat-number secondary">{counts.years}+</div>
              <div className="stat-label">{t("yearsActive")}</div>
            </div>
            <div className="stat-card animate-count-up">
              <div className="stat-number accent">{counts.yeshivot}+</div>
              <div className="stat-label">{t("yeshivot")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Activity Section */}
      <section className="next-activity-section">
        <div className="activity-container">
          <h2 className="section-title">{t("nextActivity")}</h2>
          <div className="activity-card">
            <h3 className="activity-title">{t("activityTitle")}</h3>
            <p className="activity-description">{t("activityDescription")}</p>
          </div>
        </div>
      </section>

      {/* Newsletter & Help Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-grid">
            <div className="newsletter-card">
              <h3 className="card-title">{t("newsletter")}</h3>
              <input type="email" placeholder="כתובת אימייל" className="email-input" />
              <button className="subscribe-btn">הצטרפות</button>
            </div>
            <div className="help-card">
              <h3 className="card-title">{t("getHelp")}</h3>
              <p className="card-description">זקוקים לעזרה? אנחנו כאן בשבילכם</p>
              <Link to="/contact" className="help-btn">
                פנייה לעזרה
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
