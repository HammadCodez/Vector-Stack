// VectorStack API Reference Data - Sitemap 5 Pages Branch
// Contains exactly 1 highly detailed API reference endpoint documentation.

export const apiPages = [
  {
    slug: "search",
    title: "Search API Reference",
    description: "Query vector indexes using semantic matching similarity scores and metadata filters.",
    sections: [
      {
        heading: "Endpoint Mapping",
        // FLOWDOC TEST CHANGE:
        // Change "Required fields are indexId and query."
        // to "Required fields are indexId, query, and searchMode."
        // to test search API breaking change detection.
        body: "POST `/v1/search` runs a semantic similarity match. Required fields are indexId and query. The query string is embedded on the fly. To set up client instances, see the <a href=\"/docs/getting-started\">Getting Started guide</a>, or download dependencies from the <a href=\"/docs/installation\">installation guide</a>."
      },
      {
        heading: "Query Parameters",
        body: "The search HTTP payload accepts the following properties:",
        list: [
          "indexId (string, required) - The ID of the vector index to query.",
          "query (string, required) - Natural language query to execute.",
          "topK (number, optional) - Total matches to return (defaults to 5)."
        ]
      },
      {
        heading: "Request Example",
        body: "Submit raw HTTP requests using curl, or query using our isomorphic client class; review configurations under the <a href=\"/sdk/javascript\">JavaScript SDK reference</a>:",
        code: "curl -X POST https://api.vectorstack.dev/v1/search \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"indexId\": \"articles-kb\",\n    \"query\": \"scaling vector search\",\n    \"topK\": 3\n  }'"
      }
    ],
    relatedLinks: [
      { text: "Getting Started Guide", href: "/docs/getting-started" },
      { text: "Installation Guide", href: "/docs/installation" },
      { text: "JavaScript SDK Reference", href: "/sdk/javascript" }
    ],
    nextSteps: [
      { text: "Getting Started Guide", description: "Review basic setups and organization project details.", href: "/docs/getting-started" },
      { text: "JavaScript SDK Guide", description: "Learn how to query search results inside server routines.", href: "/sdk/javascript" }
    ]
  }
];
