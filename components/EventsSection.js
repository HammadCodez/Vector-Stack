"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const upcomingEvents = [
  {
    id: "vectorstack-conf-2026",
    type: "Conference",
    title: "VectorStack Conf 2026",
    description: "Our flagship annual conference — 2 days of talks, workshops, and networking with the vector search community.",
    date: "Aug 14–15, 2026",
    time: "9:00 AM PT",
    location: "San Francisco, CA + Virtual",
    speakers: ["Sarah Chen", "Dr. Marcus Liu", "Priya Desai"],
    spotsLeft: 142,
    totalSpots: 500,
    registrationLink: "/events/vectorstack-conf-2026",
    accent: "#6366f1",
    emoji: "🎪",
    featured: true,
  },
  {
    id: "rag-masterclass",
    type: "Workshop",
    title: "RAG Masterclass: From Zero to Production",
    description: "3-hour live coding workshop covering document ingestion, chunking strategies, hybrid retrieval, and LLM integration.",
    date: "Jul 10, 2026",
    time: "11:00 AM PT",
    location: "Virtual (Zoom)",
    speakers: ["Alex Rivera"],
    spotsLeft: 38,
    totalSpots: 100,
    registrationLink: "/events/rag-masterclass",
    accent: "#0891b2",
    emoji: "🎓",
    featured: false,
  },
  {
    id: "office-hours-july",
    type: "Office Hours",
    title: "Monthly Engineering Office Hours",
    description: "Ask the VectorStack engineering team anything — architecture decisions, performance tuning, or roadmap questions.",
    date: "Jul 3, 2026",
    time: "2:00 PM PT",
    location: "Discord",
    speakers: ["Core Engineering Team"],
    spotsLeft: null,
    totalSpots: null,
    registrationLink: "/events/office-hours-july",
    accent: "#10b981",
    emoji: "💬",
    featured: false,
  },
  {
    id: "embedding-workshop",
    type: "Webinar",
    title: "Choosing the Right Embedding Model for Your Use Case",
    description: "Compare OpenAI, Cohere, Voyage, and open-source models across dimensions, cost, and retrieval quality benchmarks.",
    date: "Jul 17, 2026",
    time: "10:00 AM PT",
    location: "Virtual (YouTube Live)",
    speakers: ["Elena Rossi", "Kai Morimoto"],
    spotsLeft: 210,
    totalSpots: 500,
    registrationLink: "/events/embedding-workshop",
    accent: "#f59e0b",
    emoji: "🧪",
    featured: false,
  },
];

const pastRecordings = [
  { title: "Vector Indexing Strategies Deep-Dive", views: "2.4K", date: "May 2026", href: "/events/recordings/indexing-strategies" },
  { title: "Scaling to 10B Vectors: Lessons Learned", views: "1.8K", date: "Apr 2026", href: "/events/recordings/scaling-10b" },
  { title: "Building Multimodal Search with VectorStack", views: "1.2K", date: "Mar 2026", href: "/events/recordings/multimodal-search" },
];

