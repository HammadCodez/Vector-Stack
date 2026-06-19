export const apiPages = [
  {
    "slug": "search",
    "title": "Search API",
    "description": "Query vector indexes with semantic matching, filters, and weights.",
    "sections": [
      {
        "heading": "Semantic Vector Search",
        "body": "POST `/v1/search` runs a semantic search query. Required fields are indexId and query. Optional fields include topK, filters, rerank, and includeMetadata. Read about combining keywords in <a href=\"/docs/hybrid-search\">hybrid search guide</a>."
      },
      {
        "heading": "Query Parameters",
        "body": "The search payload accepts the following properties. Learn filter schemas inside the <a href=\"/docs/metadata-filtering\">metadata filtering documentation</a>:",
        "list": [
          "indexId (string, required) - The ID of the index to query.",
          "query (string, required) - The search query.",
          "topK (number, optional) - Number of results to return. Defaults to 5.",
          "filters (object, optional) - Metadata filters. Review rules inside <a href=\"/docs/metadata-filtering\">filters guidelines</a>."
        ]
      },
      {
        "heading": "Search Request Example",
        "body": "Retrieve the top 3 results. Implement this cleanly using client handlers like the <a href=\"/sdk/javascript\">JavaScript SDK</a> or <a href=\"/sdk/python\">Python SDK</a>:",
        "code": "curl -X POST https://api.vectorstack.dev/v1/search \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"indexId\": \"support-kb\",\n    \"query\": \"How do I rotate API keys?\",\n    \"topK\": 3\n  }'"
      },
      {
        "heading": "Verification Guidelines",
        "body": "Ensure that connection handshakes are executed within the sandboxed environment to isolate index operations. Run test queries to verify metadata filters align correctly with your access scopes."
      }
    ],
    "relatedLinks": [
      {
        "text": "Hybrid Search",
        "href": "/docs/hybrid-search"
      },
      {
        "text": "Metadata Filtering",
        "href": "/docs/metadata-filtering"
      },
      {
        "text": "Reranking Guide",
        "href": "/docs/reranking"
      },
      {
        "text": "JavaScript SDK",
        "href": "/sdk/javascript"
      },
      {
        "text": "Designing Search APIs Blog",
        "href": "/blog/designing-search-apis"
      }
    ],
    "nextSteps": [
      {
        "text": "Reranking API",
        "description": "Score search outputs using the cross-encoder Rerank API.",
        "href": "/api/rerank"
      },
      {
        "text": "SDK Integrations",
        "description": "Incorporate client search routines in code.",
        "href": "/sdk"
      }
    ]
  },
  {
    "slug": "overview",
    "title": "API Overview",
    "description": "Learn about the VectorStack REST API structure, endpoints, and headers.",
    "sections": [
      {
        "heading": "Base URL",
        "body": "All API requests are sent to the standard base URL. Access is secured via HTTPS protocols.",
        "code": "https://api.vectorstack.dev/v1"
      },
      {
        "heading": "Request Format",
        "body": "For all POST, PUT, and PATCH endpoints, the request body should be formatted as JSON. Include standard `Content-Type: application/json` headers. For files ingestion, see the <a href=\"/api/documents\">documents API reference</a>."
      },
      {
        "heading": "Global Limits & Quotas",
        "body": "API endpoints are rate-limited to avoid system overloading. View restrictions detail under <a href=\"/docs/rate-limits\">rate limits guide</a>, and verify transaction totals via <a href=\"/api/usage\">usage API reference</a>."
      }
    ],
    "relatedLinks": [
      {
        "text": "API Authentication",
        "href": "/api/authentication"
      },
      {
        "text": "Rate Limits",
        "href": "/docs/rate-limits"
      },
      {
        "text": "Usage Metrics API",
        "href": "/api/usage"
      },
      {
        "text": "Billing REST API",
        "href": "/api/billing"
      }
    ],
    "nextSteps": [
      {
        "text": "API Authentication",
        "description": "Authenticate your requests using organization Bearer tokens.",
        "href": "/api/authentication"
      },
      {
        "text": "Vector Indexes API",
        "description": "Learn how to create and manage vector indexes.",
        "href": "/api/indexes"
      }
    ]
  },
  {
    "slug": "authentication",
    "title": "Authentication Reference",
    "description": "Learn how to authenticate requests sent to the REST API endpoints.",
    "sections": [
      {
        "heading": "Bearer Credentials",
        "body": "Authenticate requests by sending your organization key in the Authorization header. Review security scopes in the <a href=\"/docs/security\">security guide</a> or inspect key creation inside the <a href=\"/docs/api-keys\">API keys documentation</a>."
      },
      {
        "heading": "Validation API Example",
        "body": "Test client access keys by executing a request to check system status. View actual health values on our <a href=\"/status\">status page</a>.",
        "code": "curl -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  https://api.vectorstack.dev/v1/status"
      }
    ],
    "relatedLinks": [
      {
        "text": "Authentication Guide",
        "href": "/docs/authentication"
      },
      {
        "text": "API Keys",
        "href": "/docs/api-keys"
      },
      {
        "text": "Security Guidelines",
        "href": "/docs/security"
      },
      {
        "text": "Audit Logs API",
        "href": "/api/audit-logs"
      }
    ],
    "nextSteps": [
      {
        "text": "Create Embeddings",
        "description": "Create vector embeddings from input strings.",
        "href": "/api/embeddings"
      },
      {
        "text": "Audit Key Operations",
        "description": "Verify secret key events in the organization audit files.",
        "href": "/api/audit-logs"
      }
    ]
  },
  {
    "slug": "embeddings",
    "title": "Embeddings API",
    "description": "Create vector embeddings from input strings using the embeddings endpoint.",
    "sections": [
      {
        "heading": "Create Embeddings",
        "body": "POST `/v1/embeddings` creates embeddings for one or more input strings. The request body accepts a text field and returns a vector. Read about vector shapes and model versions in the <a href=\"/docs/embeddings\">embeddings guide</a>."
      },
      {
        "heading": "Request Fields",
        "body": "The embeddings endpoint accepts the following JSON properties:",
        "list": [
          "text (string or array, required) - The text contents to embed.",
          "model (string, optional) - The embedding model to use. Defaults to vectorstack-small.",
          "metadata (object, optional) - Optional attributes to associate."
        ]
      },
      {
        "heading": "Request Example",
        "body": "Creating embeddings for a single sentence. Use client libraries like the <a href=\"/sdk/javascript\">JavaScript SDK</a> to perform batches:",
        "code": "curl -X POST https://api.vectorstack.dev/v1/embeddings \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"text\": \"Search query content\",\n    \"model\": \"vectorstack-small\"\n  }'"
      }
    ],
    "relatedLinks": [
      {
        "text": "Embeddings Guide",
        "href": "/docs/embeddings"
      },
      {
        "text": "Indexes API",
        "href": "/api/indexes"
      },
      {
        "text": "JavaScript SDK",
        "href": "/sdk/javascript"
      },
      {
        "text": "Pricing",
        "href": "/pricing"
      }
    ],
    "nextSteps": [
      {
        "text": "Indexes API Reference",
        "description": "Learn how to manage vector index partitions.",
        "href": "/api/indexes"
      },
      {
        "text": "Upload Documents",
        "description": "Submit source documents for automatic embedding.",
        "href": "/api/documents"
      }
    ]
  },
  {
    "slug": "indexes",
    "title": "Indexes API",
    "description": "Manage your vector indexes, configurations, metrics, and deployments.",
    "sections": [
      {
        "heading": "Index Management Endpoints",
        "body": "The indexes API allows you to programmatically manage your vector index structures. Review distance metrics and similarities in <a href=\"/docs/vector-indexes\">vector indexes guide</a>. Snapshots backups are handled via <a href=\"/docs/backups\">backups rules</a>.",
        "list": [
          "POST /v1/indexes - Create a new vector index with name, dimension, and metric.",
          "GET /v1/indexes - List all vector indexes in your organization.",
          "GET /v1/indexes/:id - Retrieve stats for a specific index.",
          "PATCH /v1/indexes/:id - Update index settings.",
          "DELETE /v1/indexes/:id - Permanently delete an index. Read retention rules in our <a href=\"/docs/data-retention\">data retention guidelines</a>."
        ]
      },
      {
        "heading": "Create Index Example",
        "body": "To deploy a new index programmatically:",
        "code": "curl -X POST https://api.vectorstack.dev/v1/indexes \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"name\": \"support-kb\",\n    \"dimension\": 768,\n    \"metric\": \"cosine\"\n  }'"
      }
    ],
    "relatedLinks": [
      {
        "text": "Vector Indexes Guide",
        "href": "/docs/vector-indexes"
      },
      {
        "text": "Embeddings API",
        "href": "/api/embeddings"
      },
      {
        "text": "Backups Policies",
        "href": "/docs/backups"
      },
      {
        "text": "Data Retention Guidelines",
        "href": "/docs/data-retention"
      }
    ],
    "nextSteps": [
      {
        "text": "Documents API",
        "description": "Ingest and upload source documents to your index.",
        "href": "/api/documents"
      },
      {
        "text": "REST Search API",
        "description": "Execute semantic query requests against your index.",
        "href": "/api/search"
      }
    ]
  },
  {
    "slug": "documents",
    "title": "Documents API",
    "description": "Upload, check status, and delete source documents in the ingestion pipeline.",
    "sections": [
      {
        "heading": "Ingestion Endpoints",
        "body": "Use these endpoints to upload files and inspect status. Review the extraction pipeline details in <a href=\"/docs/document-ingestion\">document ingestion guide</a> and chunk thresholds in the <a href=\"/docs/chunking\">chunking parameters documentation</a>.",
        "list": [
          "POST /v1/documents - Ingest a file and compile chunks.",
          "GET /v1/documents/:id - Inspect file parser state.",
          "DELETE /v1/documents/:id - Purge all vectors associated with a document. Review storage limits on <a href=\"/pricing\">pricing plans</a>."
        ]
      },
      {
        "heading": "Document Upload Example",
        "body": "Upload a PDF document. To automate notifications, register endpoints inside <a href=\"/docs/webhooks\">webhooks guide</a>:",
        "code": "curl -X POST https://api.vectorstack.dev/v1/documents \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -F \"indexId=support-kb\" \\\n  -F \"file=@manual.pdf\""
      }
    ],
    "relatedLinks": [
      {
        "text": "Document Ingestion",
        "href": "/docs/document-ingestion"
      },
      {
        "text": "Chunking Guide",
        "href": "/docs/chunking"
      },
      {
        "text": "Webhooks Reference",
        "href": "/api/webhooks"
      },
      {
        "text": "Pricing",
        "href": "/pricing"
      }
    ],
    "nextSteps": [
      {
        "text": "REST Search API",
        "description": "Search document vector chunks using REST requests.",
        "href": "/api/search"
      },
      {
        "text": "Manage Webhooks",
        "description": "Subscribe to ingestion completion alerts.",
        "href": "/api/webhooks"
      }
    ]
  },
  {
    "slug": "rerank",
    "title": "Rerank API",
    "description": "Re-score and re-order search candidate documents with cross-encoders.",
    "sections": [
      {
        "heading": "Rerank Chunks",
        "body": "POST `/v1/rerank` reranks retrieved documents using the original query. Required fields are query and documents. To understand why this improves precision, review the Rerank details under <a href=\"/docs/reranking\">reranking guide</a>. Learn how to configure this within RAG structures in the <a href=\"/docs/rag-pipelines\">RAG pipelines guide</a>."
      },
      {
        "heading": "Rerank Request Example",
        "body": "To score candidate text chunks relative to a query:",
        "code": "curl -X POST https://api.vectorstack.dev/v1/rerank \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"query\": \"How do I rotate API keys?\",\n    \"documents\": [\n      \"API keys can be rotated from the user console under Settings.\",\n      \"Authentication is performed via HTTP header validation keys.\"\n    ]\n  }'"
      }
    ],
    "relatedLinks": [
      {
        "text": "Reranking Guide",
        "href": "/docs/reranking"
      },
      {
        "text": "RAG Pipelines",
        "href": "/docs/rag-pipelines"
      },
      {
        "text": "Search API Reference",
        "href": "/api/search"
      },
      {
        "text": "Evaluating RAG Quality Blog",
        "href": "/blog/evaluating-rag-quality"
      }
    ],
    "nextSteps": [
      {
        "text": "REST Search API",
        "description": "Query databases using primary search endpoints.",
        "href": "/api/search"
      },
      {
        "text": "RAG Evaluation",
        "description": "Validate context recall and RAG precision.",
        "href": "/docs/evaluation"
      }
    ]
  }
];
