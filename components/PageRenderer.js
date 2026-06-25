"use client";

import { useState } from "react";
import Link from "next/link";
import CodeBlock from "./CodeBlock";
import Callout from "./Callout";
import Breadcrumbs from "./Breadcrumbs";
import FaqSection from "./FaqSection";
import IntegrationsSection from "./IntegrationsSection";
import PricingSection from "./PricingSection";
import GetHelpSection from "./GetHelpSection";

export default function PageRenderer({ pageData }) {
  // Feedback states
  const [feedbackVote, setFeedbackVote] = useState(null); // 'yes' or 'no'
  const [feedbackComment, setFeedbackComment] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Ask-AI states
  const [aiQuery, setAiQuery] = useState("");
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [chatLog, setChatLog] = useState([]);

  if (!pageData) {
    return (
      <div className="page-error">
        <h1>Page Not Found</h1>
        <p>The requested resource could not be found or has been moved.</p>
      </div>
    );
  }

  const { title, description, sections, relatedLinks, nextSteps } = pageData;

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
  };

  const handleFeedbackVote = (vote) => {
    setFeedbackVote(vote);
    if (vote === "yes") {
      setFeedbackSubmitted(true);
    }
  };

  const handleAskAi = (e) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;

    const userMessage = { role: "user", text: aiQuery };
    setChatLog((prev) => [...prev, userMessage]);
    setIsAiThinking(true);
    const queryStr = aiQuery.toLowerCase();
    setAiQuery("");

    setTimeout(() => {
      let reply = "";
      
      // Contextual RAG matching
      if (title.includes("Getting Started")) {
        if (queryStr.includes("api") || queryStr.includes("key") || queryStr.includes("credential")) {
          reply = "To get your API key, sign up at vectorstack.com/dashboard. Create a project and download the credentials, which should be exported as `VECTORSTACK_API_KEY` in your environment.";
        } else if (queryStr.includes("metric") || queryStr.includes("cosine") || queryStr.includes("l2")) {
          reply = "VectorStack supports Cosine, Dot Product, and Euclidean (L2) metrics. You select your metric during index creation depending on your embedding model specification.";
        } else {
          reply = "For the Getting Started guide, ensure you export your API credentials first, run a local ping to verify sandbox availability, and configure vector indices before loading float floats.";
        }
      } else if (title.includes("Installation")) {
        if (queryStr.includes("docker") || queryStr.includes("sandbox")) {
          reply = "The Docker sandbox container is loaded by running `docker run -d -p 4000:4000 vectorstack/sandbox:latest`. This mounts a local HTTP endpoint on localhost:4000 for offline indexing.";
        } else if (queryStr.includes("npm") || queryStr.includes("install") || queryStr.includes("package")) {
          reply = "Install the official client package using npm: `npm install @vectorstack/sdk`. Import `VectorStackClient` to configure your workspace references.";
        } else {
          reply = "Ensure your system is running Node.js 18+ to support isomorphic fetch operations. If you encounter permission errors, run the terminal as Administrator or check local configs.";
        }
      } else if (title.includes("Search API")) {
        if (queryStr.includes("filter") || queryStr.includes("metadata")) {
          reply = "Metadata filters are set in the JSON request body under `filter`. E.g., `\"filter\": { \"category\": \"billing\" }`. The API prunes non-matching nodes before calculating similarities.";
        } else if (queryStr.includes("threshold") || queryStr.includes("score")) {
          reply = "You can restrict results using score thresholds. Under Cosine distance, a score closer to 1 represents high similarity, whereas Euclidean distance scores closer to 0 are nearest.";
        } else {
          reply = "The Search API endpoint resides at `/v1/index/{name}/query`. It requires an `Authorization: Bearer <API_KEY>` header and accepts a JSON body containing query vectors and `topK`.";
        }
      } else if (title.includes("JavaScript")) {
        if (queryStr.includes("timeout") || queryStr.includes("retry")) {
          reply = "Configure client timeouts during class initialization: `new VectorStackClient({ apiKey, timeout: 5000, maxRetries: 3 })` to override default network thresholds.";
        } else if (queryStr.includes("query") || queryStr.includes("search")) {
          reply = "Run search queries programmatically: `const results = await client.index('my-index').query({ vector: [0.1, 0.2...], topK: 5 })`. You can optional pass raw strings to auto-embed.";
        } else {
          reply = "The isomorphic JavaScript client aggregates query handshakes natively. It runs seamlessly in Node.js, Vercel Serverless, and Edge runtime parameters.";
        }
      } else {
        reply = "I've analyzed this documentation segment. Please make sure to import the required SDK modules, export your authentication tokens, and configure proper dimension counts.";
      }

      setChatLog((prev) => [...prev, { role: "assistant", text: reply }]);
      setIsAiThinking(false);
    }, 1200);
  };

  return (
    <article className="page-article">
      <Breadcrumbs title={title} />
      
      <header className="page-header">
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-description">{description}</p>}
        <p className="page-header-notice" style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--text-muted)", fontStyle: "italic" }}>
          This reference document is part of the official developer guide database. For installation requirements or sandbox testing, run local endpoints configuration checks.
        </p>
      </header>

      <div className="page-content">
        {sections &&
          sections.map((section, idx) => (
            <section key={idx} className="content-section">
              {section.heading && <h2 className="section-heading">{section.heading}</h2>}
              
              {section.body && (
                <p 
                  className="section-body" 
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />
              )}
              
              {section.list && (
                <ul className="section-list">
                  {section.list.map((item, itemIdx) => (
                    <li 
                      key={itemIdx} 
                      className="section-list-item"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              )}

              {section.callout && (
                <Callout type={section.callout.type} text={section.callout.text} />
              )}

              {section.code && <CodeBlock code={section.code} />}
            </section>
          ))}
          
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="related-links-section">
            <h2 className="section-heading">Related Documentation</h2>
            <ul className="related-links-list">
              {relatedLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="related-link-item">
                  <Link href={link.href} className="related-link-anchor">
                    {link.text} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {nextSteps && nextSteps.length > 0 && (
          <section className="next-steps-section">
            <h2 className="section-heading">Next Steps</h2>
            <div className="next-steps-grid">
              {nextSteps.map((step, stepIdx) => (
                <Link key={stepIdx} href={step.href} className="next-step-card">
                  <h4>{step.text}</h4>
                  {step.description && <p>{step.description}</p>}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Custom React sections embedded on specific pages */}
        {pageData.slug === "getting-started" && (
          <div className="rendered-custom-section" style={{ marginTop: "3.5rem" }}>
            <FaqSection />
          </div>
        )}

        {pageData.slug === "installation" && (
          <div className="rendered-custom-section" style={{ marginTop: "3.5rem" }}>
            <IntegrationsSection />
          </div>
        )}

        {pageData.slug === "javascript" && (
          <div className="rendered-custom-section" style={{ marginTop: "3.5rem" }}>
            <PricingSection />
          </div>
        )}

        {/* Getting Help / Support Channels — shown on all pages */}
        <div className="rendered-custom-section" style={{ marginTop: "3.5rem" }}>
          <GetHelpSection />
        </div>

        {/* Dynamic Section 1: Helpful Documentation Feedback */}
        <section className="docs-feedback-wrapper">
          {!feedbackSubmitted ? (
            <div className="feedback-vote-card">
              <h4>Was this page helpful?</h4>
              <div className="feedback-buttons">
                <button
                  onClick={() => handleFeedbackVote("yes")}
                  className={`btn-secondary vote-btn ${feedbackVote === "yes" ? "active" : ""}`}
                >
                  Yes 👍
                </button>
                <button
                  onClick={() => handleFeedbackVote("no")}
                  className={`btn-secondary vote-btn ${feedbackVote === "no" ? "active" : ""}`}
                >
                  No 👎
                </button>
              </div>

              {feedbackVote === "no" && (
                <form onSubmit={handleFeedbackSubmit} className="feedback-comment-form animate-slide-down">
                  <label htmlFor="feedback-text">What can we improve?</label>
                  <textarea
                    id="feedback-text"
                    value={feedbackComment}
                    onChange={(e) => setFeedbackComment(e.target.value)}
                    placeholder="Describe issues, missing setups, or errors..."
                    rows="3"
                    required
                  />
                  <button type="submit" className="btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}>
                    Send Feedback
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="feedback-success-card animate-fade-in">
              <span className="success-emoji">🎉</span>
              <div>
                <h5>Thank you for your feedback!</h5>
                <p>We use your suggestions to continuously update and improve our guides.</p>
              </div>
            </div>
          )}
        </section>

        {/* Dynamic Section 2: Ask-AI Docs Assistant Widget */}
        <section className="docs-ask-ai-wrapper">
          <div className="ask-ai-header">
            <span className="ai-badge">AI Assistant</span>
            <h4>Ask AI Docs Helper</h4>
            <p>Get instant automated context assistance regarding <strong>{title}</strong> details.</p>
          </div>

          <div className="ask-ai-chat-box">
            {chatLog.length === 0 ? (
              <p className="chat-placeholder">
                Ask a question about this guide! (e.g. {title.includes("Getting Started") ? "'How do I set API keys?'" : title.includes("Installation") ? "'How to load Docker sandbox?'" : "'How do metadata filters work?'"})
              </p>
            ) : (
              <div className="chat-lines-list">
                {chatLog.map((msg, idx) => (
                  <div key={idx} className={`chat-line-bubble ${msg.role}`}>
                    <span className="bubble-speaker">{msg.role === "user" ? "You" : "VectorStack AI"}</span>
                    <p>{msg.text}</p>
                  </div>
                ))}
              </div>
            )}

            {isAiThinking && (
              <div className="chat-thinking-bubble animate-pulse">
                <span className="thinking-dot"></span>
                <span className="thinking-dot"></span>
                <span className="thinking-dot"></span>
                <span>VectorStack AI is searching page embeddings...</span>
              </div>
            )}
          </div>

          <form onSubmit={handleAskAi} className="ask-ai-input-form">
            <input
              type="text"
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              placeholder={`Ask a question about ${title}...`}
              disabled={isAiThinking}
              required
            />
            <button type="submit" className="btn-primary" disabled={isAiThinking}>
              Ask Assistant
            </button>
          </form>
        </section>
      </div>
    </article>
  );
}
