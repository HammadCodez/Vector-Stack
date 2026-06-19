"use client";

import { useState, useRef, useEffect } from "react";

const documents = [
  { id: "doc-1", name: "Billing & VPC SLA Guide", x: 80, y: 85, text: "Details custom SLA guarantees, SOC2 compliance audit terms, and VPC deployment pricing tiers." },
  { id: "doc-2", name: "SDK Connection Quickstart", x: 20, y: 75, text: "Guides for initializing standard isomorphic Javascript/Python clients and endpoint configs." },
  { id: "doc-3", name: "Docker Ingestion Sandbox", x: 85, y: 25, text: "Instructions for running offline container environments locally on port 4000." },
  { id: "doc-4", name: "Webhook Endpoint Spec", x: 50, y: 40, text: "Registering webhook URLs to subscribe to indexing updates and failed event responses." },
  { id: "doc-5", name: "Hybrid Search Reranker", x: 25, y: 20, text: "Blending dense semantic similarity retrieval vectors with sparse token keyword matches." }
];

const presetQueries = [
  { name: "Index Provisioning Rate", x: 75, y: 70, text: "How much does AWS cloud VPC routing cost?" },
  { name: "Node Client Handshake", x: 25, y: 65, text: "How do I instantiate the Javascript library client?" },
  { name: "Webhook Failure Event", x: 55, y: 45, text: "Payload attributes sent on document ingest timeouts." }
];

