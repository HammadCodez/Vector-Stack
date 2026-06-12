import Link from "next/link";

export const metadata = {
  title: "Deprecated v0 API Reference"
};

export default function DeprecatedOldApi() {
  return (
    <div className="index-page-container">
      <header className="page-header">
        <h1 className="page-title">Deprecated v0 API</h1>
        <p className="page-description" style={{ color: "#991b1b" }}>
          Warning: This endpoint specification is officially deprecated and scheduled for removal.
        </p>
      </header>

      <div className="deprecated-alert">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <div>
          <div className="deprecated-title-text">End of Life Schedule</div>
          <div className="deprecated-desc-text">
            This page documents the old v0 API and will be removed soon. New applications should use the v1 API reference and migration guide instead.
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 className="section-heading">Active Endpoint Adjustments</h2>
        <p className="section-body">
          The following list describes the v0 interfaces that are deprecated. Please migrate them to the v1 equivalent as soon as possible:
        </p>
        <ul className="section-list">
          <li className="section-list-item">
            <strong>GET /v0/indexes</strong> &rarr; Migrate to <Link href="/api/indexes">POST /v1/indexes</Link>
          </li>
          <li className="section-list-item">
            <strong>POST /v0/search</strong> &rarr; Migrate to <Link href="/api/search">POST /v1/search</Link>
          </li>
          <li className="section-list-item">
            <strong>POST /v0/embed</strong> &rarr; Migrate to <Link href="/api/embeddings">POST /v1/embeddings</Link>
          </li>
        </ul>
      </div>

      <div className="content-section" style={{ marginTop: "3rem", borderTop: "1px solid var(--border-color)", paddingTop: "2rem" }}>
        <h3>Migration Support</h3>
        <p className="section-body">
          We have composed a comprehensive manual detailing each step required to transfer your production client packages without experiencing search service downtime. Refer to our <Link href="/docs/migration-v1-to-v2">Migration Guide</Link> for details.
        </p>
      </div>
    </div>
  );
}
