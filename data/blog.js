// VectorStack Blog Posts Data

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
        body: "Scaling vector search requires careful index design, efficient metadata filtering, predictable embedding dimensions, and monitoring of query latency."
      },
      {
        heading: "Index Layout & Partitions",
        body: "When your database grows past 10 million vectors, monolithic indexes can cause query latencies to spike. We recommend partitioning data by organization, user tenant, or document age, using metadata routing techniques to query only the active shards."
      },
      {
        heading: "Selecting the Right Dimensions",
        body: "It is tempting to default to the largest embedding model available (e.g. 3072 dimensions) to capture fine semantic details. However, larger vectors require more RAM and increase distance calculation time. For most standard text search platforms, 768 or 1536 dimensions offer the optimal balance of recall, storage costs, and search speed."
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
        heading: "The Importance of Data Cleaning",
        body: "The output of an LLM is only as good as the context it receives. If you ingest raw, unformatted HTML or noisy PDF formats (containing headers, footers, page numbers), the noise will be embedded and retrieved. Prioritize stripping boilerplate and extracting clean textual representation before generating vectors."
      },
      {
        heading: "Optimizing Chunk Boundaries",
        body: "Fixed-character chunking (e.g. splitting every 500 characters) often breaks sentences in half, severing subject-verb dependencies. We recommend using token-based semantic chunking with overlap (e.g. 500-800 tokens with 10% overlap) or paragraph-based chunking to ensure complete thoughts are preserved."
      }
    ]
  }
];
