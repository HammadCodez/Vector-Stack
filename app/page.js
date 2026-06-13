import Link from "next/link";

export default function Home() {
  const activeLinks = [
    { text: "Getting Started Guide", href: "/docs/getting-started", desc: "Initialize your workspace, obtain API credentials, and run semantic queries.", icon: "🚀" },
    { text: "Installation Guide", href: "/docs/installation", desc: "Download and set up JavaScript/Node client libraries inside your project.", icon: "📥" },
    { text: "Search API Reference", href: "/api/search", desc: "Inspect request parameters, body configurations, and response schemas.", icon: "🔍" },
    { text: "JavaScript SDK Reference", href: "/sdk/javascript", desc: "Integrate vector databases programmatically using isomorphic clients.", icon: "📦" }
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
              Getting Started
            </Link>
            <Link href="/api/search" className="btn-secondary">
              Search API
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section-container">
        <h2 className="home-section-title">Developer Guides & References</h2>
        <div className="capabilities-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {activeLinks.map((link, idx) => (
            <div key={idx} className="capability-card">
              <div className="capability-icon">{link.icon}</div>
              <h3>
                <Link href={link.href}>{link.text}</Link>
              </h3>
              <p>{link.desc}</p>
              <Link href={link.href} className="capability-link">
                Open Page &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
