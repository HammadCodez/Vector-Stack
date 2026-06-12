// VectorStack Documentation Pages Data

export const docsPages = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Create your first VectorStack project and run your first semantic search.",
    sections: [
      {
        heading: "Overview",
        body: "VectorStack helps teams create AI search applications by combining document ingestion, embeddings, vector indexes, metadata filtering, and retrieval APIs. By managing these complex components inside a unified cloud platform, developers can focus on application-level workflows rather than index operations and scaling clusters."
      },
      {
        heading: "Creating a Project",
        body: "To get started, navigate to the VectorStack console and click 'Create Project'. Give your project a name (e.g., 'E-Commerce Search') and select a deployment region close to your primary app server. A default environment will be initialized for you."
      },
      {
        heading: "Installing the SDK",
        body: "Install the SDK client inside your project directory. Both JavaScript/TypeScript and Python are officially supported.",
        code: "npm install vectorstack"
      },
      {
        heading: "Initializing the Client",
        body: "Instantiate the client using the API key generated in the organization console. Remember to keep the API key secret and never expose it in client-side code.",
        code: "const { VectorStack } = require('vectorstack');\nconst client = new VectorStack({ apiKey: process.env.VECTORSTACK_API_KEY });"
      },
      {
        heading: "Creating a Vector Index",
        body: "Define the index structure and the distance metric. For most semantic search use cases, Cosine similarity is recommended.",
        code: "await client.indexes.create({\n  name: 'articles',\n  dimension: 768,\n  metric: 'cosine'\n});"
      },
      {
        heading: "Uploading Documents",
        body: "Ingest content into the index by passing markdown, text, or HTML documents. The ingestion pipeline automatically chunks and embeds the text.",
        code: "await client.documents.upload({\n  indexId: 'articles',\n  id: 'doc-1',\n  content: 'VectorStack makes managed vector indexes simple to build and deploy.',\n  metadata: { category: 'docs' }\n});"
      },
      {
        heading: "Running Semantic Search",
        body: "Query the index using natural language. The query is embedded on-the-fly, and the closest matching document chunks are returned.",
        code: "const results = await client.indexes.search({\n  indexId: 'articles',\n  query: 'How to build vector indexes?'\n});\nconsole.log(results);"
      }
    ]
  },
  {
    slug: "installation",
    title: "Installation",
    description: "Install the JavaScript and Python SDKs to integrate VectorStack with your application.",
    sections: [
      {
        heading: "JavaScript / Node.js SDK",
        body: "Install the JavaScript SDK using npm or yarn. The SDK is compatible with Node.js 18+ and edge runtimes (e.g., Next.js Middleware, Cloudflare Workers).",
        // TEST CHANGE IDEA:
        // Change "npm install vectorstack"
        // to "npm install @vectorstack/sdk"
        // to test installation package rename detection.
        code: "npm install vectorstack"
      },
      {
        heading: "Python SDK",
        body: "Install the Python SDK from PyPI using pip. It is compatible with Python 3.8+ and includes built-in typing support.",
        code: "pip install vectorstack"
      },
      {
        heading: "React Native / Client Environments",
        body: "For security reasons, we strongly recommend against installing or using the SDK inside client-side or mobile applications directly. Exposing your Master API Key to client bundles allows users to read, update, or delete your entire vector index. Always route search requests through a secure backend proxy or serverless function.",
        callout: {
          type: "warning",
          text: "Never use VectorStack SDKs directly in the browser or mobile applications with master API keys."
        }
      }
    ]
  },
  {
    slug: "authentication",
    title: "Authentication",
    description: "Learn how to authenticate your API requests using organizations and API keys.",
    sections: [
      {
        heading: "Bearer Token Authentication",
        body: "All requests to the VectorStack API must include an Authorization header with your API key. The API uses standard Bearer token format for authentication. Requests sent without a valid token, or with an expired token, will fail with a 401 Unauthorized status.",
        code: "Authorization: Bearer VECTORSTACK_API_KEY"
      },
      {
        heading: "Token Expiry and Scope",
        // TEST CHANGE IDEA:
        // Change "Access tokens expire after 7 days"
        // to "Access tokens now expire after 15 minutes. Refresh tokens are required for long-running server processes."
        // to test high-priority authentication breaking change detection.
        body: "Access tokens expire after 7 days and should be stored securely on the server. Do not commit API keys to version control systems. We recommend using environment variables or secret managers to load them at runtime."
      },
      {
        heading: "Key Rotation",
        body: "For compliance and security best practices, we recommend rotating organization API keys every 90 days. You can create multiple keys in the dashboard to enable zero-downtime key rotation: first deploy the new key, then revoke the old one."
      }
    ]
  },
  {
    slug: "api-keys",
    title: "API Keys",
    description: "Create, rotate, and manage API keys inside your VectorStack organization.",
    sections: [
      {
        heading: "Creating Keys",
        body: "API keys are generated from the VectorStack dashboard under Settings > API Keys. You can create two types of keys: Read-Only keys (restricted to search queries) and Admin keys (full access to index lifecycle, document uploads, and configuration)."
      },
      {
        heading: "Rotating Keys",
        body: "To rotate a key without downtime, follow these steps: 1. Generate a new key in the console. 2. Update your server environment configuration to use the new key. 3. Deploy/restart your services. 4. Verify that requests are succeeding. 5. Revoke the old key from the dashboard."
      },
      {
        heading: "Revoking Keys",
        body: "If a key is compromised, revoke it immediately from the console. Revocations are processed globally and take effect in under 2 seconds. Any API requests made with a revoked key will return a 401 INVALID_API_KEY error."
      },
      {
        heading: "Environment Separation",
        body: "We recommend using separate API keys for your development, staging, and production environments. Never mix index data or configurations between staging and production workloads.",
        callout: {
          type: "tip",
          text: "Restrict production keys to specific server IPs if you require extra network security layers."
        }
      }
    ]
  },
  {
    slug: "embeddings",
    title: "Embeddings",
    description: "Understand the vector embedding models and dimensions used in VectorStack.",
    sections: [
      {
        heading: "Default Embedding Model",
        // TEST CHANGE IDEA:
        // Change "vectorstack-small with 768 dimensions"
        // to "vectorstack-medium with 1536 dimensions"
        // to test embedding configuration update detection.
        body: "The default embedding model is vectorstack-small with 768 dimensions. This model is optimized for documentation search, support knowledge bases, and lightweight RAG applications. It provides excellent performance with extremely low inference latencies."
      },
      {
        heading: "Model Selection",
        body: "You can choose between multiple embedding models during index creation. Models include vectorstack-small (768d, general English), vectorstack-multilingual (1024d, 100+ languages), and third-party models from OpenAI, Cohere, or Voyage. Note that once an index is created, its model and dimension cannot be changed."
      },
      {
        heading: "Dimensions",
        body: "Vector dimensions represent the coordinate space size. Higher dimensions (e.g. 1536) store richer semantic meaning but increase storage costs and slightly impact retrieval query speeds. Match your model dimension exactly to your index configuration."
      },
      {
        heading: "Batch Embedding",
        body: "If you have large text structures, you can use the batch embedding endpoint to embed up to 128 items in a single API call. This significantly reduces HTTP roundtrip overhead.",
        code: "const vectors = await client.embeddings.createBatch({\n  inputs: ['Hello world', 'Semantic search is powerful'],\n  model: 'vectorstack-small'\n});"
      },
      {
        heading: "Compatibility with Indexes",
        body: "An index will reject vector insertions that do not match its defined dimensions. For example, trying to insert a 1536-dimensional vector into a 768-dimensional index returns a 400 BAD_REQUEST error."
      }
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
        body: "VectorStack supports Cosine similarity, Dot Product, and L2 (Euclidean) distance metrics. Use Cosine similarity for normalized text embeddings, Dot Product if your embeddings are pre-normalized and speed is critical, and L2 for image embeddings or non-normalized vector values."
      },
      {
        heading: "Index Lifecycle",
        body: "Indexes transition through three states: 'creating', 'active', and 'updating'. Ingestion and search requests are only accepted when the index is in the 'active' state. Deleting an index will remove all document text and vector structures permanently."
      },
      {
        heading: "Index Compatibility",
        body: "Make sure that all documents ingested into a specific index share the same language structure. Mixing English and Chinese documents in the same index may lead to lower recall scores if the embedding model is not specifically optimized for multilingual content."
      }
    ]
  },
  {
    slug: "document-ingestion",
    title: "Document Ingestion",
    description: "Ingest and process PDF, Markdown, and text files into vector formats.",
    sections: [
      {
        heading: "Supported File Types",
        body: "The ingestion pipeline accepts PDF (`.pdf`), Markdown (`.md`), HTML (`.html`), and plain text (`.txt`) formats. Max file size is 25MB. Text and markdown are parsed directly, while PDFs are processed using our OCR engines."
      },
      {
        heading: "Processing Pipeline",
        body: "When you upload a document, VectorStack runs a multi-stage process: 1. Extraction: file is parsed into plain text. 2. Cleaning: boilerplate HTML, markdown tags, and extra spaces are removed. 3. Chunking: text is divided into manageable segments. 4. Vectorization: chunks are sent to the embedding model. 5. Storage: vectors and raw text chunks are saved to the index."
      },
      {
        heading: "Failed Ingestions",
        body: "Ingestions can fail if a PDF is password-protected, the file format is corrupt, or rate limits are reached. You can inspect failures in the console logs or register webhooks to receive real-time notifications for failed document events."
      },
      {
        heading: "Retrying Ingestions",
        body: "If a document upload fails due to network issues, the client SDK will automatically retry the request up to 3 times with exponential backoff. For permanent file parse errors, manual file cleaning is required before re-upload."
      }
    ]
  },
  {
    slug: "chunking",
    title: "Chunking",
    description: "Configure chunk sizes and token overlaps to optimize search retrieval.",
    sections: [
      {
        heading: "Default Chunking Strategy",
        body: "By default, VectorStack splits incoming files into chunks of 800 tokens with 100 tokens of overlap. This ensures that semantic concepts are preserved across boundaries and that context is not lost at the edges of the chunk."
      },
      {
        heading: "Overlap Configuration",
        body: "The overlap parameter (measured in tokens) defines how much text from the end of one chunk is copied to the beginning of the next. Overlaps are critical for answering queries that span the boundary of a single segment."
      },
      {
        heading: "Custom Chunking",
        body: "You can specify custom chunking rules when uploading documents. For example, for code databases, you can chunk by function or class signature. For legal contracts, chunking by paragraph is often best.",
        code: "await client.documents.upload({\n  indexId: 'legal-docs',\n  file: contractPdf,\n  chunkingConfig: {\n    strategy: 'paragraph',\n    maxTokens: 500,\n    overlap: 50\n  }\n});"
      },
      {
        heading: "Best Practices",
        body: "A chunk size that is too small (e.g. 100 tokens) will fail to capture complex context, leading to poor answers from the LLM. Conversely, a chunk size that is too large (e.g. 2000 tokens) will dilute search relevance and consume excessive LLM context tokens. Find the balanced sweet spot for your specific dataset.",
        callout: {
          type: "tip",
          text: "Review the average length of your documents before customizing chunk sizes."
        }
      }
    ]
  },
  {
    slug: "rag-pipelines",
    title: "RAG Pipelines",
    description: "Build Retrieval-Augmented Generation (RAG) flows with LLMs and VectorStack.",
    sections: [
      {
        heading: "Pipeline Overview",
        body: "Retrieval-Augmented Generation (RAG) enhances LLM responses by fetching relevant factual context from a vector database before sending the query to the generator. VectorStack simplifies this by managing the retrieval, scoring, and text generation steps in a single pipeline."
      },
      {
        heading: "Retrieval Step",
        body: "The retrieval stage searches the vector index for the top K most relevant matches. By default, K is set to 5. You can adjust K depending on the prompt limit of your target LLM. High K increases context depth but also costs more and can sometimes confuse the generator if irrelevant chunks are retrieved."
      },
      {
        heading: "Generation Step",
        body: "The retrieved chunks are formatted into a clean context prompt and sent to your generation LLM (e.g., GPT-4 or Claude). You can customize the prompt template to instruct the model on tone, behavior, and formatting style."
      },
      {
        heading: "Evaluation",
        body: "RAG performance should be measured regularly. Track metrics like faithfulness (is the answer based on the context?), answer relevance (does it answer the query?), and retrieval recall (did we retrieve the right chunks?)."
      }
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
        body: "Supported operators include equality ($eq, $ne), numeric comparison ($gt, $gte, $lt, $lte), array membership ($in, $nin), and logical combinations ($and, $or, $not)."
      },
      {
        heading: "Nested Metadata",
        body: "You can index and filter nested JSON fields up to 3 levels deep. For example, `{ attributes: { color: 'blue' } }` can be queried using `filter: { 'attributes.color': { $eq: 'blue' } }`."
      },
      {
        heading: "Common Examples",
        body: "Filters are commonly used to restrict searches by organizational tenants, user permissions, categories, language tags, or document publication dates.",
        callout: {
          type: "tip",
          text: "Always define indexes on high-cardinality metadata keys in the dashboard for fast query performance."
        }
      }
    ]
  },
  {
    slug: "hybrid-search",
    title: "Hybrid Search",
    description: "Combine semantic vector search with keyword BM25 search for better recall.",
    sections: [
      {
        heading: "Semantic Search",
        body: "Semantic search uses vector similarity to find documents with matching concepts, even if they share no exact keywords. It is excellent for synonym matches (e.g., 'automobile' finding results for 'car') but can perform poorly on product SKUs, code snippets, or rare abbreviations."
      },
      {
        heading: "Keyword Search",
        body: "Keyword search uses standard TF-IDF or BM25 ranking to match exact characters and words. It excels at matching technical terms, serial numbers, error messages, and names."
      },
      {
        heading: "Weighting and Reciprocal Rank Fusion",
        body: "Hybrid search merges these two search paths. VectorStack uses Reciprocal Rank Fusion (RRF) to combine results. You can control the relative importance using a 'semanticWeight' slider (0.0 to 1.0). A weight of 0.8 is recommended for most business documentation use cases."
      },
      {
        heading: "Use Cases",
        body: "Use hybrid search if your users frequently query technical documentation containing API method names (like `client.search()`), code constants, numerical identifiers, or exact names of people/organizations."
      }
    ]
  },
  {
    slug: "reranking",
    title: "Reranking",
    description: "Use a cross-encoder model to re-score and refine search results.",
    sections: [
      {
        heading: "When to Use Reranking",
        body: "Reranking should be used when maximum retrieval accuracy is required. Vector similarity search is fast but can miss complex query-document dependencies. A reranker (cross-encoder model) inspects the actual words of the query and the top documents together to calculate a highly accurate relevance score."
      },
      {
        heading: "Performance Impact",
        body: "Because rerankers process the full query and document text together, they add latency. Reranking the top 25 documents typically adds 50-100ms to the request. We recommend using rerankers for background processes or Q&A search engines where accuracy overrides sub-50ms latency goals."
      },
      {
        heading: "Cost Impact",
        body: "Rerank requests are billed separately per document scored. To manage costs, only rerank the top 20 or 30 documents retrieved from the vector index, rather than large sets of hundreds of records."
      },
      {
        heading: "Configuration",
        body: "To enable reranking, pass a rerank configuration object in your search request. Specify the rerank model and the number of documents to evaluate.",
        code: "const results = await client.indexes.search({\n  indexId: 'kb',\n  query: 'How do I cancel my subscription?',\n  rerank: {\n    model: 'vectorstack-rerank-large',\n    topK: 10\n  }\n});"
      }
    ]
  },
  {
    slug: "webhooks",
    title: "Webhooks",
    description: "Configure webhooks to listen for ingestion and search events.",
    sections: [
      {
        heading: "Webhook Endpoint Setup",
        body: "To receive events, register an HTTPS endpoint in the VectorStack developer console. The endpoint must respond with a `200 OK` status within 3 seconds of receiving a payload, or the event will be queued for retry."
      },
      {
        heading: "Event Types",
        body: "Supported webhook events include `document.ingested` (when document parsing and embedding succeeds), `document.failed` (when parsing fails), `index.created`, and `search.completed`. The payload contains the event type, timestamp, and relevant resources."
      },
      {
        heading: "Retry Behavior",
        body: "If your server is down, VectorStack will retry delivery up to 12 times over 24 hours using exponential backoff. You can inspect delivery attempts and payloads in the Webhook logs."
      },
      {
        heading: "Signature Verification",
        body: "Every webhook payload is signed with an HMAC-SHA256 signature in the `X-VectorStack-Signature` header. You should verify this signature using your endpoint's signing secret to guarantee the request originated from VectorStack.",
        code: "const crypto = require('crypto');\nconst expectedSignature = crypto.createHmac('sha256', secret).update(payloadBody).digest('hex');"
      }
    ]
  },
  {
    slug: "errors",
    title: "Errors",
    description: "Understand and handle VectorStack API and SDK error codes.",
    sections: [
      {
        heading: "Error Format",
        body: "The API returns structured JSON error bodies when requests fail. Every error response includes a standard HTTP status, a machine-readable error code, a detailed explanation message, and a unique `requestId` for debugging.",
        code: "{\n  \"error\": {\n    \"code\": \"INVALID_API_KEY\",\n    \"message\": \"The provided API key is invalid or has been revoked.\",\n    \"requestId\": \"req_9a8b7c6d5e\"\n  }\n}"
      },
      {
        heading: "Common Errors",
        body: "Common error codes include: 400 `BAD_REQUEST` (invalid dimensions, syntax errors), 401 `INVALID_API_KEY` (missing or revoked token), 403 `INSUFFICIENT_PERMISSIONS` (write actions with read-only keys), 404 `INDEX_NOT_FOUND`, 429 `RATE_LIMITED`, and 500 `INTERNAL_ERROR`."
      },
      {
        heading: "Retryable Errors",
        body: "Only HTTP 429 and HTTP 5xx errors are safe to retry. Do not auto-retry 400 or 401 errors, as they represent configuration issues that require code changes."
      },
      {
        heading: "Debugging Request IDs",
        body: "When reporting bugs or troubleshooting index issues with support, always provide the `requestId` returned in the error payload. This allows support engineers to quickly locate the exact execution path in our log systems."
      }
    ]
  },
  {
    slug: "rate-limits",
    title: "Rate Limits",
    description: "Monitor and manage API rate limits for your organization.",
    sections: [
      {
        heading: "Free Limits",
        // TEST CHANGE IDEA:
        // Change "Free projects may send 100 search requests per minute."
        // to "Free projects may send 30 search requests per minute."
        // to test rate limits modification detection.
        body: "Free projects may send 100 search requests per minute. Free tier indexes that remain inactive for 30 consecutive days will be paused and archived to save system resources. You can wake a paused index instantly from the control dashboard."
      },
      {
        heading: "Pro Limits",
        body: "Pro projects may send 10,000 search requests per minute. Pro tier indexes are deployed on dedicated virtual nodes, which guarantees baseline CPU/RAM resources and prevents noisy-neighbor performance fluctuations."
      },
      {
        heading: "Burst Behavior",
        body: "We support short bursts up to 2x your rate limit for a maximum of 10 seconds. Beyond that, requests are choked and return a 429 Rate Limited response."
      },
      {
        heading: "Retry Strategy",
        body: "When rate limited, inspect the `Retry-After-Ms` header returned in the API response. We recommend implementing token bucket algorithms or exponential backoff queues in your SDK integrations.",
        code: "const retryAfter = response.headers.get('retry-after-ms') || 1000;\nawait sleep(retryAfter);\nreturn client.indexes.search(...);"
      }
    ]
  },
  {
    slug: "security",
    title: "Security",
    description: "Learn about encryption, key management, and compliance on VectorStack.",
    sections: [
      {
        heading: "Data Encryption",
        // TEST CHANGE IDEA:
        // Change "VectorStack encrypts data in transit and at rest."
        // to "VectorStack encrypts data in transit using TLS 1.3 and at rest using AES-256-GCM."
        // to test minor security changes detection.
        body: "VectorStack encrypts data in transit and at rest. We utilize enterprise-grade encryption standard keys to prevent unauthorized network eavesdropping or hardware drive access."
      },
      {
        heading: "Webhook Signatures",
        body: "All webhook payloads contain an HMAC-SHA256 signature calculated using the raw body bytes and your secret signing key. Never skip this verification in production applications, as it prevents mock requests from malicious external origins.",
        code: "const signature = headers['x-vectorstack-signature'];\nconst verified = verifySignature(body, secret, signature);"
      },
      {
        heading: "Key Rotation",
        body: "We recommend automating API key rotation every 90 days. The admin control API lets you write cron jobs that generate, deploy, and retire organization keys systematically."
      },
      {
        heading: "Access Control",
        body: "Define roles (Owner, Administrator, Read-Write, Read-Only) for all team members in your organization console. Restrict production API access to backend servers."
      }
    ]
  },
  {
    slug: "migration-v1-to-v2",
    title: "Migration v1 to v2",
    description: "Migrate your application integrations from the v1 to v2 API schema.",
    sections: [
      {
        heading: "Overview",
        body: "VectorStack v2 introduces streamlined endpoints, improved error formatting, and a more structured SDK namespace. We are deprecating the old v1 endpoints on December 31. Please upgrade your packages before the deprecation date."
      },
      {
        heading: "Breaking Changes",
        body: "The search namespace has changed. The search API now is located under the index path rather than the root directory: `client.search()` is replaced with `client.indexes.search()`. The query parameters are now nested for better clean readability."
      },
      {
        heading: "SDK Migration",
        body: "To upgrade the JS SDK, run `npm install vectorstack@latest` and replace the search calls:",
        code: "// v1 SDK (Deprecated)\nconst results = await client.search({ query, indexId });\n\n// v2 SDK\nconst results = await client.indexes.search({ indexId, query });"
      },
      {
        heading: "API Migration",
        body: "For REST calls, change the endpoint URL from `/v1/search` to `/v1/indexes/:indexId/search`."
      },
      {
        heading: "Compatibility Notes",
        body: "Both v1 and v2 clients can query the same index structures simultaneously. You do not need to rebuild or re-embed your existing databases to migrate code.",
        callout: {
          type: "info",
          text: "The v1 endpoint will return warnings in the headers before being deactivated completely."
        }
      }
    ]
  }
];
