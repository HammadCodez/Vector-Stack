import Link from "next/link";
import { blogPosts } from "../../data/blog";

export const metadata = {
  title: "VectorStack Technical Blog"
};

export default function BlogIndex() {
  return (
    <div className="index-page-container">
      <header className="page-header">
        <h1 className="page-title">Technical Blog</h1>
        <p className="page-description">
          Read guides, scaling deep-dives, and RAG architectures from the VectorStack engineering team.
        </p>
      </header>

      <div className="index-grid" style={{ gridTemplateColumns: "1fr" }}>
        {blogPosts.map((post) => (
          <div key={post.slug} className="index-card" style={{ gap: "1rem" }}>
            <div>
              <div style={{ display: "flex", gap: "1rem", fontSize: "0.8rem", color: "#64748b", marginBottom: "0.5rem" }}>
                <span>{post.date}</span>
                <span>&bull;</span>
                <span>By {post.author}</span>
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                <Link href={`/blog/${post.slug}`} style={{ color: "inherit" }}>
                  {post.title}
                </Link>
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#475569" }}>{post.description}</p>
            </div>
            <Link href={`/blog/${post.slug}`} className="capability-link" style={{ alignSelf: "flex-start" }}>
              Read Full Post &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