export default function VectorPlayground() {
  const [activeMetric, setActiveMetric] = useState("cosine"); // "cosine" or "euclidean"
  const [queryPoint, setQueryPoint] = useState({ x: 40, y: 55, text: "Select a query or click on the grid" });
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  const gridRef = useRef(null);

  // Calculates similarity on queryPoint or activeMetric update
  useEffect(() => {
    if (!queryPoint) return;

    setIsSearching(true);
    const searchTimeout = setTimeout(() => {
      const calculated = documents.map((doc) => {
        let score = 0;
        let scoreText = "";

        if (activeMetric === "cosine") {
          // Translate vectors relative to grid origin (50, 50) for realistic quadrant angles
          const dx = doc.x - 50;
          const dy = doc.y - 50;
          const qx = queryPoint.x - 50;
          const qy = queryPoint.y - 50;

          const dotProduct = dx * qx + dy * qy;
          const magDoc = Math.sqrt(dx * dx + dy * dy);
          const magQuery = Math.sqrt(qx * qx + qy * qy);

          const similarity = magDoc > 0 && magQuery > 0 ? dotProduct / (magDoc * magQuery) : 0;
          // Scale -1 -> 1 to a 0 -> 1 normalized score for display
          score = (similarity + 1) / 2;
          scoreText = `${(score * 100).toFixed(1)}% match`;
        } else {
          // Euclidean L2 distance
          const distance = Math.sqrt(Math.pow(doc.x - queryPoint.x, 2) + Math.pow(doc.y - queryPoint.y, 2));
          // Normalize so closer points get higher progress fill
          score = Math.max(0, 1 - distance / 120);
          scoreText = `${distance.toFixed(1)}px dist`;
        }

        return { ...doc, score, scoreText };
      });

      // Sort by best match
      calculated.sort((a, b) => b.score - a.score);
      setResults(calculated);
      setIsSearching(false);
    }, 600);

    return () => clearTimeout(searchTimeout);
  }, [queryPoint, activeMetric]);

  const handleGridClick = (e) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    
    // Calculate percentages relative to the grid element size
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = (1 - (e.clientY - rect.top) / rect.height) * 100; // Invert Y for Cartesian coordinates
    
    setQueryPoint({
      x: Math.round(clickX),
      y: Math.round(clickY),
      text: `Custom Query Point (${Math.round(clickX)}, ${Math.round(clickY)})`
    });
  };

  const handlePresetSelect = (preset) => {
    setQueryPoint({
      x: preset.x,
      y: preset.y,
      text: preset.text
    });
  };

  return (
    <section className="home-section-container" style={{ borderBottom: "1px solid var(--border-color)" }}>
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="playground-badge">Visualization</span>
        <h2 className="home-section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
          Vector Similarity Playground
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          Click anywhere inside the 2D plane to emit a query vector, calculate mathematical similarities, and query matching documents in real-time.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="playground-controls">
        <div className="metric-toggle-buttons">
          <button
            onClick={() => setActiveMetric("cosine")}
            className={`metric-tab-btn ${activeMetric === "cosine" ? "active" : ""}`}
          >
            Cosine Similarity
          </button>
          <button
            onClick={() => setActiveMetric("euclidean")}
            className={`metric-tab-btn ${activeMetric === "euclidean" ? "active" : ""}`}
          >
            Euclidean L2 Distance
          </button>
        </div>

        <div className="preset-queries-row">
          <span style={{ fontSize: "0.8125rem", fontWeight: "600", color: "var(--text-secondary)", textTransform: "uppercase" }}>
            Presets:
          </span>
          {presetQueries.map((q, idx) => (
            <button
              key={idx}
              className={`preset-query-btn ${queryPoint.x === q.x && queryPoint.y === q.y ? "active" : ""}`}
              onClick={() => handlePresetSelect(q)}
            >
              {q.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Sandbox Board Layout */}
      <div className="playground-sandbox-board">
        {/* Left side: Coordinate Grid */}
        <div className="vector-grid-outer">
          <div className="grid-axis-label-y">Dimension 2 (y)</div>
          <div className="vector-grid-inner" ref={gridRef} onClick={handleGridClick}>
            {/* Grid Dotted Background */}
            <div className="grid-axes-origin"></div>

            {/* Document Nodes Plotted */}
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="grid-vector-node document"
                style={{ left: `${doc.x}%`, bottom: `${doc.y}%` }}
                title={`${doc.name} (${doc.x}, ${doc.y})`}
              >
                <span className="node-dot"></span>
                <span className="node-tooltip">{doc.name}</span>
              </div>
            ))}

            {/* Query Node Plotted */}
            {queryPoint && (
              <div
                className={`grid-vector-node query ${isSearching ? "pulse-searching" : ""}`}
                style={{ left: `${queryPoint.x}%`, bottom: `${queryPoint.y}%` }}
              >
                <span className="node-dot"></span>
                <span className="node-tooltip" style={{ backgroundColor: "var(--accent-blue)" }}>
                  Query Vector
                </span>

                {/* Radar sweep sonar line */}
                {isSearching && <span className="radar-sweep-sonar"></span>}
              </div>
            )}

            {/* Connecting Similarity Lines */}
            {queryPoint &&
              !isSearching &&
              results.slice(0, 3).map((match, idx) => (
                <svg key={match.id} className="svg-similarity-connector">
                  <line
                    x1={`${queryPoint.x}%`}
                    y1={`${100 - queryPoint.y}%`}
                    x2={`${match.x}%`}
                    y2={`${100 - match.y}%`}
                    className={`connector-line rank-${idx}`}
                  />
                </svg>
              ))}
          </div>
          <div className="grid-axis-label-x">Dimension 1 (x)</div>
        </div>

        {/* Right side: Similarity Rank Results */}
        <div className="playground-rankings-panel">
          <div className="rankings-header">
            <h4>Vector Index Rank Output</h4>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
              Query: "{queryPoint.text}"
            </span>
          </div>

          <div className="rankings-body">
            {isSearching ? (
              <div className="rankings-searching-state">
                <span className="spinner-loader"></span>
                <p>Computing inner-product matrix and distance norms...</p>
              </div>
            ) : (
              <div className="rank-cards-list">
                {results.map((match, index) => (
                  <div key={match.id} className={`rank-result-card ${index === 0 ? "best-match" : ""}`}>
                    <div className="rank-badge-number">#{index + 1}</div>
                    
                    <div className="rank-card-meta">
                      <div className="rank-title-row">
                        <h5>{match.name}</h5>
                        <span className="rank-score-badge">{match.scoreText}</span>
                      </div>
                      <p>{match.text}</p>
                      
                      {/* Metric Match progress visual */}
                      <div className="rank-progress-bg">
                        <div
                          className="rank-progress-fill"
                          style={{
                            width: `${match.score * 100}%`,
                            backgroundColor: index === 0 ? "var(--accent-indigo)" : "var(--accent-blue)"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
