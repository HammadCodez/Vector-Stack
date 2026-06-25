"use client";

import { useState } from "react";
import Link from "next/link";

const supportChannels = [
  {
    icon: "💬",
    title: "Discord Community",
    description: "Chat with 4,200+ developers. Get real-time help, share projects, and debug pipelines together.",
    href: "/community/discord",
    responseTime: "< 5 min",
    availability: "24/7",
    color: "#5865F2",
    tag: "Fastest"
  },
  {
    icon: "🐛",
    title: "GitHub Issues",
    description: "Report bugs, request features, and track fixes across all VectorStack open-source repositories.",
    href: "/community/github",
    responseTime: "< 24 hrs",
    availability: "Mon–Fri",
    color: "#24292e",
    tag: "Bugs & Features"
  },
  {
    icon: "📚",
    title: "Stack Overflow",
    description: "Browse hundreds of answered questions. Tag your posts with #vectorstack for community support.",
    href: "/community/stackoverflow",
    responseTime: "< 2 hrs",
    availability: "24/7",
    color: "#F48024",
    tag: "Community"
  },
  {
    icon: "✉️",
    title: "Email Support",
    description: "Reach our engineering team directly for account issues, billing, and enterprise inquiries.",
    href: "mailto:support@vectorstack.com",
    responseTime: "< 4 hrs",
    availability: "Mon–Fri",
    color: "#10b981",
    tag: "Enterprise"
  },
  {
    icon: "📖",
    title: "Documentation",
    description: "Comprehensive guides, API references, tutorials, and SDK setup walkthroughs for every platform.",
    href: "/docs/getting-started",
    responseTime: "Instant",
    availability: "Always",
    color: "#2563eb",
    tag: "Self-Service"
  },
  {
    icon: "🎥",
    title: "Office Hours",
    description: "Join our weekly live Q&A sessions. Get architecture reviews and debugging help from core engineers.",
    href: "/community/office-hours",
    responseTime: "Weekly",
    availability: "Thu 2PM ET",
    color: "#7c3aed",
    tag: "Live"
  }
];

const quickResources = [
  { label: "System Status", href: "/status", icon: "🟢" },
  { label: "API Changelog", href: "/changelog", icon: "📋" },
  { label: "Migration Guide", href: "/docs/migration", icon: "🔄" },
  { label: "FAQ", href: "/docs/faq", icon: "❓" }
];

export default function GetHelpSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="get-help-section" id="get-help">
      <div className="get-help-inner">
        {/* Header */}
        <div className="get-help-header">
          <span className="get-help-badge">Support</span>
          <h2 className="get-help-title">Get Help</h2>
          <p className="get-help-subtitle">
            Stuck on something? Our team and community are here to help you succeed. Choose the support channel that works best for you.
          </p>
        </div>

        {/* Support Channels Grid */}
        <div className="get-help-grid">
          {supportChannels.map((channel, idx) => (
            <Link
              key={idx}
              href={channel.href}
              className={`get-help-card ${hoveredCard === idx ? "active" : ""}`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="get-help-card-top">
                <div
                  className="get-help-icon-wrap"
                  style={{
                    borderColor: `${channel.color}25`,
                    background: `linear-gradient(135deg, ${channel.color}08, ${channel.color}15)`
                  }}
                >
                  <span className="get-help-icon">{channel.icon}</span>
                </div>
                <span
                  className="get-help-tag"
                  style={{
                    color: channel.color,
                    backgroundColor: `${channel.color}12`,
                    borderColor: `${channel.color}20`
                  }}
                >
                  {channel.tag}
                </span>
              </div>

              <div className="get-help-card-body">
                <h4 className="get-help-card-title">{channel.title}</h4>
                <p className="get-help-card-desc">{channel.description}</p>
              </div>

              <div className="get-help-card-meta">
                <div className="get-help-meta-item">
                  <span className="get-help-meta-label">Response</span>
                  <span className="get-help-meta-value">{channel.responseTime}</span>
                </div>
                <div className="get-help-meta-divider" />
                <div className="get-help-meta-item">
                  <span className="get-help-meta-label">Available</span>
                  <span className="get-help-meta-value">{channel.availability}</span>
                </div>
              </div>

              <span className="get-help-card-arrow">→</span>
            </Link>
          ))}
        </div>

        {/* Quick Resources Strip */}
        <div className="get-help-resources-strip">
          <span className="get-help-resources-label">Quick Resources</span>
          <div className="get-help-resources-links">
            {quickResources.map((resource, idx) => (
              <Link key={idx} href={resource.href} className="get-help-resource-chip">
                <span className="resource-chip-icon">{resource.icon}</span>
                <span>{resource.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="get-help-emergency-banner">
          <div className="get-help-emergency-left">
            <span className="emergency-pulse" />
            <div>
              <h4>Production issue or outage?</h4>
              <p>Enterprise customers get priority SLA-backed support with guaranteed response times.</p>
            </div>
          </div>
          <Link href="mailto:urgent@vectorstack.com" className="btn-primary get-help-emergency-btn">
            Contact Urgent Support
          </Link>
        </div>
      </div>
    </section>
  );
}
