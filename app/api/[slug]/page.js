import { apiPages } from "../../../data/api";
import PageRenderer from "../../../components/PageRenderer";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = apiPages.find((p) => p.slug === slug);
  return {
    title: page ? `${page.title}` : "API Reference"
  };
}

// Generate static params for static site generation coverage
export async function generateStaticParams() {
  return apiPages.map((page) => ({
    slug: page.slug
  }));
}

export default async function ApiPage({ params }) {
  const { slug } = await params;
  const pageData = apiPages.find((p) => p.slug === slug);

  return <PageRenderer pageData={pageData} />;
}
