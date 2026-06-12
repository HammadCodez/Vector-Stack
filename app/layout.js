import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "VectorStack Docs | AI Search & Retrieval",
    template: "%s | VectorStack Docs"
  },
  description: "Build AI search and RAG applications with managed vector indexes, embeddings, document ingestion, and production-ready retrieval APIs.",
  keywords: ["vector database", "embeddings", "RAG", "semantic search", "hybrid search", "Next.js"],
  authors: [{ name: "VectorStack Inc." }]
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-wrapper">
          <Navbar />
          <main className="main-content-area">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
