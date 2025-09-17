"use client"


export default function DonatePage() {

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgba(10, 15, 26, 0.95) 0%, rgba(26, 35, 50, 0.85) 50%, rgba(10, 15, 26, 0.95) 100%)",
        color: "#fff",
        padding: "4rem 2rem",
        direction: "rtl",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", color: "#d4af37", marginBottom: "2rem" }}>תרומות</h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "rgba(255, 255, 255, 0.9)", marginBottom: "3rem" }}>
          תרומתכם מאפשרת לנו להמשיך בפעילותנו החשובה ולעזור לתלמידי ישיבות בצרפת. כל תרומה, גדולה כקטנה, עושה הבדל אמיתי
          בחייהם של התלמידים.
        </p>
        <button
          style={{
            background: "linear-gradient(135deg, #d4af37, #f4e4a6)",
            color: "#0a0f1a",
            border: "none",
            padding: "16px 32px",
            borderRadius: "12px",
            fontWeight: "700",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          תרום עכשיו
        </button>
      </div>
    </div>
  )
}
