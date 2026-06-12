import Link from "next/link";
import { docsPages } from "../../data/docs";

export const metadata = {
  title: "Documentation Overview"
};

export default function DocsIndex() {
  return (
    <div className="index-page-container">
      <header className="page-header">
        <h1 className="page-title">Documentation Guides</h1>
        <p className="page-description">
          Welcome to the VectorStack developer guides. Explore how to set up vector indexes, embed source text, configure RAG generation models, and automate webhooks.
        </p>
      </header>

      <div className="index-grid">
        {docsPages.map((page) => (
          <Link key={page.slug} href={`/docs/${page.slug}`} className="index-card">
            <h3>{page.title}</h3>
            <p>{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
