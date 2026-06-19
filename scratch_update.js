const fs = require('fs');

// Helper to convert ESM export to CJS and require it
function loadOriginalPages(filename, varName) {
  let content = fs.readFileSync(filename, 'utf8');
  content = content.replace(`export const ${varName} =`, 'module.exports =');
  const tempFilename = filename.replace('.js', '_cjs.js');
  fs.writeFileSync(tempFilename, content, 'utf8');
  const data = require('./' + tempFilename.split(/[\\/]/).pop());
  fs.unlinkSync(tempFilename); // Cleanup CJS temp file
  return data;
}

// 1. Process Docs
const originalDocs = loadOriginalPages('temp_original_docs.js', 'docsPages');
const currentDocs = loadOriginalPages('data/docs.js', 'docsPages');

const targetNewDocsSlugs = [
  "observability", "evaluation", "deployments", "environments",
  "teams-and-permissions", "data-retention", "backups", "custom-domains"
];

for (const slug of targetNewDocsSlugs) {
  const page = originalDocs.find(p => p.slug === slug);
  if (page) {
    // Clone page to avoid reference issues
    const pageClone = JSON.parse(JSON.stringify(page));
    currentDocs.push(pageClone);
  }
}

fs.writeFileSync('data/docs.js', 'export const docsPages = ' + JSON.stringify(currentDocs, null, 2) + ';\n', 'utf8');
console.log('Successfully updated data/docs.js');


// 2. Process API
const originalApi = loadOriginalPages('temp_original_api.js', 'apiPages');
const currentApi = loadOriginalPages('data/api.js', 'apiPages');

const targetNewApiSlugs = [
  "webhooks", "errors", "projects", "usage", "audit-logs", "billing"
];

for (const slug of targetNewApiSlugs) {
  const page = originalApi.find(p => p.slug === slug);
  if (page) {
    const pageClone = JSON.parse(JSON.stringify(page));
    currentApi.push(pageClone);
  }
}

fs.writeFileSync('data/api.js', 'export const apiPages = ' + JSON.stringify(currentApi, null, 2) + ';\n', 'utf8');
console.log('Successfully updated data/api.js');


// 3. Process SDK (add 1 new page)
const currentSdk = loadOriginalPages('data/sdk.js', 'sdkPages');

const goSdkPage = {
  slug: "go",
  title: "Go SDK Reference",
  description: "Integrate VectorStack programmatically using the official Go client library.",
  sections: [
    {
      heading: "Overview",
      body: "The Go SDK provides a high-performance, concurrency-safe client library for Node.js integrations, search engines, and ML services. Read basic configurations in the <a href=\"/docs/getting-started\">Getting Started guide</a>."
    },
    {
      heading: "Installation",
      code: "go get github.com/vectorstack/vectorstack-go"
    },
    {
      heading: "Initialization",
      body: "Create a client instance by passing your project API key:",
      code: "package main\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\t\"github.com/vectorstack/vectorstack-go\"\n)\n\nfunc main() {\n\tclient := vectorstack.NewClient(vectorstack.WithAPIKey(\"YOUR_API_KEY\"))\n\t// Use client...\n}"
    },
    {
      heading: "Search Indexes",
      body: "Run query similarity calls dynamically inside your Go endpoints:",
      code: "results, err := client.Indexes.Search(context.Background(), \"articles-kb\", vectorstack.SearchParams{\n\tQuery: \"scaling vector search\",\n\tTopK:  3,\n})\nif err != nil {\n\tlog.Fatalf(\"Search failed: %v\", err)\n}"
    }
  ],
  relatedLinks: [
    { text: "Getting Started Guide", href: "/docs/getting-started" },
    { text: "Search API Reference", href: "/api/search" }
  ],
  nextSteps: [
    { text: "First Search Query", description: "Learn how to fetch matching context results.", href: "/docs/getting-started" },
    { text: "Search REST API", description: "Review HTTP payload formats and response body schemas.", href: "/api/search" }
  ]
};

currentSdk.push(goSdkPage);

fs.writeFileSync('data/sdk.js', 'export const sdkPages = ' + JSON.stringify(currentSdk, null, 2) + ';\n', 'utf8');
console.log('Successfully updated data/sdk.js');
