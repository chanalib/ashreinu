"use client"

import { useParams, useNavigate } from "react-router-dom"
import { ArrowRight, Users, MapPin, Clock } from "lucide-react"
import "../styles/SingleActivityPage.css"

interface Activity {
  id: number
  title: string
  description: string
  image: string
  frequency: string
  uploadDate: string
  fullDescription?: string
  location?: string
  participants?: number
  duration?: string
}

export default function SingleActivityPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Sample activities data - same as in ActivitiesPage
  const activities: Activity[] = [
    {
      id: 1,
      title: "שיעור תורה שבועי",
      description: "שיעור תורה מעמיק עם הרב המוסד, כל שבוע נושא חדש ומרתק מעולם ההלכה והאגדה",
      fullDescription:
        "שיעור תורה מעמיק ומרתק שמתקיים מדי שבוע עם הרב המוסד. בכל שיעור אנו צוללים לנושא חדש מעולם ההלכה והאגדה, תוך דיון פתוח ולמידה משותפת. השיעור מתאים לכל הרמות ומעודד השתתפות פעילה של התלמידים. אנו עוסקים בנושאים רלוונטיים לחיי היומיום ומקשרים בין הלימוד התיאורטי לבין היישום המעשי.",
      image: "/1.jpg",
      frequency: "שבועי",
      uploadDate: "2024-01-15",
      location: "בית המדרש הראשי",
      participants: 45,
      duration: "90 דקות",
    },
    {
      id: 2,
      title: "חברותא לימוד",
      description: "זיווג תלמידים ללימוד בחברותא, פיתוח כישורי לימוד והעמקה בסוגיות",
      fullDescription:
        "תוכנית מיוחדת לזיווג תלמידים ללימוד בחברותא. אנו מתאימים בין תלמידים על פי רמתם, תחומי העניין והאישיות שלהם. המטרה היא ליצור זוגות לימוד יעילים שיעזרו זה לזה להתקדם בלימודים. התוכנית כוללת הדרכה בשיטות לימוד יעילות, פיתוח כישורי דיון וויכוח, והעמקה בסוגיות מורכבות. כל זוג מקבל ליווי אישי ותמיכה מתמדת.",
      image: "/2.jpg",
      frequency: "יומי",
      uploadDate: "2024-02-10",
      location: "חדרי לימוד קטנים",
      participants: 80,
      duration: "120 דקות",
    },
    {
      id: 3,
      title: "סיוע כלכלי",
      description: "תמיכה כלכלית לתלמידי ישיבות הזקוקים לעזרה, כולל מלגות ותמיכה בהוצאות לימוד",
      fullDescription:
        "תוכנית תמיכה כלכלית מקיפה לתלמידי ישיבות הזקוקים לעזרה. התוכנית כוללת מלגות חודשיות, תמיכה בהוצאות לימוד כמו ספרים וחומרי לימוד, סיוע בשכר דירה ובהוצאות מחיה בסיסיות. אנו פועלים בדיסקרטיות מלאה ומתאימים את הסיוע לצרכים האישיים של כל תלמיד. המטרה היא לאפשר לתלמידים להתמקד בלימודים מבלי לדאוג לקשיים כלכליים.",
      image: "/3.jpg",
      frequency: "חודשי",
      uploadDate: "2024-03-05",
      location: "משרדי הארגון",
      participants: 120,
      duration: "לפי צורך",
    },
    {
      id: 4,
      title: "ארוחות שבת",
      description: "ארוחות שבת חמות ומזינות לתלמידים, יצירת אווירה משפחתית ותמיכה רוחנית",
      fullDescription:
        "ארוחות שבת מיוחדות שמתקיימות מדי שבוע ויוצרות אווירה משפחתית חמה ותומכת. התלמידים נפגשים סביב שולחן השבת, שרים זמירות, מקיימים דיונים תורניים ונהנים מארוחה טעימה ומזינה. זוהי הזדמנות מצוינת ליצירת קשרים חברתיים, חיזוק הזהות היהודית והרגשת שייכות לקהילה. כל ארוחה מלווה בדברי תורה קצרים ובאווירה של שמחה ואחווה.",
      image: "/4.jpg",
      frequency: "שבועי",
      uploadDate: "2024-04-20",
      location: "אולם האירועים",
      participants: 60,
      duration: "3 שעות",
    },
    {
      id: 5,
      title: "ייעוץ אישי",
      description: "ליווי אישי ותמיכה רגשית לתלמידים, פתרון בעיות אישיות והכוונה בחיים",
      fullDescription:
        "שירות ייעוץ אישי מקצועי המיועד לתלמידי ישיבות הזקוקים לתמיכה רגשית והכוונה אישית. הייעוץ ניתן על ידי יועצים מקצועיים ורבנים מנוסים, ומתמקד בפתרון בעיות אישיות, התמודדות עם לחצים, קבלת החלטות חשובות והכוונה בנושאים של זהות ומטרות בחיים. כל פגישה מותאמת אישית לצרכים הספציפיים של התלמיד ונערכת באווירה של אמון ודיסקרטיות מלאה.",
      image: "/logo.png",
      frequency: "לפי צורך",
      uploadDate: "2024-05-12",
      location: "חדרי ייעוץ פרטיים",
      participants: 25,
      duration: "60 דקות",
    },
  ]

  const activity = activities.find((a) => a.id === Number.parseInt(id || "1"))

  if (!activity) {
    return (
      <div className="single-activity-page">
        <div className="error-container">
          <h1>פעילות לא נמצאה</h1>
          <button onClick={() => navigate("/activities")} className="back-btn">
            חזור לדף הפעילויות
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="single-activity-page">
      {/* Hero Section */}
      <section className="activity-hero">
        <div className="hero-image-container">
          <img
            src={activity.image || "/placeholder.svg?height=600&width=1200"}
            alt={activity.title}
            className="hero-image"
          />
          <div className="hero-overlay">
            <div className="hero-content">
              <div className="frequency-badge-large">{activity.frequency}</div>
              <h1 className="activity-title-large">{activity.title}</h1>
              <p className="activity-subtitle">{activity.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="activity-content">
        <div className="content-container">
          <div className="content-grid">
            {/* Main Description */}
            <div className="main-content">
              <h2 className="section-title">תיאור מפורט</h2>
              <p className="full-description">{activity.fullDescription || activity.description}</p>

              {/* Activity Stats */}
              <div className="activity-stats">
                <div className="stat-item">
                  <Users className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-number">{activity.participants}</span>
                    <span className="stat-label">משתתפים</span>
                  </div>
                </div>
                <div className="stat-item">
                  <Clock className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-number">{activity.duration}</span>
                    <span className="stat-label">משך זמן</span>
                  </div>
                </div>
                <div className="stat-item">
                  <MapPin className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-number">{activity.location}</span>
                    <span className="stat-label">מיקום</span>
                  </div>
                </div>
              
              </div>
            </div>

            {/* Sidebar */}
            <div className="sidebar">
              {/* Donation CTA */}
              <div className="donation-card">
                <h3 className="donation-title">רוצה להיות שותף?</h3>
                <p className="donation-description">תמכו בפעילות החשובה הזו ועזרו לנו להמשיך לסייע לתלמידי הישיבות</p>
                <button className="donate-btn">
                  תרום כעת
                  <ArrowRight className="btn-icon" />
                </button>
              </div>

              {/* Activity Info */}
              <div className="info-card">
                <h3 className="info-title">פרטי הפעילות</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">תדירות:</span>
                    <span className="info-value">{activity.frequency}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">הועלה:</span>
                    <span className="info-value">{new Date(activity.uploadDate).toLocaleDateString("he-IL")}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">סטטוס:</span>
                    <span className="info-value status-active">פעיל</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="activity-navigation">
        <div className="nav-container">
          <button onClick={() => navigate("/activities")} className="back-to-activities-btn">
            <ArrowRight className="btn-icon reversed" />
            חזור לכל הפעילויות
          </button>
        </div>
      </section>
    </div>
  )
}
