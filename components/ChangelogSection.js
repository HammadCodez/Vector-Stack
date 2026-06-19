"use client";

import { useState } from "react";
import { changelogData } from "../data/changelog";

export default function ChangelogSection() {
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Added", "Changed", "Fixed"];

  // Filter items in the changelog according to filterCategory
  const getFilteredReleases = (releases) => {
    if (filterCategory === "All") return releases;
    return releases
      .map((rel) => {
        if (rel.category === filterCategory) return rel;
        return null;
      })
      .filter(Boolean);
  };

  return (
    <section className="home-section-container" style={{ borderBottom: "1px solid var(--border-color)", backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="playground-badge">Releases</span>
        <h2 className="home-section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
          Product Updates & Changelog
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          Track new feature additions, security enhancements, and SDK performance updates.
        </p>

        {/* Categories filters */}
        <div className="changelog-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`changelog-filter-chip ${filterCategory === cat ? "active" : ""}`}
            >
              {cat === "All" ? "All Updates" : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="changelog-timeline-feed">
        {changelogData.map((log, logIdx) => {
          const filteredReleases = getFilteredReleases(log.releases);
          
          if (filteredReleases.length === 0) return null;

          return (
            <div key={logIdx} className="changelog-version-block">
              <div className="changelog-timeline-node">
                <span className="node-version-tag">v{log.version}</span>
                <span className="node-date-tag">{log.date}</span>
              </div>

              <div className="changelog-content-card">
                <h4>{log.title}</h4>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
                  {log.description}
                </p>

                <div className="changelog-categories-wrapper">
                  {filteredReleases.map((release, relIdx) => (
                    <div
                      key={relIdx}
                      className={`changelog-category-box ${release.category.toLowerCase()}`}
                    >
                      <span className="category-header">{release.category}</span>
                      <ul className="category-items-list">
                        {release.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
