import Link from "next/link";
import PricingSection from "../components/PricingSection";
import VectorPlayground from "../components/VectorPlayground";
import RagSimulator from "../components/RagSimulator";
import BenchmarkAnalyzer from "../components/BenchmarkAnalyzer";
import StatusSection from "../components/StatusSection";
import TestimonialWall from "../components/TestimonialWall";
import ChangelogSection from "../components/ChangelogSection";
import CommunitySection from "../components/CommunitySection";
import BlogResourcesSection from "../components/BlogResourcesSection";
import EventsSection from "../components/EventsSection";
import GetHelpSection from "../components/GetHelpSection";
import NewsletterSection from "../components/NewsletterSection";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tagline">Vector Database & Retrieval Platform</p>
          <h1 className="hero-title">VectorStack Docs</h1>
          <p className="hero-description">
            Build AI search and RAG applications with managed vector indexes, embeddings, document ingestion, and production-ready retrieval APIs.
          </p>
          <p style={{ marginTop: "-1.5rem", marginBottom: "2.5rem", fontSize: "0.9375rem", color: "var(--text-light-muted)" }}>
            Welcome to the developer portal. Verify sandbox environments, explore API references, and download official SDK packages to configure vector pipelines.
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

      {/* Platform Stats Section */}
      <section className="home-stats-section">
        <h2 className="home-stats-title">Trusted by Developers Worldwide</h2>
        <p className="home-stats-subtitle">
          Powering semantic search and RAG pipelines across thousands of production applications.
        </p>
        <div className="home-stats-grid">
          <div className="home-stat-card">
            <span className="home-stat-number">12B+</span>
            <span className="home-stat-label">Vectors Indexed</span>
          </div>
          <div className="home-stat-card">
            <span className="home-stat-number">50ms</span>
            <span className="home-stat-label">Avg Query Latency</span>
          </div>
          <div className="home-stat-card">
            <span className="home-stat-number">99.99%</span>
            <span className="home-stat-label">Uptime SLA</span>
          </div>
          <div className="home-stat-card">
            <span className="home-stat-number">8K+</span>
            <span className="home-stat-label">Active Teams</span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="home-how-section">
        <h2 className="home-how-title">How It Works</h2>
        <p className="home-how-subtitle">
          From raw documents to production search in three simple steps.
        </p>
        <div className="home-how-grid">
          <div className="home-how-step">
            <div className="home-how-step-number">1</div>
            <div className="home-how-step-content">
              <h3>Ingest Documents</h3>
              <p>Upload PDFs, Markdown, or plain text. VectorStack automatically cleans, chunks, and embeds your content into high-dimensional vectors.</p>
              <Link href="/docs/document-ingestion" className="home-how-link">Learn about ingestion →</Link>
            </div>
          </div>
          <div className="home-how-connector" />
          <div className="home-how-step">
            <div className="home-how-step-number">2</div>
            <div className="home-how-step-content">
              <h3>Index & Configure</h3>
              <p>Create vector indexes with your preferred distance metric. Add metadata filters, configure chunking overlap, and set up reranking models.</p>
              <Link href="/docs/vector-indexes" className="home-how-link">Explore indexes →</Link>
            </div>
          </div>
          <div className="home-how-connector" />
          <div className="home-how-step">
            <div className="home-how-step-number">3</div>
            <div className="home-how-step-content">
              <h3>Search & Retrieve</h3>
              <p>Query your indexes with natural language. Combine semantic search with keyword matching, metadata filters, and cross-encoder reranking for maximum accuracy.</p>
              <Link href="/api/search" className="home-how-link">View Search API →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SDK & Integrations Section */}
      <section className="home-sdk-section">
        <h2 className="home-sdk-title">SDKs & Integrations</h2>
        <p className="home-sdk-subtitle">
          First-class client libraries for every major platform. Pick your stack and start building.
        </p>
        <div className="home-sdk-grid">
          <Link href="/sdk/javascript" className="home-sdk-card">
            <span className="home-sdk-icon">⚡</span>
            <span className="home-sdk-name">JavaScript</span>
            <span className="home-sdk-desc">Node.js & serverless</span>
          </Link>
          <Link href="/sdk/python" className="home-sdk-card">
            <span className="home-sdk-icon">🐍</span>
            <span className="home-sdk-name">Python</span>
            <span className="home-sdk-desc">ML & data pipelines</span>
          </Link>
          <Link href="/sdk/golang" className="home-sdk-card">
            <span className="home-sdk-icon">🔷</span>
            <span className="home-sdk-name">Go</span>
            <span className="home-sdk-desc">Backend microservices</span>
          </Link>
          <Link href="/sdk/java" className="home-sdk-card">
            <span className="home-sdk-icon">☕</span>
            <span className="home-sdk-name">Java</span>
            <span className="home-sdk-desc">JVM & Kotlin</span>
          </Link>
          <Link href="/sdk/react" className="home-sdk-card">
            <span className="home-sdk-icon">⚛️</span>
            <span className="home-sdk-name">React</span>
            <span className="home-sdk-desc">Hooks & components</span>
          </Link>
          <Link href="/sdk/ruby" className="home-sdk-card">
            <span className="home-sdk-icon">💎</span>
            <span className="home-sdk-name">Ruby</span>
            <span className="home-sdk-desc">Rails & Sinatra</span>
          </Link>
          <Link href="/sdk/flutter" className="home-sdk-card">
            <span className="home-sdk-icon">📱</span>
            <span className="home-sdk-name">Flutter</span>
            <span className="home-sdk-desc">Cross-platform mobile</span>
          </Link>
          <Link href="/sdk/cli" className="home-sdk-card">
            <span className="home-sdk-icon">🖥️</span>
            <span className="home-sdk-name">CLI</span>
            <span className="home-sdk-desc">Terminal & CI/CD</span>
          </Link>
        </div>
      </section>

      {/* Quick Start Guides Section */}
      <section className="home-guides-section">
        <h2 className="home-guides-title">Quick Start Guides</h2>
        <p className="home-guides-subtitle">
          Dive deeper into VectorStack with focused tutorials for common use cases.
        </p>
        <div className="home-guides-grid">
          <Link href="/docs/rag-pipelines" className="home-guide-card">
            <span className="home-guide-emoji">🧠</span>
            <h3>Build a RAG Pipeline</h3>
            <p>Connect your vector index to an LLM for context-aware AI responses with retrieval-augmented generation.</p>
          </Link>
          <Link href="/docs/hybrid-search" className="home-guide-card">
            <span className="home-guide-emoji">🔀</span>
            <h3>Hybrid Search Setup</h3>
            <p>Combine semantic vector search with keyword BM25 matching for maximum recall and precision.</p>
          </Link>
          <Link href="/docs/webhooks" className="home-guide-card">
            <span className="home-guide-emoji">🔔</span>
            <h3>Webhook Automation</h3>
            <p>Receive real-time notifications for ingestion events, index updates, and search milestones.</p>
          </Link>
          <Link href="/docs/evaluation" className="home-guide-card">
            <span className="home-guide-emoji">📊</span>
            <h3>Evaluate Retrieval Quality</h3>
            <p>Measure Precision@K, Recall@K, and MRR to validate your search pipeline accuracy over time.</p>
          </Link>
          <Link href="/docs/security" className="home-guide-card">
            <span className="home-guide-emoji">🔒</span>
            <h3>Security & Compliance</h3>
            <p>Configure encryption, access controls, GDPR compliance, and API key rotation policies.</p>
          </Link>
          <Link href="/docs/environments" className="home-guide-card">
            <span className="home-guide-emoji">🌍</span>
            <h3>Environment Management</h3>
            <p>Separate dev, staging, and production configurations with isolated indexes and credentials.</p>
          </Link>
        </div>
      </section>

      {/* 1. Interactive RAG Pipeline Simulator */}
      <RagSimulator />

      {/* 2. Benchmark Performance Analyzer */}
      <BenchmarkAnalyzer />

      {/* 3. Interactive Vector Search Playground */}
      <VectorPlayground />

      {/* 4. Platform Health Status Section */}
      <StatusSection />

      {/* 5. Testimonial Wall & Guestbook */}
      <TestimonialWall />

      {/* 6. Product Updates & Changelog */}
      <ChangelogSection />

      {/* 7. Open Source & Community */}
      <CommunitySection />

      {/* 8. Latest Blog Posts & Resources */}
      <BlogResourcesSection />

      {/* 9. Upcoming Events & Webinars */}
      <EventsSection />

      {/* 10. Getting Help / Support Channels */}
      <GetHelpSection />

      {/* 10. Developer Newsletter Signup */}
      <NewsletterSection />

      {/* 11. Interactive Pricing Section */}
      <PricingSection />
    </div>
  );
}
