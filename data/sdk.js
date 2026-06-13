// VectorStack SDK Reference Data - Sitemap 5 Pages Branch
// Contains exactly 1 highly detailed JavaScript client guide.

export const sdkPages = [
  {
    slug: "javascript",
    title: "JavaScript SDK Reference",
    description: "Integrate VectorStack programmatically inside Node.js, serverless, and edge systems.",
    sections: [
      {
        heading: "Isomorphic Client Overview",
        // FLOWDOC TEST CHANGE:
        // Change "The JavaScript SDK provides a typed client for Node.js applications"
        // to "The JavaScript SDK provides an isomorphic, high-performance client for Node.js, Bun, and edge environments"
        // to test minor SDK doc updates.
        body: "The JavaScript SDK provides a typed client for Node.js applications, serverless functions, and backend services. To set up packages, follow the <a href=\"/docs/installation\">installation guide</a>. Once packages are installed, learn basic commands under the <a href=\"/docs/getting-started\">Getting Started guide</a>."
      },
      {
        heading: "Client Initialization",
        body: "Load client classes and pass authorization keys. Restrict keys scoped for staging or production; read key details in <a href=\"/docs/getting-started\">Getting Started</a>:",
        code: "import { VectorStack } from \"vectorstack\";\n\nconst client = new VectorStack({\n  apiKey: process.env.VECTORSTACK_API_KEY\n});"
      },
      {
        heading: "Executing Queries",
        body: "Submit semantic search payloads. Learn details inside the <a href=\"/api/search\">search API reference</a>:",
        code: "const results = await client.indexes.search({\n  indexId: 'kb',\n  query: 'How to rotate organization tokens'\n});"
      }
    ],
    relatedLinks: [
      { text: "Getting Started Guide", href: "/docs/getting-started" },
      { text: "Installation Guide", href: "/docs/installation" },
      { text: "Search API Reference", href: "/api/search" }
    ],
    nextSteps: [
      { text: "Getting Started Guide", description: "Review basic index settings and file uploads.", href: "/docs/getting-started" },
      { text: "Search API Reference", description: "Browse query parameters and HTTP body properties.", href: "/api/search" }
    ]
  }
];
