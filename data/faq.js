// VectorStack FAQ Data

export const faqData = [
  {
    id: "faq-1",
    question: "What is VectorStack and how does it work?",
    answer: "VectorStack is a fully managed vector retrieval platform. It allows developers to configure high-performance vector databases, upload documents (PDF, Markdown, HTML, or raw strings), generate embeddings automatically, and run hybrid semantic-keyword queries through simple REST APIs or SDKs."
  },
  {
    id: "faq-2",
    question: "What distance metrics do you support for vector similarity?",
    answer: "We support Cosine Similarity, Euclidean Distance (L2), and Dot Product formulas. The distance metric is selected during index creation to match the requirements of your chosen embedding model (e.g., 1536-dimension OpenAI text-embedding-3 or 384-dimension local models)."
  },
  {
    id: "faq-3",
    question: "Can I filter search results by metadata parameters?",
    answer: "Absolutely. When uploading documents or vectors, you can attach custom key-value metadata JSON payloads. During search, you can apply filter conditions (such as equality, arrays containment, or numeric ranges) to prune the search space prior to calculating vector similarity scores."
  },
  {
    id: "faq-4",
    question: "How does the hybrid search & reranking engine operate?",
    answer: "Our hybrid search engine performs dense semantic retrieval (vector match) alongside sparse keyword retrieval (BM25 text match). The results are merged using Reciprocal Rank Fusion (RRF) and can be reranked dynamically using machine learning cross-encoders for maximum precision."
  },
  {
    id: "faq-5",
    question: "What limits apply to document chunking and parsing?",
    answer: "For standard document uploads, VectorStack automatically parses content into configurable chunk sizes (defaulting to 512 tokens with a 10% overlap). You can customize chunking strategies, delimiters, and metadata propagation rules using SDK config templates."
  },
  {
    id: "faq-6",
    question: "Does VectorStack support webhook notifications?",
    answer: "Yes. Ingestion pipelines and indexing jobs run asynchronously. By registering your application endpoint URL, VectorStack will deliver HTTP POST webhooks detailing job completions, extraction failures, and vector updates in real-time."
  }
];
