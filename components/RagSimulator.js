"use client";

import { useState, useEffect } from "react";

const textPresets = {
  vpc: "Deploying a single-tenant VectorStack index inside an isolated AWS Virtual Private Cloud (VPC) provides maximum security. The default VPC pricing starts at $499/month, ensuring dedicated CPU/GPU cores, custom HIPAA/SOC2 compliance filters, and network isolation configurations. Users connect to these dedicated VPC endpoints using client SDK initializations, securing data snapshots from public endpoints.",
  quickstart: "To get started with VectorStack, install the JavaScript client using npm install @vectorstack/sdk. Initialize the client using your private workspace API key and the provisioned endpoint URL. Index vectors by passing raw text arrays or pre-calculated floats. Run semantic search queries with Cosine similarity distance metrics to fetch nearest matching nodes.",
  webhooks: "Webhooks allow applications to receive HTTP POST payloads when long-running document ingestion tasks finish processing. To register a webhook, go to the settings dashboard and input your server URL. The platform sends payload structures containing document status identifiers (such as document.ingested or document.failed) alongside processing execution duration metrics."
};

const modelPresets = {
  openai: { name: "OpenAI text-embedding-3-small", dims: 1536, latency: "120ms" },
  cohere: { name: "Cohere embed-multilingual-v3.0", dims: 1024, latency: "145ms" },
  vectorstack: { name: "VectorStack embed-small-768", dims: 768, latency: "35ms" }
};

