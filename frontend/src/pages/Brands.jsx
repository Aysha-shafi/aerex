import brandsBg from "../assets/brands.png";

const brands = [
  { name: "Daikin", note: "Air conditioning systems & VRV solutions" },
  { name: "Carrier", note: "Chillers & central plant equipment" },
  { name: "Honeywell", note: "Refrigerants & controls" },
  { name: "Mitsubishi Electric", note: "Split & ducted AC systems" },
  { name: "Danfoss", note: "Compressors & refrigeration components" },
  { name: "Systemair", note: "Ventilation & air movement" },
];

export default function Brands() {
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(7,20,45,0.75), rgba(7,20,45,0.75)), url(${brandsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "650px",
          display: "flex",
          alignItems: "center",
          color: "#fff",
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
            Our Partners
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(32px,4vw,46px)",
              marginTop: 16,
              maxWidth: 700,
            }}
          >
            Brands We Trust and Supply
          </h1>

          <p
            style={{
              color: "#d8e0ea",
              marginTop: 18,
              maxWidth: 600,
              lineHeight: 1.8,
              fontSize: 17,
            }}
          >
            We collaborate with globally recognized manufacturers, delivering premium
            industrial coatings and solutions backed by proven performance, quality,
            and long-term reliability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {brands.map((b) => (
            <div key={b.name} className="card" style={{ padding: 28 }}>
              <h3 style={{ fontSize: 19 }}>{b.name}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 8 }}>{b.note}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 40, fontSize: 13.5, color: "var(--ink-soft)", textAlign: "center" }}>
          Brand availability varies by product category. Contact our sales team to confirm current stock and lead times.
        </p>
      </section>
    </>
  );
}
