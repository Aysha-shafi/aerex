import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ background: "#ffffff", color: "var(--ink-soft)", marginTop: 96, borderTop: "1px solid var(--line)" }}>
      <div
        className="container footer-grid"
        style={{
          padding: "64px 32px 32px",
        }}
      >        <div>
          <Logo />
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.7, color: "var(--ink-soft)", maxWidth: 280 }}>
            Engineering reliable climate and refrigeration systems across the Emirates — from selection to support.
          </p>
        </div>

        <div>
          <h4 style={{ color: "var(--navy)", fontSize: 14, marginBottom: 16 }}>QUICK LINKS</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/products" className="footer-link">Products</Link></li>
            <li><Link to="/brands" className="footer-link">Brands</Link></li>
            <li><Link to="/careers" className="footer-link">Careers</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: "var(--navy)", fontSize: 14, marginBottom: 16 }}>CATALOG</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <li><Link to="/products" className="footer-link">All Products</Link></li>
            <li><Link to="/products?category=air-conditioning-systems" className="footer-link">AC Systems</Link></li>
            <li><Link to="/products?category=refrigerants" className="footer-link">Refrigerants</Link></li>
            <li><Link to="/products?category=chillers" className="footer-link">Chillers</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: "var(--navy)", fontSize: 14, marginBottom: 16 }}>
            CONTACT
          </h4>

          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              fontSize: 14,
              color: "var(--ink-soft)",
            }}
          >
            <li className="footer-link" 
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <FaMapMarkerAlt
                style={{ color: "var(--gold)", marginTop: 3, flexShrink: 0 }}
              />
              <span>
                G Floor, Shams Business Center,
                <br />
                Sharjah, UAE
              </span>
            </li>

            <li className="footer-link" 
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <FaPhoneAlt
                style={{ color: "var(--gold)", flexShrink: 0 }}
              />
              <a href="tel:+971545087262" style={{ color: "inherit" }}>
                +971 54 508 7262, +971 54 525 3697
              </a>
            </li>

            <li
              className="footer-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <FaEnvelope
                style={{ color: "var(--gold)", flexShrink: 0 }}
              />
              <a href="mailto:sales@aerexgroup.com" style={{ color: "inherit" }}>
                sales@aerexgroup.com
              </a>
            </li>

            <li className="footer-link" 
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <FaEnvelope
                style={{ color: "var(--gold)", flexShrink: 0 }}
              />
              <a href="mailto:mohammed@aerexgroup.com" style={{ color: "inherit" }}>
                mohammed@aerexgroup.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="footer-bottom"
        style={{
          borderTop: "1px solid var(--line)",
          padding: "20px 32px",
          fontSize: 12.5,
          color: "var(--ink-soft)",
        }}
      >        <span>© {new Date().getFullYear()} AEREX LLC. All rights reserved.</span>
        <span>Excellence Across the Emirates</span>
      </div>
    </footer>
  );
}
