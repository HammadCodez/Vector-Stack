import Link from "next/link";

export const metadata = {
  title: "Documentation Overview"
};

export default function DocsIndex() {
  const groups = [
    {
      title: "Getting Started",
      links: [
        { text: "Getting Started", href: "/docs/getting-started", desc: "Build your first vector index and run search." },
        { text: "Installation", href: "/docs/installation", desc: "Install JavaScript/Node and Python client libraries." },
        { text: "Authentication", href: "/docs/authentication", desc: "Authorize API endpoints using Bearer tokens." },
        { text: "API Keys Setup", href: "/docs/api-keys", desc: "Generate, rotate, and manage project secrets." }
      ]
    },
    {
      title: "Core Concepts",
      links: [
        { text: "Vector Embeddings", href: "/docs/embeddings", desc: "Choose vector dimensions and small/large models." },
        { text: "Vector Indexes", href: "/docs/vector-indexes", desc: "Manage index lifecycle states and distance metrics." },
        { text: "Document Ingestion", href: "/docs/document-ingestion", desc: "Extract plain text from PDF, HTML, or Markdown files." },
        { text: "Token Chunking", href: "/docs/chunking", desc: "Split text into tokens with configured overlaps." }
      ]
    },
    {
      title: "Retrieval Options",
      links: [
        { text: "RAG Pipelines", href: "/docs/rag-pipelines", desc: "Retrieve context chunks to feed large language models." },
        { text: "Metadata Filtering", href: "/docs/metadata-filtering", desc: "Apply SQL-like filters to query vectors." },
        { text: "Hybrid & BM25 Search", href: "/docs/hybrid-search", desc: "Merge keyword counts with semantic score distances." },
        { text: "Reranking Engine", href: "/docs/reranking", desc: "Re-score top candidate chunks with cross-encoders." },
        { text: "System Evaluation", href: "/docs/evaluation", desc: "Run hallucination and precision quality scoring." }
      ]
    },
    {
      title: "Production Readiness",
      links: [
        { text: "Staged Environments", href: "/docs/environments", desc: "Scope secrets for staging, dev, and production." },
        { text: "Production Deployments", href: "/docs/deployments", desc: "Monitor quotas and load production virtual nodes." },
        { text: "System Observability", href: "/docs/observability", desc: "Track query latency and failed API request logs." }
      ]
    },
    {
      title: "Security & Operations",
      links: [
        { text: "Security Standards", href: "/docs/security", desc: "Encrypt database values and verify webhook signatures." },
        { text: "Teams & Permissions", href: "/docs/teams-and-permissions", desc: "Setup organizational team permissions and roles." },
        { text: "Data Retention Guidelines", href: "/docs/data-retention", desc: "Review storage lifespan schedules for records." },
        { text: "Database Backups", href: "/docs/backups", desc: "Take hourly index snapshots for disaster recovery." },
        { text: "Custom Subdomains", href: "/docs/custom-domains", desc: "Map hosted search portals to vanity DNS records." },
        { text: "Webhook Events", href: "/docs/webhooks", desc: "Register HTTPS endpoints for async notifications." }
      ]
    },
    {
      title: "Migration",
      links: [
        { text: "v1 to v2 Migration Guide", href: "/docs/migration-v1-to-v2", desc: "Upgrade client SDKs and REST search paths." },
        { text: "Deprecated v0 Reference", href: "/deprecated-old-api", desc: "Inspect deprecated endpoints scheduled for shutdown." }
      ]
    }
  ];

  return (
    <div className="index-page-container" style={{ maxWidth: "100%", padding: "2.5rem 0" }}>
      <header className="page-header">
        <h1 className="page-title">Documentation Hub</h1>
        <p className="page-description">
          Welcome to the VectorStack developer portal. Select a guide category below to inspect structures, review installation requirements, and configure semantic queries.
        </p>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
        {groups.map((group, groupIdx) => (
          <div key={groupIdx}>
            <h2 className="section-heading" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
              {group.title}
            </h2>
            <div className="index-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {group.links.map((link, linkIdx) => (
                <Link key={linkIdx} href={link.href} className="index-card">
                  <h3>{link.text}</h3>
                  <p>{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
