"use client";

import { useState } from "react";
import { faqData } from "../data/faq";

export default function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="home-section-container" style={{ paddingBottom: "6rem" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="playground-badge">FAQ</span>
        <h2 className="home-section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
          Frequently Asked Questions
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          Get answers to technical queries, indexing specifications, and core engine configurations.
        </p>

        {/* Search Input */}
        <div className="faq-search-container">
          <span className="faq-search-icon">🔍</span>
          <input
            type="text"
            className="faq-search-input"
            placeholder="Search FAQs by keywords (e.g. metadata, hybrid, metric)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="faq-search-clear" onClick={() => setSearchQuery("")}>
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Accordion List */}
      <div className="faq-accordion-list">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div key={faq.id} className={`faq-item-card ${isOpen ? "active" : ""}`}>
                <button
                  className="faq-header-btn"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className={`faq-arrow-icon ${isOpen ? "rotated" : ""}`}>
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className={`faq-body-panel ${isOpen ? "expanded" : ""}`}>
                  <div className="faq-body-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="faq-empty-state">
            <span style={{ fontSize: "2rem" }}>🔍</span>
            <h4>No FAQs match your search</h4>
            <p>Try searching for other keywords, or view our documentation.</p>
            <button className="btn-secondary" style={{ marginTop: "1rem" }} onClick={() => setSearchQuery("")}>
              Reset Search Filter
            </button>
          </div>
        )}
      </div>

      {/* Developer CTA Support Area */}
      <div className="faq-support-footer">
        <div className="faq-support-content">
          <h4>Still have questions?</h4>
          <p>Can't find the answer you are looking for? Reach out to our developer support team.</p>
        </div>
        <div className="faq-support-actions">
          <a href="mailto:support@vectorstack.com" className="btn-secondary">
            Email Support
          </a>
          <a href="/docs/getting-started" className="btn-primary">
            Read Getting Started
          </a>
        </div>
      </div>
    </section>
  );
}
