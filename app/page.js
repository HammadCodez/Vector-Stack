import Link from "next/link";

export default function Home() {
  const startBuildingLinks = [
    { text: "Getting Started Guide", href: "/docs/getting-started", desc: "Create a project and execute semantic search." },
    { text: "Installation Instructions", href: "/docs/installation", desc: "Download and set up Node/Python client libraries." },
    { text: "JavaScript SDK Reference", href: "/sdk/javascript", desc: "Integrate with frontend/backend JavaScript systems." },
    { text: "REST API Overview", href: "/api/overview", desc: "Base endpoints structure and content headers." }
  ];

  const corePlatformLinks = [
    { text: "Vector Embeddings", href: "/docs/embeddings" },
    { text: "Vector Indexes", href: "/docs/vector-indexes" },
    { text: "Document Ingestion", href: "/docs/document-ingestion" },
    { text: "RAG Retrieval Pipelines", href: "/docs/rag-pipelines" },
    { text: "Hybrid & BM25 Search", href: "/docs/hybrid-search" },
    { text: "Reranking Engine", href: "/docs/reranking" }
  ];

  const productionReadinessLinks = [
    { text: "Security Specifications", href: "/docs/security" },
    { text: "Rate Limits Configuration", href: "/docs/rate-limits" },
    { text: "Observability Metrics", href: "/docs/observability" },
    { text: "Production Deployments", href: "/docs/deployments" },
    { text: "Database Snapshots & Backups", href: "/docs/backups" },
    { text: "System Status Page", href: "/status" }
  ];

  const referenceLinks = [
    { text: "Search API Reference", href: "/api/search" },
    { text: "Embeddings API Reference", href: "/api/embeddings" },
    { text: "Indexes API Reference", href: "/api/indexes" },
    { text: "Webhooks Integration", href: "/api/webhooks" },
    { text: "Release Changelog", href: "/changelog" },
    { text: "Stable Releases", href: "/releases" }
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tagline">Vector Database & Retrieval Platform</p>
          <h1 className="hero-title">VectorStack Docs</h1>
          <p className="hero-description">
            Build AI search and RAG applications with managed vector indexes, embeddings, document ingestion, and production-ready retrieval APIs.
          </p>
          <div className="hero-buttons">
            <Link href="/docs/getting-started" className="btn-primary">
              Read Guides
            </Link>
            <Link href="/api" className="btn-secondary">
              API Reference
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section-container" style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        
        <div>
          <h2 className="home-section-title" style={{ textAlign: "left", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
            Start Building
          </h2>
          <div className="capabilities-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {startBuildingLinks.map((link, idx) => (
              <div key={idx} className="capability-card">
                <h3>
                  <Link href={link.href}>{link.text}</Link>
                </h3>
                <p>{link.desc}</p>
                <Link href={link.href} className="capability-link">
                  Open guide &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontSize: "1.25rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
              Core Platform
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {corePlatformLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="related-link-anchor" style={{ fontSize: "0.9375rem" }}>
                    {link.text} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontSize: "1.25rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
              Production Readiness
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {productionReadinessLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="related-link-anchor" style={{ fontSize: "0.9375rem" }}>
                    {link.text} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontSize: "1.25rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
              Reference
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {referenceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="related-link-anchor" style={{ fontSize: "0.9375rem" }}>
                    {link.text} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </section>
    </div>
  );
}
