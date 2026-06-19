// VectorStack Documentation Pages Data - Sitemap 5 Pages Branch
// Contains exactly 2 highly detailed, interconnected documents.

export const docsPages = [
  {
    slug: "getting-started",
    title: "Getting Started Guide",
    description: "Initialize your workspace, obtain API credentials, and run your first similarity search query.",
    sections: [
      {
        heading: "Platform Introduction",
        body: "VectorStack is a fully managed vector index platform designed to accelerate RAG and AI search operations. Before executing requests, you must configure your local environment by following the <a href=\"/docs/installation\">installation instructions</a>. This ensures that you have downloaded the appropriate client library modules for your environment."
      },
      {
        heading: "Workspace Setup",
        body: "To connect, instantiate a client using a valid API key. Keep this key secure in server-side configurations. Security boundaries are critical when deploying in production; check our isomorphic guidelines under <a href=\"/sdk/javascript\">JavaScript SDK Reference</a> to prevent master keys leakages."
      },
      {
        heading: "Creating a Vector Index",
        body: "Define the index structure and the distance similarity metrics (Cosine, L2, or Dot Product). Index parameters are permanent once deployed, so double-check dimensions compatibility.",
        code: "const { VectorStack } = require('vectorstack');\nconst client = new VectorStack({ apiKey: process.env.VECTORSTACK_API_KEY });\nawait client.indexes.create({\n  name: 'articles-kb',\n  dimension: 768,\n  metric: 'cosine'\n});"
      },
      {
        heading: "Searching Vector Chunks",
        body: "Submit natural language queries to retrieve the top matching document segments. The query is automatically embedded. Review the REST endpoint payload schemas inside the <a href=\"/api/search\">search API reference</a>.",
        code: "const results = await client.indexes.search({\n  indexId: 'articles-kb',\n  query: 'How to scale vector indices?'\n});"
      },
      {
        heading: "Verifying Connection Health",
        body: "Once your client is configured and your index is populated, you can check connection status or retrieve the active configuration. You can verify that your client is running correctly by querying the index information endpoint to return active document counts and index details.",
        code: "const stats = await client.indexes.getStats({\n  indexId: 'articles-kb'\n});\nconsole.log('Total documents indexed:', stats.documentCount);"
      },
      {
        heading: "Configuring Metadata Filters",
        body: "Narrow down search results by supplying a filters object. Metadata filters support comparison operations such as equality, inclusion, or numeric range boundaries to retrieve vectors associated with specific categories, users, or dates.",
        code: "const results = await client.indexes.search({\n  indexId: 'articles-kb',\n  query: 'How to scale vector indices?',\n  filters: {\n    category: 'tutorials',\n    visibility: 'public'\n  }\n});"
      },
      {
        heading: "Handling Errors and Retries",
        body: "When executing API requests, ensure you handle potential network anomalies and rate limits (HTTP 429) gracefully. The client SDK exposes standard error properties to inspect query timeouts and check organization quotas.",
        code: "try {\n  const results = await client.indexes.search({\n    indexId: 'articles-kb',\n    query: 'query string'\n  });\n} catch (err) {\n  if (err.code === 'RATE_LIMITED') {\n    console.warn('API limit reached. Retry after:', err.retryAfterMs);\n  }\n}"
      },
      {
        heading: "Cleaning Up Resources",
        body: "When an index is no longer needed, you can delete it to prevent incurring charges. Note that this action is permanent and all stored vector embeddings and metadata will be lost immediately. Make sure to export any critical data before deleting.",
        code: "await client.indexes.delete({\n  indexId: 'articles-kb'\n});\nconsole.log('Index deleted successfully');"
      }
    ],
    relatedLinks: [
      { text: "Installation Instructions", href: "/docs/installation" },
      { text: "Search API Reference", href: "/api/search" },
      { text: "JavaScript SDK Reference", href: "/sdk/javascript" }
    ],
    nextSteps: [
      { text: "Install client SDK", description: "Get the client packages downloaded inside your project workspace.", href: "/docs/installation" },
      { text: "Execute Search API", description: "Learn search payload structures and filtering options.", href: "/api/search" }
    ]
  },
  {
    slug: "installation",
    title: "Installation Guide",
    description: "Install client packages and verify local connections to the VectorStack gateways.",
    sections: [
      {
        heading: "JavaScript / Node Package Setup",
        body: "Install the JavaScript SDK library into your server repository. Once completed, refer back to the <a href=\"/docs/getting-started\">Getting Started guide</a> to initialize the connection class."
      },
      {
        heading: "Installation Command",
        // FLOWDOC TEST CHANGE:
        // Change "npm install vectorstack"
        // to "npm install @vectorstack/sdk"
        // to test installation package rename detection.
        body: "Execute the installer from your workspace directory:",
        code: "npm install vectorstack"
      },
      {
        heading: "Edge Runtime Compatibility",
        body: "The JavaScript client is fully isomorphic and functions within edge compute nodes (e.g. Vercel Edge, Cloudflare Workers). Review client parameters inside the <a href=\"/sdk/javascript\">JavaScript SDK reference</a>. Keep keys secure; do not initialize Admin clients in client-side code."
      },
      {
        heading: "Verifying SDK Instantiations",
        body: "Confirm connections by checking the client version, or trigger search requests using the <a href=\"/api/search\">search API reference</a>.",
        code: "const { VectorStack } = require('vectorstack');\nconst client = new VectorStack({ apiKey: 'test-api-key' });\nconsole.log('Active client version:', client.version);"
      }
    ],
    relatedLinks: [
      { text: "Getting Started Guide", href: "/docs/getting-started" },
      { text: "Search API Reference", href: "/api/search" },
      { text: "JavaScript SDK Reference", href: "/sdk/javascript" }
    ],
    nextSteps: [
      { text: "Review Getting Started", description: "Learn how to build index layouts and ingest files.", href: "/docs/getting-started" },
      { text: "JavaScript SDK Reference", description: "Browse class and configuration objects details.", href: "/sdk/javascript" }
    ]
  },
  {
    slug: "authentication",
    title: "Authentication",
    description: "Learn how to authenticate your API requests using organizations and API keys.",
    sections: [
      {
        heading: "Bearer Token Authentication",
        body: "All requests to the VectorStack API must include an Authorization header with your API key. The API uses standard Bearer token format. Incorrect keys will prompt typical error payloads.",
        code: "Authorization: Bearer VECTORSTACK_API_KEY"
      },
      {
        heading: "Token Expiry and Scope",
        body: "Access tokens expire after 7 days and should be stored securely on the server. Read about segregating keys in staging/production environment configs."
      },
      {
        heading: "Key Rotation",
        body: "For compliance and security best practices, we recommend rotating organization API keys every 90 days. Read about API Keys management to execute rotation without search service downtime."
      }
    ],
    relatedLinks: [
      { text: "API Keys", href: "/docs/api-keys" },
      { text: "Security", href: "/docs/security" },
      { text: "Getting Started Guide", href: "/docs/getting-started" }
    ],
    nextSteps: [
      { text: "API Keys Guide", description: "Generate and rotate API keys in the dashboard.", href: "/docs/api-keys" },
      { text: "First project key", description: "Obtain your project keys to query indexes.", href: "/docs/getting-started" }
    ]
  },
  {
    slug: "api-keys",
    title: "API Keys",
    description: "Create, rotate, and manage API keys inside your VectorStack organization.",
    sections: [
      {
        heading: "Creating Keys",
        body: "API keys are generated from the VectorStack dashboard under Settings > API Keys. You can restrict keys to target specific environments by aligning them under configured roles."
      },
      {
        heading: "Rotating Keys",
        body: "To rotate a key without downtime: 1. Generate a new key in the console. 2. Update your server variables. 3. Verify that requests succeed. 4. Revoke the old key from the dashboard."
      },
      {
        heading: "Revoking Keys",
        body: "If a key is compromised, revoke it immediately. Revocations are processed globally and take effect instantly. Any request made with a revoked key will fail with a 401 error."
      },
      {
        heading: "Environment Separation",
        body: "We recommend using separate API keys for your development, staging, and production environments. Never mix index configurations.",
        callout: {
          type: "tip",
          text: "Restrict production keys to specific server IPs if you require extra network security layers."
        }
      }
    ],
    relatedLinks: [
      { text: "Authentication", href: "/docs/authentication" },
      { text: "Getting Started Guide", href: "/docs/getting-started" }
    ],
    nextSteps: [
      { text: "Setup API Auth", description: "Authenticate queries using Bearer credentials.", href: "/docs/authentication" },
      { text: "Run local tests", description: "Verify environment configuration variables.", href: "/docs/getting-started" }
    ]
  },
  {
    slug: "embeddings",
    title: "Embeddings",
    description: "Understand the vector embedding models and dimensions used in VectorStack.",
    sections: [
      {
        heading: "Default Embedding Model",
        body: "The default embedding model is vectorstack-small with 768 dimensions. This model is optimized for documentation search and lightweight RAG applications. It provides excellent performance with extremely low latencies."
      },
      {
        heading: "Model Selection",
        body: "You can choose between multiple embedding models during index creation. Models include vectorstack-small and multilingual structures. Refer to our vector indexes details for index settings. Remember that you cannot modify dimensions once the database is deployed."
      },
      {
        heading: "Dimensions",
        body: "Vector dimensions represent the coordinate space size. Higher dimensions store richer semantic meaning but increase storage costs."
      },
      {
        heading: "Batch Embedding",
        body: "If you have large text structures, you can use the batch embedding endpoint. Refer to REST schemas inside our SDK references.",
        code: "const vectors = await client.embeddings.createBatch({\n  inputs: ['Hello world', 'Semantic search is powerful'],\n  model: 'vectorstack-small'\n});"
      }
    ],
    relatedLinks: [
      { text: "Vector Indexes", href: "/docs/vector-indexes" },
      { text: "Document Ingestion", href: "/docs/document-ingestion" },
      { text: "Chunking Configurations", href: "/docs/chunking" }
    ],
    nextSteps: [
      { text: "Create Indexes", description: "Set up vector indexes to store embeddings.", href: "/docs/vector-indexes" },
      { text: "Ingest Documents", description: "Upload text content to auto-embed.", href: "/docs/document-ingestion" }
    ]
  },
  {
    slug: "vector-indexes",
    title: "Vector Indexes",
    description: "Manage vector indexes, distances, metrics, and vector index lifecycles.",
    sections: [
      {
        heading: "Creating Indexes",
        body: "An index is the core partition where your documents and embeddings are stored. You can create an index using the SDK or directly in the control panel.",
        code: "await client.indexes.create({\n  name: 'support-index',\n  dimension: 768,\n  metric: 'cosine'\n});"
      },
      {
        heading: "Distance Metrics",
        body: "VectorStack supports Cosine similarity, Dot Product, and L2 distance metrics. Check how distance affects queries under hybrid search setups."
      },
      {
        heading: "Index Lifecycle",
        body: "Indexes transition through three states: 'creating', 'active', and 'updating'. Ingestion and search requests are only accepted when the index is in the 'active' state. Deleting an index will remove all document text and vector structures."
      }
    ],
    relatedLinks: [
      { text: "Embeddings", href: "/docs/embeddings" },
      { text: "Document Ingestion", href: "/docs/document-ingestion" }
    ],
    nextSteps: [
      { text: "Ingest Documents", description: "Start uploading markdown or PDF files.", href: "/docs/document-ingestion" },
      { text: "Search Configurations", description: "Learn how to query the indexes using semantic search.", href: "/docs/hybrid-search" }
    ]
  },
  {
    slug: "document-ingestion",
    title: "Document Ingestion",
    description: "Ingest and process PDF, Markdown, and text files into vector formats.",
    sections: [
      {
        heading: "Supported File Types",
        body: "The ingestion pipeline accepts PDF, Markdown, HTML, and plain text. Max file size is 25MB."
      },
      {
        heading: "Processing Pipeline",
        body: "When you upload a document, VectorStack runs a multi-stage process: 1. Extraction: file is parsed into plain text. 2. Cleaning: boilerplate tags are removed. 3. Chunking: text is split. Read details in chunking configurations. 4. Vectorization: chunks are embedded. 5. Storage: vectors are saved to the index."
      },
      {
        heading: "Failed Ingestions",
        body: "Ingestions can fail if a PDF is password-protected or file format is corrupt."
      }
    ],
    relatedLinks: [
      { text: "Chunking Guidelines", href: "/docs/chunking" },
      { text: "Embeddings Details", href: "/docs/embeddings" }
    ],
    nextSteps: [
      { text: "Configure Chunking", description: "Optimize token split boundaries and overlaps.", href: "/docs/chunking" }
    ]
  },
  {
    slug: "chunking",
    title: "Chunking",
    description: "Configure chunk sizes and token overlaps to optimize search retrieval.",
    sections: [
      {
        heading: "Default Chunking Strategy",
        body: "By default, VectorStack splits incoming files into chunks of 800 tokens with 100 tokens of overlap. This ensures semantic concepts are preserved across boundaries."
      },
      {
        heading: "Overlap Configuration",
        body: "The overlap parameter defines how much text from the end of one chunk is copied to the beginning of the next. Overlaps are critical for answering queries that span the boundary. Check how this affects retrieval in RAG pipelines."
      },
      {
        heading: "Custom Chunking",
        body: "You can specify custom chunking rules when uploading documents. For example, for code databases, you can chunk by function or class signature.",
        code: "await client.documents.upload({\n  indexId: 'legal-docs',\n  file: contractPdf,\n  chunkingConfig: {\n    strategy: 'paragraph',\n    maxTokens: 500,\n    overlap: 50\n  }\n});"
      }
    ],
    relatedLinks: [
      { text: "Document Ingestion", href: "/docs/document-ingestion" },
      { text: "RAG Pipelines", href: "/docs/rag-pipelines" },
      { text: "Metadata Filtering", href: "/docs/metadata-filtering" }
    ],
    nextSteps: [
      { text: "Build RAG Pipelines", description: "Pass retrieved chunks to large language models.", href: "/docs/rag-pipelines" },
      { text: "Configure Filters", description: "Restrict search parameters using document metadata.", href: "/docs/metadata-filtering" }
    ]
  },
  {
    slug: "rag-pipelines",
    title: "RAG Pipelines",
    description: "Build Retrieval-Augmented Generation (RAG) flows with LLMs and VectorStack.",
    sections: [
      {
        heading: "Pipeline Overview",
        body: "Retrieval-Augmented Generation (RAG) enhances LLM responses by fetching relevant factual context from a vector database before sending the query to the generator."
      },
      {
        heading: "Retrieval Step",
        body: "The retrieval stage searches the vector index for the top K matches. You can adjust K depending on the prompt limit of your target LLM. High K increases context depth but also costs more and can sometimes confuse the generator."
      },
      {
        heading: "Evaluation",
        body: "RAG performance should be measured regularly. Learn how to verify retrieve context quality and check for hallucinations."
      }
    ],
    relatedLinks: [
      { text: "Hybrid Search", href: "/docs/hybrid-search" },
      { text: "Reranking Engine", href: "/docs/reranking" },
      { text: "Metadata Filtering", href: "/docs/metadata-filtering" },
      { text: "JavaScript SDK", href: "/sdk/javascript" }
    ],
    nextSteps: [
      { text: "Hybrid Search", description: "Mix keyword relevance with vector distance scores.", href: "/docs/hybrid-search" },
      { text: "Reranking", description: "Use cross-encoders to refine retrieval output.", href: "/docs/reranking" }
    ]
  },
  {
    slug: "metadata-filtering",
    title: "Metadata Filtering",
    description: "Apply structured filters to narrow down semantic search queries.",
    sections: [
      {
        heading: "Filter Syntax",
        body: "VectorStack supports SQL-like metadata filtering. When ingesting documents, you can attach JSON metadata. During query time, you pass a filter object to restrict the search space before similarity matching occurs.",
        code: "const results = await client.indexes.search({\n  indexId: 'products',\n  query: 'leather jacket',\n  filter: {\n    category: { $eq: 'apparel' },\n    price: { $lt: 150 }\n  }\n});"
      },
      {
        heading: "Supported Operators",
        body: "Supported operators include equality ($eq, $ne), numeric comparison ($gt, $gte, $lt, $lte), and logical combinations ($and, $or). To learn how this combines with hybrid keyword indexes, read hybrid search guide."
      }
    ],
    relatedLinks: [
      { text: "Hybrid Search", href: "/docs/hybrid-search" },
      { text: "Vector Indexes", href: "/docs/vector-indexes" }
    ],
    nextSteps: [
      { text: "Hybrid Queries", description: "Mix keyword relevance with metadata filters.", href: "/docs/hybrid-search" }
    ]
  },
  {
    slug: "hybrid-search",
    title: "Hybrid Search",
    description: "Combine semantic vector search with keyword BM25 search for better recall.",
    sections: [
      {
        heading: "Overview",
        body: "Hybrid search merges semantic vector similarity with keyword-based BM25 ranking. It is useful when exact terms, product names, error codes, or API method names must be preserved."
      },
      {
        heading: "Weighting and Reciprocal Rank Fusion",
        body: "VectorStack uses Reciprocal Rank Fusion (RRF) to combine results. You can control the relative importance using a 'semanticWeight' slider (0.0 to 1.0). A weight of 0.8 is recommended for most developer docs platforms. See code usages inside JavaScript SDK reference."
      }
    ],
    relatedLinks: [
      { text: "Getting Started Guide", href: "/docs/getting-started" },
      { text: "Metadata Filtering", href: "/docs/metadata-filtering" },
      { text: "Reranking", href: "/docs/reranking" }
    ],
    nextSteps: [
      { text: "Reranking Setup", description: "Configure cross-encoders to re-evaluate search scores.", href: "/docs/reranking" }
    ]
  },
  {
    slug: "reranking",
    title: "Reranking",
    description: "Use a cross-encoder model to re-score and refine search results.",
    sections: [
      {
        heading: "When to Use Reranking",
        body: "Reranking should be used when maximum retrieval accuracy is required. A reranker (cross-encoder model) inspects the actual words of the query and the top documents together. Read about advanced RAG systems in RAG pipelines guide."
      },
      {
        heading: "Performance Impact",
        body: "Because rerankers process the full query and document text together, they add latency (typically 50-100ms)."
      },
      {
        heading: "Configuration",
        body: "To enable reranking, pass a rerank configuration object in your search request. Specify the rerank model and the number of documents to evaluate.",
        code: "const results = await client.indexes.search({\n  indexId: 'kb',\n  query: 'How do I cancel my subscription?',\n  rerank: {\n    model: 'vectorstack-rerank-large',\n    topK: 10\n  }\n});"
      }
    ],
    relatedLinks: [
      { text: "RAG Pipelines", href: "/docs/rag-pipelines" },
      { text: "Hybrid Search", href: "/docs/hybrid-search" }
    ],
    nextSteps: [
      { text: "RAG Pipelines", description: "Configure generation flows with fetched context.", href: "/docs/rag-pipelines" },
      { text: "Hybrid Search", description: "Combine vector distances with keyword weights.", href: "/docs/hybrid-search" }
    ]
  }
];
