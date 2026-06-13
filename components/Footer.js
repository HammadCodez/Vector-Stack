import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand-section">
          <Link href="/" className="footer-brand-link">
            <span className="brand-logo">VS</span>
            <span className="footer-brand-name">VectorStack Docs</span>
          </Link>
          <p className="footer-tagline">
            Managed vector databases, embeddings, document ingestion pipelines, and retrieval APIs.
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-links-column">
            <h4>Documentation</h4>
            <Link href="/docs/getting-started">Getting Started</Link>
            <Link href="/docs/installation">Installation</Link>
          </div>

          <div className="footer-links-column">
            <h4>References</h4>
            <Link href="/api/search">Search API</Link>
            <Link href="/sdk/javascript">JavaScript SDK</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} VectorStack Inc. All rights reserved.</p>
        <p className="footer-crawler-notice">
          VectorStack Docs website is a FlowDoc crawl testing sandbox.
        </p>
      </div>
    </footer>
  );
}
