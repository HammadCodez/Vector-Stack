import Link from "next/link";
import InteractiveCode from "../components/InteractiveCode";
import PricingSection from "../components/PricingSection";
import FaqSection from "../components/FaqSection";
import IntegrationsSection from "../components/IntegrationsSection";
import StatusSection from "../components/StatusSection";
import VectorPlayground from "../components/VectorPlayground";

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

      {/* Interactive Code Quick Start Sandbox */}
      <section style={{ borderBottom: "1px solid var(--border-color)", backgroundColor: "var(--bg-secondary)" }}>
        <InteractiveCode />
      </section>

      {/* Core Platform Capabilities Section */}
      <section className="home-section-container" style={{ borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="playground-badge">Engine Core</span>
          <h2 className="home-section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Platform Core Capabilities
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            VectorStack combines embedding creation, fast indexes, and metadata constraints into a high-performance developer workspace.
          </p>
        </div>
        <div className="capabilities-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          <div className="capability-card feature-card">
            <div className="capability-icon">⚡</div>
            <h3>Managed Vector Indexes</h3>
            <p>
              Instantiate searchable vector index databases. Configure dimensions up to 1536 and optimize with Cosine, Euclidean L2, or Dot Product distance formulas.
            </p>
          </div>
          <div className="capability-card feature-card">
            <div className="capability-icon">📂</div>
            <h3>Document Ingestion</h3>
            <p>
              Upload documents in PDF, Markdown, HTML, or raw strings. The platform parses, cleans, and chunks content to index vectors automatically.
            </p>
          </div>
          <div className="capability-card feature-card">
            <div className="capability-icon">🔎</div>
            <h3>Hybrid Search & Reranking</h3>
            <p>
              Perform semantic matches combined with keyword BM25 retrieval. Score results using machine learning cross-encoders for maximum precision.
            </p>
          </div>
          <div className="capability-card feature-card">
            <div className="capability-icon">🔔</div>
            <h3>Webhook Notifications</h3>
            <p>
              Automate indexing actions. Register endpoint urls to receive instant push alerts on ingestion statuses and service updates.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <PricingSection />

      {/* Ecosystem Integrations Section */}
      <IntegrationsSection />

      <section className="home-section-container" style={{ borderBottom: "1px solid var(--border-color)" }}>
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

      {/* Platform Health Status Section */}
      <StatusSection />

      {/* Interactive Vector Search Playground */}
      <VectorPlayground />

      {/* Interactive FAQ Section */}
      <FaqSection />
    </div>
  );
}
