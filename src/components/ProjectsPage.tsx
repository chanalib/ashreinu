"use client"

import type React from "react"
import { useState, useEffect } from "react"
import "../styles/ProjectsPage.css"
const ProjectsPage: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects([0, 1, 2, 3, 4, 5])
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      id: 1,
      title: "מרכז לימוד משותף - פריז",
      description:
        "מרכז לימוד מתקדם עם ציוד טכנולוגי חדיש, ספרייה עשירה ואולמות לימוד מרווחים. המרכז משרת 150 בחורים מכל רחבי צרפת.",
      image: "/study-center-paris.jpg",
      partners: ["משפחת כהן - פריז", "קהילת בית הכנסת הגדול", "תורמים אנונימיים"],
      budget: "€250,000",
      status: "פעיל",
      impact: "150 בחורים נהנים מתנאי לימוד מעולים",
    },
    {
      id: 2,
      title: "תוכנית חונכות אישית",
      description: "תוכנית חונכות מקיפה המקשרת בין בחורים ותיקים לחדשים, עם מעקב אישי והכוונה רוחנית ואקדמית.",
      image: "/mentorship-program.jpg",
      partners: ["משפחת לוי - ליון", "רב דוד שמואל", "איגוד הורי הבחורים"],
      budget: "€80,000",
      status: "בפיתוח",
      impact: "80 זוגות חונך-חניך פעילים",
    },
    {
      id: 3,
      title: "מלגות לימוד מצוינות",
      description: "תוכנית מלגות מקיפה לבחורים מצטיינים, כוללת תמיכה כספית, ליווי אקדמי וחונכות אישית.",
      image: "/scholarship-program.jpg",
      partners: ["קרן משפחת רוזן", "תורמים מארה״ב", "קהילת מרסיי"],
      budget: "€180,000",
      status: "פעיל",
      impact: "45 בחורים מקבלים מלגות מלאות",
    },
    {
      id: 4,
      title: "מרכז טכנולוגיה ויצירה",
      description:
        "מעבדת מחשבים מתקדמת עם תוכנות מקצועיות, מדפסות תלת מימד וציוד יצירה דיגיטלי לפיתוח כישורים טכנולוגיים.",
      image: "/tech-center.jpg",
      partners: ["חברת הייטק צרפתית", "משפחת גולד", "קרן החדשנות"],
      budget: "€120,000",
      status: "בתכנון",
      impact: "100 בחורים ירכשו כישורים טכנולוגיים",
    },
    {
      id: 5,
      title: "תוכנית ספורט ובריאות",
      description: "מתקני ספורט מודרניים, חדר כושר מאובזר ותוכניות בריאות מקיפות לשמירה על כושר גופני ונפשי.",
      image: "/sports-program.jpg",
      partners: ["מועדון הספורט היהודי", "משפחת אברהם", "רופאים מתנדבים"],
      budget: "€95,000",
      status: "פעיל",
      impact: "200 בחורים משתתפים בפעילויות ספורט",
    },
    {
      id: 6,
      title: "מרכז תרבות ואמנות",
      description: "אולם תרבות מרווח עם במה מקצועית, ציוד הגברה ותאורה לאירועים תרבותיים, הופעות ומופעים.",
      image: "/culture-center.jpg",
      partners: ["משפחת דוד - ניס", "אמנים יהודים", "מרכז התרבות היהודי"],
      budget: "€160,000",
      status: "בביצוע",
      impact: "300 משתתפים באירועים חודשיים",
    },
  ]

  const handleDonate = () => {
    window.open("https://www.nadrimplus.com", "_blank")
  }

  return (
    <div className="projects-page">
      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-highlight">פרויקטים בשיתוף</span>
            <br />
            בונים יחד עתיד יהודי חזק
          </h1>
          <p className="hero-subtitle">
            גלו את הפרויקטים המרשימים שאנו מקימים בשיתוף עם משפחות ותורמים נדיבים
            <br />
            כל פרויקט הוא צעד נוסף לחיזוק הקהילה היהודית בצרפת
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">פרויקטים פעילים</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">€885K</div>
              <div className="stat-label">השקעה כוללת</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">בחורים נהנים</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="section-header">
          <h2 className="section-title">הפרויקטים שלנו</h2>
          <p className="section-subtitle">כל פרויקט נבנה בשיתוף עם משפחות ותורמים מסורים</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${visibleProjects.includes(index) ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-status">
                  <span
                    className={`status-badge ${project.status === "פעיל" ? "active" : project.status === "בפיתוח" ? "development" : "planning"}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-budget">
                  <span className="budget-label">תקציב:</span>
                  <span className="budget-amount">{project.budget}</span>
                </div>

                <div className="project-impact">
                  <div className="impact-icon">💫</div>
                  <span className="impact-text">{project.impact}</span>
                </div>

                <div className="project-partners">
                  <h4 className="partners-title">שותפים בפרויקט:</h4>
                  <div className="partners-list">
                    {project.partners.map((partner, idx) => (
                      <span key={idx} className="partner-tag">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="join-project-btn" onClick={handleDonate}>
                  <span className="btn-icon">🤝</span>
                  הצטרף לפרויקט
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">רוצה להיות שותף בפרויקט הבא?</h2>
          <p className="cta-subtitle">
            הצטרף אלינו ליצירת פרויקטים חדשים שיחזקו את הקהילה היהודית
            <br />
            כל תרומה, גדולה או קטנה, עושה את הההבדל
          </p>
          <div className="cta-buttons">
            <button className="primary-cta-btn" onClick={handleDonate}>
              <span className="btn-icon">💎</span>
              רוצה להיות שותף? תרום כעת
            </button>
            <button className="secondary-cta-btn">
              <span className="btn-icon">📞</span>
              צור קשר לפרטים
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
