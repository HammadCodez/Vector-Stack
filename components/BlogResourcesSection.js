"use client";

import { useState } from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: "hnsw-deep-dive",
    category: "Engineering",
    title: "Inside HNSW: How VectorStack Achieves Sub-50ms Queries at Billion Scale",
    excerpt: "A technical deep-dive into our hierarchical navigable small world graph implementation, including layer construction heuristics and multi-threaded search.",
    date: "Jun 22, 2026",
    readTime: "12 min read",
    href: "/blog/hnsw-deep-dive",
    emoji: "🧬",
    featured: true,
  },
  {
    id: "rag-patterns",
    category: "Tutorial",
    title: "5 RAG Architecture Patterns for Production Systems",
    excerpt: "From naive RAG to advanced multi-hop retrieval with reranking — choose the right pattern for your use case.",
    date: "Jun 18, 2026",
    readTime: "9 min read",
    href: "/blog/rag-patterns",
    emoji: "🏗️",
    featured: false,
  },
  {
    id: "embedding-benchmarks",
    category: "Benchmark",
    title: "Embedding Model Showdown: OpenAI vs Cohere vs Voyage AI (2026 Edition)",
    excerpt: "We ran 14 embedding models through 8 retrieval benchmarks. Here are the surprising results.",
    date: "Jun 14, 2026",
    readTime: "15 min read",
    href: "/blog/embedding-benchmarks",
    emoji: "📈",
    featured: false,
  },
  {
    id: "multi-tenant-indexes",
    category: "Guide",
    title: "Multi-Tenant Vector Indexes: Isolation Without Duplication",
    excerpt: "How to serve thousands of tenants from a single VectorStack cluster with namespace-level isolation.",
    date: "Jun 10, 2026",
    readTime: "8 min read",
    href: "/blog/multi-tenant-indexes",
    emoji: "🏢",
    featured: false,
  },
  {
    id: "hybrid-search-reranking",
    category: "Tutorial",
    title: "Hybrid Search + Cross-Encoder Reranking: The Definitive Guide",
    excerpt: "Combine BM25 keyword matching with semantic vectors and cross-encoder reranking for maximum recall.",
    date: "Jun 6, 2026",
    readTime: "11 min read",
    href: "/blog/hybrid-search-reranking",
    emoji: "🔀",
    featured: false,
  },
];

const resources = [
  { icon: "📚", label: "Documentation", href: "/docs/getting-started", count: "46 guides" },
  { icon: "🎥", label: "Video Tutorials", href: "/resources/videos", count: "18 videos" },
  { icon: "📦", label: "Code Templates", href: "/resources/templates", count: "12 templates" },
  { icon: "🔬", label: "Research Papers", href: "/resources/papers", count: "7 papers" },
];

export default function BlogResourcesSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Engineering", "Tutorial", "Benchmark", "Guide"];

  const filteredPosts = activeFilter === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeFilter);

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <section className="blog-resources-section" id="blog-resources-section">
      <div className="blog-resources-inner">
        {/* Header */}
        <div className="blog-resources-header">
          <span className="playground-badge">Knowledge Hub</span>
          <h2 className="blog-resources-title">Latest from the Blog</h2>
          <p className="blog-resources-subtitle">
            Technical articles, engineering deep-dives, and practical tutorials from the VectorStack team and community.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="blog-filter-tabs">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`blog-filter-btn ${activeFilter === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {activeFilter === "All" && featuredPost && (
          <Link href={featuredPost.href} className="blog-featured-card">
            <div className="blog-featured-badge-row">
              <span className="blog-category-tag featured">{featuredPost.category}</span>
              <span className="blog-featured-tag">⚡ Featured</span>
            </div>
            <div className="blog-featured-content">
              <span className="blog-featured-emoji">{featuredPost.emoji}</span>
              <div className="blog-featured-text">
                <h3>{featuredPost.title}</h3>
                <p>{featuredPost.excerpt}</p>
                <div className="blog-post-meta">
                  <span>{featuredPost.date}</span>
                  <span className="meta-separator">·</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Posts Grid */}
        <div className="blog-posts-grid">
          {regularPosts.map((post) => (
            <Link key={post.id} href={post.href} className="blog-post-card">
              <div className="blog-post-card-top">
                <span className="blog-post-emoji">{post.emoji}</span>
                <span className="blog-category-tag">{post.category}</span>
              </div>
              <h4 className="blog-post-card-title">{post.title}</h4>
              <p className="blog-post-card-excerpt">{post.excerpt}</p>
              <div className="blog-post-meta">
                <span>{post.date}</span>
                <span className="meta-separator">·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Resources Strip */}
        <div className="resources-strip">
          <h4 className="resources-strip-heading">Quick Resources</h4>
          <div className="resources-strip-grid">
            {resources.map((r, i) => (
              <Link key={i} href={r.href} className="resource-chip">
                <span className="resource-chip-icon">{r.icon}</span>
                <div className="resource-chip-info">
                  <span className="resource-chip-label">{r.label}</span>
                  <span className="resource-chip-count">{r.count}</span>
                </div>
                <span className="resource-chip-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
