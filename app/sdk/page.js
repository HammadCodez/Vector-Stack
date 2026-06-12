import Link from "next/link";

export const metadata = {
  title: "SDK Client Libraries Overview"
};

export default function SdkIndex() {
  const groups = [
    {
      title: "JavaScript Ecosystem",
      links: [
        { text: "JavaScript SDK", href: "/sdk/javascript", desc: "Isomorphic client for Node, browsers, and backend platforms." },
        { text: "Node SDK", href: "/sdk/node", desc: "Optimized configurations for long-running Node processes and task queues." },
        { text: "Edge Runtime SDK", href: "/sdk/edge-runtime", desc: "Lightweight client for edge functions and workers." },
        { text: "React SDK", href: "/sdk/react", desc: "React hooks and states for building search interfaces." }
      ]
    },
    {
      title: "Python Ecosystem",
      links: [
        { text: "Python SDK", href: "/sdk/python", desc: "Integrate vector databases with Django, FastAPI, or ML pipelines." }
      ]
    }
  ];

  return (
    <div className="index-page-container" style={{ maxWidth: "100%", padding: "2.5rem 0" }}>
      <header className="page-header">
        <h1 className="page-title">Client SDK Libraries</h1>
        <p className="page-description">
          Integrate VectorStack into your services using our official SDK packages. Connect to search indexes and ingest documents in just a few lines of code.
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
