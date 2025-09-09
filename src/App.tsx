import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import { LanguageProvider } from "./components/LanguageContext"
import "./App.css"
// ...existing code...
import { useEffect, useState } from "react"

export default function App() {
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      setAtBottom(scrollY + windowHeight >= docHeight - 10)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleArrowClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })
    }
  }

  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>
        <button
          className={`scroll-arrow-btn${atBottom ? " at-bottom" : ""}`}
          onClick={handleArrowClick}
          aria-label={atBottom ? "גלול למעלה" : "גלול למטה"}
        >
          <span className="arrow-icon" style={{ transform: atBottom ? "rotate(180deg)" : "none" }}>
            ⇣
          </span>
        </button>
      </div>
    </LanguageProvider>
  )
}
