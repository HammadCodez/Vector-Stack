import Link from "next/link";
import { docsPages } from "../../data/docs";
import { apiPages } from "../../data/api";
import { sdkPages } from "../../data/sdk";
import { blogPosts } from "../../data/blog";

export const metadata = {
  title: "VectorStack Docs Link Map (Sitemap)"
};

export default function TestLinkMap() {
  const mainPages = [
    { text: "Home Landing Page", href: "/" },
    { text: "Pricing & Plans", href: "/pricing" },
    { text: "Service Uptime Status", href: "/status" },
    { text: "Changelog Feed", href: "/changelog" },
    { text: "Stable Releases Summary", href: "/releases" },
    { text: "Deprecated v0 API Reference Page", href: "/deprecated-old-api" }
  ];

  return (
    <div className="index-page-container">
      <header className="page-header">
        <h1 className="page-title">VectorStack Link Map</h1>
        <p className="page-description">
          A full visible sitemap containing all 55 active routes as crawlable HTML anchor links. This page is designed to check crawler page discovery coverage.
        </p>
      </header>

      <div className="content-section" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        
        <div>
          <h2 className="section-heading" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
            Main Pages ({mainPages.length} routes)
          </h2>
          <ul className="section-list">
            {mainPages.map((link) => (
              <li key={link.href} className="section-list-item">
                <Link href={link.href} style={{ fontWeight: 600 }}>{link.text}</Link> &mdash; <code>{link.href}</code>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="section-heading" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
            Documentation Guides ({docsPages.length} routes)
          </h2>
          <ul className="section-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "0.5rem" }}>
            {docsPages.map((page) => (
              <li key={page.slug} className="section-list-item" style={{ listStyle: "none" }}>
                <Link href={`/docs/${page.slug}`}><strong>{page.title}</strong></Link><br />
                <code style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>/docs/{page.slug}</code>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="section-heading" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
            REST API Reference ({apiPages.length} routes)
          </h2>
          <ul className="section-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "0.5rem" }}>
            {apiPages.map((page) => (
              <li key={page.slug} className="section-list-item" style={{ listStyle: "none" }}>
                <Link href={`/api/${page.slug}`}><strong>{page.title}</strong></Link><br />
                <code style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>/api/{page.slug}</code>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="section-heading" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
            Client SDK Libraries ({sdkPages.length} routes)
          </h2>
          <ul className="section-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "0.5rem" }}>
            {sdkPages.map((page) => (
              <li key={page.slug} className="section-list-item" style={{ listStyle: "none" }}>
                <Link href={`/sdk/${page.slug}`}><strong>{page.title}</strong></Link><br />
                <code style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>/sdk/{page.slug}</code>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="section-heading" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
            Technical Blog ({blogPosts.length} routes)
          </h2>
          <ul className="section-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "0.5rem" }}>
            {blogPosts.map((page) => (
              <li key={page.slug} className="section-list-item" style={{ listStyle: "none" }}>
                <Link href={`/blog/${page.slug}`}><strong>{page.title}</strong></Link><br />
                <code style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>/blog/{page.slug}</code>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