export default function EventsSection() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    // Countdown to the featured event (Aug 14, 2026)
    const targetDate = new Date("2026-08-14T16:00:00Z");

    const updateCountdown = () => {
      const now = new Date();
      const diff = Math.max(0, targetDate - now);

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
    return () => clearInterval(timer);
  }, []);

  const featured = upcomingEvents.find((e) => e.featured);
  const others = upcomingEvents.filter((e) => !e.featured);

  return (
    <section className="events-section" id="events-section">
      <div className="events-inner">
        {/* Header */}
        <div className="events-header">
          <span className="playground-badge">Events</span>
          <h2 className="events-title">Upcoming Events & Webinars</h2>
          <p className="events-subtitle">
            Learn from the VectorStack team and community through live workshops, office hours, and conferences.
          </p>
        </div>

        {/* Featured event hero banner */}
        {featured && (
          <div className="events-featured-banner" style={{ "--event-accent": featured.accent }}>
            <div className="events-featured-left">
              <div className="events-featured-type-row">
                <span className="events-type-badge" style={{ backgroundColor: `${featured.accent}18`, color: featured.accent, borderColor: `${featured.accent}30` }}>
                  {featured.emoji} {featured.type}
                </span>
                <span className="events-featured-flag">🔥 Featured Event</span>
              </div>
              <h3 className="events-featured-title">{featured.title}</h3>
              <p className="events-featured-desc">{featured.description}</p>

              <div className="events-featured-details">
                <div className="event-detail-chip">
                  <span className="event-detail-icon">📅</span>
                  <span>{featured.date}</span>
                </div>
                <div className="event-detail-chip">
                  <span className="event-detail-icon">🕐</span>
                  <span>{featured.time}</span>
                </div>
                <div className="event-detail-chip">
                  <span className="event-detail-icon">📍</span>
                  <span>{featured.location}</span>
                </div>
              </div>

              <div className="events-featured-speakers">
                <span className="speakers-label">Speakers:</span>
                {featured.speakers.map((s, i) => (
                  <span key={i} className="speaker-chip">{s}</span>
                ))}
              </div>

              <div className="events-featured-cta-row">
                <Link href={featured.registrationLink} className="btn-primary events-register-btn">
                  Register Now — Free
                </Link>
                {featured.spotsLeft && (
                  <span className="events-spots-badge">
                    {featured.spotsLeft} / {featured.totalSpots} spots left
                  </span>
                )}
              </div>
            </div>

            {/* Countdown */}
            <div className="events-countdown-panel">
              <span className="countdown-label">Starts In</span>
              <div className="countdown-grid">
                <div className="countdown-unit">
                  <span className="countdown-value">{countdown.days}</span>
                  <span className="countdown-unit-label">Days</span>
                </div>
                <span className="countdown-separator">:</span>
                <div className="countdown-unit">
                  <span className="countdown-value">{countdown.hours}</span>
                  <span className="countdown-unit-label">Hours</span>
                </div>
                <span className="countdown-separator">:</span>
                <div className="countdown-unit">
                  <span className="countdown-value">{countdown.mins}</span>
                  <span className="countdown-unit-label">Mins</span>
                </div>
              </div>
              <div className="countdown-progress-bar">
                <div
                  className="countdown-progress-fill"
                  style={{ width: `${Math.min(100, ((featured.totalSpots - featured.spotsLeft) / featured.totalSpots) * 100)}%` }}
                />
              </div>
              <span className="countdown-progress-label">
                {Math.round(((featured.totalSpots - featured.spotsLeft) / featured.totalSpots) * 100)}% registered
              </span>
            </div>
          </div>
        )}

        {/* Other events grid */}
        <div className="events-grid">
          {others.map((event) => (
            <Link key={event.id} href={event.registrationLink} className="event-card" style={{ "--event-accent": event.accent }}>
              <div className="event-card-top-row">
                <span className="events-type-badge" style={{ backgroundColor: `${event.accent}18`, color: event.accent, borderColor: `${event.accent}30` }}>
                  {event.emoji} {event.type}
                </span>
                {event.spotsLeft && (
                  <span className="events-spots-indicator">
                    {event.spotsLeft} spots
                  </span>
                )}
              </div>
              <h4 className="event-card-title">{event.title}</h4>
              <p className="event-card-desc">{event.description}</p>
              <div className="event-card-footer">
                <div className="event-card-detail">
                  <span>📅</span> {event.date}
                </div>
                <div className="event-card-detail">
                  <span>📍</span> {event.location}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Past recordings strip */}
        <div className="events-recordings-strip">
          <h4 className="recordings-heading">📹 Past Recordings</h4>
          <div className="recordings-list">
            {pastRecordings.map((rec, i) => (
              <Link key={i} href={rec.href} className="recording-item">
                <div className="recording-info">
                  <span className="recording-title">{rec.title}</span>
                  <span className="recording-meta">{rec.date} · {rec.views} views</span>
                </div>
                <span className="recording-play-icon">▶</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
