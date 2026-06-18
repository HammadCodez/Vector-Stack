"use client";

import { useState } from "react";
import { servicesStatus, incidents } from "../data/status";

export default function StatusSection() {
  const [isTesting, setIsTesting] = useState(false);
  const [testLogs, setTestLogs] = useState([]);
  const [liveLatencies, setLiveLatencies] = useState({});

  const runLatencyTest = () => {
    setIsTesting(true);
    setTestLogs(["Initializing endpoint handshake...", "Resolving vectorstack DNS hosts..."]);
    setLiveLatencies({});

    let index = 0;
    
    const runPingSequence = () => {
      if (index >= servicesStatus.length) {
        setTestLogs((prev) => [...prev, "✔ All diagnostic tests completed. Connection limits OK."]);
        setIsTesting(false);
        return;
      }

      const service = servicesStatus[index];
      // Generate a realistic random latency based on the average latency string
      const baseLatency = parseInt(service.latency) || 50;
      const variance = Math.floor(Math.random() * (baseLatency * 0.3)) - Math.floor(baseLatency * 0.15);
      const generatedLatency = Math.max(5, baseLatency + variance);

      setTimeout(() => {
        setLiveLatencies((prev) => ({
          ...prev,
          [service.name]: `${generatedLatency}ms`
        }));
        setTestLogs((prev) => [
          ...prev,
          `PING ${service.name.toLowerCase().replace(/ /g, "-")}.vectorstack.com/v1 - Success (${generatedLatency}ms)`
        ]);
        index++;
        runPingSequence();
      }, 350);
    };

    setTimeout(runPingSequence, 600);
  };

  return (
    <section className="home-section-container" style={{ borderBottom: "1px solid var(--border-color)", backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="playground-badge">Platform Health</span>
        <h2 className="home-section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
          Real-time System Status
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          VectorStack keeps retrieval speed high. We guarantee 99.9% uptime with instant latency updates.
        </p>
      </div>

      {/* Main Status Grid */}
      <div className="status-grid-wrapper">
        <div className="status-indicator-header healthy">
          <span className="status-dot healthy"></span>
          <span>{incidents[0]?.title || "All Systems Operational"}</span>
          <span style={{ marginLeft: "auto", fontSize: "0.8125rem", color: "var(--text-secondary)", fontWeight: "normal" }}>
            Updated just now
          </span>
        </div>

        <div className="services-status-table-container">
          <table className="status-services-table">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Status</th>
                <th>Avg Latency</th>
                <th>Uptime (90d)</th>
              </tr>
            </thead>
            <tbody>
              {servicesStatus.map((service) => {
                const liveLatency = liveLatencies[service.name];
                return (
                  <tr key={service.name}>
                    <td style={{ fontWeight: "600", color: "var(--text-primary)" }}>{service.name}</td>
                    <td>
                      <span className="service-status-pill operational">
                        {service.status}
                      </span>
                    </td>
                    <td>
                      {liveLatency ? (
                        <span className="live-latency-badge animate-pop">{liveLatency}</span>
                      ) : (
                        <span>{service.latency}</span>
                      )}
                    </td>
                    <td style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                      {service.uptime}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Latency Test Bench Console */}
        <div className="latency-test-bench">
          <div className="console-header">
            <div className="console-controls">
              <span className="console-dot red"></span>
              <span className="console-dot yellow"></span>
              <span className="console-dot green"></span>
            </div>
            <span className="console-title">Diagnostic Ping Console</span>
            <button
              onClick={runLatencyTest}
              className={`btn-primary console-test-btn ${isTesting ? "testing" : ""}`}
              disabled={isTesting}
            >
              {isTesting ? "Pinging..." : "Test Connection Latency"}
            </button>
          </div>
          <div className="console-body">
            {testLogs.length === 0 ? (
              <p className="console-placeholder-text">
                No diagnostic test run yet. Click "Test Connection Latency" to ping each global API endpoint.
              </p>
            ) : (
              <pre className="console-pre">
                <code>
                  {testLogs.map((log, idx) => (
                    <div key={idx} className="console-line animate-fade-in">
                      {log}
                    </div>
                  ))}
                </code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
