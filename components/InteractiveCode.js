"use client";

import { useState } from "react";

export default function InteractiveCode() {
  const [activeTab, setActiveTab] = useState("javascript");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    javascript: `import { VectorStack } from "vectorstack";

const client = new VectorStack({
  apiKey: process.env.VECTORSTACK_API_KEY
});

// Run semantic similarity search
const results = await client.indexes.search({
  indexId: "articles-kb",
  query: "How to scale vector indices?",
  topK: 3
});

console.log(results);`,
    python: `from vectorstack import VectorStack

client = VectorStack(
    api_key="your-api-key"
)

# Run semantic similarity search
results = client.indexes.search(
    index_id="articles-kb",
    query="How to scale vector indices?",
    top_k=3
)

print(results)`,
    curl: `curl -X POST https://api.vectorstack.dev/v1/search \\
  -H "Authorization: Bearer $VECTORSTACK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "indexId": "articles-kb",
    "query": "scaling vector search",
    "topK": 3
  }'`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="playground-container">
      <div className="playground-header">
        <div className="playground-title-area">
          <span className="playground-badge">Interactive Demo</span>
          <h2 className="playground-title">Start Building in Seconds</h2>
          <p className="playground-subtitle">
            Integrate VectorStack into your existing stack using our official client SDKs or direct HTTP queries.
          </p>
        </div>
      </div>

      <div className="code-sandbox">
        <div className="sandbox-tab-bar">
          <div className="sandbox-tabs">
            <button
              onClick={() => setActiveTab("javascript")}
              className={`sandbox-tab-btn ${activeTab === "javascript" ? "active" : ""}`}
            >
              <span className="tab-icon">js</span>
              JavaScript
            </button>
            <button
              onClick={() => setActiveTab("python")}
              className={`sandbox-tab-btn ${activeTab === "python" ? "active" : ""}`}
            >
              <span className="tab-icon python">py</span>
              Python
            </button>
            <button
              onClick={() => setActiveTab("curl")}
              className={`sandbox-tab-btn ${activeTab === "curl" ? "active" : ""}`}
            >
              <span className="tab-icon curl">$_</span>
              cURL API
            </button>
          </div>
          <button onClick={copyToClipboard} className="sandbox-copy-btn">
            {copied ? (
              <span style={{ color: "#10b981" }}>✓ Copied!</span>
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "4px" }}
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy Code
              </>
            )}
          </button>
        </div>
        <div className="sandbox-code-view">
          <pre>
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
