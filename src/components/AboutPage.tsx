"use client"

import { useEffect, useState } from "react"
import "../styles/AboutPage.css"
export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const rabbis = [
    { name: "הרב יצחק כהן", title: "ראש ישיבה", image: "/logo.png" },
    { name: "הרב משה לוי", title: "רב קהילה", image: "/logo.png" },
    { name: "הרב אברהם דוד", title: "מחנך בכיר", image: "/logo.png" },
  ]

  // HomePage stats logic
  const [counts, setCounts] = useState({ students: 0, years: 0, yeshivot: 0 })

  useEffect(() => {
    const targets = { students: 500, years: 8, yeshivot: 15 }
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
    <div className="about-page">
      {/* Hero Section with Large Centered Logo and Flip Effect */}
      <section className={`about-hero-section ${isVisible ? "visible" : ""}`}>
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
          <div className="floating-element element-4"></div>
        </div>
        {/* Action Buttons */}

        <div className="about-hero-content">

          <div className="logo-flip-container">
            {/* Blurred mission text background, repeated to fill all page height */}
            <div className="about-mission-bg-text">
              {[...Array(32)].map((_, i) => (
                <span key={i}>
                  אשרינו הוא ארגון ללא מטרות רווח המתמחה בתמיכה רוחנית וחומרית בתלמידי ישיבות בצרפת. אנו מאמינים כי השקעה בדור הצעיר היא השקעה בעתיד העם היהודי. במשך למעלה מ-8 שנים, אנו פועלים ללא לאות כדי להבטיח שכל תלמיד יוכל להתמקד בלימודיו ללא דאגות כלכליות, ולקבל את התמיכה הרוחנית והחומרית הדרושה לו. אשרינו פועלת מתוך תחושת שליחות עמוקה, מתוך אמונה בכוחו של החינוך היהודי להוביל שינוי אמיתי בקהילות. אנו מלווים את התלמידים לאורך כל הדרך, מעניקים להם כלים להצלחה, תמיכה רגשית, עזרה לימודית, וסיוע כלכלי. בזכות תרומותיכם, אנו יכולים להרחיב את פעילותנו, להגיע לעוד תלמידים, ולבנות עתיד טוב יותר ליהדות צרפת. אשרינו הוא בית חם לכל תלמיד, מקום של ערכים, מסורת, ואהבה ליהדות. הצטרפו אלינו ותהיו חלק מהמשפחה הגדולה של אשרינו.
                </span>
              ))}
            </div>
            <div className="logo-flip-hover-area">
              <div className="logo-flip-card">
                <div className="logo-flip-front">
                  <div className="logo-circle-bg">
                    <img className="logo-hero-img" src="/logo.png" alt="logo" />
                  </div>
                </div>
                <div className="logo-flip-back">
                  {/* Floating circular buttons, only visible on flip-back */}
                  <a
                    href="/donate"
                    className="logo-action-btn logo-action-btn-left"
                    tabIndex={-1}
                  >
                    <span>⇓<br />לתרומה<br />לחץ כאן</span>
                  </a>
                  <a
                    href="/activities"
                    className="logo-action-btn logo-action-btn-right"
                    tabIndex={-1}
                  >
                    <span>⇓<br />לצפייה<br />בפעילויות</span>
                  </a>
                  <div className="mission-text-flip-rect">
                    <h2>איגוד אשרינו</h2>
                    <p>
                      אשרינו הוא ארגון ללא מטרות רווח המתמחה בתמיכה רוחנית וחומרית בתלמידי ישיבות בצרפת.<br />
                      אנו מאמינים כי השקעה בדור הצעיר היא השקעה בעתיד העם היהודי.<br />
                      במשך למעלה מ-8 שנים, אנו פועלים ללא לאות כדי להבטיח שכל תלמיד יוכל להתמקד בלימודיו ללא דאגות כלכליות, ולקבל את התמיכה הרוחנית והחומרית הדרושה לו.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header">
          </div>

          <div className="mission-content">
            <div className="mission-text">
              <p className="mission-paragraph">
                אשרינו הוא ארגון ללא מטרות רווח המתמחה בתמיכה רוחנית וחומרית בתלמידי ישיבות בצרפת. אנו מאמינים כי השקעה
                בדור הצעיר היא השקעה בעתיד העם היהודי.
                <br />
                <br />
                במשך למעלה מ-8 שנים, אנו פועלים ללא לאות כדי להבטיח שכל תלמיד יוכל להתמקד בלימודיו ללא דאגות כלכליות,
                ולקבל את התמיכה הרוחנית והחומרית הדרושה לו.
              </p>
            </div>

            <div className="mission-image">
              <img src="/singer.jpeg" alt="תלמידי ישיבה" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-card">
         
            <h2 className="vision-title">החזון שלנו</h2>
            <p className="vision-text">
              ליצור דור של תלמידי חכמים מובילים בצרפת, שיהיו מאורות לקהילותיהם ויחזקו את היהדות הצרפתית. אנו שואפים
              לבנות גשרים בין המסורת העתיקה לבין האתגרים המודרניים, ולהעניק לכל תלמיד את הכלים להצלחה רוחנית וחומרית.
            </p>
            <div className="vision-sparkles">
              <span className="sparkle sparkle-1">✦</span>
              <span className="sparkle sparkle-2">✧</span>
              <span className="sparkle sparkle-3">✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - HomePage style */}
      <section className="about-stats-section">
        <div className="container">
          <div className="home-stats-grid">
            <div className="home-stat-card animate-count-up">
              <div className="home-stat-number home-primary">{counts.students}+</div>
              <div className="home-stat-label">תלמידים נתמכו</div>
            </div>
            <div className="home-stat-card animate-count-up">
              <div className="home-stat-number home-secondary">{counts.yeshivot}+</div>
              <div className="home-stat-label">ישיבות בצרפת</div>
            </div>
            <div className="home-stat-card animate-count-up">
              <div className="home-stat-number home-accent">{counts.years}+</div>
              <div className="home-stat-label">שנות פעילות</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rabbis Section */}
      <section className="rabbis-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">הרבנים והתומכים שלנו</h2>
            <div className="title-underline"></div>
          </div>

          <div className="rabbis-grid">
            {rabbis.map((rabbi, index) => (
              <div key={index} className={`rabbi-card rabbi-${index + 1}`}>
                <div className="rabbi-image-container">
                  <img src={rabbi.image || "/placeholder.svg"} alt={rabbi.name} className="rabbi-image" />
                  <div className="rabbi-image-overlay"></div>
                </div>
                <h3 className="rabbi-name">{rabbi.name}</h3>
                <p className="rabbi-title">{rabbi.title}</p>
                <div className="rabbi-decoration"></div>
              </div>
            ))}
          </div>

          <div className="join-supporters">
            <div className="join-card">
              <h3 className="join-title">רוצה להיות שותף?</h3>
              <p className="join-text">הצטרף לקהילת התומכים שלנו וקח חלק בחיזוק הדור הבא של תלמידי החכמים</p>
              <button className="donate-btn-main">
                <a
                  className="btn-text"
                  href="https://nedarimplus.org/?aff=ashreinu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  תרום כעת
                </a>
                <div className="btn-glow"></div>
                <div className="btn-particles-main">
                  <span className="particle-main"></span>
                  <span className="particle-main"></span>
                  <span className="particle-main"></span>
                  <span className="particle-main"></span>
                </div>
              </button>
 <div className="cta-features">
                <div className="feature">
                  <span className="feature-icon">🔒</span>
                  <span>תרומה מאובטחת</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📊</span>
                  <span>שקיפות מלאה</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💝</span>
                  <span>השפעה ישירה</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}
