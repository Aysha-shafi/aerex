import { useState } from "react";
 import contactBg from "../assets/contact.png";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello AEREX Team,

I would like to enquire about your products/services.

*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Subject:* ${form.subject}

*Message:*
${form.message}`;

    window.open(
      `https://wa.me/971545087262?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <section
  style={{
    backgroundImage: `linear-gradient(rgba(7,20,45,0.75), rgba(7,20,45,0.75)), url(${contactBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    minHeight: "520px",
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
            Contact
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(32px,4vw,46px)",
              marginTop: 16,
            }}
          >
            Let's talk about your project.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2 style={{ fontSize: 22 }}>
              Reach us directly
            </h2>

            <p
              style={{
                color: "var(--ink-soft)",
                marginTop: 12,
                lineHeight: 1.8,
              }}
            >
              For quotations, technical questions or stock
              availability, contact our sales team using
              any of the channels below.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                marginTop: 32,
              }}
            >
              {/* Sales Email */}
              <a
                href="mailto:sales@aerexgroup.com"
                className="card"
                style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}
              >
                <Icon name="mail" />
                <div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    Sales Enquiries
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    sales@aerexgroup.com
                  </div>
                </div>
              </a>

              {/* Management */}
              <a
                href="mailto:mohammed@aerexgroup.com"
                className="card"
                style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}
              >
                <Icon name="mail" />
                <div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    Management
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    mohammed@aerexgroup.com
                  </div>
                </div>
              </a>

              {/* Phone */}
              <div
                className="card"
                style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}
              >
                <Icon name="phone" />
                <div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    Phone
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    +971 54 508 7262
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    +971 54 525 3697
                  </div>
                </div>
              </div>

              {/* Location */}
              <div
                className="card"
                style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}
              >
                <Icon name="location" />
                <div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    Location
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    G Floor, Shams Business Center
                    <br />
                    Sharjah, UAE
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div
                className="card"
                style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}
              >
                <Icon name="clock" />
                <div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    Business Hours
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    Monday – Saturday
                    <br />
                    8:00 AM – 6:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="card" style={{ padding: 32 }}>
            <h3 style={{ marginBottom: 20 }}>
              Send an Enquiry
            </h3>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                maxLength={15}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, ""),
                  })
                }
                style={inputStyle}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                style={inputStyle}
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                value={form.message}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                className="btn-primary"
                style={{
                  padding: "14px",
                  fontSize: "15px",
                  fontWeight: "600",
                  borderRadius: 10,
                }}
              >
                Send Enquiry
              </button>
            </form>


          </div>
        </div>
        <div
          className="container"
          style={{ marginTop: 60 }}
        >
          <div
            className="container"
            style={{
              marginTop: 50,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="card"
              style={{
                width: "100%",
                maxWidth: "900px",
                overflow: "hidden",
                borderRadius: 12,
                padding: 0,
                border: "1px solid var(--line)",
              }}
            >
              <iframe
                title="AEREX Location"
                src="https://www.google.com/maps?q=Shams+Business+Center+Sharjah&output=embed"
                width="100%"
                height="350"
                loading="lazy"
                style={{
                  border: 0,
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid var(--line)",
  borderRadius: 8,
  fontSize: 15,
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

function Icon({ name }) {
  const common = {
    width: 22,
    height: 22,
    fill: "none",
    stroke: "var(--blue)",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.37a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.71-1.11a2 2 0 0 1 2.11-.45c.77.24 1.56.42 2.37.54A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  return null;
}