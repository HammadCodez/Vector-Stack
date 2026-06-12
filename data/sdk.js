// VectorStack SDK Pages Data
// Featuring inline HTML anchor links, related links, next steps, and FlowDoc test comments.

export const sdkPages = [
  {
    slug: "javascript",
    title: "JavaScript SDK",
    description: "Integrate VectorStack into Node.js, serverless, and edge environments.",
    sections: [
      {
        heading: "Overview",
        // FLOWDOC TEST CHANGE:
        // Change "The JavaScript SDK provides a typed client for Node.js applications"
        // to "The JavaScript SDK provides an isomorphic, high-performance client for Node.js, Bun, and edge environments"
        // to test minor SDK doc updates.
        body: "The JavaScript SDK provides a typed client for Node.js applications, serverless functions, and backend services. It is optimized for server environments. For specific platforms, review our <a href=\"/sdk/node\">Node SDK</a> and <a href=\"/sdk/edge-runtime\">Edge Runtime SDK</a> documentation guides. Do not deploy key credentials client-side; refer to the <a href=\"/docs/security\">security standards</a>."
      },
      {
        heading: "Installation",
        code: "npm install vectorstack"
      },
      {
        heading: "Initialization",
        body: "Import and instantiate the VectorStack client. Check API properties in the <a href=\"/api/search\">search API reference</a>:",
        code: "import { VectorStack } from \"vectorstack\";\n\nconst client = new VectorStack({ apiKey });"
      },
      {
        heading: "Search Example",
        body: "Run a query in the vector database:",
        code: "const results = await client.indexes.search({\n  indexId: 'kb',\n  query: 'How to rotate tokens'\n});"
      }
    ],
    relatedLinks: [
      { text: "Node SDK guide", href: "/sdk/node" },
      { text: "Edge Runtime SDK guide", href: "/sdk/edge-runtime" },
      { text: "React SDK reference", href: "/sdk/react" },
      { text: "Security Standards", href: "/docs/security" },
      { text: "Search API Reference", href: "/api/search" }
    ],
    nextSteps: [
      { text: "Node JS SDK Guide", description: "Optimize JavaScript operations inside Node servers.", href: "/sdk/node" },
      { text: "React SDK Guide", description: "Build interactive client-side query interfaces.", href: "/sdk/react" }
    ]
  },
  {
    slug: "python",
    title: "Python SDK",
    description: "Integrate VectorStack into Python scripts, backend apps, and ML data pipelines.",
    sections: [
      {
        heading: "Overview",
        body: "The Python SDK supports document ingestion, embeddings, vector index management, and semantic search. It integrates with data engines and frameworks. Learn parameter mappings in our <a href=\"/api/search\">search API reference</a>."
      },
      {
        heading: "Installation",
        code: "pip install vectorstack"
      },
      {
        heading: "Initialization",
        body: "Import the class and create an instance. Ensure your credentials match organizational settings inside the <a href=\"/docs/authentication\">authentication guide</a>:",
        code: "from vectorstack import VectorStack\n\nclient = VectorStack(api_key=api_key)"
      },
      {
        heading: "Ingestion Example",
        body: "Upload files programmatically. Review ingestion rules under <a href=\"/docs/document-ingestion\">document ingestion guide</a>:",
        code: "client.documents.upload(\n    index_id='support-kb',\n    file_path='./manual.pdf',\n    metadata={'category': 'docs'}\n)"
      }
    ],
    relatedLinks: [
      { text: "Authentication", href: "/docs/authentication" },
      { text: "Document Ingestion", href: "/docs/document-ingestion" },
      { text: "Search API Reference", href: "/api/search" },
      { text: "Python SDK Reference", href: "/sdk/python" }
    ],
    nextSteps: [
      { text: "REST Ingestion API", description: "Learn about the HTTP document upload endpoints.", href: "/api/documents" },
      { text: "Review Ingestion Guide", description: "Configure custom cleaning and processing scripts.", href: "/docs/document-ingestion" }
    ]
  },
  {
    slug: "react",
    title: "React SDK",
    description: "Hooks and components to build interactive search interfaces in React applications.",
    sections: [
      {
        heading: "Overview",
        body: "The React SDK provides hooks for search interfaces and client-side query states. For secure routing, do not execute queries using organization Admin keys. Review scoping details in the <a href=\"/docs/api-keys\">API keys documentation</a>."
      },
      {
        heading: "Installation",
        code: "npm install @vectorstack/react"
      },
      {
        heading: "Using Search Hooks",
        body: "The SDK provides the `useVectorSearch` hook. For API schemas, review the <a href=\"/api/search\">search API reference</a> and check how to configure client filters in <a href=\"/docs/metadata-filtering\">metadata filtering documentation</a>.",
        code: "import { useVectorSearch } from \"@vectorstack/react\";\n\nfunction SearchComponent() {\n  const { results, loading } = useVectorSearch({ query, indexId });\n  // ... render interface\n}"
      }
    ],
    relatedLinks: [
      { text: "JavaScript SDK", href: "/sdk/javascript" },
      { text: "API Keys", href: "/docs/api-keys" },
      { text: "Search API Reference", href: "/api/search" },
      { text: "Metadata Filtering", href: "/docs/metadata-filtering" }
    ],
    nextSteps: [
      { text: "JavaScript SDK Reference", description: "Read standard JavaScript client configurations.", href: "/sdk/javascript" },
      { text: "Metadata Filters", description: "Learn how to narrow searches using JSON filters.", href: "/docs/metadata-filtering" }
    ]
  },
  {
    slug: "node",
    title: "Node SDK",
    description: "Optimize VectorStack JavaScript operations for Node.js backend applications and services.",
    sections: [
      {
        heading: "Backend Integration",
        body: "The Node SDK is optimized for long-running processes, task queues, and backend services. To establish configurations, check the primary <a href=\"/sdk/javascript\">JavaScript SDK</a> documentation."
      },
      {
        heading: "Task Workers & Ingestion",
        body: "Use the Node client inside workers to automate ingestion when new records are written. Review extraction details inside <a href=\"/docs/document-ingestion\">document ingestion guide</a>. Query endpoints programmatically via the <a href=\"/api/search\">search API reference</a>.",
        code: "import { IngestionQueue } from \"vectorstack/node\";\n// Worker configuration..."
      }
    ],
    relatedLinks: [
      { text: "JavaScript SDK", href: "/sdk/javascript" },
      { text: "Document Ingestion", href: "/docs/document-ingestion" },
      { text: "Search API Reference", href: "/api/search" },
      { text: "Edge Runtime SDK", href: "/sdk/edge-runtime" }
    ],
    nextSteps: [
      { text: "Document Ingestion Guide", description: "Ingest and process PDF or Markdown files.", href: "/docs/document-ingestion" },
      { text: "REST Search API", description: "Learn about the POST /v1/search endpoint parameters.", href: "/api/search" }
    ]
  },
  {
    slug: "edge-runtime",
    title: "Edge Runtime SDK",
    description: "Run VectorStack client queries inside lightweight edge environments.",
    sections: [
      {
        heading: "Isomorphic Client",
        body: "The Edge SDK fits lightweight compute platforms (like Vercel Edge, Cloudflare Workers) that restrict standard Node.js APIs. Review setups in <a href=\"/sdk/javascript\">JavaScript SDK</a>."
      },
      {
        heading: "Edge Caching & Performance",
        body: "Query results can be cached at edge locations to minimize response times. Ensure that you track rate limits. Refer to the <a href=\"/docs/rate-limits\">rate limits guide</a>, and verify search metrics in the <a href=\"/api/search\">search API reference</a>.",
        code: "export const config = { runtime: \"edge\" };\n// Edge routes logic..."
      }
    ],
    relatedLinks: [
      { text: "JavaScript SDK", href: "/sdk/javascript" },
      { text: "Rate Limits", href: "/docs/rate-limits" },
      { text: "Search API Reference", href: "/api/search" },
      { text: "Node SDK", href: "/sdk/node" }
    ],
    nextSteps: [
      { text: "Rate Limits Guide", description: "Learn about transaction constraints and throttling headers.", href: "/docs/rate-limits" },
      { text: "JavaScript SDK Reference", description: "Review isomorphic client configurations.", href: "/sdk/javascript" }
    ]
  }
];
