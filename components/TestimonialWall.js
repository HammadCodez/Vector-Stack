"use client";

import { useState } from "react";

const initialReviews = [
  {
    name: "Dr. Sarah Jenkins",
    company: "CTO, NeuralRetrieval",
    rating: 5,
    message: "VectorStack is incredibly fast. Our RAG system search query latency plummeted from 180ms to less than 15ms. The hybrid BM25 integration is a game-changer.",
    avatar: "🔬"
  },
  {
    name: "Alex Rivera",
    company: "Lead AI Engineer, Synthetix",
    rating: 5,
    message: "The local Docker sandbox container is exactly what developers need. I had a fully working local ingestion pipeline running offline in under 3 minutes.",
    avatar: "💻"
  },
  {
    name: "Elena Rostova",
    company: "Product Architect, SemanticHQ",
    rating: 4.8,
    message: "Webhooks for pipeline successes and metadata pruning filters work flawlessly. The client SDK is simple, ergonomic, and extremely robust.",
    avatar: "🚀"
  }
];

export default function TestimonialWall() {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState("5.0");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;

    const newReview = {
      name,
      company: company || "Independent Developer",
      rating: parseFloat(rating),
      message,
      avatar: "👨‍💻",
      isNew: true // helper for animation class
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setCompany("");
    setMessage("");
    setShowForm(false);
  };

  const renderStars = (ratingVal) => {
    const rounded = Math.round(ratingVal);
    return "★".repeat(rounded) + "☆".repeat(5 - rounded);
  };

  return (
    <section className="home-section-container" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="playground-badge">Community</span>
        <h2 className="home-section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
          Trusted By AI Builders
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          See what other developers are saying about VectorStack or leave your own review in our guestbook.
        </p>

        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-secondary"
          style={{ marginTop: "1.5rem", padding: "0.6rem 1.25rem" }}
        >
          {showForm ? "Close Review Guestbook" : "Sign Our Guestbook"}
        </button>
      </div>

      {/* Guestbook review form */}
      {showForm && (
        <div className="guestbook-form-wrapper animate-slide-down">
          <form onSubmit={handleSubmit} className="guestbook-form">
            <h4>Leave a Review</h4>
            <div className="form-row-2col">
              <div className="form-group">
                <label htmlFor="dev-name">Name</label>
                <input
                  type="text"
                  id="dev-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dev-company">Company / Role</label>
                <input
                  type="text"
                  id="dev-company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Lead Dev, Acme Corp"
                />
              </div>
            </div>

            <div className="form-row-2col">
              <div className="form-group">
                <label htmlFor="dev-rating">Rating</label>
                <select
                  id="dev-rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="5.0">★★★★★ (5.0)</option>
                  <option value="4.0">★★★★☆ (4.0)</option>
                  <option value="3.0">★★★☆☆ (3.0)</option>
                  <option value="2.0">★★☆☆☆ (2.0)</option>
                  <option value="1.0">★☆☆☆☆ (1.0)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dev-msg">Testimonial Message</label>
              <textarea
                id="dev-msg"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your experience building vector indices or running retrieval APIs..."
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%", padding: "0.75rem" }}>
              Publish Review &rarr;
            </button>
          </form>
        </div>
      )}

      {/* Testimonials grid */}
      <div className="testimonials-cards-grid">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className={`testimonial-card ${rev.isNew ? "animate-pop highlight-card" : ""}`}
          >
            <div className="testimonial-header">
              <div className="avatar-bubble">{rev.avatar}</div>
              <div className="dev-meta">
                <h5>{rev.name}</h5>
                <span>{rev.company}</span>
              </div>
              <div className="stars-indicator">{renderStars(rev.rating)}</div>
            </div>
            
            <p className="testimonial-msg">"{rev.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
