import { Link } from "react-router-dom"
import "../styles/Header.css"
import { useLanguage } from "./LanguageContext"
import LanguageToggle from "./LanguageToggle"

export default function Header() {
  const { t } = useLanguage()

  const navItems = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "activities", path: "/activities" },
    { key: "projects", path: "/projects" },
    { key: "stories", path: "/stories" },
    { key: "recommendations", path: "/recommendations" },
    { key: "contact", path: "/contact" },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <img src="/logo.png" alt="אשרינו" />
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Language Toggle */}
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
