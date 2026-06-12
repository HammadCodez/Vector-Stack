// VectorStack API Reference Pages Data

export const apiPages = [
  {
    slug: "overview",
    title: "API Overview",
    description: "Learn about the VectorStack REST API structure, endpoints, and headers.",
    sections: [
      {
        heading: "Base URL",
        // TEST CHANGE IDEA:
        // Change "https://api.vectorstack.dev/v1"
        // to "https://api.vectorstack.dev/v2"
        // to test API base URL breaking change detection.
        body: "All API requests are sent to the standard base URL. Access is secured via HTTPS protocols.",
        code: "https://api.vectorstack.dev/v1"
      },
      {
        heading: "Request Format",
        body: "For all POST, PUT, and PATCH endpoints, the request body should be formatted as JSON. Remember to include the header `Content-Type: application/json`."
      },
      {
        heading: "Response Format",
        body: "API responses are returned as JSON. Successful requests will return HTTP 200, 201, or 202 status codes. Failed requests will return appropriate 4xx or 5xx statuses with details in the error body."
      }
    ]
  },
  {
    slug: "authentication",
    title: "Authentication",
    description: "Learn how to authenticate requests sent to the REST API endpoints.",
    sections: [
      {
        heading: "Bearer Credentials",
        body: "Authenticate requests by sending your organization key in the Authorization header. Format: `Authorization: Bearer VECTORSTACK_API_KEY`."
      },
      {
        heading: "Validation API Example",
        body: "You can test if your credentials are valid by requesting the organization status endpoint.",
        code: "curl -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  https://api.vectorstack.dev/v1/status"
      }
    ]
  },
  {
    slug: "embeddings",
    title: "Embeddings API",
    description: "Create vector embeddings from input strings using the embeddings endpoint.",
    sections: [
      {
        heading: "Create Embeddings",
        body: "POST `/v1/embeddings` creates embeddings for one or more input strings. The request body accepts a text field and returns a vector with 768 dimensions."
      },
      {
        heading: "Request Fields",
        body: "The embeddings endpoint accepts the following JSON properties:",
        list: [
          "text (string or array of strings, required) - The text contents to embed.",
          "model (string, optional) - The embedding model to use. Defaults to vectorstack-small.",
          "metadata (object, optional) - Optional structural properties to associate with the vectors."
        ]
      },
      {
        heading: "Request Example",
        body: "Creating embeddings for a single sentence:",
        code: "curl -X POST https://api.vectorstack.dev/v1/embeddings \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"text\": \"Search query content\",\n    \"model\": \"vectorstack-small\"\n  }'"
      }
    ]
  },
  {
    slug: "indexes",
    title: "Indexes API",
    description: "Manage your vector indexes, configurations, metrics, and deployments.",
    sections: [
      {
        heading: "Index Management Endpoints",
        body: "The indexes API allows you to programmatically manage your vector index structures.",
        list: [
          "POST /v1/indexes - Create a new vector index with name, dimension, and similarity metric.",
          "GET /v1/indexes - List all vector indexes in your organization.",
          "GET /v1/indexes/:id - Retrieve the details and stats for a specific index.",
          "PATCH /v1/indexes/:id - Update index settings (e.g. description, metadata mapping).",
          "DELETE /v1/indexes/:id - Permanently delete an index and all associated data."
        ]
      },
      {
        heading: "Create Index Example",
        body: "To deploy a new index programmatically:",
        code: "curl -X POST https://api.vectorstack.dev/v1/indexes \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"name\": \"support-kb\",\n    \"dimension\": 768,\n    \"metric\": \"cosine\"\n  }'"
      }
    ]
  },
  {
    slug: "documents",
    title: "Documents API",
    description: "Upload, check status, and delete source documents in the ingestion pipeline.",
    sections: [
      {
        heading: "Ingestion Endpoints",
        body: "Use these endpoints to upload files and inspect status:",
        list: [
          "POST /v1/documents - Upload a document for parsing, chunking, and embedding.",
          "GET /v1/documents/:id - Check the progress of a document in the ingestion pipeline.",
          "DELETE /v1/documents/:id - Delete a document and purge all its chunks/vectors from the index."
        ]
      },
      {
        heading: "Document Upload Example",
        body: "Upload a PDF document to an active index:",
        code: "curl -X POST https://api.vectorstack.dev/v1/documents \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -F \"indexId=support-kb\" \\\n  -F \"file=@manual.pdf\""
      }
    ]
  },
  {
    slug: "search",
    title: "Search API",
    description: "Query vector indexes with semantic matching, filters, and weights.",
    sections: [
      {
        heading: "Semantic Vector Search",
        // TEST CHANGE IDEA:
        // Change "Required fields are indexId and query."
        // to "Required fields are indexId, query, and searchMode."
        // to test search API breaking change detection.
        body: "POST `/v1/search` runs a semantic search query. Required fields are indexId and query. Optional fields include topK, filters, rerank, and includeMetadata."
      },
      {
        heading: "Query Parameters",
        body: "The search payload accepts the following properties:",
        list: [
          "indexId (string, required) - The ID of the vector index to query.",
          "query (string, required) - The search query in plain natural language.",
          "topK (number, optional) - Number of results to return. Defaults to 5.",
          "filters (object, optional) - Structured metadata filters to restrict search space.",
          "rerank (object, optional) - Reranking model configurations."
        ]
      },
      {
        heading: "Search Request Example",
        body: "Retrieve the top 3 results matching 'API keys':",
        code: "curl -X POST https://api.vectorstack.dev/v1/search \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"indexId\": \"support-kb\",\n    \"query\": \"How do I rotate API keys?\",\n    \"topK\": 3\n  }'"
      }
    ]
  },
  {
    slug: "rerank",
    title: "Rerank API",
    description: "Re-score and re-order search candidate documents with cross-encoders.",
    sections: [
      {
        heading: "Rerank Chunks",
        body: "POST `/v1/rerank` reranks retrieved documents using the original query. Required fields are query and documents."
      },
      {
        heading: "Rerank Request Example",
        body: "To score candidate text chunks relative to a query:",
        code: "curl -X POST https://api.vectorstack.dev/v1/rerank \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"query\": \"How do I rotate API keys?\",\n    \"documents\": [\n      \"API keys can be rotated from the user console under Settings.\",\n      \"Authentication is performed via HTTP header validation keys.\"\n    ]\n  }'"
      }
    ]
  },
  {
    slug: "webhooks",
    title: "Webhooks API",
    description: "Register and verify webhook subscriptions to listen for index events.",
    sections: [
      {
        heading: "Webhook Deliveries",
        body: "Webhook payloads include id, event, createdAt, and data. Events are delivered with an HMAC-SHA256 signature header."
      },
      {
        heading: "Register Webhook Subscription",
        body: "To register an endpoint, send a POST request with the target URL:",
        code: "curl -X POST https://api.vectorstack.dev/v1/webhooks \\\n  -H \"Authorization: Bearer $VECTORSTACK_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"url\": \"https://example.com/webhooks/vectorstack\",\n    \"events\": [\"document.ingested\", \"document.failed\"]\n  }'"
      }
    ]
  },
  {
    slug: "errors",
    title: "API Errors",
    description: "Interpret error codes and format schemas returned by the API.",
    sections: [
      {
        heading: "Error Structure",
        // TEST CHANGE IDEA:
        // Change "Errors return code, message, and requestId."
        // to "Errors return code, message, requestId, and an optional errors array listing fields validations."
        // to test error structure update detection.
        body: "Errors return code, message, and requestId. Rate limited responses also include retryAfterMs."
      },
      {
        heading: "Standard Status Codes",
        body: "Standard status ranges are used: 400 Bad Request for client issues, 401 Unauthorized for authentication keys, 403 Forbidden for insufficient permissions, 404 Not Found for missing indexes, and 500 for internal engine failures."
      }
    ]
  }
];
