import { servicesStatus, incidents } from "../../data/status";

export const metadata = {
  title: "Service Uptime Status"
};

export default function StatusPage() {
  return (
    <div className="index-page-container">
      <header className="page-header">
        <h1 className="page-title">System Health & Status</h1>
        <p className="page-description">
          Monitor the real-time operational status of all VectorStack core platform endpoints.
        </p>
      </header>

      <div className="status-indicator-header healthy">
        <span className="status-dot healthy"></span>
        <span>All systems operational. Embeddings, vector indexes, document ingestion, search APIs, webhook delivery, and dashboard services are currently healthy.</span>
      </div>

      <table className="status-services-table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Uptime</th>
            <th>Avg Latency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {servicesStatus.map((service, idx) => (
            <tr key={idx}>
              <td><strong>{service.name}</strong></td>
              <td>{service.uptime}</td>
              <td style={{ fontFamily: "monospace", fontSize: "0.85rem" }}>{service.latency}</td>
              <td>
                <span className={`service-status-pill ${service.status}`}>
                  {service.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="incidents-list">
        <h3>System Incidents & Maintenance</h3>
        {incidents.map((incident) => (
          <div key={incident.id} className="incident-card">
            <div className="incident-meta">
              <span>{incident.date}</span>
              <strong style={{ color: "#16a34a" }}>{incident.status}</strong>
            </div>
            <h4>{incident.title}</h4>
            <p>{incident.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
