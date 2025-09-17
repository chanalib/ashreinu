"use client"

import type React from "react"
import { useState, useEffect } from "react"
import "../styles/RecommendationsPage.css"
const RecommendationsPage: React.FC = () => {
  const [visibleRecommendations, setVisibleRecommendations] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleRecommendations([0, 1, 2, 3, 4, 5])
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const recommendations = [
    {
      id: 1,
      category: "education",
      rabbi: "הרב דוד כהן שליט״א",
      title: "חשיבות הלימוד הקבוצתי בעידן המודרני",
      content:
        "בזמנים אלו, כאשר הבחורים מתמודדים עם אתגרים רבים, הלימוד הקבוצתי והחברותא הופכים להיות חיוניים יותר מתמיד. האיגוד מספק מסגרת מעולה לחיזוק הלימוד והחברות בין הבחורים.",
      date: "כ״ה בכסלו תשפ״ד",
      topic: "חינוך ולימודים",
      image: "/rabbi-david-cohen.jpg",
    },
    {
      id: 2,
      category: "community",
      rabbi: "הרב משה לוי שליט״א",
      title: "בניית קהילה יהודית חזקה בגלות",
      content:
        "החיים בגלות מחייבים אותנו לחזק את הקשרים הקהילתיים. האיגוד עושה עבודה מבורכת בחיבור בין משפחות יהודיות ובחיזוק הזהות היהודית של הדור הצעיר.",
      date: "י״ב בטבת תשפ״ד",
      topic: "קהילה וחברה",
      image: "/rabbi-moshe-levy.jpg",
    },
    {
      id: 3,
      category: "values",
      rabbi: "הרב אברהם רוזן שליט״א",
      title: "השרשת ערכי התורה בדור הצעיר",
      content:
        "בעולם המודרני, חשוב מאוד להעביר לבחורים את ערכי התורה בדרך מעשית ומעניינת. האיגוד מצליח לעשות זאת באופן מרשים, תוך שמירה על המסורת והתאמה לעידן הנוכחי.",
      date: "ה׳ בשבט תשפ״ד",
      topic: "ערכים ומסורת",
      image: "/rabbi-abraham-rosen.jpg",
    },
    {
      id: 4,
      category: "education",
      rabbi: "הרב יוסף גולד שליט״א",
      title: "חשיבות החונכות האישית",
      content:
        "כל בחור זקוק להכוונה אישית ולחונכות מסורה. האיגוד מספק מסגרת מעולה לחונכות איכותית שמלווה את הבחורים בדרכם הרוחנית והאישית.",
      date: "כ״ח באדר תשפ״ד",
      topic: "חונכות והכוונה",
      image: "/rabbi-yosef-gold.jpg",
    },
    {
      id: 5,
      category: "community",
      rabbi: "הרב שמואל דוד שליט״א",
      title: "תפקיד ההורים בחיזוק הקהילה",
      content:
        "ההורים הם הבסיס לקהילה חזקה. כאשר הורים תומכים במוסדות קהילתיים כמו האיגוד, הם משקיעים בעתיד היהודי של ילדיהם ושל הקהילה כולה.",
      date: "ט״ו בניסן תשפ״ד",
      topic: "מעורבות הורים",
      image: "/rabbi-shmuel-david.jpg",
    },
    {
      id: 6,
      category: "values",
      rabbi: "הרב אליעזר כהן שליט״א",
      title: "חיזוק הזהות היהודית בצרפת",
      content:
        "החיים בצרפת מציבים אתגרים מיוחדים בפני הקהילה היהודית. האיגוד עושה עבודה חשובה בחיזוק הזהות היהודית ובמתן כלים לבחורים להתמודד עם האתגרים הללו.",
      date: "ג׳ בסיון תשפ״ד",
      topic: "זהות יהודית",
      image: "/rabbi-eliezer-cohen.jpg",
    },
  ]

  const categories = [
    { id: "all", name: "כל המאמרים", icon: "📚" },
    { id: "education", name: "חינוך ולימודים", icon: "🎓" },
    { id: "community", name: "קהילה וחברה", icon: "🏘️" },
    { id: "values", name: "ערכים ומסורת", icon: "✡️" },
  ]

  const filteredRecommendations =
    selectedCategory === "all" ? recommendations : recommendations.filter((rec) => rec.category === selectedCategory)

  const handleDonate = () => {
    window.open("https://www.nadrimplus.com", "_blank")
  }

  return (
    <div className="recommendations-page">
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
            <span className="title-highlight">דברי רבנים</span>
            <br />
            והמלצות חכמים
          </h1>
          <p className="hero-subtitle">
            קראו את דברי החיזוק וההמלצות של רבני האיגוד
            <br />
            מאמרים ודברי תורה המעצבים את דרכנו ומחזקים את קהילתנו
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">רבנים מלווים</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">מאמרים ודברי תורה</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">שנות הדרכה</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="filter-section">
        <div className="filter-container">
          <h3 className="filter-title">בחר נושא:</h3>
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

      {/* Recommendations Grid */}
      <section className="recommendations-section">
        <div className="recommendations-grid">
          {filteredRecommendations.map((rec, index) => (
            <div
              key={rec.id}
              className={`recommendation-card ${visibleRecommendations.includes(index) ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="recommendation-header">
                <div className="rabbi-image">
                  <img src={rec.image || "/placeholder.svg"} alt={rec.rabbi} />
                  <div className="rabbi-badge">
                    <span className="badge-icon">👨‍🏫</span>
                  </div>
                </div>
                <div className="rabbi-info">
                  <h3 className="rabbi-name">{rec.rabbi}</h3>
                  <p className="recommendation-date">{rec.date}</p>
                  <span className="topic-tag">{rec.topic}</span>
                </div>
              </div>

              <div className="recommendation-content">
                <h4 className="recommendation-title">{rec.title}</h4>
                <div className="content-divider"></div>
                <div className="quote-icon">❝</div>
                <p className="recommendation-text">{rec.content}</p>
                <div className="quote-icon quote-end">❞</div>
              </div>

              <div className="recommendation-footer">
                <div className="category-badge">
                  <span className={`badge ${rec.category}`}>
                    {categories.find((cat) => cat.id === rec.category)?.name}
                  </span>
                </div>
                <button className="read-more-btn">
                  <span className="btn-icon">📖</span>
                  קרא עוד
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rabbis Section */}
      <section className="rabbis-section">
        <div className="rabbis-content">
          <h2 className="section-title">הרבנים המלווים</h2>
          <p className="section-subtitle">רבנים מנוסים ומסורים המלווים את פעילות האיגוד</p>

          <div className="rabbis-grid">
            <div className="rabbi-card">
              <div className="rabbi-avatar">
                <span className="avatar-icon">👨‍🏫</span>
              </div>
              <h4 className="rabbi-title">הרב דוד כהן שליט״א</h4>
              <p className="rabbi-role">ראש האיגוד ומנהיג רוחני</p>
              <p className="rabbi-description">מוביל את החזון הרוחני של האיגוד ומלווה את הבחורים בדרכם</p>
            </div>

            <div className="rabbi-card">
              <div className="rabbi-avatar">
                <span className="avatar-icon">👨‍🏫</span>
              </div>
              <h4 className="rabbi-title">הרב משה לוי שליט״א</h4>
              <p className="rabbi-role">רב קהילתי ויועץ</p>
              <p className="rabbi-description">מתמחה בחיזוק הקשרים הקהילתיים ותמיכה במשפחות</p>
            </div>

            <div className="rabbi-card">
              <div className="rabbi-avatar">
                <span className="avatar-icon">👨‍🏫</span>
              </div>
              <h4 className="rabbi-title">הרב אברהם רוזן שליט״א</h4>
              <p className="rabbi-role">מחנך ומדריך</p>
              <p className="rabbi-description">מתמחה בחינוך בני נוער והעברת ערכי התורה</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">רוצה לתמוך בעבודת הרבנים?</h2>
          <p className="cta-subtitle">
            הצטרף אלינו ותמוך בעבודה החשובה של הרבנים המלווים
            <br />
            כל תרומה מחזקת את העבודה הרוחנית והחינוכית
          </p>
          <div className="cta-buttons">
            <button className="primary-cta-btn" onClick={handleDonate}>
              <span className="btn-icon">💎</span>
              רוצה להיות שותף? תרום כעת
            </button>
            <button className="secondary-cta-btn">
              <span className="btn-icon">📧</span>
              צור קשר עם הרבנים
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecommendationsPage
