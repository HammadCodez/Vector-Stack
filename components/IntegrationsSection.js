"use client";

import { useState } from "react";
import { integrationsData } from "../data/integrations";

export default function IntegrationsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openSnippetId, setOpenSnippetId] = useState(null);
  const [snippetLanguage, setSnippetLanguage] = useState("javascript"); // "javascript" or "python"
  const [copiedId, setCopiedId] = useState(null);

  const categories = ["All", "AI Frameworks", "Embedding Models", "Ops & VPCs"];

  const handleToggleSnippet = (id) => {
    setOpenSnippetId(openSnippetId === id ? null : id);
  };

  const handleCopyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredIntegrations = integrationsData.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="home-section-container" style={{ borderBottom: "1px solid var(--border-color)" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="playground-badge">Ecosystem</span>
        <h2 className="home-section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
          Integrates With Your Tech Stack
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          Connect VectorStack to popular AI frameworks, embedding providers, and cloud orchestration tools in minutes.
        </p>

        {/* Search & Category Filter Controls */}
        <div className="integrations-controls-panel">
          <div className="integrations-categories-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-tab-btn ${selectedCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="integrations-search-wrapper">
            <span className="search-icon-decor">🔍</span>
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="integrations-search-input"
            />
          </div>
        </div>
      </div>

      {/* Grid of Integrations */}
      <div className="integrations-grid">
        {filteredIntegrations.length > 0 ? (
          filteredIntegrations.map((item) => {
            const isSnippetOpen = openSnippetId === item.id;
            const snippetCode = item.snippets[snippetLanguage];
            const isCopied = copiedId === item.id;

            return (
              <div key={item.id} className={`integration-card ${isSnippetOpen ? "expanded" : ""}`}>
                <div className="integration-card-header">
                  <div className="integration-logo-badge">{item.icon}</div>
                  <div className="integration-card-info">
                    <span className="integration-category-pill">{item.category}</span>
                    <h3>{item.name}</h3>
                  </div>
                </div>
                
                <p className="integration-card-description">{item.description}</p>
                
                <button
                  onClick={() => handleToggleSnippet(item.id)}
                  className={`integration-snippet-toggle-btn ${isSnippetOpen ? "active" : ""}`}
                >
                  {isSnippetOpen ? "Hide Code Snippet" : "View Code Snippet"}
                </button>

                {/* Snippet Drawer Panel */}
                {isSnippetOpen && (
                  <div className="snippet-drawer-panel animate-slide-down">
                    <div className="snippet-panel-header">
                      <div className="language-selector-tabs">
                        <button
                          onClick={() => setSnippetLanguage("javascript")}
                          className={`lang-tab-btn ${snippetLanguage === "javascript" ? "active" : ""}`}
                        >
                          JavaScript
                        </button>
                        <button
                          onClick={() => setSnippetLanguage("python")}
                          className={`lang-tab-btn ${snippetLanguage === "python" ? "active" : ""}`}
                        >
                          Python
                        </button>
                      </div>
                      
                      <button
                        onClick={() => handleCopyCode(item.id, snippetCode)}
                        className="snippet-copy-btn"
                      >
                        {isCopied ? "Copied! ✓" : "Copy Code"}
                      </button>
                    </div>
                    
                    <div className="snippet-code-box">
                      <pre>
                        <code>{snippetCode}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="faq-empty-state" style={{ gridColumn: "1 / -1" }}>
            <span style={{ fontSize: "2rem" }}>🧩</span>
            <h4>No integrations found</h4>
            <p>Try clearing filters or search parameters.</p>
            <button
              className="btn-secondary"
              style={{ marginTop: "1rem" }}
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
