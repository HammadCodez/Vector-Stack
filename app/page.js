import Link from "next/link";

export default function Home() {
  const capabilities = [
    {
      title: "Managed Vector Indexes",
      desc: "Deploy highly optimized vector indexes with Cosine similarity, Dot Product, or L2 distance metrics. Query results with sub-15ms search latency.",
      href: "/docs/vector-indexes",
      icon: "🗄️"
    },
    {
      title: "Document Ingestion Pipeline",
      desc: "Ingest PDF, HTML, Markdown, and plain text. The pipeline handles text extraction, HTML sanitization, token-based chunking, and embedding generation.",
      href: "/docs/document-ingestion",
      icon: "📥"
    },
    {
      title: "Vector Embeddings API",
      desc: "Generate semantic vectors instantly using our default 768-dimensional model. Perfect for documentation Q&A, search tools, and RAG architectures.",
      href: "/docs/embeddings",
      icon: "🔢"
    },
    {
      title: "Hybrid Search & BM25",
      desc: "Combine semantic vector distance scores with traditional keyword BM25 search indices. Retain high recall for specific serial codes, error codes, and functions.",
      href: "/docs/hybrid-search",
      icon: "🔍"
    },
    {
      title: "Metadata Filtering",
      desc: "Perform SQL-like filtering on arbitrary JSON metadata properties prior to similarity calculations. Filter records by tenant, date, tags, or prices.",
      href: "/docs/metadata-filtering",
      icon: "🎛️"
    },
    {
      title: "RAG & LLM Integration",
      desc: "Connect vector retrieval output directly to OpenAI or Anthropic completion prompts. Setup a production-ready RAG application in under 10 lines of code.",
      href: "/docs/rag-pipelines",
      icon: "🤖"
    },
    {
      title: "Webhook Automation",
      desc: "Receive real-time notifications when documents finish embedding or index updates complete. Validate secure payloads via signature verification headers.",
      href: "/docs/webhooks",
      icon: "⚡"
    },
    {
      title: "SDK Clients",
      desc: "Query the platform seamlessly using our official SDK packages. Native clients available for Node.js, Python, and React setups.",
      href: "/sdk",
      icon: "📦"
    },
    {
      title: "Reranking Engine",
      desc: "Run cross-encoders to re-evaluate the top search matches. Dramatically improve retrieval precision for complex and multi-part queries.",
      href: "/docs/reranking",
      icon: "📊"
    }
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tagline">Vector Database & Retrieval Platform</p>
          <h1 className="hero-title">VectorStack</h1>
          <p className="hero-description">
            Build AI search and RAG applications with managed vector indexes, embeddings, document ingestion, and production-ready retrieval APIs.
          </p>
          <div className="hero-buttons">
            <Link href="/docs/getting-started" className="btn-primary">
              Getting Started
            </Link>
            <Link href="/api" className="btn-secondary">
              API Reference
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section-container">
        <h2 className="home-section-title">Platform Capabilities</h2>
        <div className="capabilities-grid">
          {capabilities.map((item, idx) => (
            <div key={idx} className="capability-card">
              <div className="capability-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link href={item.href} className="capability-link">
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
