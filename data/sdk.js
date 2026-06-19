export const sdkPages = [
  {
    "slug": "javascript",
    "title": "JavaScript SDK",
    "description": "Integrate VectorStack into Node.js, serverless, and edge environments.",
    "sections": [
      {
        "heading": "Overview",
        "body": "The JavaScript SDK provides a typed client for Node.js applications, serverless functions, and backend services. It is optimized for server environments. For specific platforms, review our <a href=\"/sdk/node\">Node SDK</a> and <a href=\"/sdk/edge-runtime\">Edge Runtime SDK</a> documentation guides. Do not deploy key credentials client-side; refer to the <a href=\"/docs/security\">security standards</a>."
      },
      {
        "heading": "Installation",
        "code": "npm install vectorstack"
      },
      {
        "heading": "Initialization",
        "body": "Import and instantiate the VectorStack client. Check API properties in the <a href=\"/api/search\">search API reference</a>:",
        "code": "import { VectorStack } from \"vectorstack\";\n\nconst client = new VectorStack({ apiKey });"
      },
      {
        "heading": "Search Example",
        "body": "Run a query in the vector database:",
        "code": "const results = await client.indexes.search({\n  indexId: 'kb',\n  query: 'How to rotate tokens'\n});"
      },
      {
        "heading": "Verification Guidelines",
        "body": "Ensure that connection handshakes are executed within the sandboxed environment to isolate index operations. Run test queries to verify metadata filters align correctly with your access scopes."
      }
    ],
    "relatedLinks": [
      {
        "text": "Node SDK guide",
        "href": "/sdk/node"
      },
      {
        "text": "Edge Runtime SDK guide",
        "href": "/sdk/edge-runtime"
      },
      {
        "text": "React SDK reference",
        "href": "/sdk/react"
      },
      {
        "text": "Security Standards",
        "href": "/docs/security"
      },
      {
        "text": "Search API Reference",
        "href": "/api/search"
      }
    ],
    "nextSteps": [
      {
        "text": "Node JS SDK Guide",
        "description": "Optimize JavaScript operations inside Node servers.",
        "href": "/sdk/node"
      },
      {
        "text": "React SDK Guide",
        "description": "Build interactive client-side query interfaces.",
        "href": "/sdk/react"
      }
    ]
  },
  {
    "slug": "python",
    "title": "Python SDK",
    "description": "Integrate VectorStack into Python scripts, backend apps, and ML data pipelines.",
    "sections": [
      {
        "heading": "Overview",
        "body": "The Python SDK supports document ingestion, embeddings, vector index management, and semantic search. It integrates with data engines and frameworks. Learn parameter mappings in our <a href=\"/api/search\">search API reference</a>."
      },
      {
        "heading": "Installation",
        "code": "pip install vectorstack"
      },
      {
        "heading": "Initialization",
        "body": "Import the class and create an instance. Ensure your credentials match organizational settings inside the <a href=\"/docs/authentication\">authentication guide</a>:",
        "code": "from vectorstack import VectorStack\n\nclient = VectorStack(api_key=api_key)"
      },
      {
        "heading": "Ingestion Example",
        "body": "Upload files programmatically. Review ingestion rules under <a href=\"/docs/document-ingestion\">document ingestion guide</a>:",
        "code": "client.documents.upload(\n    index_id='support-kb',\n    file_path='./manual.pdf',\n    metadata={'category': 'docs'}\n)"
      }
    ],
    "relatedLinks": [
      {
        "text": "Authentication",
        "href": "/docs/authentication"
      },
      {
        "text": "Document Ingestion",
        "href": "/docs/document-ingestion"
      },
      {
        "text": "Search API Reference",
        "href": "/api/search"
      },
      {
        "text": "Python SDK Reference",
        "href": "/sdk/python"
      }
    ],
    "nextSteps": [
      {
        "text": "REST Ingestion API",
        "description": "Learn about the HTTP document upload endpoints.",
        "href": "/api/documents"
      },
      {
        "text": "Review Ingestion Guide",
        "description": "Configure custom cleaning and processing scripts.",
        "href": "/docs/document-ingestion"
      }
    ]
  },
  {
    "slug": "react",
    "title": "React SDK",
    "description": "Hooks and components to build interactive search interfaces in React applications.",
    "sections": [
      {
        "heading": "Overview",
        "body": "The React SDK provides hooks for search interfaces and client-side query states. For secure routing, do not execute queries using organization Admin keys. Review scoping details in the <a href=\"/docs/api-keys\">API keys documentation</a>."
      },
      {
        "heading": "Installation",
        "code": "npm install @vectorstack/react"
      },
      {
        "heading": "Using Search Hooks",
        "body": "The SDK provides the `useVectorSearch` hook. For API schemas, review the <a href=\"/api/search\">search API reference</a> and check how to configure client filters in <a href=\"/docs/metadata-filtering\">metadata filtering documentation</a>.",
        "code": "import { useVectorSearch } from \"@vectorstack/react\";\n\nfunction SearchComponent() {\n  const { results, loading } = useVectorSearch({ query, indexId });\n  // ... render interface\n}"
      }
    ],
    "relatedLinks": [
      {
        "text": "JavaScript SDK",
        "href": "/sdk/javascript"
      },
      {
        "text": "API Keys",
        "href": "/docs/api-keys"
      },
      {
        "text": "Search API Reference",
        "href": "/api/search"
      },
      {
        "text": "Metadata Filtering",
        "href": "/docs/metadata-filtering"
      }
    ],
    "nextSteps": [
      {
        "text": "JavaScript SDK Reference",
        "description": "Read standard JavaScript client configurations.",
        "href": "/sdk/javascript"
      },
      {
        "text": "Metadata Filters",
        "description": "Learn how to narrow searches using JSON filters.",
        "href": "/docs/metadata-filtering"
      }
    ]
  },
  {
    "slug": "node",
    "title": "Node SDK",
    "description": "Optimize VectorStack JavaScript operations for Node.js backend applications and services.",
    "sections": [
      {
        "heading": "Backend Integration",
        "body": "The Node SDK is optimized for long-running processes, task queues, and backend services. To establish configurations, check the primary <a href=\"/sdk/javascript\">JavaScript SDK</a> documentation."
      },
      {
        "heading": "Task Workers & Ingestion",
        "body": "Use the Node client inside workers to automate ingestion when new records are written. Review extraction details inside <a href=\"/docs/document-ingestion\">document ingestion guide</a>. Query endpoints programmatically via the <a href=\"/api/search\">search API reference</a>.",
        "code": "import { IngestionQueue } from \"vectorstack/node\";\n// Worker configuration..."
      }
    ],
    "relatedLinks": [
      {
        "text": "JavaScript SDK",
        "href": "/sdk/javascript"
      },
      {
        "text": "Document Ingestion",
        "href": "/docs/document-ingestion"
      },
      {
        "text": "Search API Reference",
        "href": "/api/search"
      },
      {
        "text": "Edge Runtime SDK",
        "href": "/sdk/edge-runtime"
      }
    ],
    "nextSteps": [
      {
        "text": "Document Ingestion Guide",
        "description": "Ingest and process PDF or Markdown files.",
        "href": "/docs/document-ingestion"
      },
      {
        "text": "REST Search API",
        "description": "Learn about the POST /v1/search endpoint parameters.",
        "href": "/api/search"
      }
    ]
  },
  {
    "slug": "edge-runtime",
    "title": "Edge Runtime SDK",
    "description": "Run VectorStack client queries inside lightweight edge environments.",
    "sections": [
      {
        "heading": "Isomorphic Client",
        "body": "The Edge SDK fits lightweight compute platforms (like Vercel Edge, Cloudflare Workers) that restrict standard Node.js APIs. Review setups in <a href=\"/sdk/javascript\">JavaScript SDK</a>."
      },
      {
        "heading": "Edge Caching & Performance",
        "body": "Query results can be cached at edge locations to minimize response times. Ensure that you track rate limits. Refer to the <a href=\"/docs/rate-limits\">rate limits guide</a>, and verify search metrics in the <a href=\"/api/search\">search API reference</a>.",
        "code": "export const config = { runtime: \"edge\" };\n// Edge routes logic..."
      }
    ],
    "relatedLinks": [
      {
        "text": "JavaScript SDK",
        "href": "/sdk/javascript"
      },
      {
        "text": "Rate Limits",
        "href": "/docs/rate-limits"
      },
      {
        "text": "Search API Reference",
        "href": "/api/search"
      },
      {
        "text": "Node SDK",
        "href": "/sdk/node"
      }
    ],
    "nextSteps": [
      {
        "text": "Rate Limits Guide",
        "description": "Learn about transaction constraints and throttling headers.",
        "href": "/docs/rate-limits"
      },
      {
        "text": "JavaScript SDK Reference",
        "description": "Review isomorphic client configurations.",
        "href": "/sdk/javascript"
      }
    ]
  },
  {
    "slug": "golang",
    "title": "Go SDK",
    "description": "Integrate VectorStack into Go applications with the official Go client library.",
    "sections": [
      {
        "heading": "Overview",
        "body": "The Go SDK provides a strongly typed client for Go backend services and microservices. It supports context-aware cancellation, connection pooling, and automatic retries. Review authentication setup in the <a href=\"/docs/authentication\">authentication guide</a>."
      },
      {
        "heading": "Installation",
        "body": "Install the Go SDK module using go get:",
        "code": "go get github.com/vectorstack/vectorstack-go@latest"
      },
      {
        "heading": "Initialization",
        "body": "Import the package and create a client instance. Pass your API key from environment variables. Review key management in the <a href=\"/docs/api-keys\">API keys guide</a>.",
        "code": "package main\n\nimport (\n  \"context\"\n  \"os\"\n  vectorstack \"github.com/vectorstack/vectorstack-go\"\n)\n\nfunc main() {\n  client := vectorstack.NewClient(os.Getenv(\"VECTORSTACK_API_KEY\"))\n  ctx := context.Background()\n  // ...\n}"
      },
      {
        "heading": "Search Example",
        "body": "Run a semantic search query with metadata filters. Review filter syntax in the <a href=\"/docs/metadata-filtering\">metadata filtering guide</a>.",
        "code": "results, err := client.Indexes.Search(ctx, &vectorstack.SearchRequest{\n  IndexID: \"support-kb\",\n  Query:   \"How to rotate API keys?\",\n  TopK:    5,\n})\nif err != nil {\n  log.Fatal(err)\n}\nfmt.Println(results)"
      },
      {
        "heading": "Verification Guidelines",
        "body": "Ensure that connection handshakes are executed within the sandboxed environment to isolate index operations. Run test queries to verify metadata filters align correctly with your access scopes."
      }
    ],
    "relatedLinks": [
      { "text": "Authentication", "href": "/docs/authentication" },
      { "text": "API Keys", "href": "/docs/api-keys" },
      { "text": "Search API", "href": "/api/search" },
      { "text": "Metadata Filtering", "href": "/docs/metadata-filtering" }
    ],
    "nextSteps": [
      {
        "text": "Search API Reference",
        "description": "Learn about REST search endpoint parameters.",
        "href": "/api/search"
      },
      {
        "text": "Document Ingestion",
        "description": "Upload and process documents from Go services.",
        "href": "/docs/document-ingestion"
      }
    ]
  },
  {
    "slug": "java",
    "title": "Java SDK",
    "description": "Integrate VectorStack into Java and Kotlin applications with the official JVM client.",
    "sections": [
      {
        "heading": "Overview",
        "body": "The Java SDK supports Java 11+ and Kotlin. It provides synchronous and asynchronous client methods, builder patterns for request objects, and automatic retry with exponential backoff. Review error handling in the <a href=\"/docs/errors\">errors guide</a>."
      },
      {
        "heading": "Installation",
        "body": "Add the dependency to your Maven or Gradle project:",
        "code": "<!-- Maven -->\n<dependency>\n  <groupId>dev.vectorstack</groupId>\n  <artifactId>vectorstack-java</artifactId>\n  <version>2.0.0</version>\n</dependency>\n\n// Gradle\nimplementation 'dev.vectorstack:vectorstack-java:2.0.0'"
      },
      {
        "heading": "Initialization",
        "body": "Create a client instance using the builder pattern. Configure timeouts and retry policies. Review connection settings in the <a href=\"/docs/environments\">environments guide</a>.",
        "code": "import dev.vectorstack.VectorStackClient;\n\nVectorStackClient client = VectorStackClient.builder()\n    .apiKey(System.getenv(\"VECTORSTACK_API_KEY\"))\n    .timeoutMs(5000)\n    .maxRetries(3)\n    .build();"
      },
      {
        "heading": "Search Example",
        "body": "Execute a semantic search query with the Java client:",
        "code": "SearchResponse results = client.indexes().search(\n    SearchRequest.builder()\n        .indexId(\"support-kb\")\n        .query(\"How to configure webhooks?\")\n        .topK(5)\n        .build()\n);\nresults.getMatches().forEach(System.out::println);"
      }
    ],
    "relatedLinks": [
      { "text": "Errors Guide", "href": "/docs/errors" },
      { "text": "Environments", "href": "/docs/environments" },
      { "text": "Search API", "href": "/api/search" },
      { "text": "JavaScript SDK", "href": "/sdk/javascript" }
    ],
    "nextSteps": [
      {
        "text": "Search API Reference",
        "description": "Learn about the REST search endpoint schema.",
        "href": "/api/search"
      },
      {
        "text": "Error Handling",
        "description": "Understand error codes and retry strategies.",
        "href": "/docs/errors"
      }
    ]
  },
  {
    "slug": "ruby",
    "title": "Ruby SDK",
    "description": "Integrate VectorStack into Ruby on Rails and Sinatra applications.",
    "sections": [
      {
        "heading": "Overview",
        "body": "The Ruby SDK provides an idiomatic Ruby client for VectorStack. It supports ActiveRecord-style method chaining, automatic pagination, and Rails generator integrations. Review authentication in the <a href=\"/docs/authentication\">authentication guide</a>."
      },
      {
        "heading": "Installation",
        "body": "Add the gem to your Gemfile and run bundle install:",
        "code": "# Gemfile\ngem 'vectorstack', '~> 2.0'\n\n# Terminal\nbundle install"
      },
      {
        "heading": "Initialization",
        "body": "Configure the client in an initializer. Store API keys securely using Rails credentials or environment variables. Review key management in the <a href=\"/docs/api-keys\">API keys guide</a>.",
        "code": "# config/initializers/vectorstack.rb\nVectorStack.configure do |config|\n  config.api_key = ENV['VECTORSTACK_API_KEY']\n  config.timeout = 5\n  config.max_retries = 3\nend"
      },
      {
        "heading": "Search Example",
        "body": "Run a semantic search query from a Rails controller:",
        "code": "client = VectorStack::Client.new\nresults = client.indexes.search(\n  index_id: 'support-kb',\n  query: 'How to set up webhooks?',\n  top_k: 5\n)\nrender json: results.matches"
      }
    ],
    "relatedLinks": [
      { "text": "Authentication", "href": "/docs/authentication" },
      { "text": "API Keys", "href": "/docs/api-keys" },
      { "text": "Search API", "href": "/api/search" },
      { "text": "Python SDK", "href": "/sdk/python" }
    ],
    "nextSteps": [
      {
        "text": "Search API Reference",
        "description": "Learn about REST search endpoint parameters.",
        "href": "/api/search"
      },
      {
        "text": "Document Ingestion",
        "description": "Upload files from Ruby applications.",
        "href": "/docs/document-ingestion"
      }
    ]
  },
  {
    "slug": "cli",
    "title": "CLI Tool",
    "description": "Manage VectorStack resources from the command line with the official CLI.",
    "sections": [
      {
        "heading": "Overview",
        "body": "The VectorStack CLI lets you manage indexes, documents, and configurations directly from your terminal. It is ideal for scripting, CI/CD pipelines, and quick administrative tasks. Review environment configuration in the <a href=\"/docs/environments\">environments guide</a>."
      },
      {
        "heading": "Installation",
        "body": "Install the CLI globally using npm or download the standalone binary:",
        "code": "# npm\nnpm install -g @vectorstack/cli\n\n# Homebrew (macOS)\nbrew install vectorstack/tap/vectorstack-cli"
      },
      {
        "heading": "Authentication",
        "body": "Authenticate the CLI using your API key. The key is stored securely in your system keychain. Review key management in the <a href=\"/docs/api-keys\">API keys guide</a>.",
        "code": "vectorstack auth login --api-key $VECTORSTACK_API_KEY"
      },
      {
        "heading": "Common Commands",
        "body": "Use the CLI to manage your VectorStack resources:",
        "code": "# List all indexes\nvectorstack indexes list\n\n# Create a new index\nvectorstack indexes create --name support-kb --dimension 768 --metric cosine\n\n# Upload a document\nvectorstack documents upload --index support-kb --file ./manual.pdf\n\n# Run a search query\nvectorstack search --index support-kb --query \"How to rotate keys?\"\n\n# Check environment status\nvectorstack env status"
      },
      {
        "heading": "CI/CD Integration",
        "body": "Use the CLI in CI/CD pipelines to automate index management and run evaluation tests. Set the API key as an environment variable in your pipeline configuration. Read about evaluation in the <a href=\"/docs/evaluation\">evaluation guide</a>."
      }
    ],
    "relatedLinks": [
      { "text": "Environments", "href": "/docs/environments" },
      { "text": "API Keys", "href": "/docs/api-keys" },
      { "text": "Evaluation", "href": "/docs/evaluation" },
      { "text": "JavaScript SDK", "href": "/sdk/javascript" }
    ],
    "nextSteps": [
      {
        "text": "Environments Guide",
        "description": "Configure CLI for different deployment stages.",
        "href": "/docs/environments"
      },
      {
        "text": "Evaluation Guide",
        "description": "Run retrieval quality tests from the CLI.",
        "href": "/docs/evaluation"
      }
    ]
  },
  {
    "slug": "flutter",
    "title": "Flutter SDK",
    "description": "Build cross-platform mobile search experiences with the VectorStack Flutter package.",
    "sections": [
      {
        "heading": "Overview",
        "body": "The Flutter SDK enables you to build search-powered mobile and desktop apps with VectorStack. It provides Dart-native types, stream-based search results, and built-in caching. Always route queries through a backend proxy — never expose API keys in client apps. Review <a href=\"/docs/security\">security guidelines</a>."
      },
      {
        "heading": "Installation",
        "body": "Add the package to your pubspec.yaml:",
        "code": "# pubspec.yaml\ndependencies:\n  vectorstack_flutter: ^2.0.0\n\n# Terminal\nflutter pub get"
      },
      {
        "heading": "Proxy Setup",
        "body": "Configure a backend proxy to handle API key authentication. The Flutter SDK communicates with your proxy, which forwards requests to VectorStack. Read about authentication in the <a href=\"/docs/authentication\">authentication guide</a>.",
        "code": "final client = VectorStackClient(\n  proxyUrl: 'https://myapp.com/api/vectorstack',\n  headers: {'Authorization': 'Bearer user-session-token'},\n);"
      },
      {
        "heading": "Search Widget",
        "body": "Use the built-in search widget for instant results:",
        "code": "VectorSearchBar(\n  client: client,\n  indexId: 'support-kb',\n  onResultTap: (result) {\n    Navigator.push(context, MaterialPageRoute(\n      builder: (_) => ResultDetailPage(result: result),\n    ));\n  },\n)"
      }
    ],
    "relatedLinks": [
      { "text": "Security", "href": "/docs/security" },
      { "text": "Authentication", "href": "/docs/authentication" },
      { "text": "React SDK", "href": "/sdk/react" },
      { "text": "Search API", "href": "/api/search" }
    ],
    "nextSteps": [
      {
        "text": "Security Guide",
        "description": "Ensure API keys are never exposed in client apps.",
        "href": "/docs/security"
      },
      {
        "text": "React SDK",
        "description": "Build web search interfaces with React hooks.",
        "href": "/sdk/react"
      }
    ]
  }
];
