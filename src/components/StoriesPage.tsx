"use client"

import type React from "react"
import { useState, useEffect } from "react"
import "../styles/StoriesPage.css"
const StoriesPage: React.FC = () => {
  const [visibleStories, setVisibleStories] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleStories([0, 1, 2, 3, 4, 5, 6, 7])
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const stories = [
    {
      id: 1,
      category: "student",
      name: "דוד מ. - פריז",
      title: "מהתלמיד הביישן לבחור בטוח בעצמו",
      story:
        "הגעתי לאיגוד כבחור ביישן שקשה לו להשתלב. הרבנים והחברים כאן קיבלו אותי בחום, נתנו לי תחושת שייכות אמיתית. היום אני מוביל פעילויות ועוזר לבחורים חדשים להשתלב. האיגוד שינה את חיי לחלוטין.",
      impact: "מוביל 3 פעילויות שבועיות",
      year: "2023",
    },
    {
      id: 2,
      category: "parent",
      name: "משפחת כהן - ליון",
      title: "ראינו את הבן שלנו פורח",
      story:
        "אבי היה בחור מבולבל שלא מצא את מקומו. מאז שהצטרף לאיגוד, הוא מצא כיוון בחיים, חברים אמיתיים ומטרה. אנחנו רואים אותו מאושר ובטוח בעצמו כמו שמעולם לא היה. תודה לכל הצוות המסור.",
      impact: "הבן השלים לימודי הוראה",
      year: "2023",
    },
    {
      id: 3,
      category: "student",
      name: "יוסף מ. - מרסיי",
      title: "מהכישלון האקדמי להצלחה מרשימה",
      story:
        "נכשלתי בלימודים ואבדה לי כל המוטיבציה. באיגוד קיבלתי חונכות אישית, עזרה בלימודים ובעיקר - אמונה בעצמי. היום אני סטודנט מצטיין באוניברסיטה ומתכנן המשך לימודים מתקדמים.",
      impact: "ממוצע ציונים 95",
      year: "2024",
    },
    {
      id: 4,
      category: "parent",
      name: "משפחת לוי - פריז",
      title: "השקעה שמשתלמת פי כמה וכמה",
      story:
        "תרמנו לאיגוד כי האמנו במטרה. אבל מה שקיבלנו בחזרה הוא הרבה יותר - ראינו את הבן שלנו גדל, מתפתח ומוצא את דרכו בחיים. זו השקעה הכי טובה שעשינו אי פעם.",
      impact: "הבן מתנדב בקהילה",
      year: "2023",
    },
    {
      id: 5,
      category: "student",
      name: "אברהם מ. - ניס",
      title: "מבדידות לקהילה חמה",
      story:
        "עברתי לצרפת לבד ולא הכרתי אף אחד. האיגוד היה הבית השני שלי - מצאתי כאן חברים לחיים, רבנים מנחים ותחושת שייכות לקהילה יהודית חזקה. לא יכול לדמיין את החיים בלי זה.",
      impact: "מארגן אירועי קהילה",
      year: "2024",
    },
    {
      id: 6,
      category: "parent",
      name: "משפחת רוזן - בורדו",
      title: "גאים בבחירה שלנו לתמוך",
      story:
        "כשהחלטנו לתרום לאיגוד, לא ידענו כמה זה ישפיע על הקהילה כולה. היום אנחנו רואים עשרות בחורים שמקבלים חינוך איכותי, תמיכה ואהבה. זה נותן לנו תחושת סיפוק עצומה.",
      impact: "תמכו ב-25 בחורים",
      year: "2023",
    },
    {
      id: 7,
      category: "student",
      name: "משה מ. - טולוז",
      title: "מחוסר כיוון למנהיגות",
      story:
        "הייתי בחור ללא כיוון ברור בחיים. באיגוד למדתי מהי אחריות, מנהיגות ונתינה לזולת. היום אני מוביל קבוצת בחורים צעירים ומרגיש שאני עושה שינוי אמיתי בעולם.",
      impact: "מנחה 15 בחורים צעירים",
      year: "2024",
    },
    {
      id: 8,
      category: "parent",
      name: "משפחת גולד - סטרסבורג",
      title: "ראינו נס בעיניים שלנו",
      story:
        "הבן שלנו היה במשבר זהות עמוק. לא ידע מי הוא ולאן הוא הולך. האיגוד העניק לו זהות יהודית חזקה, ערכים ברורים וקהילה תומכת. השינוי שלו הוא פשוט נס.",
      impact: "הבן לומד בישיבה",
      year: "2023",
    },
  ]

  const categories = [
    { id: "all", name: "כל הסיפורים", icon: "📚" },
    { id: "student", name: "סיפורי בחורים", icon: "🎓" },
    { id: "parent", name: "עדויות הורים", icon: "👨‍👩‍👧‍👦" },
  ]

  const filteredStories =
    selectedCategory === "all" ? stories : stories.filter((story) => story.category === selectedCategory)

  const handleDonate = () => {
    window.open("https://www.nadrimplus.com", "_blank")
  }

  return (
    <div className="stories-page">
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
            <span className="title-highlight">סיפורי הצלחה</span>
            <br />
            שמשנים חיים
          </h1>
          <p className="hero-subtitle">
            גלו את הסיפורים המרגשים של בחורים והורים שחיי שלהם השתנו
            <br />
            כל סיפור הוא עדות לכוח של קהילה תומכת ואוהבת
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">סיפורי הצלחה</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">שביעות רצון</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">שנות פעילות</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="filter-section">
        <div className="filter-container">
          <h3 className="filter-title">בחר קטגוריה:</h3>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="stories-section">
        <div className="stories-grid">
          {filteredStories.map((story, index) => (
            <div
              key={story.id}
              className={`story-card ${visibleStories.includes(index) ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="story-header">
                <div className="story-avatar">
                  <span className="avatar-icon">{story.category === "student" ? "🎓" : "👨‍👩‍👧‍👦"}</span>
                </div>
                <div className="story-info">
                  <h3 className="story-name">{story.name}</h3>
                  <p className="story-title">{story.title}</p>
                  <span className="story-year">{story.year}</span>
                </div>
              </div>

              <div className="story-content">
                <div className="quote-icon">❝</div>
                <p className="story-text">{story.story}</p>
                <div className="quote-icon quote-end">❞</div>
              </div>

              <div className="story-impact">
                <div className="impact-icon">🌟</div>
                <span className="impact-text">{story.impact}</span>
              </div>

              <div className="story-category">
                <span className={`category-badge ${story.category}`}>
                  {story.category === "student" ? "סיפור בחור" : "עדות הורים"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Summary */}
      <section className="summary-section">
        <div className="summary-content">
          <h2 className="summary-title">מה אומרים עלינו</h2>
          <div className="summary-stats">
            <div className="summary-stat">
              <div className="stat-icon">💝</div>
              <div className="stat-info">
                <div className="stat-number">98%</div>
                <div className="stat-label">מהבחורים ממליצים לחברים</div>
              </div>
            </div>
            <div className="summary-stat">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <div className="stat-number">150+</div>
                <div className="stat-label">בחורים שהשלימו לימודים</div>
              </div>
            </div>
            <div className="summary-stat">
              <div className="stat-icon">🤝</div>
              <div className="stat-info">
                <div className="stat-number">85%</div>
                <div className="stat-label">מההורים תורמים שוב</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">רוצה להיות חלק מהסיפור הבא?</h2>
          <p className="cta-subtitle">
            הצטרף אלינו ועזור לנו ליצור עוד סיפורי הצלחה מרגשים
            <br />
            כל תרומה יוצרת סיפור חדש של תקווה ושינוי
          </p>
          <div className="cta-buttons">
            <button className="primary-cta-btn" onClick={handleDonate}>
              <span className="btn-icon">💎</span>
              רוצה להיות שותף? תרום כעת
            </button>
            <button className="secondary-cta-btn">
              <span className="btn-icon">📝</span>
              שתף את הסיפור שלך
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoriesPage
