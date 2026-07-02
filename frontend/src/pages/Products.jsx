import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../api/axios.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const search = searchParams.get("search") || "";

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    api.get("/categories").then((r) => setCategories(r.data || []));
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (search) params.set("search", search);
    params.set("limit", "24");
    api.get(`/products?${params.toString()}`).then((r) => {
      setProducts(r.data.products || []);
      setLoading(false);
    });
  }, [category, search]);

  const setCategory = (slug) => {
    const next = new URLSearchParams(searchParams);
    if (slug) next.set("category", slug); else next.delete("category");
    setSearchParams(next);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const next = new URLSearchParams(searchParams);
    if (searchInput) next.set("search", searchInput); else next.delete("search");
    setSearchParams(next);
  };

  return (
    <>
      <section style={{ background: "var(--navy-deep)", color: "#fff" }}>
        <div className="container" style={{ padding: "70px 32px 48px" }}>
          <div className="eyebrow" style={{ color: "var(--blue-light)" }}>Catalog</div>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px,3.5vw,42px)", marginTop: 14 }}>Products</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 40 }}>
          <aside>
            <form onSubmit={onSearchSubmit} style={{ marginBottom: 28 }}>
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search products..."
                style={{ width: "100%", padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 14 }}
              />
            </form>
            <h4 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-soft)", marginBottom: 14 }}>Categories</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <li>
                <button onClick={() => setCategory("")} style={{ background: "none", border: "none", padding: "8px 0", fontSize: 14, fontWeight: !category ? 700 : 500, color: !category ? "var(--blue)" : "var(--ink)" }}>
                  All Products
                </button>
              </li>
              {categories.map((c) => (
                <li key={c._id}>
                  <button onClick={() => setCategory(c.slug)} style={{ background: "none", border: "none", padding: "8px 0", fontSize: 14, textAlign: "left", fontWeight: category === c.slug ? 700 : 500, color: category === c.slug ? "var(--blue)" : "var(--ink)" }}>
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            {loading ? (
              <p style={{ color: "var(--ink-soft)" }}>Loading products...</p>
            ) : products.length === 0 ? (
              <div className="card" style={{ padding: 40, textAlign: "center" }}>
                <p style={{ color: "var(--ink-soft)" }}>No products found. Try a different category or search term.</p>
              </div>
            ) : (
              <div className="grid-3">
                {products.map((p) => <ProductCard key={p._id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
