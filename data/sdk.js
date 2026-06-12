// VectorStack SDK Pages Data

export const sdkPages = [
  {
    slug: "javascript",
    title: "JavaScript SDK",
    description: "Integrate VectorStack into Node.js, serverless, and edge environments.",
    sections: [
      {
        heading: "Overview",
        // TEST CHANGE IDEA:
        // Change "The JavaScript SDK provides a typed client for Node.js applications"
        // to "The JavaScript SDK provides an isomorphic, high-performance client for Node.js, Bun, and edge environments"
        // to test minor SDK doc updates.
        body: "The JavaScript SDK provides a typed client for Node.js applications, serverless functions, and backend services. It is optimized for server environments and should not be used client-side."
      },
      {
        heading: "Installation",
        code: "npm install vectorstack"
      },
      {
        heading: "Initialization",
        body: "Import and instantiate the VectorStack client:",
        code: "import { VectorStack } from \"vectorstack\";\n\nconst client = new VectorStack({ apiKey });"
      },
      {
        heading: "Search Example",
        body: "Run a query in the vector database:",
        code: "const results = await client.indexes.search({\n  indexId: 'kb',\n  query: 'How to rotate tokens'\n});"
      }
    ]
  },
  {
    slug: "python",
    title: "Python SDK",
    description: "Integrate VectorStack into Python scripts, backend apps, and ML data pipelines.",
    sections: [
      {
        heading: "Overview",
        body: "The Python SDK supports document ingestion, embeddings, vector index management, and semantic search for backend applications and data pipelines."
      },
      {
        heading: "Installation",
        code: "pip install vectorstack"
      },
      {
        heading: "Initialization",
        body: "Import the class and create an instance:",
        code: "from vectorstack import VectorStack\n\nclient = VectorStack(api_key=api_key)"
      },
      {
        heading: "Ingestion Example",
        body: "Upload document files programmatically:",
        code: "client.documents.upload(\n    index_id='support-kb',\n    file_path='./manual.pdf',\n    metadata={'category': 'docs'}\n)"
      }
    ]
  },
  {
    slug: "react",
    title: "React SDK",
    description: "Hooks and components to build interactive search interfaces in React applications.",
    sections: [
      {
        heading: "Overview",
        body: "The React SDK provides hooks for search interfaces, document upload components, and client-side search experiences."
      },
      {
        heading: "Installation",
        code: "npm install @vectorstack/react"
      },
      {
        heading: "Using Search Hooks",
        body: "The SDK provides the `useVectorSearch` hook to query search results cleanly in your components, managing loading states and errors automatically.",
        code: "import { useVectorSearch } from \"@vectorstack/react\";\n\nfunction SearchComponent() {\n  const { results, loading } = useVectorSearch({ query, indexId });\n  // ... render interface\n}"
      }
    ]
  }
];
