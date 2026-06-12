import Link from "next/link";
import { apiPages } from "../../data/api";

export const metadata = {
  title: "API Reference Overview"
};

export default function ApiIndex() {
  return (
    <div className="index-page-container">
      <header className="page-header">
        <h1 className="page-title">REST API Reference</h1>
        <p className="page-description">
          Detailed schemas, requests, and examples for integrating with the VectorStack developer APIs. Learn about authorization, index management, document ingestion endpoints, and vector search query properties.
        </p>
      </header>

      <div className="index-grid">
        {apiPages.map((page) => (
          <Link key={page.slug} href={`/api/${page.slug}`} className="index-card">
            <h3>{page.title}</h3>
            <p>{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
