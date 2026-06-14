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
  }
];
