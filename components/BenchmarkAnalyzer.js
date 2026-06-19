"use client";

import { useState, useEffect } from "react";

export default function BenchmarkAnalyzer() {
  const [indexType, setIndexType] = useState("hnsw"); // "hnsw", "ivf", "flat"
  const [dbSize, setDbSize] = useState("1m"); // "100k", "1m", "10m"
  const [hardware, setHardware] = useState("gpu"); // "cpu", "gpu"
  const [metrics, setMetrics] = useState({ vsQps: 0, compAQps: 0, compBQps: 0, latency: "0ms" });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const animTimer = setTimeout(() => {
      // Calculate speeds based on variables
      let qpsMultiplier = 1;
      let latencyVal = 4.2;

      // Db size effect
      if (dbSize === "100k") {
        qpsMultiplier = 2.5;
        latencyVal = 1.1;
      } else if (dbSize === "10m") {
        qpsMultiplier = 0.3;
        latencyVal = 15.6;
      }

      // Index type effect
      let baseVsQps = 15000;
      let baseCompA = 3500;
      let baseCompB = 7200;

      if (indexType === "flat") {
        baseVsQps = 1800;
        baseCompA = 400;
        baseCompB = 900;
        latencyVal *= 4.5;
      } else if (indexType === "ivf") {
        baseVsQps = 9500;
        baseCompA = 2100;
        baseCompB = 4400;
        latencyVal *= 1.8;
      }

      // Hardware effect
      if (hardware === "gpu") {
        baseVsQps *= 2.8;
        baseCompB *= 1.5;
        latencyVal *= 0.45;
      }

      setMetrics({
        vsQps: Math.round(baseVsQps * qpsMultiplier),
        compAQps: Math.round(baseCompA * qpsMultiplier),
        compBQps: Math.round(baseCompB * qpsMultiplier),
        latency: `${latencyVal.toFixed(2)}ms`
      });
      setIsAnimating(false);
    }, 450);

    return () => clearTimeout(animTimer);
  }, [indexType, dbSize, hardware]);

  // Max QPS determines scaling widths (let's set max comparison boundary)
  const maxQpsLimit = 15000 * 2.5 * 2.8; // around 105k
  const getWidthPercent = (qps) => {
    return `${Math.max(5, (qps / maxQpsLimit) * 100)}%`;
  };

  return (
    <section className="home-section-container" style={{ borderBottom: "1px solid var(--border-color)", backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="playground-badge">Benchmarks</span>
        <h2 className="home-section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
          Performance Analyzer
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          Analyze retrieval speeds and Queries Per Second (QPS) under varying hardware configurations and cluster sizes.
        </p>
      </div>

      <div className="benchmark-layout-grid">
        {/* Left side: Benchmark Settings Controls */}
        <div className="benchmark-controls-panel-left">
          <h4>Benchmark Variables</h4>

          {/* Index Type Selection */}
          <div className="rag-form-group">
            <label>1. Index Algorithm Type</label>
            <div className="benchmark-toggle-group">
              <button
                className={`benchmark-btn-chip ${indexType === "hnsw" ? "active" : ""}`}
                onClick={() => setIndexType("hnsw")}
              >
                HNSW (Approximate)
              </button>
              <button
                className={`benchmark-btn-chip ${indexType === "ivf" ? "active" : ""}`}
                onClick={() => setIndexType("ivf")}
              >
                IVF-Flat (Quantized)
              </button>
              <button
                className={`benchmark-btn-chip ${indexType === "flat" ? "active" : ""}`}
                onClick={() => setIndexType("flat")}
              >
                Flat (Exact KNN)
              </button>
            </div>
          </div>

          {/* Dataset Size Selection */}
          <div className="rag-form-group">
            <label>2. Index Dataset Scale</label>
            <div className="benchmark-toggle-group">
              <button
                className={`benchmark-btn-chip ${dbSize === "100k" ? "active" : ""}`}
                onClick={() => setDbSize("100k")}
              >
                100,000 Vectors
              </button>
              <button
                className={`benchmark-btn-chip ${dbSize === "1m" ? "active" : ""}`}
                onClick={() => setDbSize("1m")}
              >
                1,000,000 Vectors
              </button>
              <button
                className={`benchmark-btn-chip ${dbSize === "10m" ? "active" : ""}`}
                onClick={() => setDbSize("10m")}
              >
                10,000,000 Vectors
              </button>
            </div>
          </div>

          {/* Hardware Acceleration Selection */}
          <div className="rag-form-group">
            <label>3. Hardware Ingestion Engine</label>
            <div className="benchmark-toggle-group">
              <button
                className={`benchmark-btn-chip ${hardware === "cpu" ? "active" : ""}`}
                onClick={() => setHardware("cpu")}
              >
                Standard Intel CPU
              </button>
              <button
                className={`benchmark-btn-chip ${hardware === "gpu" ? "active" : ""}`}
                onClick={() => setHardware("gpu")}
              >
                NVIDIA H100 Tensor GPU
              </button>
            </div>
          </div>
        </div>

        {/* Right side: Animated Comparison Bars Chart */}
        <div className="benchmark-chart-panel-right">
          <div className="chart-header-row">
            <h4>Queries Per Second (QPS) Output</h4>
            <span>Higher is Better</span>
          </div>

          <div className="chart-visual-bars-container">
            {/* VectorStack bar */}
            <div className="chart-bar-row">
              <div className="chart-bar-label">
                <strong>VectorStack Core</strong>
                <span className="live-metric-count">{metrics.vsQps.toLocaleString()} QPS</span>
              </div>
              <div className="bar-wrapper">
                <div
                  className="bar-fill vectorstack-gradient"
                  style={{ width: isAnimating ? "10%" : getWidthPercent(metrics.vsQps) }}
                ></div>
              </div>
            </div>

            {/* Competitor B bar */}
            <div className="chart-bar-row">
              <div className="chart-bar-label">
                <span>Competitor B (Search DB)</span>
                <span className="live-metric-count">{metrics.compBQps.toLocaleString()} QPS</span>
              </div>
              <div className="bar-wrapper">
                <div
                  className="bar-fill competitor-b-color"
                  style={{ width: isAnimating ? "10%" : getWidthPercent(metrics.compBQps) }}
                ></div>
              </div>
            </div>

            {/* Competitor A bar */}
            <div className="chart-bar-row">
              <div className="chart-bar-label">
                <span>Competitor A (Relational Vector)</span>
                <span className="live-metric-count">{metrics.compAQps.toLocaleString()} QPS</span>
              </div>
              <div className="bar-wrapper">
                <div
                  className="bar-fill competitor-a-color"
                  style={{ width: isAnimating ? "10%" : getWidthPercent(metrics.compAQps) }}
                ></div>
              </div>
            </div>
          </div>

          {/* Detailed latency metrics */}
          <div className="benchmark-extra-metrics-row">
            <div className="metric-box">
              <span>99th Percentile Latency</span>
              <h4>{isAnimating ? "..." : metrics.latency}</h4>
            </div>
            <div className="metric-box">
              <span>Recall Performance Accuracy</span>
              <h4>{indexType === "flat" ? "100%" : indexType === "ivf" ? "96.4%" : "99.1%"}</h4>
            </div>
            <div className="metric-box">
              <span>Memory Footprint Scale</span>
              <h4>{indexType === "flat" ? "1.0x" : indexType === "ivf" ? "0.25x" : "1.25x"}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
