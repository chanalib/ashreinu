"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./LanguageContext"
import "../styles/DonationsPage.css"
export default function DonationsPage() {
  const { language } = useLanguage()
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [selectedCurrency, setSelectedCurrency] = useState("€")
  const [donationType, setDonationType] = useState("monthly")
  const [showImpact, setShowImpact] = useState(false)

  const text = {
    he: {
      title: "הצטרפו למשפחת התומכים",
      subtitle: "כל תרומה משנה חיים ומעצבת עתיד",
      heroText: "יחד נבנה דור של בחורים חזקים ומחוברים לשורשיהם",
      monthlyDonation: "תרומה חודשית",
      oneTimeDonation: "תרומה חד פעמית",
      selectAmount: "בחרו סכום",
      customAmount: "סכום אחר",
      donateNow: "תרמו עכשיו",
      impact: "ההשפעה שלכם",
      impactText: "התרומה שלכם תאפשר:",
      testimonialTitle: "מה אומרים התורמים",
      urgentTitle: "דחוף - נדרשת עזרתכם",
      urgentText: "בחורים רבים ממתינים לתמיכתכם. כל יום שעובר הוא הזדמנות שאבדה.",
      securePayment: "תשלום מאובטח ב-SSL",
      taxDeductible: "זכאי לקיזוז מס",
      monthlySupport: "תמיכה חודשית",
      joinFamily: "הצטרפו למשפחה",
    },
    fr: {
      title: "Rejoignez la famille des donateurs",
      subtitle: "Chaque don change des vies et façonne l'avenir",
      heroText: "Ensemble, construisons une génération de jeunes forts et connectés à leurs racines",
      monthlyDonation: "Don mensuel",
      oneTimeDonation: "Don ponctuel",
      selectAmount: "Choisissez un montant",
      customAmount: "Autre montant",
      donateNow: "Faire un don",
      impact: "Votre impact",
      impactText: "Votre don permettra:",
      testimonialTitle: "Ce que disent nos donateurs",
      urgentTitle: "Urgent - Votre aide est nécessaire",
      urgentText: "De nombreux jeunes attendent votre soutien. Chaque jour qui passe est une opportunité perdue.",
      securePayment: "Paiement sécurisé SSL",
      taxDeductible: "Déductible des impôts",
      monthlySupport: "Soutien mensuel",
      joinFamily: "Rejoindre la famille",
    },
  }

  const amounts = [50, 100, 180, 360, 500, 1000]
  const currencies = ["€", "$", "₪"]

  const impactMessages = {
    he: {
      50: "ארוחה חמה לבחור במשך שבוע",
      100: "ספרי לימוד לבחור למשך חודש",
      180: "מלגת לימוד חודשית לבחור",
      360: "תמיכה מלאה בבחור למשך חודש",
      500: "מימון פעילות קהילתית מלאה",
      1000: "חסות על בחור למשך שלושה חודשים",
    },
    fr: {
      50: "Un repas chaud pour un étudiant pendant une semaine",
      100: "Livres d'étude pour un étudiant pendant un mois",
      180: "Bourse d'étude mensuelle pour un étudiant",
      360: "Soutien complet d'un étudiant pendant un mois",
      500: "Financement d'une activité communautaire complète",
      1000: "Parrainage d'un étudiant pendant trois mois",
    },
  }

  const testimonials = [
    {
      name: language === "he" ? "משפחת כהן, פריז" : "Famille Cohen, Paris",
      text:
        language === "he"
          ? "התרומה שלנו חזרה אלינו פי כמה. הבן שלנו מצא את דרכו בזכות האיגוד."
          : "Notre don nous est revenu au centuple. Notre fils a trouvé sa voie grâce à l'association.",
    },
    {
      name: language === "he" ? "משפחת לוי, ליון" : "Famille Levy, Lyon",
      text:
        language === "he"
          ? "רואים את ההשפעה הישירה של התרומה על הבחורים. זה מרגש!"
          : "Nous voyons l'impact direct de notre don sur les jeunes. C'est émouvant!",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setShowImpact(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleDonate = () => {
    // Navigate to Nedrim Plus in new tab
    window.open("https://nedrimplus.com", "_blank")
  }

  return (
    <div className="donations-page">
      {/* Hero Section */}
      <section className="donations-hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-element heart">💛</div>
            <div className="floating-element star">⭐</div>
            <div className="floating-element hands">🤝</div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">{text[language].title}</h1>
          <p className="hero-subtitle">{text[language].subtitle}</p>
          <p className="hero-text">{text[language].heroText}</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">{language === "he" ? "בחורים נתמכים" : "Jeunes soutenus"}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">{language === "he" ? "משפחות תורמות" : "Familles donatrices"}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15</span>
              <span className="stat-label">{language === "he" ? "שנות פעילות" : "Années d'activité"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="donation-form-section">
        <div className="container">
          <div className="donation-card">
            <div className="card-header">
              <h2>{text[language].joinFamily}</h2>
              <div className="donation-type-toggle">
                <button
                  className={donationType === "monthly" ? "active" : ""}
                  onClick={() => setDonationType("monthly")}
                >
                  {text[language].monthlyDonation}
                </button>
                <button
                  className={donationType === "oneTime" ? "active" : ""}
                  onClick={() => setDonationType("oneTime")}
                >
                  {text[language].oneTimeDonation}
                </button>
              </div>
            </div>

            <div className="card-body">
              {/* Currency Selection */}
              <div className="currency-selection">
                {currencies.map((currency) => (
                  <button
                    key={currency}
                    className={selectedCurrency === currency ? "active" : ""}
                    onClick={() => setSelectedCurrency(currency)}
                  >
                    {currency}
                  </button>
                ))}
              </div>

              {/* Amount Selection */}
              <div className="amount-selection">
                <h3>{text[language].selectAmount}</h3>
                <div className="amount-grid">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      className={selectedAmount === amount ? "active" : ""}
                      onClick={() => setSelectedAmount(amount)}
                    >
                      {selectedCurrency}
                      {amount}
                    </button>
                  ))}
                </div>
                <div className="custom-amount">
                  <input
                    type="number"
                    placeholder={text[language].customAmount}
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Impact Display */}
              {showImpact && (
                <div className="impact-display">
                  <h3>{text[language].impact}</h3>
                  <p>{impactMessages[language][selectedAmount as keyof typeof impactMessages["he"]] || text[language].impactText}</p>
                </div>
              )}

              {/* Donate Button */}
              <button className="donate-btn" onClick={handleDonate}>
                <span className="btn-text">{text[language].donateNow}</span>
                <span className="btn-amount">
                  {selectedCurrency}
                  {selectedAmount}
                </span>
                <div className="btn-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </button>

              {/* Security Features */}
              <div className="security-features">
                <div className="feature">
                  <span className="icon">🔒</span>
                  <span>{text[language].securePayment}</span>
                </div>
                <div className="feature">
                  <span className="icon">📋</span>
                  <span>{text[language].taxDeductible}</span>
                </div>
                <div className="feature">
                  <span className="icon">💝</span>
                  <span>{text[language].monthlySupport}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Call to Action */}
      <section className="urgent-section">
        <div className="container">
          <div className="urgent-card">
            <div className="urgent-icon">⚡</div>
            <h2>{text[language].urgentTitle}</h2>
            <p>{text[language].urgentText}</p>
            <button className="urgent-btn" onClick={handleDonate}>
              {text[language].donateNow}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2>{text[language].testimonialTitle}</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <h2>{language === "he" ? "ראו את ההשפעה שלכם" : "Voyez votre impact"}</h2>
          <div className="video-placeholder">
            <div className="play-button">▶</div>
            <p>
              {language === "he" ? "סרטון מרגש על פעילות האיגוד" : "Vidéo émouvante sur les activités de l'association"}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
