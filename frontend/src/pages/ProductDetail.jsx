import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios.js";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    api
      .get(`/products/${slug}`)
      .then((r) => setProduct(r.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="container section">Loading...</div>;
  if (error || !product) {
    return (
      <div className="container section">
        <p>Product not found.</p>
        <Link to="/products" style={{ color: "var(--blue)", fontWeight: 600 }}>&larr; Back to products</Link>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/971545087262?text=${encodeURIComponent(
    `Hello AEREX, I'm interested in: ${product.name}`
  )}`;

  return (
    <section className="section">
      <div className="container">
        <Link to="/products" style={{ fontSize: 13, color: "var(--ink-soft)" }}>&larr; Back to products</Link>

        <div className="grid-2" style={{ marginTop: 24 }}>
          <div>
            <div className="card" style={{ aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "var(--silver-light)" }}>
              {product.images?.length > 0 ? (
                <img src={product.images[activeImg]} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--silver)" strokeWidth="1.2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 16l5-5 4 4 5-6 4 5" />
                </svg>
              )}
            </div>
            {product.images?.length > 1 && (
              <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} style={{ width: 64, height: 64, border: i === activeImg ? "2px solid var(--blue)" : "1px solid var(--line)", borderRadius: 4, overflow: "hidden", padding: 0, background: "none" }}>
                    <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            {product.brand && (
              <div style={{ fontFamily: "Space Mono, monospace", fontSize: 12, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {product.brand}
              </div>
            )}
            <h1 style={{ fontSize: 30, marginTop: 10 }}>{product.name}</h1>
            {product.category && (
              <Link to={`/products?category=${product.category.slug}`} style={{ fontSize: 13.5, color: "var(--ink-soft)", marginTop: 6, display: "inline-block" }}>
                {product.category.name}
              </Link>
            )}
            <p style={{ marginTop: 18, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.8 }}>
              {product.description || product.shortDescription}
            </p>

            <div style={{ marginTop: 16, fontWeight: 600, color: product.inStock ? "var(--success)" : "#b3413e" }}>
              {product.inStock ? "In Stock" : "Available on Request"}
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Enquire on WhatsApp
              </a>
              <a href={`mailto:sales@aerexgroup.com?subject=${encodeURIComponent("Enquiry: " + product.name)}`} className="btn btn-outline">
                Email Enquiry
              </a>
            </div>

            {product.specifications?.length > 0 && (
              <div style={{ marginTop: 36 }}>
                <h3 style={{ fontSize: 16, marginBottom: 14 }}>Specifications</h3>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                  <tbody>
                    {product.specifications.map((s, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                        <td style={{ padding: "10px 0", color: "var(--ink-soft)", width: "40%" }}>{s.key}</td>
                        <td style={{ padding: "10px 0", fontWeight: 600 }}>{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
