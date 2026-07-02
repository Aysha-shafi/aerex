import Sweep from "../components/Sweep.jsx";

const values = [
  { title: "Precision", text: "Specifications are verified against site conditions before recommendation." },
  { title: "Availability", text: "Stocked inventory across core categories to minimize project downtime." },
  { title: "Accountability", text: "Direct technical support from quotation through to commissioning." },
];

export default function About() {
  return (
    <>
      <section style={{ background: "var(--navy-deep)", color: "#fff" }}>
        <div className="container" style={{ padding: "90px 32px 64px" }}>
          <div className="eyebrow" style={{ color: "var(--blue-light)" }}>About AEREX</div>
          <h1 style={{ color: "#fff", fontSize: "clamp(32px,4vw,46px)", marginTop: 16, maxWidth: 700 }}>
            A Sharjah-based supplier built around technical reliability.
          </h1>
        </div>
        <Sweep variant="dark" />
      </section>

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
