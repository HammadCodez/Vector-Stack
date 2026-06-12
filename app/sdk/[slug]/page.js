import { sdkPages } from "../../../data/sdk";
import PageRenderer from "../../../components/PageRenderer";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = sdkPages.find((p) => p.slug === slug);
  return {
    title: page ? `${page.title}` : "SDK Reference"
  };
}

// Generate static params for static site generation coverage
export async function generateStaticParams() {
  return sdkPages.map((page) => ({
    slug: page.slug
  }));
}

export default async function SdkPage({ params }) {
  const { slug } = await params;
  const pageData = sdkPages.find((p) => p.slug === slug);

  return <PageRenderer pageData={pageData} />;
}
