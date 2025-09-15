"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { useLanguage } from "./LanguageContext"
import "../styles/ActivitiesPage.css"
interface Activity {
    id: number
    title: string
    description: string
    image: string
    frequency: string
    uploadDate: string
}

export default function ActivitiesPage() {
    const { t } = useLanguage()
    const navigate = useNavigate()

    // Sample activities data - sorted by upload date (oldest first)
    const activities: Activity[] = [
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

    const [currentActivityIndex, setCurrentActivityIndex] = useState(0)
    const [showAllActivities, setShowAllActivities] = useState(false)

    const nextActivity = () => {
        setCurrentActivityIndex((prev) => (prev + 1) % activities.length)
    }

    const prevActivity = () => {
        setCurrentActivityIndex((prev) => (prev - 1 + activities.length) % activities.length)
    }

    const selectActivity = (index: number) => {
        setCurrentActivityIndex(index)
    }

    return (
        <div className="act-page">
            {/* Header Section */}
            <div className="act-header">
                <h1 className="act-title">{t("activities")}</h1>

            </div>

            {/* Main Activity Carousel */}
            <section className="main-carousel">
                <div className="carousel-container">
                    {/* Previous Activity */}
                    <div className="side-activity left">
                        <div className="activity-preview">
                            <img
                                src={
                                    activities[(currentActivityIndex - 1 + activities.length) % activities.length].image ||
                                    "/placeholder.svg"
                                }
                                alt={activities[(currentActivityIndex - 1 + activities.length) % activities.length].title}
                            />
                            <div className="preview-overlay">
                                <span className="nav-arrow" onClick={prevActivity} style={{ cursor: "pointer" }}>‹</span>
                                <span
                                    className="side-title"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => navigate(`/activity/${activities[(currentActivityIndex - 1 + activities.length) % activities.length].id}`)}
                                >
                                    {activities[(currentActivityIndex - 1 + activities.length) % activities.length].title}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Current Main Activity with Framer Motion animation */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentActivityIndex}
                            className="main-activity"
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -50, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="activity-card-main">
                                <div className="activity-image">
                                    <img
                                        src={activities[currentActivityIndex].image || "/placeholder.svg"}
                                        alt={activities[currentActivityIndex].title}
                                    />
                                    <div className="frequency-badge">{activities[currentActivityIndex].frequency}</div>
                                </div>
                                <div className="activitys-content">
                                    <h2
                                        className="activity-title"
                                        onClick={() => navigate(`/activity/${activities[currentActivityIndex].id}`)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {activities[currentActivityIndex].title}
                                    </h2>
                                    <p className="activity-description">{activities[currentActivityIndex].description}</p>
                                    <div className="activity-meta">
                                        <span className="upload-date">
                                            הועלה: {new Date(activities[currentActivityIndex].uploadDate).toLocaleDateString("he-IL")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Next Activity */}
                    <div className="side-activity right">
                        <div className="activity-preview">
                            <img
                                src={activities[(currentActivityIndex + 1) % activities.length].image || "/placeholder.svg"}
                                alt={activities[(currentActivityIndex + 1) % activities.length].title}
                            />
                            <div className="preview-overlay">
                                <span className="nav-arrow" onClick={nextActivity} style={{ cursor: "pointer" }}>›</span>
                                <span
                                    className="side-title"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => navigate(`/activity/${activities[(currentActivityIndex + 1) % activities.length].id}`)}
                                >
                                    {activities[(currentActivityIndex + 1) % activities.length].title}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    {activities.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentActivityIndex ? "active" : ""}`}
                            onClick={() => selectActivity(index)}
                        />
                    ))}
                </div>
            </section>
            <div className="activities-header"> <button className="show-all-btn" onClick={() => setShowAllActivities(!showAllActivities)}> {showAllActivities ? "הסתר פעילויות" : "הצג את כל הפעילויות"} </button> </div>
            {/* All Activities Grid */}
            {showAllActivities && (
                <section className="all-activities">
                    <h2 className="section-title">כל הפעילויות</h2>
                    <div className="activities-grid">
                        {activities.map((activity, index) => (
                            <div
                                key={activity.id}
                                className={`activity-card ${index === currentActivityIndex ? "current" : ""}`}
                                onClick={() => {
                                    selectActivity(index)
                                    setShowAllActivities(false)
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                }}
                            >
                                <div className="card-image">
                                    <img src={activity.image || "/placeholder.svg"} alt={activity.title} />
                                    <div className="frequency-badge">{activity.frequency}</div>
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{activity.title}</h3>
                                    <p className="card-description">{activity.description}</p>
                                    <div className="card-meta">
                                        <span className="upload-date">{new Date(activity.uploadDate).toLocaleDateString("he-IL")}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}
