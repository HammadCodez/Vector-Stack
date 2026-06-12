// VectorStack Changelog Data

export const changelogData = [
  {
    version: "1.0.0",
    date: "June 01, 2026",
    title: "Initial Stable Release",
    description: "Version 1.0.0 of VectorStack is officially stable and production-ready.",
    // TEST CHANGE IDEA:
    // Append a new version here (Version 1.1.0) with breaking change details
    // to test changelog addition and priority detection.
    releases: [
      {
        category: "Added",
        items: [
          "Managed vector indexes supporting cosine, dot-product, and L2 distance metrics.",
          "Document Ingestion Pipeline for PDF, HTML, Markdown, and plain text formats.",
          "Default 'vectorstack-small' embedding model with 768 dimensions.",
          "Webhooks framework for document.ingested and document.failed events.",
          "Official SDK clients for Node.js, Python, and React."
        ]
      },
      {
        category: "Changed",
        items: [
          "Consolidated organization API keys dashboard for streamlined secret rotation.",
          "Default chunk size set to 800 tokens with 100 token overlap."
        ]
      },
      {
        category: "Fixed",
        items: [
          "Resolved OCR timeouts when uploading multi-page PDF documents.",
          "Fixed authorization header edge-case failures with special characters."
        ]
      }
    ]
  }
];
