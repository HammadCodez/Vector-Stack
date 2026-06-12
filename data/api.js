// VectorStack API Reference Pages Data
// Featuring inline HTML anchor links, related links, next steps, and FlowDoc test comments.

export const apiPages = [
  {
    slug: "overview",
    title: "API Overview",
    description: "Learn about the VectorStack REST API structure, endpoints, and headers.",
    sections: [
      {
        heading: "Base URL",
        // FLOWDOC TEST CHANGE:
        // Change "https://api.vectorstack.dev/v1"
        // to "https://api.vectorstack.dev/v2"
        // to test API base URL breaking change detection.
        body: "All API requests are sent to the standard base URL. Access is secured via HTTPS protocols.",
        code: "https://api.vectorstack.dev/v1"
      },
      {
        heading: "Request Format",
        body: "For all POST, PUT, and PATCH endpoints, the request body should be formatted as JSON. Include standard `Content-Type: application/json` headers. For files ingestion, see the <a href=\"/api/documents\">documents API reference</a>."
      },
      {
        heading: "Global Limits & Quotas",
        body: "API endpoints are rate-limited to avoid system overloading. View restrictions detail under <a href=\"/docs/rate-limits\">rate limits guide</a>, and verify transaction totals via <a href=\"/api/usage\">usage API reference</a>."
      }
    ],
    relatedLinks: [
      { text: "API Authentication", href: "/api/authentication" },
      { text: "Rate Limits", href: "/docs/rate-limits" },
      { text: "Usage Metrics API", href: "/api/usage" },
      { text: "Billing REST API", href: "/api/billing" }
    ],
    nextSteps: [
      { text: "API Authentication", description: "Authenticate your requests using organization Bearer tokens.", href: "/api/authentication" },
      { text: "Vector Indexes API", description: "Learn how to create and manage vector indexes.", href: "/api/indexes" }
    ]
  },
  {
    slug: "authentication",
    title: "Authentication Reference",
    description: "Learn how to authenticate requests sent to the REST API endpoints.",
    sections: [
      {
        heading: "Bearer Credentials",
        body: "Authenticate requests by sending your organization key in the Authorization header. Review security scopes in the <a href=\"/docs/security\">security guide</a> or inspect key creation inside the <a href=\"/docs/api-keys\">API keys documentation</a>."
      },
      {
        heading: "Validation API Example",
        body: "Test client access keys by executing a request to check system status. View actual health values on our <a href=\"/status\">status page</a>.",
        code: "curl -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  https://api.vectorstack.dev/v1/status"
      }
    ],
    relatedLinks: [
      { text: "Authentication Guide", href: "/docs/authentication" },
      { text: "API Keys", href: "/docs/api-keys" },
      { text: "Security Guidelines", href: "/docs/security" },
      { text: "Audit Logs API", href: "/api/audit-logs" }
    ],
    nextSteps: [
      { text: "Create Embeddings", description: "Create vector embeddings from input strings.", href: "/api/embeddings" },
      { text: "Audit Key Operations", description: "Verify secret key events in the organization audit files.", href: "/api/audit-logs" }
    ]
  },
  {
    slug: "embeddings",
    title: "Embeddings API",
    description: "Create vector embeddings from input strings using the embeddings endpoint.",
    sections: [
      {
        heading: "Create Embeddings",
        // FLOWDOC TEST CHANGE:
        // Change "POST /v1/embeddings creates embeddings for one or more input strings."
        // to "POST /v1/embeddings creates high-performance vector embeddings for batch strings."
        // to test embeddings API explanation modifications.
        body: "POST `/v1/embeddings` creates embeddings for one or more input strings. The request body accepts a text field and returns a vector. Read about vector shapes and model versions in the <a href=\"/docs/embeddings\">embeddings guide</a>."
      },
      {
        heading: "Request Fields",
        body: "The embeddings endpoint accepts the following JSON properties:",
        list: [
          "text (string or array, required) - The text contents to embed.",
          "model (string, optional) - The embedding model to use. Defaults to vectorstack-small.",
          "metadata (object, optional) - Optional attributes to associate."
        ]
      },
      {
        heading: "Request Example",
        body: "Creating embeddings for a single sentence. Use client libraries like the <a href=\"/sdk/javascript\">JavaScript SDK</a> to perform batches:",
        code: "curl -X POST https://api.vectorstack.dev/v1/embeddings \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"text\": \"Search query content\",\n    \"model\": \"vectorstack-small\"\n  }'"
      }
    ],
    relatedLinks: [
      { text: "Embeddings Guide", href: "/docs/embeddings" },
      { text: "Indexes API", href: "/api/indexes" },
      { text: "JavaScript SDK", href: "/sdk/javascript" },
      { text: "Pricing", href: "/pricing" }
    ],
    nextSteps: [
      { text: "Indexes API Reference", description: "Learn how to manage vector index partitions.", href: "/api/indexes" },
      { text: "Upload Documents", description: "Submit source documents for automatic embedding.", href: "/api/documents" }
    ]
  },
  {
    slug: "indexes",
    title: "Indexes API",
    description: "Manage your vector indexes, configurations, metrics, and deployments.",
    sections: [
      {
        heading: "Index Management Endpoints",
        body: "The indexes API allows you to programmatically manage your vector index structures. Review distance metrics and similarities in <a href=\"/docs/vector-indexes\">vector indexes guide</a>. Snapshots backups are handled via <a href=\"/docs/backups\">backups rules</a>.",
        list: [
          "POST /v1/indexes - Create a new vector index with name, dimension, and metric.",
          "GET /v1/indexes - List all vector indexes in your organization.",
          "GET /v1/indexes/:id - Retrieve stats for a specific index.",
          "PATCH /v1/indexes/:id - Update index settings.",
          "DELETE /v1/indexes/:id - Permanently delete an index. Read retention rules in our <a href=\"/docs/data-retention\">data retention guidelines</a>."
        ]
      },
      {
        heading: "Create Index Example",
        body: "To deploy a new index programmatically:",
        code: "curl -X POST https://api.vectorstack.dev/v1/indexes \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"name\": \"support-kb\",\n    \"dimension\": 768,\n    \"metric\": \"cosine\"\n  }'"
      }
    ],
    relatedLinks: [
      { text: "Vector Indexes Guide", href: "/docs/vector-indexes" },
      { text: "Embeddings API", href: "/api/embeddings" },
      { text: "Backups Policies", href: "/docs/backups" },
      { text: "Data Retention Guidelines", href: "/docs/data-retention" }
    ],
    nextSteps: [
      { text: "Documents API", description: "Ingest and upload source documents to your index.", href: "/api/documents" },
      { text: "REST Search API", description: "Execute semantic query requests against your index.", href: "/api/search" }
    ]
  },
  {
    slug: "documents",
    title: "Documents API",
    description: "Upload, check status, and delete source documents in the ingestion pipeline.",
    sections: [
      {
        heading: "Ingestion Endpoints",
        body: "Use these endpoints to upload files and inspect status. Review the extraction pipeline details in <a href=\"/docs/document-ingestion\">document ingestion guide</a> and chunk thresholds in the <a href=\"/docs/chunking\">chunking parameters documentation</a>.",
        list: [
          "POST /v1/documents - Ingest a file and compile chunks.",
          "GET /v1/documents/:id - Inspect file parser state.",
          "DELETE /v1/documents/:id - Purge all vectors associated with a document. Review storage limits on <a href=\"/pricing\">pricing plans</a>."
        ]
      },
      {
        heading: "Document Upload Example",
        body: "Upload a PDF document. To automate notifications, register endpoints inside <a href=\"/docs/webhooks\">webhooks guide</a>:",
        code: "curl -X POST https://api.vectorstack.dev/v1/documents \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -F \"indexId=support-kb\" \\\n  -F \"file=@manual.pdf\""
      }
    ],
    relatedLinks: [
      { text: "Document Ingestion", href: "/docs/document-ingestion" },
      { text: "Chunking Guide", href: "/docs/chunking" },
      { text: "Webhooks Reference", href: "/api/webhooks" },
      { text: "Pricing", href: "/pricing" }
    ],
    nextSteps: [
      { text: "REST Search API", description: "Search document vector chunks using REST requests.", href: "/api/search" },
      { text: "Manage Webhooks", description: "Subscribe to ingestion completion alerts.", href: "/api/webhooks" }
    ]
  },
  {
    slug: "search",
    title: "Search API",
    description: "Query vector indexes with semantic matching, filters, and weights.",
    sections: [
      {
        heading: "Semantic Vector Search",
        // FLOWDOC TEST CHANGE:
        // Change "Required fields are indexId and query."
        // to "Required fields are indexId, query, and searchMode."
        // to test search API breaking change detection.
        body: "POST `/v1/search` runs a semantic search query. Required fields are indexId and query. Optional fields include topK, filters, rerank, and includeMetadata. Read about combining keywords in <a href=\"/docs/hybrid-search\">hybrid search guide</a>."
      },
      {
        heading: "Query Parameters",
        body: "The search payload accepts the following properties. Learn filter schemas inside the <a href=\"/docs/metadata-filtering\">metadata filtering documentation</a>:",
        list: [
          "indexId (string, required) - The ID of the index to query.",
          "query (string, required) - The search query.",
          "topK (number, optional) - Number of results to return. Defaults to 5.",
          "filters (object, optional) - Metadata filters. Review rules inside <a href=\"/docs/metadata-filtering\">filters guidelines</a>."
        ]
      },
      {
        heading: "Search Request Example",
        body: "Retrieve the top 3 results. Implement this cleanly using client handlers like the <a href=\"/sdk/javascript\">JavaScript SDK</a> or <a href=\"/sdk/python\">Python SDK</a>:",
        code: "curl -X POST https://api.vectorstack.dev/v1/search \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"indexId\": \"support-kb\",\n    \"query\": \"How do I rotate API keys?\",\n    \"topK\": 3\n  }'"
      }
    ],
    relatedLinks: [
      { text: "Hybrid Search", href: "/docs/hybrid-search" },
      { text: "Metadata Filtering", href: "/docs/metadata-filtering" },
      { text: "Reranking Guide", href: "/docs/reranking" },
      { text: "JavaScript SDK", href: "/sdk/javascript" },
      { text: "Designing Search APIs Blog", href: "/blog/designing-search-apis" }
    ],
    nextSteps: [
      { text: "Reranking API", description: "Score search outputs using the cross-encoder Rerank API.", href: "/api/rerank" },
      { text: "SDK Integrations", description: "Incorporate client search routines in code.", href: "/sdk" }
    ]
  },
  {
    slug: "rerank",
    title: "Rerank API",
    description: "Re-score and re-order search candidate documents with cross-encoders.",
    sections: [
      {
        heading: "Rerank Chunks",
        body: "POST `/v1/rerank` reranks retrieved documents using the original query. Required fields are query and documents. To understand why this improves precision, review the Rerank details under <a href=\"/docs/reranking\">reranking guide</a>. Learn how to configure this within RAG structures in the <a href=\"/docs/rag-pipelines\">RAG pipelines guide</a>."
      },
      {
        heading: "Rerank Request Example",
        body: "To score candidate text chunks relative to a query:",
        code: "curl -X POST https://api.vectorstack.dev/v1/rerank \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"query\": \"How do I rotate API keys?\",\n    \"documents\": [\n      \"API keys can be rotated from the user console under Settings.\",\n      \"Authentication is performed via HTTP header validation keys.\"\n    ]\n  }'"
      }
    ],
    relatedLinks: [
      { text: "Reranking Guide", href: "/docs/reranking" },
      { text: "RAG Pipelines", href: "/docs/rag-pipelines" },
      { text: "Search API Reference", href: "/api/search" },
      { text: "Evaluating RAG Quality Blog", href: "/blog/evaluating-rag-quality" }
    ],
    nextSteps: [
      { text: "REST Search API", description: "Query databases using primary search endpoints.", href: "/api/search" },
      { text: "RAG Evaluation", description: "Validate context recall and RAG precision.", href: "/docs/evaluation" }
    ]
  },
  {
    slug: "webhooks",
    title: "Webhooks API",
    description: "Register and verify webhook subscriptions to listen for index events.",
    sections: [
      {
        heading: "Webhook Deliveries",
        body: "Webhook payloads include id, event, createdAt, and data. Events are delivered with an HMAC-SHA256 signature header. Review signature verification inside the <a href=\"/docs/webhooks\">webhooks guide</a> or inspect our <a href=\"/docs/security\">security manual</a>."
      },
      {
        heading: "Register Webhook Subscription",
        body: "To register an endpoint, send a POST request with the target URL:",
        code: "curl -X POST https://api.vectorstack.dev/v1/webhooks \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"url\": \"https://example.com/webhooks/vectorstack\",\n    \"events\": [\"document.ingested\", \"document.failed\"]\n  }'"
      }
    ],
    relatedLinks: [
      { text: "Webhooks Guide", href: "/docs/webhooks" },
      { text: "Security Standards", href: "/docs/security" },
      { text: "Audit Logs API", href: "/api/audit-logs" },
      { text: "System Status", href: "/status" }
    ],
    nextSteps: [
      { text: "Audit Logs Log", description: "Track key changes and webhook registration updates.", href: "/api/audit-logs" },
      { text: "Uptime Health", description: "Verify system operational logs and services health.", href: "/status" }
    ]
  },
  {
    slug: "errors",
    title: "API Errors Reference",
    description: "Interpret error codes and format schemas returned by the API.",
    sections: [
      {
        heading: "Error Structure",
        body: "Errors return code, message, and requestId. Rate limited responses also include retryAfterMs. Review error boundaries in <a href=\"/docs/errors\">errors documentation</a> and transaction constraints in the <a href=\"/docs/rate-limits\">rate limits guide</a>."
      },
      {
        heading: "JSON Payload Structure",
        // FLOWDOC TEST CHANGE:
        // Change "Error response payload format is stable."
        // to "Error response payload format can include validation details."
        // to test error structures.
        body: "Error response payload format is stable and output matches code parameters. For troubleshooting support requests, provide the Request ID. Monitor pipeline logs under <a href=\"/docs/observability\">observability guidelines</a>."
      }
    ],
    relatedLinks: [
      { text: "Error Codes Guide", href: "/docs/errors" },
      { text: "Rate Limits", href: "/docs/rate-limits" },
      { text: "Observability", href: "/docs/observability" },
      { text: "System Status", href: "/status" }
    ],
    nextSteps: [
      { text: "System Status Uptime", description: "Monitor operational status metrics of all API paths.", href: "/status" },
      { text: "Observability Metrics", description: "Troubleshoot query errors using observability logs.", href: "/docs/observability" }
    ]
  },
  {
    slug: "projects",
    title: "Projects API",
    description: "Manage organization projects, workspaces, and environment properties.",
    sections: [
      {
        heading: "Overview",
        body: "The projects API enables developers to programmatically isolate indexes. Workspaces contain specific API keys. Review staging and production splits in <a href=\"/docs/environments\">environments guide</a>."
      },
      {
        heading: "Endpoints Mapping",
        body: "The Projects interface hosts the following operations:",
        list: [
          "POST /v1/projects - Create a new project sandbox.",
          "GET /v1/projects - List active organization projects.",
          "GET /v1/projects/:id - Retrieve project metadata details.",
          "PATCH /v1/projects/:id - Update project settings and active region mapping.",
          "DELETE /v1/projects/:id - Purge the project workspace and revoke keys."
        ]
      },
      {
        heading: "Create Project Example",
        body: "Instantiate a project scoped key. Review permissions in <a href=\"/docs/api-keys\">API keys documentation</a>:",
        code: "curl -X POST https://api.vectorstack.dev/v1/projects \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"name\": \"Production Search\",\n    \"region\": \"us-east-1\"\n  }'"
      }
    ],
    relatedLinks: [
      { text: "Environments Guide", href: "/docs/environments" },
      { text: "API Keys Setup", href: "/docs/api-keys" },
      { text: "Deployments", href: "/docs/deployments" },
      { text: "Audit Logs API", href: "/api/audit-logs" }
    ],
    nextSteps: [
      { text: "Environments Guide", description: "Set up multi-environment routing structures.", href: "/docs/environments" },
      { text: "API Keys Scoping", description: "Generate security keys matching your project namespaces.", href: "/docs/api-keys" }
    ]
  },
  {
    slug: "usage",
    title: "Usage API",
    description: "Retrieve real-time transaction logs, storage quotas, and query statistics.",
    sections: [
      {
        heading: "Overview",
        body: "Query the usage endpoints to pull performance metrics. Track billing parameters and check how transaction totals map to rates in <a href=\"/docs/rate-limits\">rate limits guide</a>."
      },
      {
        heading: "Billing and Plan Usage",
        body: "Usage data feeds the billing systems. Check the plan specifications under <a href=\"/pricing\">pricing plans</a>, and query endpoints using the <a href=\"/api/billing\">billing API</a>."
      },
      {
        heading: "Retrieving Stats Example",
        body: "Pull ingestion and search counts for the billing month:",
        code: "curl -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  https://api.vectorstack.dev/v1/usage/stats"
      }
    ],
    relatedLinks: [
      { text: "Pricing", href: "/pricing" },
      { text: "Billing API", href: "/api/billing" },
      { text: "Rate Limits Guide", href: "/docs/rate-limits" },
      { text: "Uptime Health", href: "/status" }
    ],
    nextSteps: [
      { text: "Billing REST API", description: "Review billing plans and current transaction balances.", href: "/api/billing" },
      { text: "Pricing Details", description: "Compare available subscriptions and monthly search quotas.", href: "/pricing" }
    ]
  },
  {
    slug: "audit-logs",
    title: "Audit Logs API",
    description: "Track organizational changes, team events, index deletions, and secret actions.",
    sections: [
      {
        heading: "Compliance Logs",
        body: "VectorStack registers security logs to record changes to configuration states. Auditing tracks key rotations, member additions, and indices deletions. Learn about access settings in <a href=\"/docs/teams-and-permissions\">teams and permissions documentation</a> and <a href=\"/docs/security\">security manual</a>."
      },
      {
        heading: "Audit API Call",
        body: "Pull the audit logs feed. Filter entries by action date or event category. Review system configurations in <a href=\"/docs/observability\">observability guides</a>:",
        code: "curl -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  https://api.vectorstack.dev/v1/audit-logs?limit=20"
      }
    ],
    relatedLinks: [
      { text: "Teams and Permissions", href: "/docs/teams-and-permissions" },
      { text: "Security Standards", href: "/docs/security" },
      { text: "Observability Guide", href: "/docs/observability" },
      { text: "Usage Metrics API", href: "/api/usage" }
    ],
    nextSteps: [
      { text: "Teams & Permissions", description: "Define user access roles and project access rules.", href: "/docs/teams-and-permissions" },
      { text: "System Observability", description: "Configure tracking and ingestion logging frameworks.", href: "/docs/observability" }
    ]
  },
  {
    slug: "billing",
    title: "Billing API",
    description: "Retrieve subscription parameters, view payment history, and fetch monthly usage totals.",
    sections: [
      {
        heading: "Billing REST Methods",
        body: "The billing system lets you adjust subscription tiers programmatically. Check plan structures on our <a href=\"/pricing\">pricing page</a>. Compare real-time query counts in the <a href=\"/api/usage\">usage API reference</a> and verify rate changes under <a href=\"/docs/rate-limits\">rate limits guide</a>."
      },
      {
        heading: "Endpoints Overview",
        body: "Billing actions support typical operations:",
        list: [
          "GET /v1/billing/subscription - Retrieve current organization plan.",
          "POST /v1/billing/checkout - Generate payment portal checkout links.",
          "GET /v1/billing/invoices - List historical invoice logs and PDF urls."
        ]
      }
    ],
    relatedLinks: [
      { text: "Pricing", href: "/pricing" },
      { text: "Usage API", href: "/api/usage" },
      { text: "Rate Limits Guide", href: "/docs/rate-limits" },
      { text: "Projects API", href: "/api/projects" }
    ],
    nextSteps: [
      { text: "Usage API Reference", description: "Pull monthly vector transaction totals.", href: "/api/usage" },
      { text: "Review Plan Options", description: "Browse subscription packages and storage sizes.", href: "/pricing" }
    ]
  }
];
