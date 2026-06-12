import Link from "next/link";

export const metadata = {
  title: "Platform Releases"
};

export default function ReleasesPage() {
  return (
    <div className="index-page-container">
      <header className="page-header">
        <h1 className="page-title">VectorStack Stable Releases</h1>
        <p className="page-description">
          Review the active major versions of the VectorStack system and find links to migration guides.
        </p>
      </header>

      <div className="content-section">
        <h2 className="section-heading">VectorStack v1.0.0</h2>
        <p className="section-body">
          VectorStack v1 is stable and production-ready. The first stable release includes managed vector indexes, embedding generation, document ingestion, semantic search, and webhook delivery.
        </p>
        <p className="section-body">
          For full migration steps and details regarding client changes, review the resources below:
        </p>
        <ul className="section-list">
          <li className="section-list-item">
            View full release improvements in our <Link href="/changelog">Changelog &rarr;</Link>
          </li>
          <li className="section-list-item">
            Follow the API adjustments in the <Link href="/docs/migration-v1-to-v2">v1 to v2 Migration Guide &rarr;</Link>
          </li>
          <li className="section-list-item">
            Learn about deprecated features at the <Link href="/deprecated-old-api">Deprecated v0 Page &rarr;</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
