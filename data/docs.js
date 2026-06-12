// VectorStack Documentation Pages Data
// Featuring inline HTML anchor links for crawler testing, related links, next steps, and test annotations.

export const docsPages = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Create your first VectorStack project and run your first semantic search.",
    sections: [
      {
        heading: "Overview",
        body: "VectorStack helps teams create AI search applications by combining document ingestion, embeddings, vector indexes, metadata filtering, and retrieval APIs. Before building, you must complete the <a href=\"/docs/installation\">installation guide</a> and configure <a href=\"/docs/authentication\">authentication credentials</a>."
      },
      {
        heading: "Creating a Project",
        body: "To get started, navigate to the VectorStack console and click 'Create Project'. The project acts as the secure sandbox for your indexes and credentials. Projects should correspond to different runtime <a href=\"/docs/environments\">environments</a> like staging and production."
      },
      {
        heading: "Installing the SDK",
        body: "Install the official client package into your project repository. Make sure you read the instructions for our <a href=\"/sdk/javascript\">JavaScript SDK</a> and <a href=\"/sdk/python\">Python SDK</a>.",
        code: "npm install vectorstack"
      },
      {
        heading: "Initializing the Client",
        body: "Instantiate the client using the API key generated in the organization console. Ensure your key has adequate <a href=\"/docs/teams-and-permissions\">teams and permissions</a> setups.",
        code: "const { VectorStack } = require('vectorstack');\nconst client = new VectorStack({ apiKey: process.env.VECTORSTACK_API_KEY });"
      },
      {
        heading: "Creating a Vector Index",
        body: "Define the index structure and the distance metric. For most semantic search use cases, Cosine similarity is recommended.",
        code: "await client.indexes.create({\n  name: 'articles',\n  dimension: 768,\n  metric: 'cosine'\n});"
      },
      {
        heading: "Uploading Documents",
        body: "Ingest content into the index by passing files. The pipeline automatically performs <a href=\"/docs/chunking\">token chunking</a> and embeds the text.",
        code: "await client.documents.upload({\n  indexId: 'articles',\n  id: 'doc-1',\n  content: 'VectorStack makes managed vector indexes simple to build and deploy.',\n  metadata: { category: 'docs' }\n});"
      },
      {
        heading: "Running Semantic Search",
        body: "Query the index using natural language. The query is embedded on-the-fly, and the closest matching document chunks are returned. You can also combine keyword search using our <a href=\"/docs/hybrid-search\">hybrid search</a> configurations.",
        code: "const results = await client.indexes.search({\n  indexId: 'articles',\n  query: 'How to build vector indexes?'\n});\nconsole.log(results);"
      }
    ],
    relatedLinks: [
      { text: "Installation Guide", href: "/docs/installation" },
      { text: "Authentication Protocols", href: "/docs/authentication" },
      { text: "API Keys Setup", href: "/docs/api-keys" },
      { text: "Vector Indexes", href: "/docs/vector-indexes" },
      { text: "API Overview", href: "/api/overview" }
    ],
    nextSteps: [
      { text: "Install the SDK", description: "Get the client packages installed in your codebase.", href: "/docs/installation" },
      { text: "Configure Auth", description: "Set up security credentials and Bearer API Keys.", href: "/docs/authentication" }
    ]
  },
  {
    slug: "installation",
    title: "Installation",
    description: "Install the JavaScript and Python SDKs to integrate VectorStack with your application.",
    sections: [
      {
        heading: "JavaScript / Node.js SDK",
        body: "Install the JavaScript SDK using npm or yarn. The SDK is compatible with standard backend setups, and also fits specialized <a href=\"/sdk/node\">Node SDK</a> environments and limited <a href=\"/sdk/edge-runtime\">Edge Runtime SDK</a> integrations.",
        // FLOWDOC TEST CHANGE:
        // Change "npm install vectorstack"
        // to "npm install @vectorstack/sdk"
        // to test installation package rename detection.
        code: "npm install vectorstack"
      },
      {
        heading: "Python SDK",
        body: "Install the Python SDK from PyPI using pip. Read the Python segment under <a href=\"/sdk/python\">Python SDK</a> guide for advanced data pipeline bindings.",
        code: "pip install vectorstack"
      },
      {
        heading: "React Native / Client Environments",
        body: "For security reasons, we strongly recommend against using the SDK inside client-side applications directly. Exposing your Master API Key to client bundles allows users to bypass your index permissions. Always verify your <a href=\"/docs/security\">security protocols</a> first.",
        callout: {
          type: "warning",
          text: "Never use VectorStack SDKs directly in the browser or mobile applications with master API keys."
        }
      },
      {
        heading: "Docker Local Sandbox",
        body: "For local testing and offline development, we distribute a pre-configured Docker image containing a localized VectorStack database server. This lets you debug search indexes and build your integration locally without hitting the cloud platform or accumulating usage counts. Refer to the <a href=\"/docs/environments\">environments guide</a> to see how to switch connection URLs.",
        code: "docker run -p 8080:8080 vectorstack/sandbox:latest"
      },
      {
        heading: "Verifying the Installation",
        body: "To confirm that the SDK client is properly installed and connected, run a test script that instantiates the client and retrieves the version. This helps verify that the environment variables are loaded correctly and that there are no package import conflicts. Read more about credentials rotation in our <a href=\"/docs/api-keys\">API keys guide</a>.",
        code: "const { VectorStack } = require('vectorstack');\nconst client = new VectorStack({ apiKey: process.env.VECTORSTACK_API_KEY });\nconsole.log('Client SDK version:', client.version);"
      },
      {
        heading: "Troubleshooting Ingestion Errors",
        body: "If you encounter errors during installation, verify that your local environment supports the required engines. Common issues include node version mismatches (ensure Node.js 18+ is active) or permission locks during npm install. Refer to our <a href=\"/docs/errors\">errors database guide</a> to inspect specific status codes, or check overall platform stability metrics on the <a href=\"/status\">status page</a>.",
        callout: {
          type: "warning",
          text: "If your npm installation fails due to permissions, avoid running with sudo. Use npm-profile configurations instead."
        }
      }
    ],
    relatedLinks: [
      { text: "JavaScript SDK", href: "/sdk/javascript" },
      { text: "Python SDK", href: "/sdk/python" },
      { text: "React SDK", href: "/sdk/react" },
      { text: "Security Standards", href: "/docs/security" }
    ],
    nextSteps: [
      { text: "API Authentication", description: "Learn how to authenticate requests with your API key.", href: "/docs/authentication" },
      { text: "Create Vector Indexes", description: "Set up vector databases to store embeddings.", href: "/docs/vector-indexes" }
    ]
  },
  {
    slug: "authentication",
    title: "Authentication",
    description: "Learn how to authenticate your API requests using organizations and API keys.",
    sections: [
      {
        heading: "Bearer Token Authentication",
        body: "All requests to the VectorStack API must include an Authorization header with your API key. The API uses standard Bearer token format. Incorrect keys will prompt typical <a href=\"/docs/errors\">error payloads</a>.",
        code: "Authorization: Bearer VECTORSTACK_API_KEY"
      },
      {
        heading: "Token Expiry and Scope",
        // FLOWDOC TEST CHANGE:
        // Change "Access tokens expire after 7 days"
        // to "Access tokens now expire after 15 minutes. Refresh tokens are required for long-running server processes."
        // to test high-priority authentication breaking change detection.
        body: "Access tokens expire after 7 days and should be stored securely on the server. Read about segregating keys in staging/production <a href=\"/docs/environments\">environments</a>."
      },
      {
        heading: "Key Rotation",
        body: "For compliance and security best practices, we recommend rotating organization API keys every 90 days. Read about <a href=\"/docs/api-keys\">API Keys</a> management to execute rotation without search service downtime."
      }
    ],
    relatedLinks: [
      { text: "API Keys", href: "/docs/api-keys" },
      { text: "Security", href: "/docs/security" },
      { text: "API Authentication", href: "/api/authentication" },
      { text: "Error Codes", href: "/docs/errors" },
      { text: "Rate Limits", href: "/docs/rate-limits" }
    ],
    nextSteps: [
      { text: "API Keys Guide", description: "Generate and rotate API keys in the dashboard.", href: "/docs/api-keys" },
      { text: "Error Handling", description: "Understand error structures and request logging.", href: "/docs/errors" }
    ]
  },
  {
    slug: "api-keys",
    title: "API Keys",
    description: "Create, rotate, and manage API keys inside your VectorStack organization.",
    sections: [
      {
        heading: "Creating Keys",
        body: "API keys are generated from the VectorStack dashboard under Settings > API Keys. You can restrict keys to target specific environments by aligning them under configured roles. Refer to <a href=\"/docs/teams-and-permissions\">teams and permissions</a>."
      },
      {
        heading: "Rotating Keys",
        body: "To rotate a key without downtime: 1. Generate a new key in the console. 2. Update your server variables. 3. Verify that requests succeed on <a href=\"/status\">status dashboard</a>. 4. Revoke the old key from the dashboard."
      },
      {
        heading: "Revoking Keys",
        body: "If a key is compromised, revoke it immediately. Revocations are processed globally and take effect instantly. Any request made with a revoked key will fail with a 401 error. Track key changes inside <a href=\"/api/audit-logs\">audit logs</a>."
      },
      {
        heading: "Environment Separation",
        body: "We recommend using separate API keys for your development, staging, and production environments. Never mix index configurations. Check out staging vs prod setups in <a href=\"/docs/environments\">environments guide</a>.",
        callout: {
          type: "tip",
          text: "Restrict production keys to specific server IPs if you require extra network security layers."
        }
      }
    ],
    relatedLinks: [
      { text: "Authentication", href: "/docs/authentication" },
      { text: "Environments", href: "/docs/environments" },
      { text: "Security", href: "/docs/security" },
      { text: "Audit Logs API", href: "/api/audit-logs" }
    ],
    nextSteps: [
      { text: "Review Security", description: "Ensure your keys and systems follow our security guide.", href: "/docs/security" },
      { text: "Configure Environments", description: "Separate credentials for dev, staging, and production.", href: "/docs/environments" }
    ]
  },
  {
    slug: "embeddings",
    title: "Embeddings",
    description: "Understand the vector embedding models and dimensions used in VectorStack.",
    sections: [
      {
        heading: "Default Embedding Model",
        // FLOWDOC TEST CHANGE:
        // Change "vectorstack-small with 768 dimensions"
        // to "vectorstack-medium with 1536 dimensions"
        // to test embedding configuration update detection.
        body: "The default embedding model is vectorstack-small with 768 dimensions. This model is optimized for documentation search and lightweight RAG applications. It provides excellent performance with extremely low latencies."
      },
      {
        heading: "Model Selection",
        body: "You can choose between multiple embedding models during index creation. Models include vectorstack-small and multilingual structures. Refer to our <a href=\"/docs/vector-indexes\">vector indexes</a> details for index settings. Remember that you cannot modify dimensions once the database is deployed."
      },
      {
        heading: "Dimensions",
        body: "Vector dimensions represent the coordinate space size. Higher dimensions store richer semantic meaning but increase storage costs. See our <a href=\"/pricing\">pricing plans</a> for storage limitations."
      },
      {
        heading: "Batch Embedding",
        body: "If you have large text structures, you can use the batch embedding endpoint. Refer to <a href=\"/api/embeddings\">embeddings API</a> for REST schemas.",
        code: "const vectors = await client.embeddings.createBatch({\n  inputs: ['Hello world', 'Semantic search is powerful'],\n  model: 'vectorstack-small'\n});"
      }
    ],
    relatedLinks: [
      { text: "Vector Indexes", href: "/docs/vector-indexes" },
      { text: "Document Ingestion", href: "/docs/document-ingestion" },
      { text: "Chunking Configurations", href: "/docs/chunking" },
      { text: "Embeddings API", href: "/api/embeddings" },
      { text: "Indexes API", href: "/api/indexes" }
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
        body: "An index is the core partition where your documents and embeddings are stored. You can create an index using the SDK or directly in the control panel. Review options in <a href=\"/api/indexes\">indexes API reference</a>.",
        code: "await client.indexes.create({\n  name: 'support-index',\n  dimension: 768,\n  metric: 'cosine'\n});"
      },
      {
        heading: "Distance Metrics",
        body: "VectorStack supports Cosine similarity, Dot Product, and L2 distance metrics. Check how distance affects queries under <a href=\"/docs/hybrid-search\">hybrid search</a> setups."
      },
      {
        heading: "Index Lifecycle",
        body: "Indexes transition through three states: 'creating', 'active', and 'updating'. Ingestion and search requests are only accepted when the index is in the 'active' state. Deleting an index will remove all document text and vector structures. See <a href=\"/docs/data-retention\">data retention policies</a>."
      }
    ],
    relatedLinks: [
      { text: "Embeddings", href: "/docs/embeddings" },
      { text: "Document Ingestion", href: "/docs/document-ingestion" },
      { text: "Indexes API", href: "/api/indexes" },
      { text: "Data Retention Guidelines", href: "/docs/data-retention" }
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
        body: "The ingestion pipeline accepts PDF, Markdown, HTML, and plain text. Max file size is 25MB. Refer to the REST endpoint details under <a href=\"/api/documents\">documents API</a>."
      },
      {
        heading: "Processing Pipeline",
        body: "When you upload a document, VectorStack runs a multi-stage process: 1. Extraction: file is parsed into plain text. 2. Cleaning: boilerplate tags are removed. 3. Chunking: text is split. Read details in <a href=\"/docs/chunking\">chunking configurations</a>. 4. Vectorization: chunks are embedded. 5. Storage: vectors are saved to the index."
      },
      {
        heading: "Failed Ingestions",
        body: "Ingestions can fail if a PDF is password-protected or file format is corrupt. You can configure <a href=\"/docs/webhooks\">webhook automation</a> to receive real-time alerts on failure events."
      }
    ],
    relatedLinks: [
      { text: "Chunking Guidelines", href: "/docs/chunking" },
      { text: "Embeddings Details", href: "/docs/embeddings" },
      { text: "Documents API", href: "/api/documents" },
      { text: "Webhooks Guide", href: "/docs/webhooks" }
    ],
    nextSteps: [
      { text: "Configure Chunking", description: "Optimize token split boundaries and overlaps.", href: "/docs/chunking" },
      { text: "Verify Webhooks", description: "Register webhook endpoints to listen for ingestion status.", href: "/docs/webhooks" }
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
        body: "The overlap parameter defines how much text from the end of one chunk is copied to the beginning of the next. Overlaps are critical for answering queries that span the boundary. Check how this affects retrieval in <a href=\"/docs/rag-pipelines\">RAG pipelines</a>."
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
      { text: "Metadata Filtering", href: "/docs/metadata-filtering" },
      { text: "Documents API", href: "/api/documents" }
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
        body: "Retrieval-Augmented Generation (RAG) enhances LLM responses by fetching relevant factual context from a vector database before sending the query to the generator. Setup dynamic monitoring under <a href=\"/docs/observability\">observability guidelines</a>."
      },
      {
        heading: "Retrieval Step",
        body: "The retrieval stage searches the vector index for the top K matches. You can adjust K depending on the prompt limit of your target LLM. High K increases context depth but also costs more and can sometimes confuse the generator. Track plan limits in our <a href=\"/pricing\">pricing guide</a>."
      },
      {
        heading: "Evaluation",
        body: "RAG performance should be measured regularly. Learn how to verify retrieve context quality and check for hallucinations in our <a href=\"/docs/evaluation\">evaluation documentation</a>."
      }
    ],
    relatedLinks: [
      { text: "Hybrid Search", href: "/docs/hybrid-search" },
      { text: "Reranking Engine", href: "/docs/reranking" },
      { text: "Metadata Filtering", href: "/docs/metadata-filtering" },
      { text: "Search API", href: "/api/search" },
      { text: "JavaScript SDK", href: "/sdk/javascript" }
    ],
    nextSteps: [
      { text: "RAG Evaluation", description: "Implement quality checks and validation layers.", href: "/docs/evaluation" },
      { text: "Add Reranking", description: "Use cross-encoders to improve retrieval accuracy.", href: "/docs/reranking" }
    ]
  },
  {
    slug: "metadata-filtering",
    title: "Metadata Filtering",
    description: "Apply structured filters to narrow down semantic search queries.",
    sections: [
      {
        heading: "Filter Syntax",
        body: "VectorStack supports SQL-like metadata filtering. When ingesting documents, you can attach JSON metadata. During query time, you pass a filter object to restrict the search space before similarity matching occurs. Read more in <a href=\"/api/search\">search API reference</a>.",
        code: "const results = await client.indexes.search({\n  indexId: 'products',\n  query: 'leather jacket',\n  filter: {\n    category: { $eq: 'apparel' },\n    price: { $lt: 150 }\n  }\n});"
      },
      {
        heading: "Supported Operators",
        body: "Supported operators include equality ($eq, $ne), numeric comparison ($gt, $gte, $lt, $lte), and logical combinations ($and, $or). To learn how this combines with hybrid keyword indexes, read <a href=\"/docs/hybrid-search\">hybrid search guide</a>."
      }
    ],
    relatedLinks: [
      { text: "Hybrid Search", href: "/docs/hybrid-search" },
      { text: "Search API", href: "/api/search" },
      { text: "Vector Indexes", href: "/docs/vector-indexes" },
      { text: "Metadata filtering patterns", href: "/blog/metadata-filtering-patterns" }
    ],
    nextSteps: [
      { text: "Hybrid Queries", description: "Mix keyword relevance with metadata filters.", href: "/docs/hybrid-search" },
      { text: "REST Search API", description: "Inspect search API payloads and endpoints.", href: "/api/search" }
    ]
  },
  {
    slug: "hybrid-search",
    title: "Hybrid Search",
    description: "Combine semantic vector search with keyword BM25 search for better recall.",
    sections: [
      {
        heading: "Overview",
        body: "Hybrid search merges semantic vector similarity with keyword-based BM25 ranking. It is useful when exact terms, product names, error codes, or API method names must be preserved. Review weights configurations in <a href=\"/api/search\">search API reference</a>."
      },
      {
        heading: "Weighting and Reciprocal Rank Fusion",
        body: "VectorStack uses Reciprocal Rank Fusion (RRF) to combine results. You can control the relative importance using a 'semanticWeight' slider (0.0 to 1.0). A weight of 0.8 is recommended for most developer docs platforms. See code usages inside <a href=\"/sdk/javascript\">JavaScript SDK</a>."
      }
    ],
    relatedLinks: [
      { text: "Semantic Search", href: "/docs/getting-started" },
      { text: "Metadata Filtering", href: "/docs/metadata-filtering" },
      { text: "Reranking", href: "/docs/reranking" },
      { text: "Search API", href: "/api/search" }
    ],
    nextSteps: [
      { text: "Reranking Setup", description: "Configure cross-encoders to re-evaluate search scores.", href: "/docs/reranking" },
      { text: "Search API Details", description: "Read technical parameter schemas for search queries.", href: "/api/search" }
    ]
  },
  {
    slug: "reranking",
    title: "Reranking",
    description: "Use a cross-encoder model to re-score and refine search results.",
    sections: [
      {
        heading: "When to Use Reranking",
        body: "Reranking should be used when maximum retrieval accuracy is required. A reranker (cross-encoder model) inspects the actual words of the query and the top documents together. Read about advanced RAG systems in <a href=\"/docs/rag-pipelines\">RAG pipelines guide</a>."
      },
      {
        heading: "Performance Impact",
        body: "Because rerankers process the full query and document text together, they add latency (typically 50-100ms). Track API latency metrics under <a href=\"/docs/observability\">observability dashboard guides</a>."
      },
      {
        heading: "Configuration",
        body: "To enable reranking, pass a rerank configuration object in your search request. Specify the rerank model and the number of documents to evaluate. Review parameters in <a href=\"/api/rerank\">rerank API reference</a>.",
        code: "const results = await client.indexes.search({\n  indexId: 'kb',\n  query: 'How do I cancel my subscription?',\n  rerank: {\n    model: 'vectorstack-rerank-large',\n    topK: 10\n  }\n});"
      }
    ],
    relatedLinks: [
      { text: "RAG Pipelines", href: "/docs/rag-pipelines" },
      { text: "Hybrid Search", href: "/docs/hybrid-search" },
      { text: "Rerank API", href: "/api/rerank" },
      { text: "Evaluating RAG Quality", href: "/blog/evaluating-rag-quality" }
    ],
    nextSteps: [
      { text: "Rerank REST API", description: "Learn about the /v1/rerank HTTP schema.", href: "/api/rerank" },
      { text: "RAG Evaluation", description: "Validate your retrieval outcomes with quality frameworks.", href: "/docs/evaluation" }
    ]
  },
  {
    slug: "webhooks",
    title: "Webhooks",
    description: "Configure webhooks to listen for ingestion and search events.",
    sections: [
      {
        heading: "Webhook Endpoint Setup",
        body: "To receive events, register an HTTPS endpoint in the VectorStack developer console. The endpoint must respond with a `200 OK` status. Setup your endpoint details via <a href=\"/api/webhooks\">webhooks API</a>."
      },
      {
        heading: "Event Types",
        body: "Supported webhook events include `document.ingested`, `document.failed`, `index.created`, and `search.completed`. The payload contains the resource tags. Read how to analyze events in <a href=\"/docs/observability\">observability guides</a>."
      },
      {
        heading: "Signature Verification",
        body: "Every webhook payload is signed with an HMAC-SHA256 signature in the header. Verify this signature using your secret signing key to guarantee authenticity. Read details under <a href=\"/docs/security\">security protocols</a>.",
        code: "const crypto = require('crypto');\nconst expectedSignature = crypto.createHmac('sha256', secret).update(payloadBody).digest('hex');"
      }
    ],
    relatedLinks: [
      { text: "Webhooks API", href: "/api/webhooks" },
      { text: "Security Guidelines", href: "/docs/security" },
      { text: "Error Codes", href: "/docs/errors" },
      { text: "Changelog", href: "/changelog" },
      { text: "System Status", href: "/status" }
    ],
    nextSteps: [
      { text: "Webhooks REST API", description: "Configure webhooks programmatically using REST calls.", href: "/api/webhooks" },
      { text: "Audit Logs Log", description: "Verify webhook registration events inside organizational audit files.", href: "/api/audit-logs" }
    ]
  },
  {
    slug: "errors",
    title: "Errors",
    description: "Understand and handle VectorStack API and SDK error codes.",
    sections: [
      {
        heading: "Error Format",
        body: "The API returns structured JSON error bodies when requests fail. Every response includes standard HTTP status, machine-readable code, and a unique `requestId` for debugging. Check out parameters under <a href=\"/api/errors\">API errors reference</a>.",
        code: "{\n  \"error\": {\n    \"code\": \"INVALID_API_KEY\",\n    \"message\": \"The provided API key is invalid or has been revoked.\",\n    \"requestId\": \"req_9a8b7c6d5e\"\n  }\n}"
      },
      {
        heading: "Common Errors",
        body: "Common error codes include: 400 `BAD_REQUEST`, 401 `INVALID_API_KEY`, 403 `INSUFFICIENT_PERMISSIONS`, 404 `INDEX_NOT_FOUND`, and 429 `RATE_LIMITED`. Understand permissions configurations in <a href=\"/docs/teams-and-permissions\">teams and permissions</a>."
      }
    ],
    relatedLinks: [
      { text: "API Errors", href: "/api/errors" },
      { text: "Authentication", href: "/docs/authentication" },
      { text: "Rate Limits", href: "/docs/rate-limits" },
      { text: "Observability Guides", href: "/docs/observability" }
    ],
    nextSteps: [
      { text: "API Errors List", description: "Browse all REST error definitions and codes.", href: "/api/errors" },
      { text: "Check Rate Limits", description: "Learn about transaction constraints and headers.", href: "/docs/rate-limits" }
    ]
  },
  {
    slug: "rate-limits",
    title: "Rate Limits",
    description: "Monitor and manage API rate limits for your organization.",
    sections: [
      {
        heading: "Free Limits",
        // FLOWDOC TEST CHANGE:
        // Change "Free projects may send 100 search requests per minute."
        // to "Free projects may send 30 search requests per minute."
        // to test rate limits modification detection.
        body: "Free projects may send 100 search requests per minute. Free tier indexes that remain inactive for 30 consecutive days will be archived. You can check details under <a href=\"/pricing\">pricing plans</a>."
      },
      {
        heading: "Pro Limits",
        body: "Pro projects may send 10,000 search requests per minute. Pro tier indexes are deployed on dedicated virtual nodes. Track transactional usage metrics inside <a href=\"/api/usage\">usage API reference</a>."
      },
      {
        heading: "Retry Strategy",
        body: "When rate limited, inspect the `Retry-After-Ms` header returned in the API response. We recommend implementing token bucket algorithms. Read SDK implementation details in <a href=\"/sdk/javascript\">JavaScript SDK</a>.",
        code: "const retryAfter = response.headers.get('retry-after-ms') || 1000;\nawait sleep(retryAfter);\nreturn client.indexes.search(...);"
      }
    ],
    relatedLinks: [
      { text: "Pricing", href: "/pricing" },
      { text: "Usage API", href: "/api/usage" },
      { text: "Billing Reference", href: "/api/billing" },
      { text: "JavaScript SDK", href: "/sdk/javascript" }
    ],
    nextSteps: [
      { text: "Usage Monitoring", description: "Track your real-time ingestion and search volumes.", href: "/api/usage" },
      { text: "Plan Pricing", description: "Compare available subscriptions and quota packages.", href: "/pricing" }
    ]
  },
  {
    slug: "security",
    title: "Security",
    description: "Learn about encryption, key management, and compliance on VectorStack.",
    sections: [
      {
        heading: "Data Encryption",
        // FLOWDOC TEST CHANGE:
        // Change "VectorStack encrypts data in transit and at rest."
        // to "VectorStack encrypts data in transit using TLS 1.3 and at rest using AES-256-GCM."
        // to test minor security changes detection.
        body: "VectorStack encrypts data in transit and at rest. We utilize enterprise-grade encryption standard keys to prevent unauthorized access. Learn about environment separation in <a href=\"/docs/environments\">environments guide</a>."
      },
      {
        heading: "Access Control & Teams",
        body: "Define roles (Owner, Administrator, Read-Only) for all team members in your organization console. Restrict production API access to backend servers. Read details in <a href=\"/docs/teams-and-permissions\">teams and permissions documentation</a>."
      }
    ],
    relatedLinks: [
      { text: "Authentication", href: "/docs/authentication" },
      { text: "API Keys", href: "/docs/api-keys" },
      { text: "Environments", href: "/docs/environments" },
      { text: "Teams and Permissions", href: "/docs/teams-and-permissions" }
    ],
    nextSteps: [
      { text: "Teams & Permissions", description: "Set up project security access controls.", href: "/docs/teams-and-permissions" },
      { text: "Configure Environments", description: "Separate staging, dev, and production keys.", href: "/docs/environments" }
    ]
  },
  {
    slug: "migration-v1-to-v2",
    title: "Migration v1 to v2",
    description: "Migrate your application integrations from the v1 to v2 API schema.",
    sections: [
      {
        heading: "Overview",
        body: "VectorStack v2 introduces streamlined endpoints, improved error formatting, and a more structured SDK namespace. We are deprecating the old v1 endpoints. Please upgrade your packages. Read about deprecations on <a href=\"/deprecated-old-api\">deprecated v0 page</a>."
      },
      {
        heading: "SDK Migration",
        body: "To upgrade the JS SDK, run `npm install vectorstack@latest` and replace the search calls. Read about the new <a href=\"/sdk/node\">Node SDK</a> and <a href=\"/sdk/edge-runtime\">Edge Runtime SDK</a> updates.",
        code: "// v1 SDK (Deprecated)\nconst results = await client.search({ query, indexId });\n\n// v2 SDK\nconst results = await client.indexes.search({ indexId, query });"
      }
    ],
    relatedLinks: [
      { text: "JavaScript SDK", href: "/sdk/javascript" },
      { text: "Node SDK", href: "/sdk/node" },
      { text: "Edge SDK", href: "/sdk/edge-runtime" },
      { text: "Deprecated v0 Page", href: "/deprecated-old-api" }
    ],
    nextSteps: [
      { text: "SDK Reference", description: "Read standard classes for JavaScript integrations.", href: "/sdk/javascript" },
      { text: "V0 Deprecations", description: "Inspect APIs scheduled for shutdown.", href: "/deprecated-old-api" }
    ]
  },
  {
    slug: "observability",
    title: "Observability",
    description: "Track request logs, latency tracking, ingestion tracing, and search analytics.",
    sections: [
      {
        heading: "Request Logs & Auditing",
        body: "VectorStack maintains detailed logs of every HTTP request. Request logging allows engineers to troubleshoot failed API queries. You can query logs programmatically using the <a href=\"/api/audit-logs\">audit logs API</a>."
      },
      {
        heading: "Latency Tracking",
        body: "Uptime and search latency are visible in real-time. For standard configurations, query responses take less than 15ms. To see current health metrics, check our <a href=\"/status\">status dashboard</a>."
      },
      {
        heading: "Pipeline Tracing",
        body: "For multi-stage configurations, tracing tracks steps from chunk extraction to final vector database uploads. Learn about extraction structures in the <a href=\"/docs/rag-pipelines\">RAG pipelines guide</a> and check out how to inspect <a href=\"/docs/errors\">errors</a>."
      }
    ],
    relatedLinks: [
      { text: "Audit Logs API", href: "/api/audit-logs" },
      { text: "RAG Pipelines", href: "/docs/rag-pipelines" },
      { text: "System Status", href: "/status" },
      { text: "Error Codes Guide", href: "/docs/errors" }
    ],
    nextSteps: [
      { text: "API Audit Logs", description: "Query system changes and key access records.", href: "/api/audit-logs" },
      { text: "Check Latency", description: "Inspect current API performance averages.", href: "/status" }
    ]
  },
  {
    slug: "evaluation",
    title: "Evaluation",
    description: "Evaluate RAG responses, context recall, and similarity score distributions.",
    sections: [
      {
        heading: "Evaluating RAG Quality",
        body: "To guarantee reliability, we support testing context retrieval against target queries. Check out our technical blog post about <a href=\"/blog/evaluating-rag-quality\">evaluating RAG quality</a>."
      },
      {
        heading: "Hallucination Checks",
        body: "Evaluate if the generator's response is grounded in the retrieved chunks. By filtering out non-grounded details, you can configure thresholds to block incorrect answers. Read more about chunk retrieval in the <a href=\"/docs/rag-pipelines\">RAG pipelines guide</a>."
      },
      {
        heading: "Retrieval Recall Metrics",
        body: "Recall checks measure whether target records are present in similarity sets. If recall drops, implement a secondary scoring layer using our <a href=\"/docs/reranking\">reranking guide</a>. Integrate search queries via the <a href=\"/api/search\">search API reference</a>."
      }
    ],
    relatedLinks: [
      { text: "RAG Pipelines", href: "/docs/rag-pipelines" },
      { text: "Reranking", href: "/docs/reranking" },
      { text: "Search API Reference", href: "/api/search" },
      { text: "Evaluating RAG Quality Blog", href: "/blog/evaluating-rag-quality" }
    ],
    nextSteps: [
      { text: "RAG Quality Blog", description: "Read best practices on evaluation metrics.", href: "/blog/evaluating-rag-quality" },
      { text: "Setup Reranking", description: "Configure cross-encoders for maximum precision.", href: "/docs/reranking" }
    ]
  },
  {
    slug: "deployments",
    title: "Deployments",
    description: "Deploy VectorStack integrations in staging and production structures safely.",
    sections: [
      {
        heading: "Production Checklist",
        body: "Before launching, guarantee that you separate staging and production databases. You can achieve this by configuring keys for separate <a href=\"/docs/environments\">environments</a>."
      },
      {
        heading: "API Key Management",
        body: "Do not reuse staging keys. Setup restricted production tokens in the <a href=\"/docs/api-keys\">API keys documentation</a>."
      },
      {
        heading: "Quota & Usage Limits",
        body: "Production applications should monitor transaction sizes to avoid hitting rate constraints. Check metrics details under <a href=\"/api/usage\">usage API guide</a> and verify cluster health on the <a href=\"/status\">status page</a>."
      }
    ],
    relatedLinks: [
      { text: "Environments", href: "/docs/environments" },
      { text: "API Keys", href: "/docs/api-keys" },
      { text: "Usage API", href: "/api/usage" },
      { text: "System Status", href: "/status" }
    ],
    nextSteps: [
      { text: "Configure Environments", description: "Set up staging and production database partitions.", href: "/docs/environments" },
      { text: "Monitor Usage Metrics", description: "Verify API quotas and active request logs.", href: "/api/usage" }
    ]
  },
  {
    slug: "environments",
    title: "Environments",
    description: "Configure staging, development, and production project environments.",
    sections: [
      {
        heading: "Multi-Environment Layout",
        body: "VectorStack supports environment partitions. You can separate staging logs from production vectors. Access tokens are scoped to these environments. Review <a href=\"/docs/api-keys\">API keys rotation</a>."
      },
      {
        heading: "Staging vs Production",
        body: "We recommend deploying staging indexes on shared capacity and production indexes on dedicated virtual nodes. Learn about security boundaries inside <a href=\"/docs/security\">security standards</a> and deployments details in <a href=\"/docs/deployments\">deployments guide</a>. Manage environments via <a href=\"/api/projects\">projects API reference</a>."
      }
    ],
    relatedLinks: [
      { text: "API Keys", href: "/docs/api-keys" },
      { text: "Security", href: "/docs/security" },
      { text: "Deployments", href: "/docs/deployments" },
      { text: "Projects API", href: "/api/projects" }
    ],
    nextSteps: [
      { text: "Manage Projects API", description: "Create environments programmatically using projects API.", href: "/api/projects" },
      { text: "Setup API Keys", description: "Configure environment scoped API keys.", href: "/docs/api-keys" }
    ]
  },
  {
    slug: "teams-and-permissions",
    title: "Teams and Permissions",
    description: "Manage organization roles, team member access, and resource permissions.",
    sections: [
      {
        heading: "User Roles & Policies",
        body: "Restrict dashboard and project actions using Role-Based Access Control (RBAC). Roles include Owner, Admin, and Read-Only. Monitor access details in the <a href=\"/api/audit-logs\">audit logs API</a>."
      },
      {
        heading: "Security Scoping",
        body: "Ensure that read-only API keys are deployed for client-side search routing, while write keys are kept private on backend servers. Review details in <a href=\"/docs/security\">security specifications</a> and <a href=\"/docs/api-keys\">API keys setups</a>. Segregate organizational levels inside <a href=\"/docs/environments\">environments</a>."
      }
    ],
    relatedLinks: [
      { text: "Audit Logs API", href: "/api/audit-logs" },
      { text: "Security", href: "/docs/security" },
      { text: "API Keys", href: "/docs/api-keys" },
      { text: "Environments", href: "/docs/environments" }
    ],
    nextSteps: [
      { text: "Review Audit Logs", description: "Audit key actions and organization modifications.", href: "/api/audit-logs" },
      { text: "Configure Security", description: "Set up security tokens and firewall rules.", href: "/docs/security" }
    ]
  },
  {
    slug: "data-retention",
    title: "Data Retention",
    description: "Understand our database storage, log retention, and vector archives policies.",
    sections: [
      {
        heading: "Retention Schedules",
        body: "Data retention defines the duration records are kept: document text resides until deletion, request logs are archived for 30 days, and deleted indexes are purged instantly. Learn details under <a href=\"/docs/security\">security guidelines</a>."
      },
      {
        heading: "Retention & Backup Plans",
        body: "Verify that backup rules coincide with compliance frameworks. View <a href=\"/docs/backups\">backups configurations</a>. Manage raw items using the <a href=\"/api/documents\">documents API reference</a>. Review tier storage capacities under <a href=\"/pricing\">pricing plans</a>."
      }
    ],
    relatedLinks: [
      { text: "Security Standards", href: "/docs/security" },
      { text: "Backup Configurations", href: "/docs/backups" },
      { text: "Documents API Reference", href: "/api/documents" },
      { text: "Pricing", href: "/pricing" }
    ],
    nextSteps: [
      { text: "Ingest Docs API", description: "Manage document lifespan using ingestion calls.", href: "/api/documents" },
      { text: "Configure Backups", description: "Define snapshot intervals for vector databases.", href: "/docs/backups" }
    ]
  },
  {
    slug: "backups",
    title: "Backups",
    description: "Manage database snapshots, indices restore processes, and project backups.",
    sections: [
      {
        heading: "Index Snapshot Policies",
        body: "VectorStack takes hourly backup snapshots of all production indexes. Snapshots protect index structures from corrupt files. Read data lifecycle rules in <a href=\"/docs/data-retention\">data retention guidelines</a>."
      },
      {
        heading: "Disaster Recovery",
        body: "Restore snapshots directly to active environments to resume operations. Read details in our <a href=\"/docs/security\">security manual</a>. Manage index structures via the <a href=\"/api/indexes\">indexes API reference</a> and check server uptime status on the <a href=\"/status\">status dashboard</a>."
      }
    ],
    relatedLinks: [
      { text: "Data Retention", href: "/docs/data-retention" },
      { text: "Security Guidelines", href: "/docs/security" },
      { text: "Indexes API Reference", href: "/api/indexes" },
      { text: "System Status", href: "/status" }
    ],
    nextSteps: [
      { text: "Indexes REST API", description: "Verify program index deletion and recovery settings.", href: "/api/indexes" },
      { text: "Check System Uptime", description: "Review overall platform stability metrics.", href: "/status" }
    ]
  },
  {
    slug: "custom-domains",
    title: "Custom Domains",
    description: "Map your own domains to hosted search portals and docs pages.",
    sections: [
      {
        heading: "Domain Configuration",
        body: "Map custom subdomains (e.g. `docs.mycompany.com`) to hosted search interfaces. All custom domains are secured with automated SSL renewals. Read details under <a href=\"/docs/security\">security parameters</a>."
      },
      {
        heading: "Deploying Domain Maps",
        body: "Configure CNAME records in your DNS manager to target our proxy gateways. Read deployment guidelines in <a href=\"/docs/deployments\">deployments guide</a>. Upgrading to a custom domain requires a Pro plan. Check features on our <a href=\"/pricing\">pricing page</a>."
      }
    ],
    relatedLinks: [
      { text: "Security Guidelines", href: "/docs/security" },
      { text: "Deployments", href: "/docs/deployments" },
      { text: "Pricing", href: "/pricing" }
    ],
    nextSteps: [
      { text: "Staged Deployments", description: "Map domains to custom staging environment layouts.", href: "/docs/deployments" },
      { text: "Upgrade Plans", description: "Upgrade your account to activate vanity subdomains.", href: "/pricing" }
    ]
  }
];
