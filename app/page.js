import Link from "next/link";
import PricingSection from "../components/PricingSection";
import VectorPlayground from "../components/VectorPlayground";
import RagSimulator from "../components/RagSimulator";
import IntegrationsSection from "../components/IntegrationsSection";
import BenchmarkAnalyzer from "../components/BenchmarkAnalyzer";

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

      {/* 2. Ecosystem Integrations Section */}
      <IntegrationsSection />

      {/* 3. Benchmark Performance Analyzer */}
      <BenchmarkAnalyzer />

      {/* 4. Interactive Vector Search Playground */}
      <VectorPlayground />

      {/* 5. Interactive Pricing Section */}
      <PricingSection />
    </div>
  );
}
