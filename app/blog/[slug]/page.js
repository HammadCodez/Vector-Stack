import { blogPosts } from "../../../data/blog";
import PageRenderer from "../../../components/PageRenderer";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title}` : "Blog Post"
  };
}

// Generate static params for static site generation coverage
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const postData = blogPosts.find((p) => p.slug === slug);

  if (!postData) {
    return (
      <div className="index-page-container">
        <h1>Post Not Found</h1>
        <p>The requested blog article does not exist.</p>
      </div>
    );
  }

  return (
    <div className="index-page-container">
      <div style={{ display: "flex", gap: "1rem", fontSize: "0.875rem", color: "#64748b", marginBottom: "1rem" }}>
        <span>{postData.date}</span>
        <span>&bull;</span>
        <span>By {postData.author}</span>
      </div>
      <PageRenderer pageData={postData} />
    </div>
  );
}
