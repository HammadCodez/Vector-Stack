import Link from "next/link";
import PricingSection from "../components/PricingSection";
import VectorPlayground from "../components/VectorPlayground";
import RagSimulator from "../components/RagSimulator";
import BenchmarkAnalyzer from "../components/BenchmarkAnalyzer";
import StatusSection from "../components/StatusSection";

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

      {/* 1. Interactive RAG Pipeline Simulator */}
      <RagSimulator />

      {/* 2. Benchmark Performance Analyzer */}
      <BenchmarkAnalyzer />

      {/* 3. Interactive Vector Search Playground */}
      <VectorPlayground />

      {/* 4. Platform Health Status Section */}
      <StatusSection />

      {/* 5. Interactive Pricing Section */}
      <PricingSection />
    </div>
  );
}
