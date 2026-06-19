"use client";

import { useState, useEffect } from "react";

const initialText = "Vector database storage speeds up AI retrieval metrics.";

const colorsList = [
  "hsl(215, 95%, 93%)", // blue
  "hsl(142, 70%, 93%)", // green
  "hsl(270, 70%, 93%)", // purple
  "hsl(35, 90%, 93%)",  // orange
  "hsl(335, 75%, 93%)", // pink
  "hsl(180, 70%, 92%)"  // cyan
];

export default function TokenizerSandbox() {
  const [inputText, setInputText] = useState(initialText);
  const [selectedModel, setSelectedModel] = useState("openai-1536");
  const [tokens, setTokens] = useState([]);
  const [mockVector, setMockVector] = useState([]);
  const [isComputing, setIsComputing] = useState(false);

  useEffect(() => {
    setIsComputing(true);
    const computeTimer = setTimeout(() => {
      // Split text into words, then simulate sub-word splits
      const words = inputText.trim() ? inputText.split(/\s+/) : [];
      const tokenArray = [];
      let colorIndex = 0;

      words.forEach((word) => {
        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        // Split longer words to demonstrate sub-word tokenization
        if (cleanWord.length > 5) {
          const splitPt = Math.floor(cleanWord.length / 2);
          const firstPart = cleanWord.substring(0, splitPt);
          const secondPart = cleanWord.substring(splitPt);
          
          tokenArray.push({ text: firstPart, color: colorsList[colorIndex % colorsList.length] });
          colorIndex++;
          tokenArray.push({ text: secondPart + (word.endsWith(".") ? "." : ""), color: colorsList[colorIndex % colorsList.length] });
          colorIndex++;
        } else {
          tokenArray.push({ text: word, color: colorsList[colorIndex % colorsList.length] });
          colorIndex++;
        }
      });

      setTokens(tokenArray);

      // Generate mock vectors based on selected model dimensions
      const dims = selectedModel === "openai-1536" ? 24 : selectedModel === "cohere-1024" ? 16 : 12; // subset for visual display
      const floats = Array.from({ length: dims }, () => (Math.random() * 2 - 1).toFixed(4));
      setMockVector(floats);
      setIsComputing(false);
    }, 400);

    return () => clearTimeout(computeTimer);
  }, [inputText, selectedModel]);

  const getDimensions = () => {
    if (selectedModel === "openai-1536") return 1536;
    if (selectedModel === "cohere-1024") return 1024;
    return 768;
  };

  const getJsonPayload = () => {
    return JSON.stringify(
      {
        index_name: "prod-search-db",
        records: [
          {
            id: `doc-${inputText.length}`,
            text: inputText,
            metadata: {
              char_count: inputText.length,
              token_count: tokens.length,
              model: selectedModel,
              dimensions: getDimensions()
            }
          }
        ]
      },
      null,
      2
    );
  };

  return (
    <section className="home-section-container" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="playground-badge">Tokenizer</span>
        <h2 className="home-section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
          Embedding Tokenizer Playground
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          Input customized text strings to visualize sub-word BPE tokenization, compute estimated floats, and check database payloads.
        </p>
      </div>

      <div className="tokenizer-sandbox-layout">
        {/* Left side: Inputs & Token visualizer */}
        <div className="tokenizer-input-side">
          <div className="form-group" style={{ textAlign: "left" }}>
            <label htmlFor="token-input">Input String Text</label>
            <textarea
              id="token-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type anything to tokenize..."
              rows="4"
              className="tokenizer-textarea"
            />
          </div>

          <div className="tokenizer-metrics-bar">
            <div className="metric-badge">
              <span>Characters</span>
              <strong>{inputText.length}</strong>
            </div>
            <div className="metric-badge">
              <span>Estimated Tokens</span>
              <strong style={{ color: "var(--accent-indigo)" }}>{tokens.length}</strong>
            </div>
            <div className="metric-badge">
              <span>Dimensions</span>
              <strong>{getDimensions()}</strong>
            </div>
          </div>

          <div className="tokenizer-visual-box">
            <span className="visual-box-label">Sub-Word Token Splits Preview</span>
            {tokens.length > 0 ? (
              <div className="tokens-container">
                {tokens.map((token, idx) => (
                  <span
                    key={idx}
                    className="token-chip"
                    style={{ backgroundColor: token.color }}
                  >
                    {token.text}
                  </span>
                ))}
              </div>
            ) : (
              <p style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "0.875rem" }}>
                Waiting for text input...
              </p>
            )}
          </div>
        </div>

        {/* Right side: Vectors & JSON payloads outputs */}
        <div className="tokenizer-output-side">
          {/* Model selector */}
          <div className="form-group" style={{ textAlign: "left", marginBottom: "1rem" }}>
            <label htmlFor="model-select">Target Embedding Model</label>
            <select
              id="model-select"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="rag-select"
            >
              <option value="openai-1536">OpenAI text-embedding-3-small (1536-dim)</option>
              <option value="cohere-1024">Cohere embed-multilingual-v3.0 (1024-dim)</option>
              <option value="vectorstack-768">VectorStack embed-small-768 (768-dim)</option>
            </select>
          </div>

          {/* Vectors Preview Terminal */}
          <div className="vector-terminal-preview">
            <div className="terminal-header" style={{ borderBottom: "1px solid #1e293b", backgroundColor: "#1e293b", padding: "0.5rem 1rem" }}>
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">Vector Coordinates Float Array Preview</span>
            </div>
            <div className="vector-matrix-body">
              {isComputing ? (
                <div style={{ color: "var(--text-light-muted)", fontStyle: "italic" }}>Calculating projections...</div>
              ) : (
                <div className="vector-matrix-grid">
                  {mockVector.map((val, idx) => (
                    <span key={idx} className="matrix-float animate-pop">
                      {val}
                    </span>
                  ))}
                  <span className="matrix-float" style={{ opacity: 0.5 }}>...</span>
                </div>
              )}
            </div>
          </div>

          {/* Ingestion Payload JSON */}
          <div className="vector-terminal-preview" style={{ marginTop: "1rem" }}>
            <div className="terminal-header" style={{ borderBottom: "1px solid #1e293b", backgroundColor: "#1e293b", padding: "0.5rem 1rem" }}>
              <span className="terminal-title">VectorStack Ingestion Payload JSON</span>
            </div>
            <pre className="json-pre-box">
              <code>{getJsonPayload()}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
