import Link from "next/link";

export const metadata = {
  title: "API Reference Overview"
};

export default function ApiIndex() {
  const groups = [
    {
      title: "Core API",
      links: [
        { text: "API Overview", href: "/api/overview", desc: "Base URL, content types, and request formats." },
        { text: "Authentication Reference", href: "/api/authentication", desc: "Bearer token headers and validation routes." },
        { text: "Projects API", href: "/api/projects", desc: "Programmatically deploy and configure isolations." }
      ]
    },
    {
      title: "Retrieval API",
      links: [
        { text: "Embeddings API", href: "/api/embeddings", desc: "Create vector embeddings from input strings." },
        { text: "Indexes API", href: "/api/indexes", desc: "Create, list, patch, and delete vector databases." },
        { text: "Documents API", href: "/api/documents", desc: "Ingest and process files into vector formats." },
        { text: "Search API", href: "/api/search", desc: "Query indexes using similarity distance matching." },
        { text: "Rerank API", href: "/api/rerank", desc: "Re-evaluate match relevance using cross-encoders." }
      ]
    },
    {
      title: "Operations API",
      links: [
        { text: "Audit Logs API", href: "/api/audit-logs", desc: "Track credential rotations and index deletions." }
      ]
    },
    {
      title: "Billing and Usage",
      links: [
        { text: "Usage API", href: "/api/usage", desc: "Retrieve storage size and search metrics totals." },
        { text: "Billing API", href: "/api/billing", desc: "Manage subscription plans and fetch invoice urls." }
      ]
    },
    {
      title: "Webhooks and Errors",
      links: [
        { text: "Webhooks API", href: "/api/webhooks", desc: "Register endpoints to receive async status payloads." },
        { text: "API Errors Reference", href: "/api/errors", desc: "Review error structures and request logging systems." }
      ]
    }
  ];

  return (
    <div className="index-page-container" style={{ maxWidth: "100%", padding: "2.5rem 0" }}>
      <header className="page-header">
        <h1 className="page-title">REST API Reference</h1>
        <p className="page-description">
          Review request parameters, body formats, responses, and examples for integrating with our REST services.
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
