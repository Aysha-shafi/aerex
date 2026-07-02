import Sweep from "../components/Sweep.jsx";
import aboutBg from "../assets/aboutt.png";
import visionBg from "../assets/vision1.png";
import missionBg from "../assets/misiion1.png";
const values = [
  { title: "Precision", text: "Specifications are verified against site conditions before recommendation." },
  { title: "Availability", text: "Stocked inventory across core categories to minimize project downtime." },
  { title: "Accountability", text: "Direct technical support from quotation through to commissioning." },
];

export default function About() {
  return (
    <>
    <section
      style={{
        backgroundImage: ` url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        minHeight: "650px",
        display: "flex",
        alignItems: "center",
      }}
    >
           <div
      style={{
        width: "100%",
        maxWidth: "1600px",
        margin: "0 auto",
        padding: "0 60px",
      }}
    >
              <div
                className="eyebrow"
                style={{
                  color: "var(--blue-light)",
                }}
              >
                About AEREX
              </div>
    
              <h1
  style={{
    color: "#fff",
    fontSize: "clamp(32px, 4vw, 46px)",
    marginTop: 16,
    maxWidth: "18ch",
    lineHeight: "1.2",
    whiteSpace: "normal",
  }}
>
  A Sharjah-based supplier built around technical reliability.
</h1>
            </div>
          </section>
      {/* <section style={{ background: "var(--navy-deep)", color: "#fff" }}>
        <div className="container" style={{ padding: "90px 32px 64px" }}>
          <div className="eyebrow" style={{ color: "var(--blue-light)" }}>About AEREX</div>
          <h1 style={{ color: "#fff", fontSize: "clamp(32px,4vw,46px)", marginTop: 16, maxWidth: 700 }}>
            A Sharjah-based supplier built around technical reliability.
          </h1>
        </div>
        <Sweep variant="dark" />
      </section> */}

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2 style={{ fontSize: 26 }}>Our story</h2>
            <p style={{ marginTop: 16, color: "var(--ink-soft)", lineHeight: 1.8 }}>
              AEREX LLC was founded to close a gap in the UAE's HVAC and refrigeration supply chain: equipment that
              is correctly specified, genuinely stocked, and backed by people who understand the engineering behind
              it. Operating from our G Floor offices at Shams Business Center, Sharjah, we serve contractors,
              facilities teams and project consultants across all seven emirates.
            </p>
            <p style={{ marginTop: 16, color: "var(--ink-soft)", lineHeight: 1.8 }}>
              Our catalog spans air conditioning systems, chillers, refrigerants, ventilation equipment and the
              spare parts that keep installed systems running &mdash; sourced from manufacturers with proven
              performance in Gulf climates.
            </p>
          </div>
          <div className="card" style={{ padding: 32 }}>
            <h3 style={{ fontSize: 18, marginBottom: 18 }}>At a glance</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <li style={{ display: "flex", justifyContent: "space-between", fontSize: 14, borderBottom: "1px solid var(--line)", paddingBottom: 12 }}>
                <span style={{ color: "var(--ink-soft)" }}>Headquarters</span><span style={{ fontWeight: 600 }}>Sharjah, UAE</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", fontSize: 14, borderBottom: "1px solid var(--line)", paddingBottom: 12 }}>
                <span style={{ color: "var(--ink-soft)" }}>Coverage</span><span style={{ fontWeight: 600 }}>All 7 Emirates</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", fontSize: 14, borderBottom: "1px solid var(--line)", paddingBottom: 12 }}>
                <span style={{ color: "var(--ink-soft)" }}>Focus</span><span style={{ fontWeight: 600 }}>HVAC &amp; Refrigeration</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <span style={{ color: "var(--ink-soft)" }}>Clients</span><span style={{ fontWeight: 600 }}>Contractors &amp; Facilities Teams</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* VISION & MISSION */}
      <section className="section" style={{ background: "var(--navy-deep)" }}>
        <div className="container grid-2" style={{ gap: 32 }}>
          {/* Vision */}
<div
  style={{
    backgroundImage: `linear-gradient(rgba(7,20,45,0.75), rgba(7,20,45,0.75)), url(${visionBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 6,
    padding: 40,
    color: "#fff",
  }}
>            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M2 12C4.5 7 8 4 12 4s7.5 3 10 8c-2.5 5-6 8-10 8S4.5 17 2 12z" />
                </svg>
              </div>
              <div className="eyebrow" style={{ color: "var(--blue-light)" }}>Our Vision</div>
            </div>
            <h2 style={{ color: "#ffffff", fontSize: 22, lineHeight: 1.4 }}>
              To be the most trusted name in climate and refrigeration solutions across the United Arab Emirates.
            </h2>
            <p style={{ color: "#aab6c9", fontSize: 14.5, marginTop: 16, lineHeight: 1.8 }}>
              We envision a UAE where every building, facility, and cold chain operation is supported by
              correctly engineered, reliably maintained equipment — chosen by professionals who understand
              both the technology and the Gulf environment it must perform in.
            </p>
          </div>

          {/* Mission */}
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(7,20,45,0.75), rgba(7,20,45,0.75)), url(${missionBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 6,
              padding: 40,
              color: "#fff",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z" />
                </svg>
              </div>
              <div className="eyebrow" style={{ color: "var(--blue-light)" }}>Our Mission</div>
            </div>
            <h2 style={{ color: "#ffffff", fontSize: 22, lineHeight: 1.4 }}>
              To deliver engineering-led supply, dependable stock, and responsive support for every project we serve.
            </h2>
            <p style={{ color: "#aab6c9", fontSize: 14.5, marginTop: 16, lineHeight: 1.8 }}>
              Our mission is to match the right equipment to every requirement — from a single split unit to a
              full chiller plant — backed by honest technical advice, genuine manufacturer-sourced products,
              and service that doesn't stop at the point of sale.
            </p>
          </div>
        </div>
      </section>


      <section className="section-tight" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <h2 style={{ fontSize: 26 }}>What guides our work</h2>
          <div className="grid-3" style={{ marginTop: 36 }}>
            {values.map((v) => (
              <div key={v.title}>
                <h3 style={{ fontSize: 17 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 8, lineHeight: 1.7 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
