// VectorStack Ecosystem Integrations Data

export const integrationsData = [
  {
    id: "int-langchain",
    name: "LangChain",
    category: "AI Frameworks",
    icon: "🦜🔗",
    description: "Build LLM applications by indexing and retrieving document context using VectorStack vectors.",
    snippets: {
      javascript: `import { VectorStackVectorStore } from "@langchain/community/vectorstores/vectorstack";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nconst vectorStore = await VectorStackVectorStore.fromDocuments(\n  docs,\n  new OpenAIEmbeddings(),\n  {\n    apiKey: process.env.VECTORSTACK_API_KEY,\n    indexName: "production-index"\n  }\n);\n\nconst results = await vectorStore.similaritySearch("vector search metric", 3);`,
      python: `from langchain_community.vectorstores import VectorStack\nfrom langchain_openai import OpenAIEmbeddings\n\nvector_store = VectorStack.from_documents(\n    documents=docs,\n    embedding=OpenAIEmbeddings(),\n    api_key="your-api-key",\n    index_name="production-index"\n)\n\nresults = vector_store.similarity_search("vector search metric", k=3)`
    }
  },
  {
    id: "int-openai",
    name: "OpenAI",
    category: "Embedding Models",
    icon: "🤖",
    description: "Generate embeddings with OpenAI's text-embedding-3 models and search them in VectorStack.",
    snippets: {
      javascript: `import OpenAI from "openai";\n\nconst openai = new OpenAI();\nconst embeddingResponse = await openai.embeddings.create({\n  model: "text-embedding-3-small",\n  input: "Semantic query string"\n});\n\nconst vector = embeddingResponse.data[0].embedding;\n// Query VectorStack index with raw vector\nconst searchResults = await vectorStackClient.index("prod-index").query({\n  vector,\n  topK: 5\n});`,
      python: `import openai\n\nresponse = openai.embeddings.create(\n    model="text-embedding-3-small",\n    input="Semantic query string"\n)\nvector = response.data[0].embedding\n\n# Query VectorStack index with raw vector\nresults = client.index("prod-index").query(\n    vector=vector,\n    top_k=5\n)`
    }
  },
  {
    id: "int-llamaindex",
    name: "LlamaIndex",
    category: "AI Frameworks",
    icon: "🦙",
    description: "Connect structured documents and data connectors to VectorStack indices for advanced RAG.",
    snippets: {
      javascript: `import { VectorStackVectorStore, VectorStoreIndex } from "llamaindex";\n\nconst vectorStore = new VectorStackVectorStore({\n  apiKey: "your-api-key",\n  indexName: "llama-index-db"\n});\n\nconst index = await VectorStoreIndex.fromDocuments(documents, { vectorStore });\nconst queryEngine = index.asQueryEngine();\nconst response = await queryEngine.query({ query: "What is L2 distance?" });`,
      python: `from llama_index.core import VectorStoreIndex, SimpleDirectoryReader\nfrom llama_index.vector_stores.vectorstack import VectorStackVectorStore\n\nvector_store = VectorStackVectorStore(\n    api_key="your-api-key", \n    index_name="llama-index-db"\n)\n\ndocuments = SimpleDirectoryReader("./data").load_data()\nindex = VectorStoreIndex.from_documents(documents, vector_store=vector_store)\n\nquery_engine = index.as_query_engine()\nresponse = query_engine.query("What is L2 distance?")`
    }
  },
  {
    id: "int-cohere",
    name: "Cohere",
    category: "Embedding Models",
    icon: "🌌",
    description: "Leverage Cohere's multilingual embed v3 models for high-accuracy searches in over 100 languages.",
    snippets: {
      javascript: `import { CohereClient } from "cohere-ai";\n\nconst cohere = new CohereClient({ token: "cohere-key" });\nconst embed = await cohere.embed({\n  texts: ["Semantic query string"],\n  model: "embed-multilingual-v3.0",\n  inputType: "search_query"\n});\n\nconst vector = embed.embeddings[0];\nconst results = await vectorStackClient.index("multilingual-index").query({ vector });`,
      python: `import cohere\n\nco = cohere.Client("cohere-key")\nresponse = co.embed(\n    texts=["Semantic query string"],\n    model="embed-multilingual-v3.0",\n    input_type="search_query"\n)\nvector = response.embeddings[0]\n\nresults = client.index("multilingual-index").query(vector=vector)`
    }
  },
  {
    id: "int-docker",
    name: "Docker Sandbox",
    category: "Ops & VPCs",
    icon: "🐳",
    description: "Spin up a local, zero-config VectorStack instance inside containerized environments.",
    snippets: {
      javascript: `# Run local sandbox\ndocker run -d -p 4000:4000 vectorstack/sandbox:latest\n\n# Configure client connection\nconst client = new VectorStackClient({\n  apiKey: "sandbox-key",\n  endpoint: "http://localhost:4000/v1"\n});`,
      python: `# Run local sandbox\ndocker run -d -p 4000:4000 vectorstack/sandbox:latest\n\n# Configure client connection\nclient = VectorStackClient(\n    api_key="sandbox-key",\n    endpoint="http://localhost:4000/v1"\n)`
    }
  },
  {
    id: "int-vercel",
    name: "Vercel",
    category: "Ops & VPCs",
    icon: "▲",
    description: "Deploy serverless AI retrieval APIs with environment variables injected natively.",
    snippets: {
      javascript: `// app/api/search/route.js (Next.js App Router)\nimport { VectorStackClient } from "@vectorstack/sdk";\n\nconst client = new VectorStackClient({\n  apiKey: process.env.VECTORSTACK_API_KEY // injected from Vercel dashboard\n});\n\nexport async function POST(req) {\n  const { query } = await req.json();\n  const results = await client.index("docs-index").search({ query });\n  return Response.json(results);\n}`,
      python: `# api/search.py (Serverless Python Function)\nimport os\nfrom vectorstack import VectorStackClient\n\nclient = VectorStackClient(api_key=os.environ.get("VECTORSTACK_API_KEY"))\n\ndef handler(request):\n    data = request.get_json()\n    results = client.index("docs-index").search(query=data["query"])\n    return {"results": results}`
    }
  }
];
