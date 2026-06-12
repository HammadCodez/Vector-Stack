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
            <h4>Resources</h4>
            <Link href="/docs">Documentation</Link>
            <Link href="/api">API Reference</Link>
            <Link href="/sdk">SDK Libraries</Link>
          </div>

          <div className="footer-links-column">
            <h4>Platform</h4>
            <Link href="/changelog">Changelog</Link>
            <Link href="/pricing">Pricing Plans</Link>
            <Link href="/status">System Status</Link>
          </div>

          <div className="footer-links-column">
            <h4>Company & Legal</h4>
            <Link href="/blog">Technical Blog</Link>
            <Link href="/deprecated-old-api" className="deprecated-link">
              Deprecated v0 API Reference
            </Link>
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
