import Link from "next/link";
import { sdkPages } from "../../data/sdk";

export const metadata = {
  title: "SDK Libraries Overview"
};

export default function SdkIndex() {
  return (
    <div className="index-page-container">
      <header className="page-header">
        <h1 className="page-title">SDK Client Libraries</h1>
        <p className="page-description">
          Integrate VectorStack into your project using our official client libraries. We support Node.js/JavaScript, Python backend scripting, and React UI search state abstractions.
        </p>
      </header>

      <div className="index-grid">
        {sdkPages.map((page) => (
          <Link key={page.slug} href={`/sdk/${page.slug}`} className="index-card">
            <h3>{page.title}</h3>
            <p>{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
