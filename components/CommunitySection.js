"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const communityLinks = [
  {
    icon: "💬",
    title: "Discord Server",
    description: "Join 4,200+ developers sharing tips, debugging pipelines, and shipping AI search products.",
    href: "/community/discord",
    stat: "4.2K members",
    color: "#5865F2"
  },
  {
    icon: "🐙",
    title: "GitHub",
    description: "Star the repo, report issues, and contribute to the open-source SDKs and tooling.",
    href: "/community/github",
    stat: "2.8K stars",
    color: "#24292e"
  },
  {
    icon: "🐦",
    title: "Twitter / X",
    description: "Follow for product announcements, engineering deep-dives, and community highlights.",
    href: "/community/twitter",
    stat: "9.1K followers",
    color: "#1DA1F2"
  },
  {
    icon: "📝",
    title: "Blog & Tutorials",
    description: "In-depth technical posts on vector search, RAG architecture, and embedding strategies.",
    href: "/blog",
    stat: "42 articles",
    color: "#10b981"
  }
];

const contributors = [
  { name: "Sarah J.", commits: 184, avatar: "🔬" },
  { name: "Alex R.", commits: 127, avatar: "💻" },
  { name: "Elena R.", commits: 98, avatar: "🚀" },
  { name: "Kai M.", commits: 76, avatar: "⚙️" },
  { name: "Priya D.", commits: 63, avatar: "🎯" },
  { name: "Marcus L.", commits: 51, avatar: "🔷" }
];

export default function CommunitySection() {
  const [activeCard, setActiveCard] = useState(null);
  const [animatedStars, setAnimatedStars] = useState(0);

  useEffect(() => {
    const target = 2847;
    const duration = 1800;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setAnimatedStars(current);
      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-community-section">
      <div className="home-community-inner">
        {/* Header */}
        <div className="home-community-header">
          <span className="playground-badge">Open Source</span>
          <h2 className="home-community-title">
            Built With the Community
          </h2>
          <p className="home-community-subtitle">
            VectorStack is open-source at its core. Join thousands of developers building the future of semantic search and retrieval.
          </p>
        </div>

        {/* GitHub Stars Banner */}
        <div className="community-stars-banner">
          <div className="stars-banner-left">
            <span className="stars-icon-large">⭐</span>
            <div className="stars-info">
              <span className="stars-count">{animatedStars.toLocaleString()}</span>
              <span className="stars-label">GitHub Stars</span>
            </div>
          </div>
          <div className="stars-banner-right">
            <Link href="/community/github" className="btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}>
              Star on GitHub
            </Link>
            <span className="stars-growth-badge">+340 this month</span>
          </div>
        </div>

        {/* Community Links Grid */}
        <div className="community-links-grid">
          {communityLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`community-link-card ${activeCard === idx ? "active" : ""}`}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="community-link-icon-wrap" style={{ borderColor: `${link.color}20`, backgroundColor: `${link.color}08` }}>
                <span className="community-link-icon">{link.icon}</span>
              </div>
              <div className="community-link-info">
                <h4>{link.title}</h4>
                <p>{link.description}</p>
              </div>
              <span className="community-link-stat" style={{ color: link.color }}>{link.stat}</span>
            </Link>
          ))}
        </div>

        {/* Top Contributors */}
        <div className="community-contributors-strip">
          <h4 className="contributors-heading">Top Contributors</h4>
          <div className="contributors-avatars-row">
            {contributors.map((c, idx) => (
              <div key={idx} className="contributor-chip" title={`${c.name} — ${c.commits} commits`}>
                <span className="contributor-avatar">{c.avatar}</span>
                <div className="contributor-meta">
                  <span className="contributor-name">{c.name}</span>
                  <span className="contributor-commits">{c.commits} commits</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
