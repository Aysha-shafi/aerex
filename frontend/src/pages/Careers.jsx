import { useEffect, useState } from "react";
import api from "../api/axios.js";
import careersBg from "../assets/careers-bg.png";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/jobs").then((r) => setJobs(r.data || [])).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(7,20,45,0.72), rgba(7,20,45,0.72)), url(${careersBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "590px",
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
            style={{
              maxWidth: "700px",
            }}
          >
            <div
              className="eyebrow"
              style={{
                color: "var(--blue-light)",
              }}
            >
              Careers
            </div>

            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(32px,4vw,46px)",
                marginTop: 16,
                lineHeight: 1.2,
              }}
            >
              Build the Systems That Keep the Emirates Cool.
            </h1>

            <p
              style={{
                color: "#d8e0ea",
                marginTop: 18,
                maxWidth: "560px",
                lineHeight: 1.8,
                fontSize: 17,
              }}
            >
              Join a team driven by innovation, quality, and excellence. We're
              always looking for talented engineers, technicians, and sales
              professionals who are passionate about delivering world-class HVAC
              and refrigeration solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <p style={{ color: "var(--ink-soft)" }}>Loading openings...</p>
          ) : jobs.length === 0 ? (
            <div className="card" style={{ padding: 40, textAlign: "center" }}>
              <h3 style={{ fontSize: 18 }}>No open positions right now</h3>
              <p style={{ color: "var(--ink-soft)", marginTop: 10 }}>
                We're not actively hiring at the moment, but we welcome speculative applications.
              </p>
              <a href="mailto:mohammed@aerexgroup.com?subject=Speculative Application" className="btn btn-primary" style={{ marginTop: 20, display: "inline-flex" }}>
                Send Your CV
              </a>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {jobs.map((job) => (
                <div key={job._id} className="card" style={{ padding: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{job.title}</h3>
                    <p style={{ fontSize: 13.5, color: "var(--ink-soft)", marginTop: 6 }}>
                      {job.department && `${job.department} · `}{job.location} · {job.type}
                    </p>
                    {job.description && (
                      <p style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 12, maxWidth: 560, lineHeight: 1.7 }}>{job.description}</p>
                    )}
                    {job.requirements?.length > 0 && (
                      <ul style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {job.requirements.map((r, i) => (
                          <li key={i} style={{ fontSize: 12, background: "var(--silver-light)", padding: "4px 10px", borderRadius: 20, color: "var(--navy)" }}>{r}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <a
                    href={`mailto:mohammed@aerexgroup.com?subject=${encodeURIComponent("Application: " + job.title)}`}
                    className="btn btn-outline"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