export default function RagSimulator() {
  const [selectedTextPreset, setSelectedTextPreset] = useState("vpc");
  const [chunkSize, setChunkSize] = useState(300);
  const [chunkOverlap, setChunkOverlap] = useState(50);
  const [selectedModel, setSelectedModel] = useState("openai");
  const [activeStep, setActiveStep] = useState(0); // 0: Config, 1-5: Pipeline steps
  const [isSimulating, setIsSimulating] = useState(false);
  const [chunksCount, setChunksCount] = useState(0);
  const [chunksList, setChunksList] = useState([]);
  const [ragOutput, setRagOutput] = useState("");

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveStep(1);
    setRagOutput("");
    
    // Step 1: Ingestion
    setTimeout(() => {
      setActiveStep(2);
      
      // Step 2: Chunking calculations
      const fullText = textPresets[selectedTextPreset];
      const approxWordCount = fullText.split(" ").length;
      // Estimate chunks based on parameters
      const wordsPerChunk = Math.max(10, Math.floor(chunkSize / 4));
      const overlapWords = Math.floor(chunkOverlap / 4);
      const calculatedChunks = [];
      const words = fullText.split(" ");
      
      for (let i = 0; i < words.length; i += (wordsPerChunk - overlapWords)) {
        const chunkSlice = words.slice(i, i + wordsPerChunk).join(" ");
        if (chunkSlice.trim().length > 0) {
          calculatedChunks.push(chunkSlice);
        }
        if (i + wordsPerChunk >= words.length) break;
      }
      
      setChunksList(calculatedChunks);
      setChunksCount(calculatedChunks.length);

      setTimeout(() => {
        setActiveStep(3);
        
        // Step 3: Embedding
        setTimeout(() => {
          setActiveStep(4);
          
          // Step 4: Retrieval Match
          setTimeout(() => {
            setActiveStep(5);
            
            // Step 5: LLM Synthesis
            const modelInfo = modelPresets[selectedModel];
            let synthesizedText = "";
            if (selectedTextPreset === "vpc") {
              synthesizedText = `Based on the retrieved context, dedicated single-tenant VPCs on VectorStack start at $499/month. They are designed for enterprise security, offering SOC2/HIPAA compliance controls and dedicated hardware endpoints to isolate vector data.`;
            } else if (selectedTextPreset === "quickstart") {
              synthesizedText = `To connect to VectorStack, you install '@vectorstack/sdk' via npm. You initialize the client with your credentials, index floats or text arrays, and run queries using formulas like Cosine similarity.`;
            } else {
              synthesizedText = `Webhooks are configured by submitting your server endpoint in the settings dashboard. They receive JSON POST requests notifying your app of status events like 'document.ingested' or 'document.failed'.`;
            }
            
            setRagOutput(synthesizedText);
            setIsSimulating(false);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  const getStepClass = (stepNum) => {
    if (activeStep === stepNum) return "rag-step active-pulse";
    if (activeStep > stepNum) return "rag-step completed";
    return "rag-step pending";
  };

  return (
    <section className="home-section-container" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="playground-badge">RAG Simulator</span>
        <h2 className="home-section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
          RAG Retrieval Pipeline Builder
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          Simulate how VectorStack ingests raw documents, generates vector coordinates, and returns filtered context for LLM question-answering.
        </p>
      </div>

      <div className="rag-simulator-layout">
        {/* Left column: Setup Configurator */}
        <div className="rag-config-panel">
          <h4>Pipeline Parameters</h4>

          {/* Preset Texts */}
          <div className="rag-form-group">
            <label>1. Select Ingestion Source Text</label>
            <div className="rag-presets-grid">
              <button
                className={`preset-select-btn ${selectedTextPreset === "vpc" ? "active" : ""}`}
                onClick={() => setSelectedTextPreset("vpc")}
                disabled={isSimulating}
              >
                VPC Security Guide
              </button>
              <button
                className={`preset-select-btn ${selectedTextPreset === "quickstart" ? "active" : ""}`}
                onClick={() => setSelectedTextPreset("quickstart")}
                disabled={isSimulating}
              >
                Quickstart SDK Guide
              </button>
              <button
                className={`preset-select-btn ${selectedTextPreset === "webhooks" ? "active" : ""}`}
                onClick={() => setSelectedTextPreset("webhooks")}
                disabled={isSimulating}
              >
                Webhooks Specification
              </button>
            </div>
            <textarea
              className="rag-text-preview"
              value={textPresets[selectedTextPreset]}
              readOnly
            />
          </div>

          {/* Sliders */}
          <div className="rag-form-group">
            <label style={{ display: "flex", justifyContent: "space-between" }}>
              <span>2. Chunk Size</span>
              <span className="slider-val-badge">{chunkSize} tokens</span>
            </label>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={chunkSize}
              onChange={(e) => setChunkSize(parseInt(e.target.value))}
              disabled={isSimulating}
              className="rag-slider"
            />
          </div>

          <div className="rag-form-group">
            <label style={{ display: "flex", justifyContent: "space-between" }}>
              <span>3. Chunk Overlap</span>
              <span className="slider-val-badge">{chunkOverlap} tokens</span>
            </label>
            <input
              type="range"
              min="0"
              max="200"
              step="10"
              value={chunkOverlap}
              onChange={(e) => setChunkOverlap(parseInt(e.target.value))}
              disabled={isSimulating}
              className="rag-slider"
            />
          </div>

          {/* Embedding Select */}
          <div className="rag-form-group">
            <label>4. Select Embedding Model</label>
            <select
              className="rag-select"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              disabled={isSimulating}
            >
              <option value="openai">OpenAI text-embedding-3 (1536-dim)</option>
              <option value="cohere">Cohere embed-multilingual-v3.0 (1024-dim)</option>
              <option value="vectorstack">VectorStack embed-small-768 (768-dim)</option>
            </select>
          </div>

          <button
            onClick={runSimulation}
            className={`btn-primary rag-run-btn ${isSimulating ? "simulating" : ""}`}
            disabled={isSimulating}
          >
            {isSimulating ? "Running Pipeline Simulation..." : "Compile & Run Pipeline"}
          </button>
        </div>

        {/* Right column: Interactive Visual Pipeline */}
        <div className="rag-visual-pipeline">
          <div className="pipeline-steps-container">
            {/* Step 1 */}
            <div className={getStepClass(1)}>
              <div className="step-num-bubble">1</div>
              <div className="step-meta">
                <h5>Document Ingested</h5>
                <p>Read raw characters from stream</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className={getStepClass(2)}>
              <div className="step-num-bubble">2</div>
              <div className="step-meta">
                <h5>Text Chunking</h5>
                <p>Split content into segments with overlaps</p>
                {activeStep >= 2 && (
                  <span className="step-output-indicator">Generated {chunksCount} chunks</span>
                )}
              </div>
            </div>

            {/* Step 3 */}
            <div className={getStepClass(3)}>
              <div className="step-num-bubble">3</div>
              <div className="step-meta">
                <h5>Vector Embeddings</h5>
                <p>Calculate float coordinates using model</p>
                {activeStep >= 3 && (
                  <span className="step-output-indicator" style={{ backgroundColor: "#f5f3ff", color: "var(--accent-indigo)" }}>
                    {modelPresets[selectedModel].dims} dimensions
                  </span>
                )}
              </div>
            </div>

            {/* Step 4 */}
            <div className={getStepClass(4)}>
              <div className="step-num-bubble">4</div>
              <div className="step-meta">
                <h5>Semantic Query Match</h5>
                <p>Calculate cosine similarity vector distance</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className={getStepClass(5)}>
              <div className="step-num-bubble">5</div>
              <div className="step-meta">
                <h5>LLM Context Synthesis</h5>
                <p>Inject vector results into prompt context</p>
              </div>
            </div>
          </div>

          {/* Interactive Logs Output / Result Display */}
          <div className="pipeline-terminal-output">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">RAG Output Log</span>
            </div>
            
            <div className="terminal-body">
              {activeStep === 0 && (
                <p className="terminal-placeholder">
                  Configure parameters on the left and run the pipeline to watch semantic chunking and LLM prompt synthesis.
                </p>
              )}

              {activeStep >= 2 && chunksList.length > 0 && (
                <div className="terminal-step-log">
                  <span className="terminal-log-tag"># Text Splitter Output (Chunk #1):</span>
                  <div className="terminal-chunk-preview">
                    "{chunksList[0].length > 180 ? `${chunksList[0].slice(0, 180)}...` : chunksList[0]}"
                  </div>
                </div>
              )}

              {activeStep >= 3 && (
                <div className="terminal-step-log" style={{ marginTop: "0.5rem" }}>
                  <span className="terminal-log-tag"># Ingestion Database Status:</span>
                  <div style={{ color: "#34d399" }}>
                    ✔ Chunks indexed in VectorStack. Embedding latency: {modelPresets[selectedModel].latency}
                  </div>
                </div>
              )}

              {activeStep >= 5 && ragOutput && (
                <div className="terminal-step-log rag-synthesis-log">
                  <span className="terminal-log-tag"># LLM Generated Contextual Response:</span>
                  <div className="terminal-llm-response animate-fade-in">
                    {ragOutput}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
