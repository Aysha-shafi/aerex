import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios.js";
import Sweep from "../components/Sweep.jsx";
import ProductCard from "../components/ProductCard.jsx";

const pillars = [
  {
    title: "Engineered Selection",
    text: "Every system is matched to load, climate and site conditions before it ever ships.",
  },
  {
    title: "Verified Brands",
    text: "We carry equipment and refrigerants from manufacturers with proven UAE service records.",
  },
  {
    title: "Across the Emirates",
    text: "From Sharjah to Abu Dhabi, our logistics and support reach every emirate.",
  },
];

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("/products?featured=true&limit=4").then((r) => setFeatured(r.data.products || []));
    api.get("/categories").then((r) => setCategories(r.data || []));
  }, []);

  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg, var(--navy-deep), var(--navy) 60%)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ padding: "120px 32px 80px", position: "relative", zIndex: 2 }}>
          <div className="eyebrow" style={{ color: "var(--blue-light)" }}>AEREX LLC &mdash; Sharjah, UAE</div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", color: "#fff", marginTop: 18, maxWidth: 760, lineHeight: 1.08 }}>
            Climate systems engineered for the Emirates' extremes.
          </h1>
          <p style={{ fontSize: 17, color: "#aab6c9", maxWidth: 560, marginTop: 22, lineHeight: 1.7 }}>
            AEREX supplies and supports HVAC, refrigeration and ventilation equipment built to perform reliably
            in Gulf conditions &mdash; backed by an engineering-first approach to every project.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
            <Link to="/products" className="btn btn-light">Browse Products</Link>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: "#3fa9f5", color: "#fff" }}>Talk to Sales</Link>
          </div>
        </div>
        <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
          <Sweep variant="dark" />
        </div>
      </section>

      {/* PILLARS */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Why AEREX</div>
          <h2 style={{ fontSize: 32, marginTop: 14, maxWidth: 600 }}>Built on engineering discipline, not just inventory.</h2>
          <div className="grid-3" style={{ marginTop: 48 }}>
            {pillars.map((p, i) => (
              <div key={p.title} className="card" style={{ padding: 28 }}>
                <div style={{ fontFamily: "Space Mono, monospace", fontSize: 12, color: "var(--blue)" }}>0{i + 1}</div>
                <h3 style={{ fontSize: 18, marginTop: 14 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 10, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      {categories.length > 0 && (
        <section className="section-tight" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="container">
            <h2 style={{ fontSize: 26 }}>Browse by Category</h2>
            <div className="grid-4" style={{ marginTop: 32 }}>
              {categories.slice(0, 4).map((c) => (
                <Link key={c._id} to={`/products?category=${c.slug}`} className="card" style={{ padding: 24, display: "block" }}>
                  <h3 style={{ fontSize: 16 }}>{c.name}</h3>
                  <span style={{ fontSize: 13, color: "var(--blue)", fontWeight: 600, marginTop: 10, display: "block" }}>View products &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURED PRODUCTS */}
      {featured.length > 0 && (
        <section className="section">
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div className="eyebrow">Featured</div>
                <h2 style={{ fontSize: 28, marginTop: 12 }}>Popular equipment right now</h2>
              </div>
              <Link to="/products" style={{ fontSize: 14, fontWeight: 600, color: "var(--blue)" }}>View all &rarr;</Link>
            </div>
            <div className="grid-4" style={{ marginTop: 36 }}>
              {featured.map((p) => <ProductCard key={p._id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "var(--navy)", color: "#fff" }}>
        <div className="container" style={{ padding: "72px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h2 style={{ color: "#fff", fontSize: 28 }}>Need a quotation or technical spec sheet?</h2>
            <p style={{ color: "#aab6c9", marginTop: 8 }}>Our team replies within one business day.</p>
          </div>
          <Link to="/contact" className="btn btn-light">Contact Sales</Link>
        </div>
      </section>
    </>
  );
}
