// VectorStack Blog Posts Data
// Featuring inline HTML anchor links for crawler testing.

export const blogPosts = [
  {
    slug: "scaling-vector-search",
    title: "Scaling Vector Search",
    description: "Learn best practices for scaling vector indexes to support millions of embeddings.",
    date: "June 12, 2026",
    author: "Elena Rostova (Lead Systems Engineer)",
    sections: [
      {
        heading: "Introduction",
        body: "Scaling vector search requires careful index design, metadata filtering, predictable embedding dimensions, and monitoring of query latency. To get started, review our <a href=\"/docs/getting-started\">Getting Started</a> guide."
      },
      {
        heading: "Index Layout & Partitions",
        body: "When your database grows past 10 million vectors, monolithic indexes can cause query latencies to spike. We recommend partitioning data by organization. Check the index settings details in <a href=\"/docs/vector-indexes\">vector indexes documentation</a>."
      },
      {
        heading: "Uptime and Latency Monitoring",
        body: "Ensure you monitor production clusters constantly to verify search speeds. Live health logs are visible on our <a href=\"/status\">status page</a>."
      }
    ]
  },
  {
    slug: "rag-best-practices",
    title: "RAG Best Practices",
    description: "How to design robust retrieval systems for production-grade AI search apps.",
    date: "May 28, 2026",
    author: "Marcus Vance (AI Developer Advocate)",
    sections: [
      {
        heading: "Overview",
        body: "A strong RAG pipeline depends on clean ingestion, thoughtful chunking, reliable retrieval, reranking, and clear answer generation."
      },
      {
        heading: "The Importance of Ingestion",
        body: "The output of an LLM is only as good as the context it receives. Clean html and markdown raw content before embedding. Read more in <a href=\"/docs/document-ingestion\">document ingestion guide</a>."
      },
      {
        heading: "Optimizing Chunk Boundaries",
        body: "Fixed-character splitting can break paragraphs mid-sentence. We recommend token-based semantic chunking. Learn configurations under the <a href=\"/docs/chunking\">chunking parameters page</a>."
      }
    ]
  },
  {
    slug: "evaluating-rag-quality",
    title: "Evaluating RAG Quality",
    description: "Learn how to build rigorous evaluation frameworks for your RAG pipelines.",
    date: "June 10, 2026",
    author: "Elena Rostova (Lead Systems Engineer)",
    sections: [
      {
        heading: "Context vs Generation Quality",
        body: "Evaluating RAG is a multi-dimensional challenge. You must separately evaluate context retrieval and answer generation. Read the full guide under <a href=\"/docs/evaluation\">evaluation guides</a>."
      },
      {
        heading: "Retrieval Recall",
        body: "Measure if the right chunks are fetched from the vector index. You can optimize retrieval paths using our <a href=\"/docs/rag-pipelines\">RAG pipelines configurations</a>. If recall is low, apply a scoring model using our <a href=\"/docs/reranking\">reranking guide</a>."
      }
    ]
  },
  {
    slug: "designing-search-apis",
    title: "Designing Search APIs",
    description: "Key design patterns for developer-friendly vector and semantic search API endpoints.",
    date: "June 05, 2026",
    author: "Marcus Vance (AI Developer Advocate)",
    sections: [
      {
        heading: "Designing REST Interfaces",
        body: "Developer-friendly APIs require clear request schemas and clean error formatting. Review our REST interface specifications in the <a href=\"/api/search\">search API reference</a>."
      },
      {
        heading: "Combining Vector and Keyword Inputs",
        body: "Standard searches should support keyword matching to ensure terms are preserved. Learn how to configure this on the platform in our <a href=\"/docs/hybrid-search\">hybrid search documentation</a>."
      },
      {
        heading: "Applying JSON Filters",
        body: "Search queries must allow users to filter records. Setup query filtering by reviewing the <a href=\"/docs/metadata-filtering\">metadata filtering guide</a>."
      }
    ]
  },
  {
    slug: "metadata-filtering-patterns",
    title: "Metadata Filtering Patterns",
    description: "Deep dive into metadata filtering structures, indexing patterns, and performance.",
    date: "June 02, 2026",
    author: "Elena Rostova (Lead Systems Engineer)",
    sections: [
      {
        heading: "Pre-filtering vs Post-filtering",
        body: "Pre-filtering restricts candidate vectors before similarity scoring, guaranteeing exact matches but requiring indexed database columns. Learn filter formats inside the <a href=\"/docs/metadata-filtering\">metadata filtering documentation</a>."
      },
      {
        heading: "Query Index Mapping",
        body: "Always define indexes on high-cardinality metadata keys. You can execute filtered requests programmatically via the <a href=\"/api/search\">search API reference</a> or review database partitions in <a href=\"/docs/vector-indexes\">vector indexes guidelines</a>."
      }
    ]
  }
];
