"use client";

import { useState, useEffect } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    const target = 14720;
    const duration = 2000;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setAnimatedCount(current);
      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setStatus("sending");

    // Simulated API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="newsletter-section" id="newsletter-section">
      {/* Decorative floating orbs */}
      <div className="newsletter-orb newsletter-orb-1" aria-hidden="true" />
      <div className="newsletter-orb newsletter-orb-2" aria-hidden="true" />
      <div className="newsletter-orb newsletter-orb-3" aria-hidden="true" />

      <div className="newsletter-inner">
        <div className="newsletter-content-grid">
          {/* Left: Copy & Form */}
          <div className="newsletter-copy-side">
            <span className="newsletter-badge">📬 Developer Newsletter</span>
            <h2 className="newsletter-title">
              Stay Ahead of the Curve
            </h2>
            <p className="newsletter-description">
              Get weekly insights on vector search, RAG architectures, embedding model benchmarks, and product updates — delivered straight to your inbox.
            </p>

            {status === "success" ? (
              <div className="newsletter-success-card animate-slide-down">
                <span className="newsletter-success-icon">🎉</span>
                <div>
                  <h4>You&apos;re subscribed!</h4>
                  <p>Check your inbox to confirm. We send one curated email per week — no spam, ever.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="newsletter-input-wrap">
                  <span className="newsletter-input-icon" aria-hidden="true">✉️</span>
                  <input
                    type="email"
                    id="newsletter-email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    disabled={status === "sending"}
                    required
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className={`newsletter-submit-btn ${status === "sending" ? "sending" : ""}`}
                    disabled={status === "sending"}
                    id="newsletter-submit-btn"
                  >
                    {status === "sending" ? (
                      <span className="newsletter-spinner" />
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
                <p className="newsletter-disclaimer">
                  Join {animatedCount.toLocaleString()}+ developers. Unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            )}
          </div>

          {/* Right: Feature highlights */}
          <div className="newsletter-highlights-side">
            <div className="newsletter-highlight-card">
              <span className="highlight-icon">📊</span>
              <div>
                <h4>Weekly Benchmarks</h4>
                <p>Embedding model performance comparisons, latency reports, and index optimization tips.</p>
              </div>
            </div>
            <div className="newsletter-highlight-card">
              <span className="highlight-icon">🧪</span>
              <div>
                <h4>Engineering Deep-Dives</h4>
                <p>Technical breakdowns of our HNSW index, quantization strategy, and distributed query engine.</p>
              </div>
            </div>
            <div className="newsletter-highlight-card">
              <span className="highlight-icon">🚀</span>
              <div>
                <h4>Early Access</h4>
                <p>Be the first to try beta features, new SDK releases, and experimental APIs before anyone else.</p>
              </div>
            </div>
            <div className="newsletter-highlight-card">
              <span className="highlight-icon">🎓</span>
              <div>
                <h4>Curated Tutorials</h4>
                <p>Step-by-step guides for common use cases — from chatbots to enterprise knowledge search.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
