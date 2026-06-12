// VectorStack Platform Services Status Data

export const servicesStatus = [
  {
    name: "Embeddings API",
    status: "operational",
    uptime: "99.98%",
    latency: "45ms"
  },
  {
    name: "Search API",
    status: "operational",
    uptime: "99.99%",
    latency: "12ms"
  },
  {
    name: "Document Ingestion",
    status: "operational",
    uptime: "99.95%",
    latency: "180ms avg parsing"
  },
  {
    name: "Webhooks Delivery",
    status: "operational",
    uptime: "99.92%",
    latency: "320ms avg response"
  },
  {
    name: "Dashboard Console",
    status: "operational",
    uptime: "99.97%",
    latency: "110ms"
  },
  {
    name: "SDK Registry Mirror",
    status: "operational",
    uptime: "100.00%",
    latency: "8ms"
  }
];

export const incidents = [
  {
    id: "inc-1",
    title: "All Systems Operational",
    date: "June 12, 2026",
    status: "Resolved",
    description: "No incidents reported today. All endpoints and systems are running within normal performance parameters."
  }
];
