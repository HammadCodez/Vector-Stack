import { docsPages } from "../../../data/docs";
import PageRenderer from "../../../components/PageRenderer";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = docsPages.find((p) => p.slug === slug);
  return {
    title: page ? `${page.title}` : "Documentation Guide"
  };
}

// Generate static params for static site generation coverage
export async function generateStaticParams() {
  return docsPages.map((page) => ({
    slug: page.slug
  }));
}

export default async function DocsPage({ params }) {
  const { slug } = await params;
  const pageData = docsPages.find((p) => p.slug === slug);

  return <PageRenderer pageData={pageData} />;
}
